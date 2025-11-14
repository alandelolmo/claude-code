# Webflow Body Content - Part 2 (Continued)

## 📍 SECTION 9: Estimate CTA Section

```html
<section id="estimate" class="estimate section section--light">
  <div class="estimate-inner container" style="display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center;">
    <!-- Left Column: Copy -->
    <div class="estimate-copy">
      <h2 class="heading-md" style="margin-bottom: 1.5rem;">
        Get Your Free Estimate in 24 Hours
      </h2>
      <p style="font-size: 1.125rem; color: #6B7280; margin-bottom: 2rem;">
        No pressure. No obligations. Just honest, transparent pricing and expert recommendations for your project.
      </p>
      <ul class="estimate-highlights list-styled" style="margin-bottom: 2rem;">
        <li>Detailed project breakdown & timeline</li>
        <li>Transparent, itemized pricing</li>
        <li>Expert recommendations & alternatives</li>
        <li>Fast 24-hour turnaround guaranteed</li>
        <li>No hidden fees or surprises</li>
      </ul>
      <button class="btn btn--primary btn--large" data-modal-trigger data-location="estimate-section" style="margin-bottom: 1rem;">
        Request Free Estimate
      </button>
      <p style="font-size: 0.875rem; color: #9CA3AF;">
        Or call us directly at
        <a href="tel:7373874995" class="link" data-location="estimate-section">(737) 387-4995</a>
      </p>
    </div>

    <!-- Right Column: Placeholder/Visual -->
    <div class="estimate-placeholder" style="background: linear-gradient(135deg, #14B8A6 0%, #0F766E 100%); padding: 3rem; border-radius: 1.5rem; text-align: center; color: white;">
      <svg width="80" height="80" viewBox="0 0 20 20" fill="white" class="estimate-icon" style="margin: 0 auto 1.5rem; opacity: 0.9;">
        <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd"/>
      </svg>
      <h3 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem;">
        Fast, Easy Process
      </h3>
      <p style="font-size: 1rem; opacity: 0.9; line-height: 1.6;">
        Fill out our quick form and we'll get back to you within 24 hours with a detailed, no-obligation estimate for your project.
      </p>
    </div>
  </div>

  <!-- Mobile: Stack columns -->
  <style>
    @media (max-width: 768px) {
      .estimate-inner {
        grid-template-columns: 1fr !important;
        gap: 2rem !important;
      }
    }
  </style>
</section>
```

---

## 📍 SECTION 10: FAQ Section (CMS-Driven)

**IMPORTANT:** Connect this to your FAQs CMS collection in Webflow.

