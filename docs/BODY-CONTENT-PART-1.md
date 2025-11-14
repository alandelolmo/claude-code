# Webflow Body Content - Copy & Paste HTML

This guide provides ready-to-copy HTML for all website sections. You can either:
1. **Copy-paste into Webflow Embed elements** (easiest)
2. **Use as reference to build in Webflow's visual builder**

---

## 🔧 Setup: Add to Body Tag

First, add this class to your body tag in Webflow:
- Class: `page-wrapper`

---

## 📍 SECTION 1: Navigation Header

Add this at the very top of your page (or in a Symbol for reuse):

```html
<nav class="nav">
  <div class="nav-inner container">
    <!-- Logo -->
    <a href="/" class="nav-logo-link">
      <img src="images/delolmo-logo.png" alt="Del Olmo Construction" class="nav-logo" />
    </a>

    <!-- Desktop Menu -->
    <ul class="nav-menu">
      <li><a href="#services" class="nav-link">Services</a></li>
      <li><a href="#projects" class="nav-link">Projects</a></li>
      <li><a href="#process" class="nav-link">Process</a></li>
      <li><a href="#faq" class="nav-link">FAQ</a></li>
      <li>
        <a href="tel:7373874995" class="nav-phone" data-location="nav">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" class="nav-phone-icon">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
          </svg>
          <span class="nav-phone-text">(737) 387-4995</span>
        </a>
      </li>
      <li>
        <button class="theme-toggle" aria-label="Toggle dark mode">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" class="theme-toggle-icon">
            <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"/>
          </svg>
        </button>
      </li>
      <li>
        <button class="btn btn--primary nav-cta-btn" data-modal-trigger data-location="nav">
          Get Free Estimate
        </button>
      </li>
    </ul>

    <!-- Mobile Toggle -->
    <button class="nav-toggle" aria-label="Toggle menu">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>

  <!-- Mobile Menu -->
  <nav class="nav-menu-mobile">
    <a href="#services" class="nav-link-mobile">Services</a>
    <a href="#projects" class="nav-link-mobile">Projects</a>
    <a href="#process" class="nav-link-mobile">Process</a>
    <a href="#faq" class="nav-link-mobile">FAQ</a>
    <a href="tel:7373874995" class="nav-link-mobile" data-location="mobile-nav">
      Call (737) 387-4995
    </a>
    <button class="btn btn--primary w-full mt-4" data-modal-trigger data-location="mobile-nav">
      Get Free Estimate
    </button>
  </nav>
</nav>

<!-- Add padding to body for fixed nav -->
<div style="height: 80px;"></div>
```

---

## 📍 SECTION 2: Hero Section

```html
<section id="hero" class="hero section section--dark">
  <div class="hero-inner container">
    <div class="hero-content">
      <h1 class="hero-heading heading-lg">
        Austin's Trusted General Contractor
      </h1>
      <p class="hero-subtitle" style="font-size: 1.25rem; margin-top: 1.5rem; margin-bottom: 2rem; color: rgba(255,255,255,0.9);">
        Fast estimates. Quality craftsmanship. Proven results. From kitchen remodels to full renovations, we bring your vision to life.
      </p>
      <div class="hero-ctas" style="display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 3rem;">
        <button class="btn btn--primary btn--large" data-modal-trigger data-location="hero">
          Get Your 24-Hour Estimate
        </button>
        <a href="tel:7373874995" class="btn btn--secondary btn--large" data-location="hero">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" style="margin-right: 0.5rem;">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
          </svg>
          Call (737) 387-4995
        </a>
      </div>

      <!-- Stats - Connect to CMS Collection "Stats" -->
      <div class="hero-stats" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; margin-top: 4rem;">
        <!-- MANUALLY ADD 3 STATS OR CONNECT TO CMS -->
        <div class="hero-stat-card stat-card">
          <div class="stat-card__value">500+</div>
          <div class="stat-card__label">Projects Completed</div>
        </div>
        <div class="hero-stat-card stat-card">
          <div class="stat-card__value">24 HRS</div>
          <div class="stat-card__label">Estimate Turnaround</div>
        </div>
        <div class="hero-stat-card stat-card">
          <div class="stat-card__value">98%</div>
          <div class="stat-card__label">Client Satisfaction</div>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

## 📍 SECTION 3: Trust Bar

```html
<section class="trust-bar section section--light" style="padding: 2rem 0;">
  <div class="trust-bar-inner container" style="display: flex; justify-content: space-around; align-items: center; flex-wrap: wrap; gap: 2rem;">
    <div class="trust-item" style="display: flex; align-items: center; gap: 0.75rem;">
      <svg width="24" height="24" viewBox="0 0 20 20" fill="#14B8A6" class="trust-item-icon">
        <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
      </svg>
      <span class="trust-item-text" style="font-weight: 600; color: #374151;">Licensed & Insured</span>
    </div>
    <div class="trust-item" style="display: flex; align-items: center; gap: 0.75rem;">
      <svg width="24" height="24" viewBox="0 0 20 20" fill="#14B8A6" class="trust-item-icon">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
      </svg>
      <span class="trust-item-text" style="font-weight: 600; color: #374151;">5-Star Rated</span>
    </div>
    <div class="trust-item" style="display: flex; align-items: center; gap: 0.75rem;">
      <svg width="24" height="24" viewBox="0 0 20 20" fill="#14B8A6" class="trust-item-icon">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
      </svg>
      <span class="trust-item-text" style="font-weight: 600; color: #374151;">24-Hour Estimates</span>
    </div>
    <div class="trust-item" style="display: flex; align-items: center; gap: 0.75rem;">
      <svg width="24" height="24" viewBox="0 0 20 20" fill="#14B8A6" class="trust-item-icon">
        <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
      </svg>
      <span class="trust-item-text" style="font-weight: 600; color: #374151;">Serving Austin Metro</span>
    </div>
  </div>
