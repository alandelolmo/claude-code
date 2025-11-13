# Custom JavaScript Files

Custom JavaScript for the Del Olmo Construction Webflow site.

## Files

### `main.js`
Core site functionality including:
- **Theme Toggle**: Light/dark mode switcher with localStorage persistence
- **Mobile Navigation**: Hamburger menu, slide-out panel, close on link click
- **Navigation Scroll**: Shrink header on scroll
- **Smooth Scroll**: Anchor links with offset for fixed header
- **Modal Controls**: Open/close modals, overlay click, ESC key
- **Back to Top**: Show/hide button based on scroll position
- **FAQ Accordion**: Expand/collapse FAQ items
- **Cookie Banner**: Show/hide with localStorage persistence
- **Project Modals**: Open project detail modals
- **Form Validation**: Basic client-side validation helper
- **Lazy Loading**: Intersection Observer for images

**Implementation**: Add to Webflow Project Settings → Custom Code → Footer Code (before </body>)

### `analytics.js`
Comprehensive event tracking including:
- **Phone Call Tracking**: Track tel: link clicks
- **Form Tracking**: Modal opens, form views
- **CTA Tracking**: Button clicks with location context
- **Service Interest**: Service card clicks
- **Project Views**: Project card clicks
- **FAQ Interactions**: Question expand/collapse
- **Scroll Depth**: 25%, 50%, 75%, 100% milestones
- **Outbound Links**: External link clicks
- **Social Media**: Social link clicks
- **Page Timing**: Load performance
- **Video Tracking**: Play, progress, complete events
- **Error Tracking**: JavaScript errors

**Implementation**: Add to Webflow Project Settings → Custom Code → Footer Code (after main.js)

**Note**: Requires Google Analytics 4 (gtag.js) and Facebook Pixel to be configured

## Usage in Webflow

### Step 1: Add Scripts to Footer

In Webflow Project Settings → Custom Code → Footer Code (before </body> tag):

```html
<!-- Main functionality -->
<script>
  // Paste contents of main.js here
</script>

<!-- Analytics tracking -->
<script>
  // Paste contents of analytics.js here
</script>
```

### Step 2: Add Data Attributes

To enable tracking, add data attributes to your elements:

**Modal Triggers:**
```html
<button class="btn btn--primary" data-modal-trigger data-location="hero">
  Get Free Estimate
</button>
```

**CTA Buttons:**
```html
<button class="btn" data-location="services-section">
  Learn More
</button>
```

**Social Links:**
```html
<a href="https://facebook.com/..." class="footer-social-link" data-social="facebook">
  ...
</a>
```

### Step 3: Set Up Required HTML Structure

The JavaScript expects certain HTML structures to exist:

**Theme Toggle:**
```html
<button class="theme-toggle" aria-label="Toggle dark mode">
  <svg class="theme-toggle-icon">...</svg>
</button>
```

**Mobile Nav:**
```html
<button class="nav-toggle" aria-label="Toggle menu">
  <span></span>
  <span></span>
  <span></span>
</button>
<nav class="nav-menu-mobile">
  <a href="#services" class="nav-link-mobile">Services</a>
  ...
</nav>
```

**Modal:**
```html
<div class="modal-overlay">
  <div class="modal">
    <button class="modal-close" aria-label="Close">×</button>
    <h2 class="modal-heading">Get Your Free Estimate</h2>
    <div class="modal-form-wrapper">
      <!-- GHL iframe goes here -->
    </div>
  </div>
</div>
```

**FAQ Accordion:**
```html
<div class="faq-item">
  <div class="faq-question-row">
    <h3 class="faq-question">Question text?</h3>
    <span class="faq-toggle-icon">+</span>
  </div>
  <div class="faq-answer">
    <p>Answer text...</p>
  </div>
</div>
```

**Back to Top:**
```html
<button class="back-to-top" aria-label="Back to top">
  ↑
</button>
```

**Cookie Banner:**
```html
<div class="cookie-banner">
  <p class="cookie-text">
    We use cookies to improve your experience.
    <a href="/privacy" class="cookie-link">Learn more</a>
  </p>
  <button class="btn cookie-btn-accept">Accept</button>
</div>
```

## Features Explained

### Theme Toggle
- Saves preference to localStorage
- Applies `.theme--dark` class to body
- All CSS variables automatically adjust

### Mobile Navigation
- Slide-in from right
- Closes on link click
- Closes on outside click
- Prevents body scroll when open

### Modal System
- Multiple ways to close: X button, overlay, ESC key
- Prevents body scroll when open
- Supports multiple modals per page

### FAQ Accordion
- Single-open (only one FAQ open at a time)
- Smooth height animation
- Rotate icon on open

### Analytics Events
All events are sent to both GA4 and Facebook Pixel (if available):

**GA4 Events:**
- `phone_call_click`
- `form_start`, `form_view`
- `cta_click`
- `service_interest`
- `project_view`
- `faq_interaction`
- `scroll_depth`
- `outbound_link_click`
- `social_click`
- `video_play`, `video_progress`, `video_complete`
- `javascript_error`

**Facebook Pixel Events:**
- `Contact` (phone calls)
- `Lead` (form starts)

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- iOS Safari (latest 2 versions)
- Android Chrome (latest 2 versions)

## Dependencies

- **None** for main.js (vanilla JavaScript)
- **GA4 (gtag.js)** for analytics.js tracking
- **Facebook Pixel** for FB event tracking (optional)

## Debugging

All scripts include console.log statements for debugging:
- Open browser DevTools → Console
- Look for "Del Olmo Construction - Ready!" message
- Check for any error messages

To disable console logs in production, remove or comment out the console.log lines.

## Performance Notes

- Scripts use event delegation where possible
- Intersection Observer for efficient lazy loading
- Debounced scroll events for performance
- LocalStorage for client-side state
- No external dependencies (small bundle size)

## Customization

### Change Scroll Threshold
Edit the scroll values in main.js:
```javascript
if (currentScroll > 100) { // Change 100 to your preferred value
  addClass(nav, 'nav--scrolled');
}
```

### Change FAQ Behavior
To allow multiple FAQs open at once, remove this code block:
```javascript
// Close all other items (optional - remove for multi-open)
faqItems.forEach(function(otherItem) {
  if (otherItem !== item) {
    removeClass(otherItem, 'is-active');
  }
});
```

### Adjust Animation Speeds
Animation timing is controlled by CSS variables:
```css
--transition-fast: 150ms ease-in-out;
--transition-base: 250ms ease-in-out;
--transition-slow: 350ms ease-in-out;
```