```html
<section id="faq" class="faq section section--light">
  <div class="faq-inner container">
    <div class="section-header">
      <h2 class="section-header__title">Frequently Asked Questions</h2>
      <p class="section-header__subtitle">
        Got questions? We've got answers. Learn more about our process, pricing, and services.
      </p>
    </div>

    <!-- IN WEBFLOW: Add Collection List here -->
    <!-- Collection: FAQs, Sort by: Order (ascending) -->
    <div class="faq-accordion" style="max-width: 900px; margin: 0 auto;">

      <!-- SAMPLE FAQ ITEM - Repeat in CMS -->
      <div class="faq-item">
        <div class="faq-question-row">
          <!-- CMS: Question -->
          <h3 class="faq-question">
            How quickly can I get an estimate for my construction project?
          </h3>
          <span class="faq-toggle-icon">+</span>
        </div>
        <!-- CMS: Answer -->
        <div class="faq-answer">
          <p>
            We provide detailed project estimates within 24 hours. Simply fill out our online form or call us at (737) 387-4995, and we'll schedule a consultation to assess your project needs and provide a comprehensive quote.
          </p>
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-question-row">
          <h3 class="faq-question">
            What areas do you serve in the Austin metro?
          </h3>
          <span class="faq-toggle-icon">+</span>
        </div>
        <div class="faq-answer">
          <p>
            Del Olmo Construction serves Austin and surrounding areas including Round Rock, Cedar Park, Georgetown, Pflugerville, Lakeway, and other communities in Travis, Williamson, and Hays counties. Contact us to confirm we serve your specific location.
          </p>
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-question-row">
          <h3 class="faq-question">
            Are you licensed and insured?
          </h3>
          <span class="faq-toggle-icon">+</span>
        </div>
        <div class="faq-answer">
          <p>
            Yes, Del Olmo Construction is fully licensed and insured. We maintain comprehensive general liability insurance and workers' compensation coverage to protect our clients and team members on every project.
          </p>
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-question-row">
          <h3 class="faq-question">
            What types of construction projects do you specialize in?
          </h3>
          <span class="faq-toggle-icon">+</span>
        </div>
        <div class="faq-answer">
          <p>We specialize in:</p>
          <ul style="margin: 1rem 0; padding-left: 1.5rem;">
            <li>Residential renovations and remodeling (kitchens, bathrooms, whole-home)</li>
            <li>House flipping projects for real estate investors</li>
            <li>Concrete and foundation work (driveways, patios, foundations)</li>
            <li>Commercial renovations and buildouts</li>
          </ul>
          <p>We work with homeowners, real estate investors, and business owners.</p>
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-question-row">
          <h3 class="faq-question">
            Do you work with real estate investors and house flippers?
          </h3>
          <span class="faq-toggle-icon">+</span>
        </div>
        <div class="faq-answer">
          <p>
            Absolutely! We have extensive experience working with real estate investors and house flippers. We understand the importance of staying on budget and timeline to maximize your ROI. Our team can help with everything from cosmetic updates to full gut renovations.
          </p>
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-question-row">
          <h3 class="faq-question">
            How long does a typical renovation project take?
          </h3>
          <span class="faq-toggle-icon">+</span>
        </div>
        <div class="faq-answer">
          <p>Project timelines vary based on scope and complexity:</p>
          <ul style="margin: 1rem 0; padding-left: 1.5rem;">
            <li>Bathroom remodel: 2-3 weeks</li>
            <li>Kitchen remodel: 4-6 weeks</li>
            <li>Full home renovation: 8-12 weeks</li>
            <li>House flip: 8-14 weeks</li>
          </ul>
          <p>We provide detailed timelines during the estimate phase and keep you updated throughout the project.</p>
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-question-row">
          <h3 class="faq-question">
            Will I have a dedicated project manager?
          </h3>
          <span class="faq-toggle-icon">+</span>
        </div>
        <div class="faq-answer">
          <p>
            Yes, every project is assigned a dedicated project manager who serves as your main point of contact. They'll coordinate all aspects of your project, communicate progress, and ensure everything stays on schedule and budget.
          </p>
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-question-row">
          <h3 class="faq-question">
            Do you handle permits and inspections?
          </h3>
          <span class="faq-toggle-icon">+</span>
        </div>
        <div class="faq-answer">
          <p>
            Yes, we handle all necessary permits and coordinate required inspections with local authorities. This is included in our project management services to ensure your project meets all building codes and regulations.
          </p>
        </div>
      </div>

      <!-- Add more FAQ items from CMS -->

    </div>
  </div>
</section>
```

---

## 📍 SECTION 11: Testimonials Section (CMS-Driven)

**IMPORTANT:** Connect this to your Testimonials CMS collection in Webflow.

