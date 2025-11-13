# Webflow Implementation Guide - Del Olmo Construction

Complete step-by-step guide for implementing the Del Olmo Construction website in Webflow.

## Table of Contents

1. [Initial Setup](#initial-setup)
2. [Project Configuration](#project-configuration)
3. [CMS Collections Setup](#cms-collections-setup)
4. [Custom Code Integration](#custom-code-integration)
5. [Page Structure](#page-structure)
6. [Component Building](#component-building)
7. [Integrations](#integrations)
8. [SEO Configuration](#seo-configuration)
9. [Testing](#testing)
10. [Launch](#launch)

---

## Initial Setup

### Step 1: Create Webflow Account & Project

1. **Sign up/Log in** to Webflow at https://webflow.com
2. Click **+ New Project**
3. Choose **Blank Site**
4. Name it: "Del Olmo Construction"
5. Select appropriate plan:
   - **CMS Plan** (minimum required for CMS collections)
   - **Business Plan** (recommended for white-label hosting)

### Step 2: Configure Project Settings

1. Go to **Project Settings** (gear icon)
2. **General Tab:**
   - Site name: Del Olmo Construction
   - Timezone: Central Time (US & Canada)
3. **Hosting Tab:**
   - Enable hosting (will configure domain later)
4. **SEO Tab:**
   - Will configure per-page later

---

## Project Configuration

### Fonts Setup

1. Go to **Project Settings → Fonts**
2. Use **system fonts** (no custom fonts needed):
   - Primary: System UI (already default)
3. Or upload custom fonts if desired

### Colors Setup

Add these brand colors to your style guide:

1. **Primary (Teal)**: `#14B8A6`
2. **Primary Dark**: `#0F766E`
3. **Primary Light**: `#5EEAD4`
4. **Accent (Amber)**: `#F59E0B`
5. **Text Dark**: `#111827`
6. **Text Gray**: `#6B7280`
7. **Background Light**: `#F9FAFB`
8. **Background Dark**: `#1F2937`

### Breakpoints

Webflow's default breakpoints work well:
- Desktop: >992px (default)
- Tablet: 768px - 991px
- Mobile Landscape: 480px - 767px
- Mobile Portrait: <479px

---

## CMS Collections Setup

Follow the guide in `/cms/README.md` to create these collections:

1. **Projects** (10-20 items)
2. **Testimonials** (6-12 items)
3. **FAQs** (8-12 items)
4. **Stats** (3 items)
5. **Blog Posts** (future - optional)

Refer to the JSON files in `/cms/` for exact field configurations.

---

## Custom Code Integration

### Head Code (Project Settings → Custom Code)

Add in this order:

```html
<!-- 1. CSS Variables -->
<style>
  /* Paste contents of /css/variables.css */
</style>

<!-- 2. Utility Classes -->
<style>
  /* Paste contents of /css/utilities.css */
</style>

<!-- 3. Component Styles -->
<style>
  /* Paste contents of /css/components.css */
</style>

<!-- 4. Layout Styles -->
<style>
  /* Paste contents of /css/layout.css */
</style>

<!-- 5. JSON-LD Schema (Home Page Only) -->
<script type="application/ld+json">
  /* Paste contents of /schema/local-business.json */
</script>

<script type="application/ld+json">
  /* Paste contents of /schema/organization.json */
</script>

<script type="application/ld+json">
  /* Paste contents of /schema/breadcrumb.json */
</script>

<!-- 6. Analytics - Choose ONE approach: -->

<!-- Option A: Google Tag Manager (Recommended) -->
/* Paste contents of /html/google-tag-manager.html */

<!-- Option B: Direct Analytics -->
/* Paste /html/google-analytics.html */
/* Paste /html/facebook-pixel.html */

<!-- 7. Optional: Hotjar or Clarity -->
/* Paste /html/hotjar.html OR /html/microsoft-clarity.html */
```

### Footer Code (Before </body>)

```html
<!-- GTM noscript (if using GTM) -->
/* Paste noscript portion from /html/google-tag-manager.html */

<!-- Main JavaScript -->
<script>
  /* Paste contents of /js/main.js */
</script>

<!-- Analytics Tracking -->
<script>
  /* Paste contents of /js/analytics.js */
</script>
```

---

## Page Structure

### Pages to Create

1. **Home** (index) - Main landing page
2. **/thank-you** - Post-form calendar booking
3. **/privacy** (optional) - Privacy policy
4. **/terms** (optional) - Terms of service
5. **/404** - Custom 404 error page

### Home Page Sections (in order)

1. Navigation Header (fixed)
2. Hero Section
3. Trust Bar
4. Services Section
5. Projects/Portfolio Section
6. Process Section
7. Who We Serve Section
8. Service Areas Section
9. Estimate CTA Section
10. FAQ Section
11. Testimonials Section
12. Final CTA Section
13. Footer
14. Back to Top Button (fixed)
15. Cookie Banner (fixed)
16. Estimate Modal (hidden by default)

---

## Component Building

### Navigation Header

**Structure:**
```
nav.nav
  div.nav-inner.container
    a.nav-logo-link (link to #hero or /)
      img.nav-logo (your logo)
    div.nav-menu (desktop, flex)
      a.nav-link (href="#services") Services
      a.nav-link (href="#projects") Projects
      a.nav-link (href="#process") Process
      a.nav-link (href="#faq") FAQ
      a.nav-phone (href="tel:7373874995")
        svg.nav-phone-icon (phone icon)
        span.nav-phone-text (737) 387-4995
    button.theme-toggle (aria-label="Toggle theme")
      svg.theme-toggle-icon (sun/moon icon)
    button.btn.btn--primary.nav-cta-btn (data-modal-trigger, data-location="nav")
      Get Free Estimate
    button.nav-toggle (mobile hamburger)
      span
      span
      span
  nav.nav-menu-mobile (mobile slide-out)
    a.nav-link-mobile (href="#services") Services
    a.nav-link-mobile (href="#projects") Projects
    ... etc
```

**Styling Tips:**
- Set nav to `position: fixed` with `top: 0`, full width
- Add padding-top to body equal to nav height
- Use Webflow interactions for scroll effect (add `.nav--scrolled` class)
- Mobile menu: position fixed, right slide-in animation

### Hero Section

**Structure:**
```
section.hero.section.section--dark
  div.hero-inner.container
    div.hero-content
      h1.hero-heading.heading-lg
        Austin's Trusted General Contractor
      p.hero-subtitle
        Fast estimates. Quality craftsmanship. Proven results.
      div.hero-ctas
        button.btn.btn--primary (data-modal-trigger, data-location="hero")
          Get Your 24-Hour Estimate
        a.btn.btn--secondary (href="tel:7373874995")
          svg (phone icon)
          Call (737) 387-4995
    div.hero-stats (CMS Collection List: Stats, limit 3)
      div.stat-card.hero-stat-card
        div.stat-card__value {{value}}
        div.stat-card__label {{label}}
        div.stat-card__subtext {{subtext}}
```

**Styling:**
- Background: gradient or solid color (--color-primary)
- Min-height: 80vh
- Text color: white
- Center content vertically and horizontally
- Add subtle animation on load (fade in, slide up)

### Trust Bar

Simple icon + text row to build credibility:

```
section.trust-bar.section.section--light
  div.trust-bar-inner.container
    div.trust-item
      svg.trust-item-icon (shield icon)
      span.trust-item-text Licensed & Insured
    div.trust-item
      svg.trust-item-icon (star icon)
      span.trust-item-text 5-Star Rated
    div.trust-item
      svg.trust-item-icon (clock icon)
      span.trust-item-text 24-Hour Estimates
    div.trust-item
      svg.trust-item-icon (location icon)
      span.trust-item-text Serving Austin Metro
```

**Styling:**
- Flex row, wrap on mobile
- Icons: teal color
- Light gray background

### Services Section

**Structure:**
```
section.services.section.section--light
  div.services-inner.container
    div.section-header
      h2.section-header__title Our Services
      p.section-header__subtitle
        Comprehensive construction solutions...
    div.services-grid.grid.grid-cols-3
      div.service-card.card
        svg.service-icon (or img)
        h3.service-title Kitchen & Bath Remodeling
        p.service-description Transform your space...
        ul.service-list.list-styled
          li Premium materials
          li Custom designs
          li Expert installation
        div.service-badges
          span.badge Home Remodel
      ... repeat for each service
```

**Services to Include:**
1. **Kitchen & Bath Remodeling**
2. **House Flipping & Investor Services**
3. **Concrete & Foundation Work**
4. **Commercial Construction**
5. **Full Home Renovations**
6. **Additions & Extensions**

**Styling:**
- 3 columns desktop, 2 tablet, 1 mobile
- Cards with hover lift effect
- Icons in brand teal
- Subtle shadow

### Projects Section

**Structure (CMS-driven):**
```
section.projects.section.section--light
  div.projects-inner.container
    div.section-header
      h2 Featured Projects
      p See our recent work...
    div.projects-grid.grid.grid-cols-2
      // CMS Collection List: Projects, Filter: Featured = true, Limit: 4
      div.project-card.card.card--interactive (data-project-id={{slug}})
        img.project-card__image (src={{main-image}})
        span.project-badge.badge {{project-type}}
        h3.project-title {{title}}
        p.project-location {{location}}
        p.project-description {{short-description}}
        div.project-stats-grid
          div
            strong {{square-footage}} SF
          div
            strong {{duration}}
          div
            strong {{budget}}
```

**Project Modal (for detail view):**
```
div.project-modal-overlay
  div.project-modal.modal
    button.project-modal-close ×
    img.project-modal-image (src will be populated via JS)
    h2.project-modal-title
    div.project-modal-body (rich text)
    div.project-modal-stats
      // Project details
```

**Interaction:**
- Click card → open modal with full project details
- Handled by JavaScript in main.js

### Process Section

**Structure:**
```
section.process.section.section--light
  div.process-inner.container
    div.section-header
      h2 Our Process
      p Simple, transparent, efficient
    div.process-grid.grid.grid-cols-4
      div.process-step
        span.process-step-number.badge 1
        h3.process-step-title Free Consultation
        p.process-step-description We assess your needs...
        span.process-step-timeline Day 1
      // Connector line (optional, CSS)
      div.process-step
        span.process-step-number.badge 2
        h3.process-step-title Detailed Estimate
        p.process-step-description Receive comprehensive quote...
        span.process-step-timeline 24 Hours
      ... steps 3 and 4
```

**Steps:**
1. Free Consultation (Day 1)
2. Detailed Estimate (24 Hours)
3. Project Kickoff (Week 1)
4. Quality Completion (On Schedule)

### Who We Serve Section

**Structure:**
```
section.who-we-serve.section.section--light
  div.who-inner.container
    div.section-header
      h2 Who We Work With
    div.who-grid.grid.grid-cols-3
      div.who-card.card
        svg.who-icon (homeowner icon)
        h3.who-title Homeowners
        p.who-description Renovations, remodels, additions...
      div.who-card.card
        svg.who-icon (investor icon)
        h3.who-title Real Estate Investors
        p.who-description Fast turnarounds, ROI focus...
      div.who-card.card
        svg.who-icon (business icon)
        h3.who-title Business Owners
        p.who-description Commercial buildouts, offices...
```

### Service Areas Section

**Structure:**
```
section.service-areas.section.section--light
  div.service-areas-inner.container
    div.section-header
      h2 Serving the Austin Metro Area
      p.service-areas-text Proudly serving...
    div.service-areas-grid.grid.grid-cols-4
      div.service-area-card
        h4.service-area-name Austin
        span.service-area-county Travis County
      div.service-area-card
        h4.service-area-name Round Rock
        span.service-area-county Williamson County
      ... etc (Cedar Park, Georgetown, Pflugerville, Lakeway)
    div.service-areas-map
      // Static map image or embedded Google Map
      img (src="map-austin-metro.png" alt="Service area map")
```

### Estimate CTA Section

**Structure:**
```
section.estimate.section.section--light
  div.estimate-inner.container
    div.estimate-copy
      h2 Get Your Free Estimate in 24 Hours
      p No pressure. No obligations...
      ul.estimate-highlights.list-styled
        li Detailed project breakdown
        li Transparent pricing
        li Expert recommendations
        li Fast turnaround
    div.estimate-form-container
      button.btn.btn--primary.btn--large (data-modal-trigger, data-location="estimate-section")
        Request Free Estimate
      div.estimate-placeholder
        svg.estimate-icon (form icon)
        p.estimate-placeholder-text
          Or call us directly:
        a.estimate-phone-link.btn.btn--icon (href="tel:7373874995")
          (737) 387-4995
```

### FAQ Section

**Structure (CMS-driven):**
```
section.faq.section.section--light
  div.faq-inner.container
    div.section-header
      h2 Frequently Asked Questions
    div.faq-accordion
      // CMS Collection List: FAQs, Sort: Order ascending
      div.faq-item
        div.faq-question-row
          h3.faq-question {{question}}
          span.faq-toggle-icon +
        div.faq-answer
          // Rich text field: {{answer}}
```

**Interaction:**
- JavaScript handles accordion expand/collapse
- Only one open at a time
- Rotate + icon to × when open
- Smooth height animation

### Testimonials Section

**Structure (CMS-driven):**
```
section.testimonials.section.section--dark
  div.testimonials-inner.container
    div.section-header
      h2 What Our Clients Say
    div.testimonials-grid.grid.grid-cols-3
      // CMS Collection List: Testimonials, Filter: Featured = true, Limit: 6
      div.testimonial-card.card
        div.testimonial-stars
          ★★★★★
        p.testimonial-quote {{quote}}
        p.testimonial-name — {{name}}
```

**Styling:**
- Dark background
- White text
- Gold/yellow stars
- 3 columns desktop, 1 mobile

### Final CTA Section

**Structure:**
```
section.cta-final.section.section--accent
  div.cta-final-inner.container
    h2.cta-final-heading Ready to Start Your Project?
    p.cta-final-text Get your free estimate today...
    div.cta-final-buttons
      button.btn.btn--large (data-modal-trigger, data-location="final-cta")
        Get Free Estimate
      a.btn.btn--secondary.btn--large (href="tel:7373874995")
        Call (737) 387-4995
```

**Styling:**
- Gradient background (teal)
- White text
- Centered content
- Bold CTA

### Footer

**Structure:**
```
footer.footer.section.section--dark
  div.footer-inner.container
    div.footer-grid.grid.grid-cols-4
      div.footer-column
        h4.footer-heading Del Olmo Construction
        p.footer-text Licensed & Insured General Contractor
        p.footer-text Austin, Texas
      div.footer-column
        h4.footer-heading Quick Links
        a.footer-link (href="#services") Services
        a.footer-link (href="#projects") Projects
        a.footer-link (href="#process") Our Process
        a.footer-link (href="#faq") FAQ
      div.footer-column
        h4.footer-heading Services
        a.footer-link Kitchen Remodeling
        a.footer-link House Flipping
        a.footer-link Concrete Work
        a.footer-link Commercial
      div.footer-column
        h4.footer-heading Contact
        p.footer-text (737) 387-4995
        p.footer-text info@delolmoconstruction.com
        div.footer-social
          a.footer-social-link (href="https://facebook.com/..." data-social="facebook")
            svg (Facebook icon)
          a.footer-social-link (href="https://instagram.com/..." data-social="instagram")
            svg (Instagram icon)
    div.footer-bottom
      p © 2024 Del Olmo Construction LLC. All rights reserved.
      div
        a.footer-bottom-link (href="/privacy") Privacy Policy
        a.footer-bottom-link (href="/terms") Terms of Service
```

### Estimate Modal (GHL Form)

**Structure:**
```
div.modal-overlay
  div.modal
    button.modal-close (aria-label="Close") ×
    h2.modal-heading Get Your Free Estimate
    p.modal-description Fill out the form below...
    div.modal-form-wrapper
      // Embed element: paste from /html/gohighlevel-form.html
```

### Back to Top Button

**Structure:**
```
button.back-to-top (aria-label="Back to top")
  ↑ // or SVG arrow icon
```

**Styling:**
- Fixed position, bottom right
- Hidden by default (`.is-visible` added via JS)
- Circular button
- Teal background
- Smooth scroll to top on click

### Cookie Banner

**Structure:**
```
div.cookie-banner
  p.cookie-text
    We use cookies to improve your experience.
    a.cookie-link (href="/privacy") Learn more
  button.btn.cookie-btn-accept Accept Cookies
```

**Styling:**
- Fixed bottom
- Full width
- Hidden by default, shown via JS
- Dark background, white text

---

## Integrations

### GoHighLevel Form

1. Get Form ID from GHL dashboard
2. Add Embed element inside `.modal-form-wrapper`
3. Paste code from `/html/gohighlevel-form.html`
4. Replace `YOUR_FORM_ID`
5. Test form submission

### GoHighLevel Calendar (Thank You Page)

1. Create `/thank-you` page
2. Add heading: "Thank you! Schedule your consultation"
3. Add Embed element
4. Paste code from `/html/gohighlevel-calendar.html`
5. Replace `YOUR_CALENDAR_ID`
6. In GHL form settings, set redirect to: `https://www.delolmoconstruction.com/thank-you`

### Analytics

See `/html/README.md` for detailed setup of:
- Google Analytics 4
- Google Tag Manager
- Facebook Pixel
- Hotjar/Clarity (optional)

---

## SEO Configuration

### Home Page Settings

1. Go to Pages → Home → Settings (gear icon)
2. **SEO Tab:**
   - Title: "Austin General Contractor | Del Olmo Construction | Fast Estimates"
   - Meta Description: "Licensed Austin general contractor specializing in renovations, house flipping, and concrete work. Get your free estimate in 24 hours. Call (737) 387-4995."
   - OG Image: Upload hero image (1200x630px)

### Site-wide SEO

1. Project Settings → SEO
2. **Favicon**: Upload 512x512px logo
3. **Webmaster Tags**: Add Google Search Console verification

### XML Sitemap & Robots.txt

Webflow auto-generates these:
- Sitemap: `https://www.delolmoconstruction.com/sitemap.xml`
- Robots: `https://www.delolmoconstruction.com/robots.txt`

No configuration needed unless you want to exclude pages.

---

## Testing

### Pre-Launch Checklist

**Functionality:**
- [ ] All nav links work and scroll smoothly
- [ ] Mobile menu opens/closes correctly
- [ ] Theme toggle switches light/dark mode
- [ ] Estimate modal opens and closes
- [ ] GHL form loads and submits
- [ ] FAQ accordion expands/collapses
- [ ] Back to top button appears and works
- [ ] Cookie banner appears and dismisses

**Content:**
- [ ] All CMS items have content
- [ ] All images have alt text
- [ ] No placeholder text ("Lorem ipsum")
- [ ] Phone number is correct everywhere
- [ ] Email is correct everywhere
- [ ] All links point to correct destinations

**Responsive:**
- [ ] Test on desktop (1920px, 1440px, 1280px)
- [ ] Test on tablet (768px)
- [ ] Test on mobile (375px, 414px)
- [ ] No horizontal scroll on any breakpoint
- [ ] All text is readable
- [ ] All buttons are tappable (min 44x44px)

**Performance:**
- [ ] Run Lighthouse audit (target 90+ performance)
- [ ] All images optimized (<500KB each)
- [ ] No console errors in browser DevTools
- [ ] Page loads in <3 seconds on 4G

**SEO:**
- [ ] All pages have unique titles
- [ ] All pages have meta descriptions
- [ ] JSON-LD validates (Google Rich Results Test)
- [ ] Favicon displays correctly
- [ ] OG images set for social sharing

**Analytics:**
- [ ] GA4 tracking verified (Real-time report)
- [ ] GTM tags firing (Preview mode)
- [ ] Facebook Pixel detected (Pixel Helper)
- [ ] Form submissions tracked
- [ ] Phone clicks tracked

---

## Launch

### Domain Connection

1. In GoDaddy:
   - Go to DNS Management
   - Add A record: `@` → `75.2.70.75` (Webflow IP)
   - Add CNAME: `www` → `proxy-ssl.webflow.com`
   - Save (propagation takes 24-48 hours)

2. In Webflow:
   - Project Settings → Hosting → Add Custom Domain
   - Enter: `delolmoconstruction.com`
   - Webflow will verify DNS
   - Enable SSL (auto via Let's Encrypt)

### Pre-Launch Review

1. **Staging Preview:**
   - Share webflow.io preview link with stakeholders
   - Collect feedback
   - Make final adjustments

2. **Final QA:**
   - Run through entire testing checklist again
   - Test on real devices (not just DevTools)
   - Have 2-3 people test independently

3. **Backup:**
   - Export code (just in case)
   - Screenshot all CMS collections
   - Document custom code additions

### Go Live

1. Click **Publish** in Webflow
2. Verify site is live at delolmoconstruction.com
3. Test all functionality on live domain
4. Submit sitemap to Google Search Console
5. Announce launch (email, social media)

### Post-Launch

**Week 1:**
- Monitor analytics daily
- Check for errors in GA4
- Respond to form submissions promptly
- Fix any issues immediately

**Week 2-4:**
- Monitor site performance
- Collect initial client feedback
- Start SEO optimization (blog posts, backlinks)
- Add more CMS content (projects, testimonials)

**Ongoing:**
- Monthly analytics review
- Quarterly CMS content updates
- Regular performance checks
- Continuous SEO improvement

---

## Troubleshooting

### Common Issues

**Modal not opening:**
- Check `data-modal-trigger` attribute exists
- Verify JavaScript is loaded (check console)
- Ensure `.modal-overlay` element exists

**Form not loading:**
- Verify GHL Form ID is correct
- Check browser console for errors
- Test in incognito mode (disable ad blockers)
- Verify GHL form is published

**Analytics not tracking:**
- Check if ad blocker is enabled
- Verify IDs are correct (GA4, GTM, FB Pixel)
- Use GTM Preview mode to debug
- Check Network tab for analytics requests

**Images not displaying:**
- Verify image URLs are correct
- Check file size (<4MB limit)
- Re-upload if necessary
- Clear browser cache

**Mobile menu stuck:**
- Check if `.is-open` class is toggled
- Verify JavaScript is running
- Test click events in console

### Support Resources

- **Webflow University**: https://university.webflow.com
- **Webflow Forum**: https://forum.webflow.com
- **GoHighLevel Support**: https://help.gohighlevel.com
- **This Repository**: Check README files in each directory

---

## Next Steps After Launch

1. **Content Marketing:**
   - Set up blog (use Blog CMS collection)
   - Publish 2-4 posts per month
   - Share on social media

2. **Local SEO:**
   - Create Google Business Profile
   - Get listed in local directories
   - Collect and respond to reviews

3. **Paid Advertising:**
   - Google Ads (local service ads)
   - Facebook/Instagram ads
   - Retargeting campaigns

4. **Conversion Optimization:**
   - A/B test CTAs
   - Analyze user behavior (Hotjar/Clarity)
   - Optimize form fields
   - Improve page speed

5. **Ongoing Maintenance:**
   - Update projects monthly
   - Collect testimonials after each job
   - Keep stats current
   - Monitor and fix broken links
   - Update content for seasonal relevance

---

**Estimated Build Time:**
- CMS Setup: 2-3 hours
- Page Building: 8-12 hours
- Custom Code: 1-2 hours
- Content Entry: 3-4 hours
- Testing: 2-3 hours
- **Total: 16-24 hours**

Good luck with the build! 🚀