</section>
```

---

## 📍 SECTION 4: Services Section

```html
<section id="services" class="services section section--light">
  <div class="services-inner container">
    <div class="section-header">
      <h2 class="section-header__title">Our Services</h2>
      <p class="section-header__subtitle">
        Comprehensive construction solutions for homeowners, investors, and businesses throughout the Austin metro area.
      </p>
    </div>

    <div class="services-grid grid grid-cols-3" style="gap: 2rem;">
      <!-- Service 1 -->
      <div class="service-card card">
        <div class="icon-wrapper">
          <svg width="32" height="32" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
          </svg>
        </div>
        <h3 class="service-title" style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem;">
          Kitchen & Bath Remodeling
        </h3>
        <p class="service-description" style="color: #6B7280; margin-bottom: 1.5rem;">
          Transform your kitchen or bathroom into a stunning, functional space with custom designs and premium materials.
        </p>
        <ul class="service-list list-styled">
          <li>Custom cabinetry & countertops</li>
          <li>Modern fixtures & appliances</li>
          <li>Smart space planning</li>
          <li>Quality craftsmanship</li>
        </ul>
        <div class="service-badges" style="margin-top: 1rem;">
          <span class="badge badge--primary">Popular</span>
        </div>
      </div>

      <!-- Service 2 -->
      <div class="service-card card">
        <div class="icon-wrapper">
          <svg width="32" height="32" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clip-rule="evenodd"/>
          </svg>
        </div>
        <h3 class="service-title" style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem;">
          House Flipping & Investor Services
        </h3>
        <p class="service-description" style="color: #6B7280; margin-bottom: 1.5rem;">
          Maximize ROI with our investor-focused renovation services. Fast turnarounds, budget-conscious solutions.
        </p>
        <ul class="service-list list-styled">
          <li>Rapid project timelines</li>
          <li>Budget optimization</li>
          <li>ROI-focused upgrades</li>
          <li>Turnkey solutions</li>
        </ul>
        <div class="service-badges" style="margin-top: 1rem;">
          <span class="badge badge--accent">For Investors</span>
        </div>
      </div>

      <!-- Service 3 -->
      <div class="service-card card">
        <div class="icon-wrapper">
          <svg width="32" height="32" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm2 0v8h12V6H4z" clip-rule="evenodd"/>
          </svg>
        </div>
        <h3 class="service-title" style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem;">
          Concrete & Foundation Work
        </h3>
        <p class="service-description" style="color: #6B7280; margin-bottom: 1.5rem;">
          Expert concrete services from driveways to foundations. Durable, beautiful, and built to last.
        </p>
        <ul class="service-list list-styled">
          <li>Driveways & patios</li>
          <li>Stamped concrete</li>
          <li>Foundation repair</li>
          <li>Structural concrete</li>
        </ul>
      </div>

      <!-- Service 4 -->
      <div class="service-card card">
        <div class="icon-wrapper">
          <svg width="32" height="32" viewBox="0 0 20 20" fill="currentColor">
            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
          </svg>
        </div>
        <h3 class="service-title" style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem;">
          Commercial Construction
        </h3>
        <p class="service-description" style="color: #6B7280; margin-bottom: 1.5rem;">
          Professional commercial buildouts and renovations for offices, retail, and more.
        </p>
        <ul class="service-list list-styled">
          <li>Office buildouts</li>
          <li>Retail spaces</li>
          <li>Restaurant renovations</li>
          <li>ADA compliance</li>
        </ul>
      </div>

      <!-- Service 5 -->
      <div class="service-card card">
        <div class="icon-wrapper">
          <svg width="32" height="32" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
          </svg>
        </div>
        <h3 class="service-title" style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem;">
          Full Home Renovations
        </h3>
        <p class="service-description" style="color: #6B7280; margin-bottom: 1.5rem;">
          Complete whole-home transformations. We manage every detail from design to final walkthrough.
        </p>
        <ul class="service-list list-styled">
          <li>Whole-home remodels</li>
          <li>Open floor plans</li>
          <li>Modern updates</li>
          <li>Permit management</li>
        </ul>
      </div>

      <!-- Service 6 -->
      <div class="service-card card">
        <div class="icon-wrapper">
          <svg width="32" height="32" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clip-rule="evenodd"/>
          </svg>
        </div>
        <h3 class="service-title" style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem;">
          Additions & Extensions
        </h3>
        <p class="service-description" style="color: #6B7280; margin-bottom: 1.5rem;">
          Expand your living space with room additions, sunrooms, and home extensions.
        </p>
        <ul class="service-list list-styled">
          <li>Room additions</li>
          <li>Second stories</li>
          <li>Garage conversions</li>
          <li>Outdoor living spaces</li>
        </ul>
      </div>
    </div>
  </div>