```html
<section class="testimonials section section--dark">
  <div class="testimonials-inner container">
    <div class="section-header">
      <h2 class="section-header__title" style="color: white;">What Our Clients Say</h2>
      <p class="section-header__subtitle" style="color: rgba(255,255,255,0.8);">
        Don't just take our word for it. Here's what homeowners and investors say about working with us.
      </p>
    </div>

    <!-- IN WEBFLOW: Add Collection List here -->
    <!-- Collection: Testimonials, Filter: Featured = true, Limit: 6 -->
    <div class="testimonials-grid grid grid-cols-3" style="gap: 2rem;">

      <!-- SAMPLE TESTIMONIAL - Repeat in CMS -->
      <div class="testimonial-card card card--dark">
        <!-- Stars -->
        <div class="testimonial-stars" style="color: #F59E0B; margin-bottom: 1rem; font-size: 1.25rem;">
          ★★★★★
        </div>
        <!-- CMS: Quote -->
        <p class="testimonial-quote" style="color: white; font-size: 1rem; line-height: 1.6; margin-bottom: 1.5rem;">
          "Del Olmo Construction transformed our dated kitchen into a modern masterpiece. Alan and his team were professional, on-time, and stayed within budget. The attention to detail was incredible. Highly recommend!"
        </p>
        <!-- CMS: Name -->
        <p class="testimonial-name" style="font-weight: 700; color: #14B8A6;">
          — Michael R.
        </p>
        <!-- CMS: Project Type (optional) -->
        <p style="font-size: 0.875rem; color: rgba(255,255,255,0.6); margin-top: 0.25rem;">
          Kitchen Remodel, Austin
        </p>
      </div>

      <div class="testimonial-card card card--dark">
        <div class="testimonial-stars" style="color: #F59E0B; margin-bottom: 1rem; font-size: 1.25rem;">
          ★★★★★
        </div>
        <p class="testimonial-quote" style="color: white; font-size: 1rem; line-height: 1.6; margin-bottom: 1.5rem;">
          "We've flipped 15 houses in Austin, and Del Olmo Construction is our go-to contractor. They understand timelines and investor budgets. Their work quality is excellent, and they always deliver on schedule."
        </p>
        <p class="testimonial-name" style="font-weight: 700; color: #14B8A6;">
          — Jennifer & Tom S.
        </p>
        <p style="font-size: 0.875rem; color: rgba(255,255,255,0.6); margin-top: 0.25rem;">
          Investment Flip, East Austin
        </p>
      </div>

      <div class="testimonial-card card card--dark">
        <div class="testimonial-stars" style="color: #F59E0B; margin-bottom: 1rem; font-size: 1.25rem;">
          ★★★★★
        </div>
        <p class="testimonial-quote" style="color: white; font-size: 1rem; line-height: 1.6; margin-bottom: 1.5rem;">
          "Outstanding concrete work! Our new driveway and patio look amazing. The crew was courteous, cleaned up every day, and the stamped concrete finish exceeded our expectations. Very happy!"
        </p>
        <p class="testimonial-name" style="font-weight: 700; color: #14B8A6;">
          — Patricia L.
        </p>
        <p style="font-size: 0.875rem; color: rgba(255,255,255,0.6); margin-top: 0.25rem;">
          Concrete Work, Round Rock
        </p>
      </div>

      <div class="testimonial-card card card--dark">
        <div class="testimonial-stars" style="color: #F59E0B; margin-bottom: 1rem; font-size: 1.25rem;">
          ★★★★★
        </div>
        <p class="testimonial-quote" style="color: white; font-size: 1rem; line-height: 1.6; margin-bottom: 1.5rem;">
          "From estimate to completion, the entire process was smooth. Alan provided a detailed quote within 24 hours as promised, and his team finished our bathroom renovation ahead of schedule. Quality work at a fair price."
        </p>
        <p class="testimonial-name" style="font-weight: 700; color: #14B8A6;">
          — David M.
        </p>
        <p style="font-size: 0.875rem; color: rgba(255,255,255,0.6); margin-top: 0.25rem;">
          Bathroom Remodel, Cedar Park
        </p>
      </div>

      <div class="testimonial-card card card--dark">
        <div class="testimonial-stars" style="color: #F59E0B; margin-bottom: 1rem; font-size: 1.25rem;">
          ★★★★★
        </div>
        <p class="testimonial-quote" style="color: white; font-size: 1rem; line-height: 1.6; margin-bottom: 1.5rem;">
          "As a business owner, I needed someone reliable to renovate my office space. Del Olmo Construction handled everything - permits, design, construction - and delivered a beautiful modern workspace. Couldn't be happier!"
        </p>
        <p class="testimonial-name" style="font-weight: 700; color: #14B8A6;">
          — Carlos E.
        </p>
        <p style="font-size: 0.875rem; color: rgba(255,255,255,0.6); margin-top: 0.25rem;">
          Commercial Renovation, Downtown Austin
        </p>
      </div>

      <div class="testimonial-card card card--dark">
        <div class="testimonial-stars" style="color: #F59E0B; margin-bottom: 1rem; font-size: 1.25rem;">
          ★★★★★
        </div>
        <p class="testimonial-quote" style="color: white; font-size: 1rem; line-height: 1.6; margin-bottom: 1.5rem;">
          "The whole-home renovation was a big project, but Alan's team made it stress-free. They communicated constantly, were flexible with our requests, and the craftsmanship is top-notch. Our home looks incredible!"
        </p>
        <p class="testimonial-name" style="font-weight: 700; color: #14B8A6;">
          — Amanda K.
        </p>
        <p style="font-size: 0.875rem; color: rgba(255,255,255,0.6); margin-top: 0.25rem;">
          Full Home Renovation, Lakeway
        </p>
      </div>

      <!-- Add more testimonials from CMS -->

    </div>
  </div>
</section>
```

