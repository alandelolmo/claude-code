/**
 * Del Olmo Construction - Main JavaScript
 * Core functionality for site interactions
 */

(function() {
  'use strict';

  // ===== UTILITY FUNCTIONS =====

  /**
   * Safely query for an element
   */
  function $(selector) {
    return document.querySelector(selector);
  }

  /**
   * Safely query for multiple elements
   */
  function $$(selector) {
    return document.querySelectorAll(selector);
  }

  /**
   * Add event listener with error handling
   */
  function on(element, event, handler) {
    if (element) {
      element.addEventListener(event, handler);
    }
  }

  /**
   * Toggle class on element
   */
  function toggleClass(element, className) {
    if (element) {
      element.classList.toggle(className);
    }
  }

  /**
   * Add class to element
   */
  function addClass(element, className) {
    if (element) {
      element.classList.add(className);
    }
  }

  /**
   * Remove class from element
   */
  function removeClass(element, className) {
    if (element) {
      element.classList.remove(className);
    }
  }

  /**
   * Check if element has class
   */
  function hasClass(element, className) {
    return element && element.classList.contains(className);
  }

  // ===== THEME TOGGLE =====

  function initThemeToggle() {
    const themeToggle = $('.theme-toggle');
    const body = document.body;
    const STORAGE_KEY = 'delolmo-theme';

    // Load saved theme preference
    const savedTheme = localStorage.getItem(STORAGE_KEY);
    if (savedTheme === 'dark') {
      addClass(body, 'theme--dark');
    }

    // Handle theme toggle click
    on(themeToggle, 'click', function() {
      toggleClass(body, 'theme--dark');
      const isDark = hasClass(body, 'theme--dark');
      localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light');
    });
  }

  // ===== MOBILE NAVIGATION =====

  function initMobileNav() {
    const navToggle = $('.nav-toggle');
    const navMobile = $('.nav-menu-mobile');
    const mobileLinks = $$('.nav-link-mobile');
    const body = document.body;

    // Toggle mobile menu
    on(navToggle, 'click', function() {
      toggleClass(navMobile, 'is-open');
      toggleClass(body, 'overflow-hidden');
    });

    // Close menu when clicking a link
    mobileLinks.forEach(function(link) {
      on(link, 'click', function() {
        removeClass(navMobile, 'is-open');
        removeClass(body, 'overflow-hidden');
      });
    });

    // Close menu when clicking outside
    on(document, 'click', function(e) {
      if (hasClass(navMobile, 'is-open') &&
          !navMobile.contains(e.target) &&
          !navToggle.contains(e.target)) {
        removeClass(navMobile, 'is-open');
        removeClass(body, 'overflow-hidden');
      }
    });
  }

  // ===== NAVIGATION SCROLL EFFECT =====

  function initNavScroll() {
    const nav = $('.nav');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
      const currentScroll = window.pageYOffset;

      // Add scrolled class when scrolling down
      if (currentScroll > 100) {
        addClass(nav, 'nav--scrolled');
      } else {
        removeClass(nav, 'nav--scrolled');
      }

      lastScroll = currentScroll;
    });
  }

  // ===== SMOOTH SCROLL =====

  function initSmoothScroll() {
    const navLinks = $$('a[href^="#"]');

    navLinks.forEach(function(link) {
      on(link, 'click', function(e) {
        const href = link.getAttribute('href');

        // Skip if href is just "#"
        if (href === '#') return;

        const target = $(href);
        if (target) {
          e.preventDefault();

          // Calculate offset for fixed header
          const nav = $('.nav');
          const navHeight = nav ? nav.offsetHeight : 0;
          const targetPosition = target.offsetTop - navHeight - 20;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // ===== MODAL CONTROLS =====

  function initModals() {
    const modalTriggers = $$('[data-modal-trigger]');
    const modalOverlay = $('.modal-overlay');
    const modalClose = $('.modal-close');
    const body = document.body;

    // Open modal
    modalTriggers.forEach(function(trigger) {
      on(trigger, 'click', function(e) {
        e.preventDefault();
        addClass(modalOverlay, 'is-open');
        addClass(body, 'overflow-hidden');
      });
    });

    // Close modal - close button
    on(modalClose, 'click', function() {
      removeClass(modalOverlay, 'is-open');
      removeClass(body, 'overflow-hidden');
    });

    // Close modal - overlay click
    on(modalOverlay, 'click', function(e) {
      if (e.target === modalOverlay) {
        removeClass(modalOverlay, 'is-open');
        removeClass(body, 'overflow-hidden');
      }
    });

    // Close modal - ESC key
    on(document, 'keydown', function(e) {
      if (e.key === 'Escape' && hasClass(modalOverlay, 'is-open')) {
        removeClass(modalOverlay, 'is-open');
        removeClass(body, 'overflow-hidden');
      }
    });
  }

  // ===== BACK TO TOP BUTTON =====

  function initBackToTop() {
    const backToTop = $('.back-to-top');

    // Show/hide based on scroll position
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 500) {
        addClass(backToTop, 'is-visible');
      } else {
        removeClass(backToTop, 'is-visible');
      }
    });

    // Scroll to top on click
    on(backToTop, 'click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ===== FAQ ACCORDION =====

  function initFAQAccordion() {
    const faqItems = $$('.faq-item');

    faqItems.forEach(function(item) {
      const questionRow = item.querySelector('.faq-question-row');
      const answer = item.querySelector('.faq-answer');
      const toggleIcon = item.querySelector('.faq-toggle-icon');

      on(questionRow, 'click', function() {
        // Toggle active state
        const isActive = hasClass(item, 'is-active');

        // Close all other items (optional - remove for multi-open)
        faqItems.forEach(function(otherItem) {
          if (otherItem !== item) {
            removeClass(otherItem, 'is-active');
          }
        });

        // Toggle current item
        toggleClass(item, 'is-active');

        // Animate height
        if (answer) {
          if (isActive) {
            answer.style.maxHeight = '0';
          } else {
            answer.style.maxHeight = answer.scrollHeight + 'px';
          }
        }
      });
    });
  }

  // ===== COOKIE BANNER =====

  function initCookieBanner() {
    const cookieBanner = $('.cookie-banner');
    const acceptBtn = $('.cookie-btn-accept');
    const STORAGE_KEY = 'delolmo-cookies-accepted';

    // Check if already accepted
    const cookiesAccepted = localStorage.getItem(STORAGE_KEY);
    if (!cookiesAccepted) {
      // Show banner after slight delay
      setTimeout(function() {
        addClass(cookieBanner, 'is-visible');
      }, 1000);
    }

    // Handle accept
    on(acceptBtn, 'click', function() {
      localStorage.setItem(STORAGE_KEY, 'true');
      removeClass(cookieBanner, 'is-visible');

      // Trigger any analytics consent here
      if (window.gtag) {
        gtag('consent', 'update', {
          'analytics_storage': 'granted'
        });
      }
    });
  }

  // ===== PROJECT MODAL =====

  function initProjectModals() {
    const projectCards = $$('.project-card[data-project-id]');
    const modalOverlay = $('.project-modal-overlay');
    const modalClose = $('.project-modal-close');
    const body = document.body;

    projectCards.forEach(function(card) {
      on(card, 'click', function() {
        const projectId = card.getAttribute('data-project-id');

        // In a real implementation, you would load project details here
        // For now, just open the modal
        addClass(modalOverlay, 'is-open');
        addClass(body, 'overflow-hidden');
      });
    });

    // Close modal
    on(modalClose, 'click', function() {
      removeClass(modalOverlay, 'is-open');
      removeClass(body, 'overflow-hidden');
    });

    on(modalOverlay, 'click', function(e) {
      if (e.target === modalOverlay) {
        removeClass(modalOverlay, 'is-open');
        removeClass(body, 'overflow-hidden');
      }
    });
  }

  // ===== FORM VALIDATION HELPER =====

  function initFormValidation() {
    const forms = $$('form[data-validate]');

    forms.forEach(function(form) {
      on(form, 'submit', function(e) {
        const inputs = form.querySelectorAll('input[required], textarea[required]');
        let isValid = true;

        inputs.forEach(function(input) {
          if (!input.value.trim()) {
            isValid = false;
            addClass(input, 'error');
          } else {
            removeClass(input, 'error');
          }
        });

        if (!isValid) {
          e.preventDefault();
          alert('Please fill in all required fields.');
        }
      });
    });
  }

  // ===== LAZY LOAD IMAGES =====

  function initLazyLoad() {
    const images = $$('img[data-src]');

    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.getAttribute('data-src');
            img.removeAttribute('data-src');
            removeClass(img, 'lazy');
            observer.unobserve(img);
          }
        });
      });

      images.forEach(function(img) {
        imageObserver.observe(img);
      });
    } else {
      // Fallback for browsers without IntersectionObserver
      images.forEach(function(img) {
        img.src = img.getAttribute('data-src');
        img.removeAttribute('data-src');
      });
    }
  }

  // ===== INITIALIZATION =====

  function init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() {
        initAll();
      });
    } else {
      initAll();
    }
  }

  function initAll() {
    console.log('Del Olmo Construction - Initializing...');

    initThemeToggle();
    initMobileNav();
    initNavScroll();
    initSmoothScroll();
    initModals();
    initBackToTop();
    initFAQAccordion();
    initCookieBanner();
    initProjectModals();
    initFormValidation();
    initLazyLoad();

    console.log('Del Olmo Construction - Ready!');
  }

  // Start initialization
  init();

})();