</section>
```

---

## 📍 SECTION 5: Projects Section (CMS-Driven)

**IMPORTANT:** In Webflow, you'll need to connect this to your Projects CMS collection. Here's the HTML structure to reference:

```html
<section id="projects" class="projects section section--light">
  <div class="projects-inner container">
    <div class="section-header">
      <h2 class="section-header__title">Featured Projects</h2>
      <p class="section-header__subtitle">
        See how we've transformed homes and businesses across Austin. Real projects, real results.
      </p>
    </div>

    <!-- IN WEBFLOW: Add Collection List here -->
    <!-- Collection: Projects, Filter: Featured = true, Limit: 4-6 -->
    <div class="projects-grid grid grid-cols-2" style="gap: 2rem;">

      <!-- SAMPLE PROJECT CARD - Repeat this structure in Webflow CMS -->
      <div class="project-card card card--interactive">
        <div style="position: relative; border-radius: 0.75rem; overflow: hidden; margin-bottom: 1rem;">
          <!-- CMS: Main Image -->
          <img src="images/project-sample.jpg" alt="Project title" style="width: 100%; height: 300px; object-fit: cover;" class="project-card__image" />
          <!-- CMS: Project Type Badge -->
          <span class="project-badge badge badge--primary" style="position: absolute; top: 1rem; right: 1rem;">
            Kitchen Remodel
          </span>
        </div>
        <!-- CMS: Title -->
        <h3 class="project-title" style="font-size: 1.5rem; font-weight: 700; margin-bottom: 0.5rem;">
          Luxury Kitchen Renovation - Tarrytown
        </h3>
        <!-- CMS: Location -->
        <p class="project-location" style="color: #6B7280; font-size: 0.875rem; margin-bottom: 1rem;">
          📍 Austin, TX 78703
        </p>
        <!-- CMS: Short Description -->
        <p class="project-description" style="color: #374151; margin-bottom: 1rem;">
          Complete kitchen transformation featuring custom cabinetry, quartz countertops, and high-end appliances.
        </p>
        <!-- CMS: Stats -->
        <div class="project-stats-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; padding-top: 1rem; border-top: 1px solid #E5E7EB;">
          <div>
            <div style="font-size: 0.75rem; color: #6B7280; text-transform: uppercase;">Area</div>
            <div style="font-weight: 700; color: #111827;">450 SF</div>
          </div>
          <div>
            <div style="font-size: 0.75rem; color: #6B7280; text-transform: uppercase;">Duration</div>
            <div style="font-weight: 700; color: #111827;">6 Weeks</div>
          </div>
          <div>
            <div style="font-size: 0.75rem; color: #6B7280; text-transform: uppercase;">Budget</div>
            <div style="font-weight: 700; color: #111827;">$95K</div>
          </div>
        </div>
      </div>

      <!-- Add 3-5 more project cards connected to CMS -->

    </div>
  </div>