---

## 📍 SECTION 12: Final CTA Section

```html
<section class="cta-final section section--accent">
  <div class="cta-final-inner container" style="text-align: center; max-width: 800px; margin: 0 auto;">
    <h2 class="cta-final-heading heading-md" style="color: white; margin-bottom: 1.5rem;">
      Ready to Start Your Project?
    </h2>
    <p class="cta-final-text" style="font-size: 1.25rem; color: rgba(255,255,255,0.9); margin-bottom: 2.5rem;">
      Get your free, no-obligation estimate today. Join hundreds of satisfied homeowners and investors who trust Del Olmo Construction.
    </p>
    <div class="cta-final-buttons" style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
      <button class="btn btn--large" data-modal-trigger data-location="final-cta" style="background: white; color: #14B8A6; border-color: white;">
        Get Free Estimate
      </button>
      <a href="tel:7373874995" class="btn btn--secondary btn--large" data-location="final-cta" style="border-color: white; color: white;">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" style="margin-right: 0.5rem;">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
        </svg>
        Call (737) 387-4995
      </a>
    </div>
  </div>
</section>
```

---

## 📍 SECTION 13: Footer

```html
<footer class="footer section section--dark">
  <div class="footer-inner container">
    <!-- Footer Grid -->
    <div class="footer-grid grid grid-cols-4" style="gap: 3rem;">

      <!-- Column 1: About -->
      <div class="footer-column">
        <h4 class="footer-heading">Del Olmo Construction</h4>
        <p class="footer-text">
          Licensed & Insured General Contractor serving the Austin metro area since 2020.
        </p>
        <p class="footer-text">
          Austin, Texas
        </p>
        <p class="footer-text">
          License #: [Your License Number]
        </p>
      </div>

      <!-- Column 2: Quick Links -->
      <div class="footer-column">
        <h4 class="footer-heading">Quick Links</h4>
        <a href="#services" class="footer-link">Services</a>
        <a href="#projects" class="footer-link">Projects</a>
        <a href="#process" class="footer-link">Our Process</a>
        <a href="#faq" class="footer-link">FAQ</a>
        <a href="#" class="footer-link" data-modal-trigger data-location="footer">Get Estimate</a>
      </div>

      <!-- Column 3: Services -->
      <div class="footer-column">
        <h4 class="footer-heading">Services</h4>
        <a href="#services" class="footer-link">Kitchen Remodeling</a>
        <a href="#services" class="footer-link">Bathroom Remodeling</a>
        <a href="#services" class="footer-link">House Flipping</a>
        <a href="#services" class="footer-link">Concrete Work</a>
        <a href="#services" class="footer-link">Commercial Construction</a>
        <a href="#services" class="footer-link">Full Renovations</a>
      </div>

      <!-- Column 4: Contact -->
      <div class="footer-column">
        <h4 class="footer-heading">Contact</h4>
        <p class="footer-text">
          <strong>Phone:</strong><br/>
          <a href="tel:7373874995" class="footer-link" data-location="footer">(737) 387-4995</a>
        </p>
        <p class="footer-text">
          <strong>Email:</strong><br/>
          <a href="mailto:info@delolmoconstruction.com" class="footer-link">info@delolmoconstruction.com</a>
        </p>
        <p class="footer-text" style="margin-top: 1rem;">
          <strong>Hours:</strong><br/>
          Mon-Fri: 7am - 6pm<br/>
          Sat: 8am - 2pm<br/>
          Sun: Closed
        </p>

        <!-- Social Links -->
        <div class="footer-social">
          <a href="https://www.facebook.com/delolmoconstruction" target="_blank" rel="noopener" class="footer-social-link" data-social="facebook" aria-label="Facebook">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a href="https://www.instagram.com/delolmoconstruction" target="_blank" rel="noopener" class="footer-social-link" data-social="instagram" aria-label="Instagram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/company/delolmo-construction" target="_blank" rel="noopener" class="footer-social-link" data-social="linkedin" aria-label="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>

    <!-- Footer Bottom -->
    <div class="footer-bottom">
      <p>&copy; 2024 Del Olmo Construction LLC. All rights reserved.</p>
      <div>
        <a href="/privacy" class="footer-bottom-link">Privacy Policy</a>
        <a href="/terms" class="footer-bottom-link">Terms of Service</a>
      </div>
    </div>
  </div>
</footer>
```

