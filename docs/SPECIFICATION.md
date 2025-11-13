# Del Olmo Construction – Webflow Implementation Specification

## 1. Overview

**Site**: https://www.delolmoconstruction.com
**Platform**: Webflow (hosted on Webflow, domain managed via GoDaddy)
**Business**: Del Olmo Construction LLC – Austin, TX–based service-area General Contractor

### Goals

- Capture construction leads (homeowners + investors) via a GoHighLevel lead form
- Promote 24-hour estimates, flips/renovations, and concrete services
- Rank for Austin general contractor keywords via SEO + structured data
- Deliver a fast, mobile-first, WCAG-compliant experience with light/dark mode

### Key Features

- Single-page marketing site with sections: Hero, Trust, Services, Projects, Process, Who We Serve, Service Areas, Estimate CTA, FAQ, Testimonials, Final CTA, Footer
- Separate /thank-you page for post-form calendar booking
- Future /blog + CMS blog posts with related posts
- Webflow CMS collections for Projects, FAQs, Testimonials, Stats, and Blog
- GoHighLevel (GHL) integrations for lead form and booking calendar
- GA4, GTM, Facebook Pixel, and optional Hotjar/Clarity tracking
- Cookie banner for all visitors

## 2. Technical Architecture

### Frontend
- Webflow visual builder, HTML5, CSS3, Webflow interactions (no external JS frameworks)
- Hosting: Webflow hosting with automatic SSL (Let's Encrypt)
- Domain: delolmoconstruction.com purchased via GoDaddy, pointed to Webflow

### External Services
- GoHighLevel for lead forms and booking calendar
- Google Workspace for info@delolmoconstruction.com email
- Google Analytics 4 + Google Tag Manager
- Facebook Pixel

### SEO / Schema
- GeneralContractor + LocalBusiness JSON-LD
- Organization JSON-LD (logo, sameAs social links)
- FAQPage JSON-LD from FAQs CMS
- BreadcrumbList JSON-LD
- Geo coordinates and service area around Austin
- No AggregateRating until real reviews exist

## 3. Webflow Structure & Class Naming Plan

### Global Layout and Utilities

- Body: built-in Webflow body
- Page wrapper: `.page-wrapper`
- Section: `.section`
- Section variants: `.section--light`, `.section--dark`, `.section--accent`
- Container: `.container` (max-width ~1200px with horizontal padding)
- Heading classes: `.heading-lg`, `.heading-md`, `.heading-sm`
- Text classes: `.text-body`, `.text-muted`, `.text-caption`
- Button base: `.btn`
  - `.btn--primary` (filled teal)
  - `.btn--secondary` (white outline)
  - `.btn--icon` (for phone icon + text)
- Spacing utilities: `.margin-top-*`, `.margin-bottom-*`, `.padding-y-*`, etc.

### Header / Navigation

- Wrapper: `.nav`
- Inner flex container: `.nav-inner`
- Logo link: `.nav-logo-link`
  - Image: `.nav-logo`
- Nav menu (desktop): `.nav-menu`
  - Link: `.nav-link`
- CTA button in nav: `.nav-cta-btn` (`.btn .btn--primary`)
- Phone wrapper: `.nav-phone`
  - Icon: `.nav-phone-icon`
  - Text: `.nav-phone-text`
- Light/dark mode toggle: `.theme-toggle`, `.theme-toggle-icon`
- Mobile nav:
  - Hamburger: `.nav-toggle`
  - Mobile menu: `.nav-menu-mobile` (right-side slide-out)
  - Mobile link: `.nav-link-mobile`
- Shrink-on-scroll state: `.nav--scrolled`

### Hero Section

- Section: `.hero.section--dark`
- Inner: `.hero-inner`
- Content: `.hero-content`
- H1: `.hero-heading` (`.heading-lg`)
- Subtitle: `.hero-subtitle`
- Buttons wrapper: `.hero-ctas`
  - Primary: `.btn .btn--primary`
  - Secondary: `.btn .btn--secondary`
- Stats row: `.hero-stats`
  - Individual stat (CMS): `.hero-stat-card`
    - Value: `.hero-stat-value`
    - Label: `.hero-stat-label`

### Trust Bar

- Section: `.trust-bar.section--light`
- Inner: `.trust-bar-inner`
- Item wrapper: `.trust-item`
  - Icon: `.trust-item-icon`
  - Label: `.trust-item-text`

### Services

- Section: `.services.section--light`
- Inner: `.services-inner`
- Header: `.section-header`
- Cards grid: `.services-grid`
- Card: `.service-card`
  - Icon: `.service-icon`
  - Title: `.service-title`
  - Description: `.service-description`
  - Bullets list: `.service-list`
  - Badge container: `.service-badges`
  - Badge: `.badge`

### Projects (Portfolio)

- Section: `.projects.section--light`
- Inner: `.projects-inner`
- Grid: `.projects-grid` (2 columns desktop)
- Card (CMS): `.project-card`
  - Icon: `.project-icon`
  - Title: `.project-title`
  - Location: `.project-location`
  - Description: `.project-description`
  - Stats grid: `.project-stats-grid`
  - Badge: `.project-badge`
- Modal overlay: `.project-modal-overlay`
- Modal content: `.project-modal`
  - Close button: `.project-modal-close`
  - Image: `.project-modal-image`
  - Title: `.project-modal-title`
  - Body text: `.project-modal-body`
  - Stats list: `.project-modal-stats`

### Process

- Section: `.process.section--light`
- Inner: `.process-inner`
- Grid: `.process-grid`
- Step card: `.process-step`
  - Badge: `.process-step-number`
  - Title: `.process-step-title`
  - Description: `.process-step-description`
  - Timeline: `.process-step-timeline`
- Connector: `.process-connector`

### Who We Serve

- Section: `.who-we-serve.section--light`
- Inner: `.who-inner`
- Grid: `.who-grid`
- Card: `.who-card`
  - Icon: `.who-icon`
  - Title: `.who-title`
  - Description: `.who-description`

### Service Areas

- Section: `.service-areas.section--light`
- Inner: `.service-areas-inner`
- Text: `.service-areas-text`
- Grid: `.service-areas-grid`
- Card: `.service-area-card`
  - City: `.service-area-name`
  - County: `.service-area-county`
- Map: `.service-areas-map`

### Estimate / Lead Section

- Section: `.estimate.section--light`
- Inner: `.estimate-inner`
- Copy: `.estimate-copy`
- Highlights: `.estimate-highlights`
- Placeholder: `.estimate-placeholder`
  - Icon: `.estimate-icon`
  - Text: `.estimate-placeholder-text`
  - Phone: `.estimate-phone-link`

### Estimate Modal (GHL Form)

- Overlay: `.modal-overlay`
- Modal: `.modal`
  - Heading: `.modal-heading`
  - Description: `.modal-description`
  - Form wrapper: `.modal-form-wrapper`
  - Close: `.modal-close`

### FAQ Section

- Section: `.faq.section--light`
- Inner: `.faq-inner`
- Accordion: `.faq-accordion`
- Item (CMS): `.faq-item`
  - Question row: `.faq-question-row`
  - Question: `.faq-question`
  - Toggle icon: `.faq-toggle-icon`
  - Answer: `.faq-answer`

### Testimonials Section

- Section: `.testimonials.section--dark`
- Inner: `.testimonials-inner`
- Grid: `.testimonials-grid`
- Card (CMS): `.testimonial-card`
  - Stars: `.testimonial-stars`
  - Quote: `.testimonial-quote`
  - Name: `.testimonial-name`

### Final CTA

- Section: `.cta-final.section--accent`
- Inner: `.cta-final-inner`
- Heading: `.cta-final-heading`
- Text: `.cta-final-text`
- Buttons: `.cta-final-buttons`

### Footer

- Section: `.footer.section--dark`
- Inner: `.footer-inner`
- Grid: `.footer-grid` (4 columns desktop)
- Column: `.footer-column`
  - Heading: `.footer-heading`
  - Link: `.footer-link`
  - Text: `.footer-text`
- Social: `.footer-social`, `.footer-social-link`
- Legal: `.footer-bottom`
  - Link: `.footer-bottom-link`

### Additional Elements

- Back to top: `.back-to-top`
- Cookie banner: `.cookie-banner`
  - Text: `.cookie-text`
  - Button: `.cookie-btn-accept`
  - Link: `.cookie-link`
- Theme classes: `.theme--light`, `.theme--dark`

## 4. CMS Structures

### Projects CMS
- Title (plain text)
- Slug (auto)
- Project Type/Badge (plain text)
- Location (plain text, city + ZIP)
- Square Footage (number)
- Duration (plain text)
- Budget/Cost (plain text)
- ROI % (number)
- Short Description (plain text)
- Full Description (rich text)
- Year Completed (number)
- Client Type (plain text)
- Main Image (image)
- Gallery (multi-image, optional)

### Testimonials CMS
- Name (plain text)
- Quote (rich text)
- Slug (auto)
- Tag/Context (plain text, optional)
- Order (number)

### FAQs CMS
- Question (plain text)
- Answer (rich text)
- Slug (auto)
- Order (number)

### Stats CMS
- Label (plain text)
- Value (plain text)
- Subtext (plain text)
- Order (1–3)

### Blog CMS (future)
- Title
- Slug
- Summary
- Body
- Main Image
- Category
- Author (Alan)
- Publish Date

## 5. SEO, Schema & Data Handling

- Manual, keyword-rich alt text and filenames for images
- Canonical URLs defined for each page
- Open Graph meta for Home and Blog posts
- JSON-LD snippets for GeneralContractor/LocalBusiness, Organization, FAQPage, BreadcrumbList, and Geo/service area
- No AggregateRating until real reviews exist

### Data Handling
- Lead form submissions handled entirely by embedded GoHighLevel form
- GHL stores lead, sends notification to info@delolmoconstruction.com
- Calendar bookings on /thank-you handled by GHL booking widget

### UTM and Call Tracking
- All external marketing links include UTM parameters
- Dynamic number insertion via GHL script

## 6. Error Handling Strategies

### Form and Modal
- Fallback message if GHL form fails to load
- ESC key and overlay click close modal
- Prevent page scroll when modal is open

### Calendar
- Fallback message with phone/email if booking widget fails

### Analytics & Scripts
- Conditional GTM tags based on cookie consent
- Site remains usable if scripts fail

### Responsive/Layout
- CSS prevents overflow on small screens
- Minimum width checks

## 7. Testing Plan

### Functional Testing
- All nav links and smooth scroll anchors
- Header shrink-on-scroll behavior
- Modal opening/closing
- Form submission and validation
- Calendar booking
- Back-to-top button

### Responsive Testing
- Breakpoints: 320px, 375px, 414px, 640px, 768px, 1024px, 1280px+
- iOS Safari, Android Chrome, desktop browsers

### SEO and Schema Testing
- Google Rich Results Test
- JSON-LD validation
- Sitemap and robots.txt

### Performance
- Lighthouse testing
- LCP, FID, CLS metrics
- Target load time <3s on 4G

### Accessibility
- Keyboard navigation
- Skip link
- Contrast ratios
- Screen reader testing

### Launch Checklist
- DNS updated at GoDaddy
- Webflow SSL enabled
- GA4 and GTM verified
- Cookie banner functional
- Final production smoke test
