/**
 * Del Olmo Construction - Analytics & Tracking
 * Event tracking for user interactions
 */

(function() {
  'use strict';

  // ===== ANALYTICS HELPER FUNCTIONS =====

  /**
   * Send event to Google Analytics 4
   */
  function trackEvent(eventName, eventParams) {
    if (typeof gtag === 'function') {
      gtag('event', eventName, eventParams);
      console.log('GA4 Event:', eventName, eventParams);
    }
  }

  /**
   * Send event to Facebook Pixel
   */
  function trackFBEvent(eventName, eventParams) {
    if (typeof fbq === 'function') {
      fbq('track', eventName, eventParams);
      console.log('FB Event:', eventName, eventParams);
    }
  }

  // ===== PHONE CLICK TRACKING =====

  function trackPhoneCalls() {
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');

    phoneLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        const phoneNumber = link.getAttribute('href').replace('tel:', '');

        trackEvent('phone_call_click', {
          phone_number: phoneNumber,
          link_location: link.getAttribute('data-location') || 'unknown'
        });

        trackFBEvent('Contact', {
          content_name: 'Phone Call',
          phone_number: phoneNumber
        });
      });
    });
  }

  // ===== FORM SUBMISSION TRACKING =====

  function trackFormSubmissions() {
    // Track GHL form iframe load
    const formWrapper = document.querySelector('.modal-form-wrapper');
    if (formWrapper) {
      const iframe = formWrapper.querySelector('iframe');
      if (iframe) {
        iframe.addEventListener('load', function() {
          trackEvent('form_view', {
            form_name: 'estimate_request'
          });
        });
      }
    }

    // Track modal opens
    const modalTriggers = document.querySelectorAll('[data-modal-trigger]');
    modalTriggers.forEach(function(trigger) {
      trigger.addEventListener('click', function() {
        trackEvent('form_start', {
          form_name: 'estimate_request',
          trigger_location: trigger.getAttribute('data-location') || 'unknown'
        });

        trackFBEvent('Lead', {
          content_name: 'Estimate Form Started'
        });
      });
    });
  }

  // ===== CTA BUTTON TRACKING =====

  function trackCTAClicks() {
    const ctaButtons = document.querySelectorAll('.btn--primary, .btn--secondary');

    ctaButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        const buttonText = button.textContent.trim();
        const buttonLocation = button.getAttribute('data-location') || 'unknown';

        trackEvent('cta_click', {
          button_text: buttonText,
          button_location: buttonLocation
        });
      });
    });
  }

  // ===== SERVICE LINK TRACKING =====

  function trackServiceClicks() {
    const serviceCards = document.querySelectorAll('.service-card');

    serviceCards.forEach(function(card) {
      card.addEventListener('click', function() {
        const serviceName = card.querySelector('.service-title')?.textContent || 'Unknown';

        trackEvent('service_interest', {
          service_name: serviceName
        });
      });
    });
  }

  // ===== PROJECT VIEW TRACKING =====

  function trackProjectViews() {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(function(card) {
      card.addEventListener('click', function() {
        const projectName = card.querySelector('.project-title')?.textContent || 'Unknown';

        trackEvent('project_view', {
          project_name: projectName
        });
      });
    });
  }

  // ===== FAQ INTERACTION TRACKING =====

  function trackFAQInteractions() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(function(item) {
      const questionRow = item.querySelector('.faq-question-row');

      questionRow?.addEventListener('click', function() {
        const question = item.querySelector('.faq-question')?.textContent || 'Unknown';

        trackEvent('faq_interaction', {
          question: question.substring(0, 100) // Limit length
        });
      });
    });
  }

  // ===== SCROLL DEPTH TRACKING =====

  function trackScrollDepth() {
    let tracked25 = false;
    let tracked50 = false;
    let tracked75 = false;
    let tracked100 = false;

    window.addEventListener('scroll', function() {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;

      if (scrollPercent >= 25 && !tracked25) {
        tracked25 = true;
        trackEvent('scroll_depth', { percent: 25 });
      } else if (scrollPercent >= 50 && !tracked50) {
        tracked50 = true;
        trackEvent('scroll_depth', { percent: 50 });
      } else if (scrollPercent >= 75 && !tracked75) {
        tracked75 = true;
        trackEvent('scroll_depth', { percent: 75 });
      } else if (scrollPercent >= 100 && !tracked100) {
        tracked100 = true;
        trackEvent('scroll_depth', { percent: 100 });
      }
    });
  }

  // ===== OUTBOUND LINK TRACKING =====

  function trackOutboundLinks() {
    const externalLinks = document.querySelectorAll('a[href^="http"]');

    externalLinks.forEach(function(link) {
      // Skip if it's an internal link
      if (link.hostname === window.location.hostname) return;

      link.addEventListener('click', function() {
        trackEvent('outbound_link_click', {
          link_url: link.href,
          link_text: link.textContent.trim()
        });
      });
    });
  }

  // ===== SOCIAL MEDIA TRACKING =====

  function trackSocialClicks() {
    const socialLinks = document.querySelectorAll('.footer-social-link, [data-social]');

    socialLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        const platform = link.getAttribute('data-social') ||
                        link.href.match(/facebook|instagram|linkedin|twitter/i)?.[0] ||
                        'unknown';

        trackEvent('social_click', {
          platform: platform.toLowerCase()
        });
      });
    });
  }

  // ===== PAGE TIMING =====

  function trackPageTiming() {
    window.addEventListener('load', function() {
      // Use Performance API if available
      if (window.performance && window.performance.timing) {
        const timing = window.performance.timing;
        const loadTime = timing.loadEventEnd - timing.navigationStart;

        trackEvent('page_timing', {
          load_time: loadTime,
          page_path: window.location.pathname
        });
      }
    });
  }

  // ===== VIDEO TRACKING (if applicable) =====

  function trackVideoInteractions() {
    const videos = document.querySelectorAll('video');

    videos.forEach(function(video) {
      let tracked25 = false;
      let tracked50 = false;
      let tracked75 = false;
      let tracked100 = false;

      video.addEventListener('play', function() {
        trackEvent('video_play', {
          video_title: video.getAttribute('title') || 'untitled'
        });
      });

      video.addEventListener('timeupdate', function() {
        const percent = (video.currentTime / video.duration) * 100;

        if (percent >= 25 && !tracked25) {
          tracked25 = true;
          trackEvent('video_progress', { percent: 25 });
        } else if (percent >= 50 && !tracked50) {
          tracked50 = true;
          trackEvent('video_progress', { percent: 50 });
        } else if (percent >= 75 && !tracked75) {
          tracked75 = true;
          trackEvent('video_progress', { percent: 75 });
        } else if (percent >= 100 && !tracked100) {
          tracked100 = true;
          trackEvent('video_complete', { percent: 100 });
        }
      });
    });
  }

  // ===== ERROR TRACKING =====

  function trackErrors() {
    window.addEventListener('error', function(e) {
      trackEvent('javascript_error', {
        error_message: e.message,
        error_filename: e.filename,
        error_line: e.lineno
      });
    });
  }

  // ===== INITIALIZATION =====

  function init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initAll);
    } else {
      initAll();
    }
  }

  function initAll() {
    console.log('Analytics - Initializing tracking...');

    trackPhoneCalls();
    trackFormSubmissions();
    trackCTAClicks();
    trackServiceClicks();
    trackProjectViews();
    trackFAQInteractions();
    trackScrollDepth();
    trackOutboundLinks();
    trackSocialClicks();
    trackPageTiming();
    trackVideoInteractions();
    trackErrors();

    console.log('Analytics - Tracking ready!');
  }

  // Start initialization
  init();

})();