</section>
```

---

## 📍 SECTION 6: Process Section

```html
<section id="process" class="process section section--light">
  <div class="process-inner container">
    <div class="section-header">
      <h2 class="section-header__title">Our Process</h2>
      <p class="section-header__subtitle">
        Simple, transparent, and efficient. From first call to final walkthrough.
      </p>
    </div>

    <div class="process-grid grid grid-cols-4" style="gap: 2rem;">
      <!-- Step 1 -->
      <div class="process-step" style="text-align: center;">
        <span class="process-step-number badge badge--primary" style="font-size: 1.5rem; width: 60px; height: 60px; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
          1
        </span>
        <h3 class="process-step-title" style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.75rem;">
          Free Consultation
        </h3>
        <p class="process-step-description" style="color: #6B7280; margin-bottom: 1rem;">
          We meet to discuss your vision, needs, and budget. No pressure, just honest conversation.
        </p>
        <span class="process-step-timeline" style="color: #14B8A6; font-weight: 600; font-size: 0.875rem;">
          Day 1
        </span>
      </div>

      <!-- Step 2 -->
      <div class="process-step" style="text-align: center;">
        <span class="process-step-number badge badge--primary" style="font-size: 1.5rem; width: 60px; height: 60px; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
          2
        </span>
        <h3 class="process-step-title" style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.75rem;">
          Detailed Estimate
        </h3>
        <p class="process-step-description" style="color: #6B7280; margin-bottom: 1rem;">
          Receive a comprehensive, itemized quote with no hidden fees. Everything is transparent.
        </p>
        <span class="process-step-timeline" style="color: #14B8A6; font-weight: 600; font-size: 0.875rem;">
          Within 24 Hours
        </span>
      </div>

      <!-- Step 3 -->
      <div class="process-step" style="text-align: center;">
        <span class="process-step-number badge badge--primary" style="font-size: 1.5rem; width: 60px; height: 60px; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
          3
        </span>
        <h3 class="process-step-title" style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.75rem;">
          Project Kickoff
        </h3>
        <p class="process-step-description" style="color: #6B7280; margin-bottom: 1rem;">
          We handle permits, scheduling, and coordination. You'll have a dedicated project manager.
        </p>
        <span class="process-step-timeline" style="color: #14B8A6; font-weight: 600; font-size: 0.875rem;">
          Week 1
        </span>
      </div>

      <!-- Step 4 -->
      <div class="process-step" style="text-align: center;">
        <span class="process-step-number badge badge--primary" style="font-size: 1.5rem; width: 60px; height: 60px; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
          4
        </span>
        <h3 class="process-step-title" style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.75rem;">
          Quality Completion
        </h3>
        <p class="process-step-description" style="color: #6B7280; margin-bottom: 1rem;">
          Final walkthrough, punch list, and warranty. We don't leave until you're 100% satisfied.
        </p>
        <span class="process-step-timeline" style="color: #14B8A6; font-weight: 600; font-size: 0.875rem;">
          On Schedule
        </span>
      </div>
    </div>
  </div>
</section>
```

---

## 📍 SECTION 7: Who We Serve

```html
<section class="who-we-serve section section--light">
  <div class="who-inner container">
    <div class="section-header">
      <h2 class="section-header__title">Who We Work With</h2>
      <p class="section-header__subtitle">
        Trusted by homeowners, investors, and businesses across Austin.
      </p>
    </div>

    <div class="who-grid grid grid-cols-3" style="gap: 2rem;">
      <!-- Card 1 -->
      <div class="who-card card" style="text-align: center;">
        <div class="icon-wrapper icon-wrapper--large" style="margin: 0 auto 1.5rem;">
          <svg width="40" height="40" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
          </svg>
        </div>
        <h3 class="who-title" style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem;">
          Homeowners
        </h3>
        <p class="who-description" style="color: #6B7280;">
          Kitchen and bath remodels, whole-home renovations, additions, and upgrades. We bring your dream home to life with quality craftsmanship and attention to detail.
        </p>
      </div>

      <!-- Card 2 -->
      <div class="who-card card" style="text-align: center;">
        <div class="icon-wrapper icon-wrapper--large" style="margin: 0 auto 1.5rem;">
          <svg width="40" height="40" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
          </svg>
        </div>
        <h3 class="who-title" style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem;">
          Real Estate Investors
        </h3>
        <p class="who-description" style="color: #6B7280;">
          Fast turnarounds, budget-conscious solutions, and ROI-focused renovations. We understand the investment game and deliver results that maximize your returns.
        </p>
      </div>

      <!-- Card 3 -->
      <div class="who-card card" style="text-align: center;">
        <div class="icon-wrapper icon-wrapper--large" style="margin: 0 auto 1.5rem;">
          <svg width="40" height="40" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clip-rule="evenodd"/>
          </svg>
        </div>
        <h3 class="who-title" style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem;">
          Business Owners
        </h3>
        <p class="who-description" style="color: #6B7280;">
          Office buildouts, retail spaces, restaurants, and commercial renovations. Professional results that create the perfect environment for your business to thrive.
        </p>
      </div>
    </div>
  </div>