---

## 📍 SECTION 14: Back to Top Button

```html
<button class="back-to-top" aria-label="Back to top">
  <svg width="24" height="24" viewBox="0 0 20 20" fill="currentColor">
    <path fill-rule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
  </svg>
</button>
```

---

## 📍 SECTION 15: Cookie Banner

```html
<div class="cookie-banner">
  <div class="container" style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
    <p class="cookie-text" style="margin: 0; flex: 1;">
      We use cookies to improve your experience on our site. By continuing to use this site, you accept our use of cookies.
      <a href="/privacy" class="cookie-link" style="color: #14B8A6; text-decoration: underline;">Learn more</a>
    </p>
    <button class="btn btn--primary cookie-btn-accept">
      Accept Cookies
    </button>
  </div>
</div>
```

---

## 📍 SECTION 16: Estimate Modal (GHL Form)

```html
<div class="modal-overlay">
  <div class="modal">
    <button class="modal-close" aria-label="Close">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
      </svg>
    </button>

    <h2 class="modal-heading">Get Your Free Estimate</h2>
    <p class="modal-description">
      Fill out the form below and we'll get back to you within 24 hours with a detailed, no-obligation estimate.
    </p>

    <div class="modal-form-wrapper">
      <!-- ADD EMBED ELEMENT HERE WITH GOHIGHLEVEL FORM -->
      <!-- See COPY-PASTE-GUIDE.md Section "Inside Modal" -->
      <div style="padding: 2rem; text-align: center; background: #F9FAFB; border-radius: 0.75rem;">
        <p style="margin-bottom: 1rem; color: #6B7280;">
          [Add GHL Form Embed Here]
        </p>
        <p style="margin-bottom: 0.5rem;">
          Or contact us directly:
        </p>
        <p>
          <strong>Phone:</strong> <a href="tel:7373874995" style="color: #14B8A6;">(737) 387-4995</a><br/>
          <strong>Email:</strong> <a href="mailto:info@delolmoconstruction.com" style="color: #14B8A6;">info@delolmoconstruction.com</a>
        </p>
      </div>
    </div>
  </div>
</div>
```

---

## ✅ Implementation Steps

### Option 1: Copy-Paste into Webflow Embed Elements

1. **For each section above:**
   - Add a new **Embed element** in Webflow
   - Copy the entire HTML code for that section
   - Paste into the Embed element
   - Publish to see it live

2. **For CMS sections (Projects, FAQs, Testimonials):**
   - Use the HTML as a **reference**
   - Build the structure in Webflow's visual builder
   - Connect to your CMS collections
   - Apply the CSS classes shown in the HTML

### Option 2: Build in Webflow Visual Builder

1. Use the HTML as a **guide** for structure
2. Create divs and elements using the class names shown
3. The CSS you added to Head Code will automatically style them
4. Connect CMS collections where noted

---

## 🎨 Tips for Implementation

1. **Images**: Replace `images/` paths with your actual Webflow image URLs
2. **Logo**: Upload your logo and reference it in the nav
3. **Social Links**: Update Facebook, Instagram, LinkedIn URLs
4. **License Number**: Add your actual license number in the footer
5. **CMS Collections**: Set up Projects, FAQs, Testimonials as separate step (see `/cms/README.md`)

---

## 📱 Mobile Responsive

All sections use responsive classes like:
- `grid grid-cols-3` → automatically becomes 1 column on mobile
- Inline media queries where needed
- The CSS you added handles most responsive behavior

---

## 🔗 Next Steps

1. Copy each section into Webflow
2. Replace placeholder content with your real content
3. Connect CMS collections (Projects, FAQs, Testimonials)
4. Add GHL form embed to modal
5. Upload images and replace paths
6. Test all interactive elements
7. Publish and launch!

---

**You now have all the body content!** Combine with the Head/Footer code from `COPY-PASTE-GUIDE.md` for a complete website.