</section>
```

---

## 📍 SECTION 8: Service Areas

```html
<section class="service-areas section section--light">
  <div class="service-areas-inner container">
    <div class="section-header">
      <h2 class="section-header__title">Serving the Austin Metro Area</h2>
      <p class="service-areas-text section-header__subtitle">
        Proudly serving homeowners, investors, and businesses across Travis, Williamson, and Hays counties.
      </p>
    </div>

    <div class="service-areas-grid grid grid-cols-4" style="gap: 1.5rem; margin-bottom: 3rem;">
      <div class="service-area-card card" style="text-align: center; padding: 1.5rem;">
        <h4 class="service-area-name" style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem; color: #14B8A6;">
          Austin
        </h4>
        <span class="service-area-county" style="font-size: 0.875rem; color: #6B7280;">
          Travis County
        </span>
      </div>

      <div class="service-area-card card" style="text-align: center; padding: 1.5rem;">
        <h4 class="service-area-name" style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem; color: #14B8A6;">
          Round Rock
        </h4>
        <span class="service-area-county" style="font-size: 0.875rem; color: #6B7280;">
          Williamson County
        </span>
      </div>

      <div class="service-area-card card" style="text-align: center; padding: 1.5rem;">
        <h4 class="service-area-name" style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem; color: #14B8A6;">
          Cedar Park
        </h4>
        <span class="service-area-county" style="font-size: 0.875rem; color: #6B7280;">
          Williamson County
        </span>
      </div>

      <div class="service-area-card card" style="text-align: center; padding: 1.5rem;">
        <h4 class="service-area-name" style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem; color: #14B8A6;">
          Georgetown
        </h4>
        <span class="service-area-county" style="font-size: 0.875rem; color: #6B7280;">
          Williamson County
        </span>
      </div>

      <div class="service-area-card card" style="text-align: center; padding: 1.5rem;">
        <h4 class="service-area-name" style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem; color: #14B8A6;">
          Pflugerville
        </h4>
        <span class="service-area-county" style="font-size: 0.875rem; color: #6B7280;">
          Travis County
        </span>
      </div>

      <div class="service-area-card card" style="text-align: center; padding: 1.5rem;">
        <h4 class="service-area-name" style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem; color: #14B8A6;">
          Lakeway
        </h4>
        <span class="service-area-county" style="font-size: 0.875rem; color: #6B7280;">
          Travis County
        </span>
      </div>

      <div class="service-area-card card" style="text-align: center; padding: 1.5rem;">
        <h4 class="service-area-name" style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem; color: #14B8A6;">
          Leander
        </h4>
        <span class="service-area-county" style="font-size: 0.875rem; color: #6B7280;">
          Williamson County
        </span>
      </div>

      <div class="service-area-card card" style="text-align: center; padding: 1.5rem;">
        <h4 class="service-area-name" style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem; color: #14B8A6;">
          Kyle
        </h4>
        <span class="service-area-county" style="font-size: 0.875rem; color: #6B7280;">
          Hays County
        </span>
      </div>
    </div>

    <!-- Optional: Add embedded Google Map -->
    <div class="service-areas-map" style="border-radius: 1rem; overflow: hidden; height: 400px; background: #E5E7EB;">
      <!-- Add Google Maps embed or static map image here -->
      <p style="padding: 2rem; text-align: center; color: #6B7280;">
        [Add Google Maps embed here showing Austin metro service area]
      </p>
    </div>
  </div>
</section>
```

I'll continue with the remaining sections in the next file...

---

**Continue to Part 2 for remaining sections...**
