# Webflow Copy-Paste Implementation Guide

This guide provides all code in ready-to-copy sections organized by WHERE it goes in Webflow.

---

## 📍 Project Settings → Custom Code → Head Code

Copy and paste ALL of the following into the **Head Code** section (before `</head>`):

### SECTION 1: CSS Variables & Styles

```html
<style>
/**
 * CSS VARIABLES - Colors, Typography, Spacing
 */
:root {
  /* Brand Colors */
  --color-primary: #14B8A6;
  --color-primary-dark: #0F766E;
  --color-primary-light: #5EEAD4;
  --color-accent: #F59E0B;
  --color-accent-dark: #D97706;

  /* Neutral Colors - Light Theme */
  --color-bg-primary: #FFFFFF;
  --color-bg-secondary: #F9FAFB;
  --color-bg-tertiary: #F3F4F6;
  --color-text-primary: #111827;
  --color-text-secondary: #6B7280;
  --color-text-muted: #9CA3AF;
  --color-border: #E5E7EB;
  --color-border-light: #F3F4F6;

  /* Semantic Colors */
  --color-success: #10B981;
  --color-error: #EF4444;
  --color-warning: #F59E0B;
  --color-info: #3B82F6;

  /* Overlay */
  --color-overlay: rgba(0, 0, 0, 0.5);
  --color-overlay-light: rgba(0, 0, 0, 0.3);

  /* Typography */
  --font-primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  --font-headings: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;

  /* Font Sizes */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 1.875rem;
  --text-4xl: 2.25rem;
  --text-5xl: 3rem;
  --text-6xl: 3.75rem;

  /* Line Heights */
  --leading-tight: 1.25;
  --leading-snug: 1.375;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;
  --leading-loose: 2;

  /* Font Weights */
  --weight-normal: 400;
  --weight-medium: 500;
  --weight-semibold: 600;
  --weight-bold: 700;

  /* Spacing */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.25rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-20: 5rem;
  --space-24: 6rem;
  --space-32: 8rem;

  /* Layout */
  --container-max-width: 1280px;
  --container-padding: var(--space-6);
  --section-padding-y: var(--space-20);
  --section-padding-y-mobile: var(--space-12);

  /* Borders & Radius */
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
  --radius-2xl: 1.5rem;
  --radius-full: 9999px;
  --border-width: 1px;
  --border-width-thick: 2px;

  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

  /* Transitions */
  --transition-fast: 150ms ease-in-out;
  --transition-base: 250ms ease-in-out;
  --transition-slow: 350ms ease-in-out;

  /* Z-Index */
  --z-dropdown: 1000;
  --z-sticky: 1020;
  --z-fixed: 1030;
  --z-modal-backdrop: 1040;
  --z-modal: 1050;
  --z-popover: 1060;
  --z-tooltip: 1070;
}

/* Dark Theme */
.theme--dark {
  --color-bg-primary: #111827;
  --color-bg-secondary: #1F2937;
  --color-bg-tertiary: #374151;
  --color-text-primary: #F9FAFB;
  --color-text-secondary: #D1D5DB;
  --color-text-muted: #9CA3AF;
  --color-border: #374151;
  --color-border-light: #4B5563;
  --color-overlay: rgba(0, 0, 0, 0.7);
}
</style>

<style>
/**
 * UTILITY CLASSES
 */

/* Container */
.container {
  width: 100%;
  max-width: var(--container-max-width);
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--container-padding);
  padding-right: var(--container-padding);
}

/* Sections */
.section {
  padding-top: var(--section-padding-y);
  padding-bottom: var(--section-padding-y);
  position: relative;
}

@media (max-width: 768px) {
  .section {
    padding-top: var(--section-padding-y-mobile);
    padding-bottom: var(--section-padding-y-mobile);
  }
}

.section--light {
  background-color: var(--color-bg-primary);
  color: var(--color-text-primary);
}

.section--dark {
  background-color: var(--color-bg-secondary);
  color: var(--color-text-primary);
}

.section--accent {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  color: white;
}

/* Typography */
.heading-lg {
  font-size: var(--text-5xl);
  font-weight: var(--weight-bold);
  line-height: var(--leading-tight);
  font-family: var(--font-headings);
  margin: 0;
}

@media (max-width: 768px) {
  .heading-lg { font-size: var(--text-4xl); }
}

@media (max-width: 640px) {
  .heading-lg { font-size: var(--text-3xl); }
}

.heading-md {
  font-size: var(--text-3xl);
  font-weight: var(--weight-bold);
  line-height: var(--leading-tight);
  font-family: var(--font-headings);
  margin: 0;
}

@media (max-width: 768px) {
  .heading-md { font-size: var(--text-2xl); }
}

.heading-sm {
  font-size: var(--text-2xl);
  font-weight: var(--weight-semibold);
  line-height: var(--leading-snug);
  font-family: var(--font-headings);
  margin: 0;
}

@media (max-width: 768px) {
  .heading-sm { font-size: var(--text-xl); }
}

.text-body {
  font-size: var(--text-base);
  line-height: var(--leading-relaxed);
  color: var(--color-text-primary);
}

.text-muted {
  color: var(--color-text-secondary);
}

.text-caption {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
}

.text-center { text-align: center; }
.text-left { text-align: left; }
.text-right { text-align: right; }

/* Spacing */
.m-0 { margin: 0; }
.mt-2 { margin-top: var(--space-2); }
.mt-4 { margin-top: var(--space-4); }
.mt-6 { margin-top: var(--space-6); }
.mt-8 { margin-top: var(--space-8); }
.mt-12 { margin-top: var(--space-12); }

.mb-2 { margin-bottom: var(--space-2); }
.mb-4 { margin-bottom: var(--space-4); }
.mb-6 { margin-bottom: var(--space-6); }
.mb-8 { margin-bottom: var(--space-8); }
.mb-12 { margin-bottom: var(--space-12); }

.my-4 { margin-top: var(--space-4); margin-bottom: var(--space-4); }
.my-6 { margin-top: var(--space-6); margin-bottom: var(--space-6); }
.my-8 { margin-top: var(--space-8); margin-bottom: var(--space-8); }

.p-0 { padding: 0; }
.p-4 { padding: var(--space-4); }
.p-6 { padding: var(--space-6); }
.p-8 { padding: var(--space-8); }

.py-2 { padding-top: var(--space-2); padding-bottom: var(--space-2); }
.py-4 { padding-top: var(--space-4); padding-bottom: var(--space-4); }
.py-6 { padding-top: var(--space-6); padding-bottom: var(--space-6); }
.py-8 { padding-top: var(--space-8); padding-bottom: var(--space-8); }

.px-4 { padding-left: var(--space-4); padding-right: var(--space-4); }
.px-6 { padding-left: var(--space-6); padding-right: var(--space-6); }
.px-8 { padding-left: var(--space-8); padding-right: var(--space-8); }

/* Flex */
.flex { display: flex; }
.flex-col { flex-direction: column; }
.flex-row { flex-direction: row; }
.items-center { align-items: center; }
.items-start { align-items: flex-start; }
.items-end { align-items: flex-end; }
.justify-center { justify-content: center; }
.justify-between { justify-content: space-between; }
.justify-start { justify-content: flex-start; }
.justify-end { justify-content: flex-end; }
.gap-2 { gap: var(--space-2); }
.gap-4 { gap: var(--space-4); }
.gap-6 { gap: var(--space-6); }
.gap-8 { gap: var(--space-8); }
.flex-wrap { flex-wrap: wrap; }

/* Grid */
.grid { display: grid; }
.grid-cols-1 { grid-template-columns: repeat(1, 1fr); }
.grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
.grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
.grid-cols-4 { grid-template-columns: repeat(4, 1fr); }

@media (max-width: 1024px) {
  .grid-cols-4 { grid-template-columns: repeat(2, 1fr); }
  .grid-cols-3 { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 640px) {
  .grid-cols-4,
  .grid-cols-3,
  .grid-cols-2 { grid-template-columns: 1fr; }
}

/* Display */
.hidden { display: none; }
.block { display: block; }
.inline-block { display: inline-block; }

/* Position */
.relative { position: relative; }
.absolute { position: absolute; }
.fixed { position: fixed; }
.sticky { position: sticky; }

/* Overflow */
.overflow-hidden { overflow: hidden; }
.overflow-auto { overflow: auto; }

/* Misc */
.w-full { width: 100%; }
.h-full { height: 100%; }
.rounded-sm { border-radius: var(--radius-sm); }
.rounded-md { border-radius: var(--radius-md); }
.rounded-lg { border-radius: var(--radius-lg); }
.rounded-xl { border-radius: var(--radius-xl); }
.rounded-full { border-radius: var(--radius-full); }
.shadow-sm { box-shadow: var(--shadow-sm); }
.shadow-md { box-shadow: var(--shadow-md); }
.shadow-lg { box-shadow: var(--shadow-lg); }
.shadow-xl { box-shadow: var(--shadow-xl); }
.transition-all { transition: all var(--transition-base); }
.cursor-pointer { cursor: pointer; }
.pointer-events-none { pointer-events: none; }
</style>

<style>
/**
 * COMPONENT STYLES
 */

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-6);
  font-size: var(--text-base);
  font-weight: var(--weight-semibold);
  line-height: 1;
  border-radius: var(--radius-lg);
  border: var(--border-width-thick) solid transparent;
  cursor: pointer;
  transition: all var(--transition-base);
  text-decoration: none;
  white-space: nowrap;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.btn:active {
  transform: translateY(0);
}

.btn--primary {
  background-color: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
}

.btn--primary:hover {
  background-color: var(--color-primary-dark);
  border-color: var(--color-primary-dark);
}

.btn--secondary {
  background-color: transparent;
  color: var(--color-text-primary);
  border-color: var(--color-border);
}

.theme--dark .btn--secondary {
  color: white;
  border-color: white;
}

.btn--secondary:hover {
  background-color: var(--color-bg-tertiary);
}

.btn--icon {
  gap: var(--space-3);
}

.btn--large {
  padding: var(--space-4) var(--space-8);
  font-size: var(--text-lg);
}

.btn--small {
  padding: var(--space-2) var(--space-4);
  font-size: var(--text-sm);
}

/* Badges */
.badge {
  display: inline-flex;
  align-items: center;
  padding: var(--space-1) var(--space-3);
  font-size: var(--text-xs);
  font-weight: var(--weight-medium);
  border-radius: var(--radius-full);
  background-color: var(--color-bg-tertiary);
  color: var(--color-text-primary);
  text-transform: uppercase;
  letter-spacing: 0.025em;
}

.badge--primary {
  background-color: var(--color-primary-light);
  color: var(--color-primary-dark);
}

.badge--accent {
  background-color: var(--color-accent);
  color: white;
}

/* Cards */
.card {
  background-color: var(--color-bg-primary);
  border: var(--border-width) solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--space-6);
  transition: all var(--transition-base);
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
}

.card--interactive {
  cursor: pointer;
}

.card--dark {
  background-color: var(--color-bg-secondary);
}

/* Section Header */
.section-header {
  text-align: center;
  margin-bottom: var(--space-12);
}

.section-header__title {
  font-size: var(--text-4xl);
  font-weight: var(--weight-bold);
  margin-bottom: var(--space-4);
}

@media (max-width: 768px) {
  .section-header__title {
    font-size: var(--text-3xl);
  }
}

.section-header__subtitle {
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  max-width: 700px;
  margin: 0 auto;
}

/* Stats */
.stat-card {
  text-align: center;
}

.stat-card__value {
  font-size: var(--text-4xl);
  font-weight: var(--weight-bold);
  color: var(--color-primary);
  line-height: 1;
  margin-bottom: var(--space-2);
}

.stat-card__label {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Icon Wrapper */
.icon-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: var(--radius-lg);
  background-color: var(--color-primary-light);
  color: var(--color-primary-dark);
  margin-bottom: var(--space-4);
}

.icon-wrapper--large {
  width: 64px;
  height: 64px;
}

.icon-wrapper--accent {
  background-color: var(--color-accent);
  color: white;
}

/* Divider */
.divider {
  height: 1px;
  background-color: var(--color-border);
  margin: var(--space-8) 0;
}

.divider--vertical {
  width: 1px;
  height: auto;
  margin: 0 var(--space-8);
}

/* Links */
.link {
  color: var(--color-primary);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.link:hover {
  color: var(--color-primary-dark);
  text-decoration: underline;
}

.link--muted {
  color: var(--color-text-secondary);
}

.link--muted:hover {
  color: var(--color-text-primary);
}

/* Lists */
.list-styled {
  list-style: none;
  padding: 0;
  margin: 0;
}

.list-styled li {
  position: relative;
  padding-left: var(--space-6);
  margin-bottom: var(--space-3);
}

.list-styled li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--color-primary);
  font-weight: var(--weight-bold);
}
</style>

<style>
/**
 * LAYOUT STYLES
 */

/* Page Wrapper */
.page-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--color-bg-primary);
  color: var(--color-text-primary);
  transition: background-color var(--transition-base), color var(--transition-base);
}

/* Navigation */
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-sticky);
  background-color: var(--color-bg-primary);
  border-bottom: var(--border-width) solid var(--color-border);
  transition: all var(--transition-base);
}

.nav--scrolled {
  padding-top: var(--space-2);
  padding-bottom: var(--space-2);
  box-shadow: var(--shadow-md);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: var(--space-4) var(--container-padding);
  transition: padding var(--transition-base);
}

.nav--scrolled .nav-inner {
  padding-top: var(--space-3);
  padding-bottom: var(--space-3);
}

.nav-logo-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity var(--transition-fast);
}

.nav-logo-link:hover {
  opacity: 0.8;
}

.nav-logo {
  height: 40px;
  width: auto;
  transition: height var(--transition-base);
}

.nav--scrolled .nav-logo {
  height: 32px;
}

/* Desktop Nav Menu */
.nav-menu {
  display: flex;
  align-items: center;
  gap: var(--space-8);
  list-style: none;
  margin: 0;
  padding: 0;
}

@media (max-width: 1024px) {
  .nav-menu {
    display: none;
  }
}

.nav-link {
  color: var(--color-text-primary);
  text-decoration: none;
  font-weight: var(--weight-medium);
  font-size: var(--text-base);
  transition: color var(--transition-fast);
  position: relative;
}

.nav-link:hover {
  color: var(--color-primary);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--color-primary);
  transition: width var(--transition-base);
}

.nav-link:hover::after {
  width: 100%;
}

.nav-phone {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--color-text-primary);
  text-decoration: none;
  font-weight: var(--weight-semibold);
  transition: color var(--transition-fast);
}

.nav-phone:hover {
  color: var(--color-primary);
}

@media (max-width: 640px) {
  .nav-phone-text {
    display: none;
  }
}

/* Mobile Nav */
.nav-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--space-2);
}

@media (max-width: 1024px) {
  .nav-toggle {
    display: flex;
  }
}

.nav-toggle span {
  width: 24px;
  height: 2px;
  background-color: var(--color-text-primary);
  transition: all var(--transition-base);
}

.nav-menu-mobile {
  position: fixed;
  top: 0;
  right: -100%;
  width: 80%;
  max-width: 400px;
  height: 100vh;
  background-color: var(--color-bg-primary);
  box-shadow: var(--shadow-2xl);
  padding: var(--space-8) var(--space-6);
  transition: right var(--transition-slow);
  z-index: var(--z-modal);
  overflow-y: auto;
}

.nav-menu-mobile.is-open {
  right: 0;
}

.nav-link-mobile {
  display: block;
  padding: var(--space-4) 0;
  color: var(--color-text-primary);
  text-decoration: none;
  font-size: var(--text-lg);
  font-weight: var(--weight-medium);
  border-bottom: var(--border-width) solid var(--color-border);
  transition: color var(--transition-fast);
}

.nav-link-mobile:hover {
  color: var(--color-primary);
}

/* Theme Toggle */
.theme-toggle {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-full);
  background-color: var(--color-bg-tertiary);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-fast);
}

.theme-toggle:hover {
  background-color: var(--color-primary);
  color: white;
}

/* Footer */
.footer {
  margin-top: auto;
  background-color: var(--color-bg-secondary);
  color: var(--color-text-primary);
  padding: var(--space-16) 0 var(--space-6);
}

.footer-inner {
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--container-padding);
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-8);
  margin-bottom: var(--space-12);
}

@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }
}

.footer-heading {
  font-size: var(--text-lg);
  font-weight: var(--weight-semibold);
  margin-bottom: var(--space-4);
  color: var(--color-text-primary);
}

.footer-link {
  display: block;
  color: var(--color-text-secondary);
  text-decoration: none;
  margin-bottom: var(--space-3);
  transition: color var(--transition-fast);
}

.footer-link:hover {
  color: var(--color-primary);
}

.footer-text {
  color: var(--color-text-secondary);
  margin-bottom: var(--space-3);
}

.footer-social {
  display: flex;
  gap: var(--space-4);
  margin-top: var(--space-4);
}

.footer-social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: var(--radius-full);
  background-color: var(--color-bg-tertiary);
  color: var(--color-text-primary);
  text-decoration: none;
  transition: all var(--transition-fast);
}

.footer-social-link:hover {
  background-color: var(--color-primary);
  color: white;
  transform: translateY(-2px);
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--space-6);
  border-top: var(--border-width) solid var(--color-border);
  font-size: var(--text-sm);
  color: var(--color-text-muted);
}

@media (max-width: 640px) {
  .footer-bottom {
    flex-direction: column;
    gap: var(--space-4);
    text-align: center;
  }
}

.footer-bottom-link {
  color: var(--color-text-muted);
  text-decoration: none;
  margin-left: var(--space-4);
  transition: color var(--transition-fast);
}

.footer-bottom-link:hover {
  color: var(--color-primary);
}

/* Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--color-overlay);
  z-index: var(--z-modal-backdrop);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  transition: all var(--transition-base);
  padding: var(--space-4);
}

.modal-overlay.is-open {
  opacity: 1;
  visibility: visible;
}

.modal {
  background-color: var(--color-bg-primary);
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-2xl);
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  padding: var(--space-8);
  position: relative;
  transform: scale(0.9);
  transition: transform var(--transition-base);
}

.modal-overlay.is-open .modal {
  transform: scale(1);
}

.modal-close {
  position: absolute;
  top: var(--space-4);
  right: var(--space-4);
  width: 32px;
  height: 32px;
  border: none;
  background-color: var(--color-bg-tertiary);
  border-radius: var(--radius-full);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-fast);
}

.modal-close:hover {
  background-color: var(--color-primary);
  color: white;
}

.modal-heading {
  font-size: var(--text-3xl);
  font-weight: var(--weight-bold);
  margin-bottom: var(--space-4);
}

.modal-description {
  color: var(--color-text-secondary);
  margin-bottom: var(--space-6);
}

.modal-form-wrapper {
  min-height: 400px;
}

/* Back to Top */
.back-to-top {
  position: fixed;
  bottom: var(--space-8);
  right: var(--space-8);
  width: 48px;
  height: 48px;
  border-radius: var(--radius-full);
  background-color: var(--color-primary);
  color: white;
  border: none;
  cursor: pointer;
  box-shadow: var(--shadow-lg);
  opacity: 0;
  visibility: hidden;
  transition: all var(--transition-base);
  z-index: var(--z-fixed);
}

.back-to-top.is-visible {
  opacity: 1;
  visibility: visible;
}

.back-to-top:hover {
  background-color: var(--color-primary-dark);
  transform: translateY(-4px);
}

/* Cookie Banner */
.cookie-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--color-bg-secondary);
  border-top: var(--border-width) solid var(--color-border);
  padding: var(--space-6);
  z-index: var(--z-fixed);
  transform: translateY(100%);
  transition: transform var(--transition-base);
}

.cookie-banner.is-visible {
  transform: translateY(0);
}

.cookie-text {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-4);
}

.cookie-btn-accept {
  margin-top: var(--space-4);
}

@media (min-width: 768px) {
  .cookie-banner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .cookie-text {
    margin-bottom: 0;
    margin-right: var(--space-6);
  }

  .cookie-btn-accept {
    margin-top: 0;
  }
}

/* FAQ Accordion */
.faq-item {
  border-left: 3px solid transparent;
  padding-left: var(--space-4);
  margin-bottom: var(--space-4);
  transition: border-color var(--transition-base);
}

.faq-item.is-active {
  border-left-color: var(--color-primary);
}

.faq-question-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: var(--space-4);
  background-color: var(--color-bg-secondary);
  border-radius: var(--radius-lg);
  transition: background-color var(--transition-fast);
}

.faq-question-row:hover {
  background-color: var(--color-bg-tertiary);
}

.faq-question {
  font-size: var(--text-lg);
  font-weight: var(--weight-semibold);
  margin: 0;
}

.faq-toggle-icon {
  font-size: var(--text-2xl);
  color: var(--color-primary);
  transition: transform var(--transition-base);
}

.faq-item.is-active .faq-toggle-icon {
  transform: rotate(45deg);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height var(--transition-base);
  padding: 0 var(--space-4);
}

.faq-item.is-active .faq-answer {
  padding-top: var(--space-4);
}
</style>
```

### SECTION 2: JSON-LD Structured Data (SEO)

```html
<!-- LocalBusiness + GeneralContractor Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": ["GeneralContractor", "LocalBusiness"],
  "@id": "https://www.delolmoconstruction.com/#organization",
  "name": "Del Olmo Construction LLC",
  "alternateName": "Del Olmo Construction",
  "description": "Austin, Texas general contractor specializing in home renovations, flips, concrete work, and remodeling. Licensed and insured with 24-hour estimate turnaround.",
  "url": "https://www.delolmoconstruction.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.delolmoconstruction.com/images/delolmo-logo.png",
    "width": "600",
    "height": "200"
  },
  "image": [
    "https://www.delolmoconstruction.com/images/delolmo-hero.jpg",
    "https://www.delolmoconstruction.com/images/delolmo-projects.jpg"
  ],
  "telephone": "+17373874995",
  "email": "info@delolmoconstruction.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "",
    "addressLocality": "Austin",
    "addressRegion": "TX",
    "postalCode": "78701",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "30.267153",
    "longitude": "-97.743057"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Austin",
      "containedIn": {
        "@type": "State",
        "name": "Texas"
      }
    },
    {
      "@type": "City",
      "name": "Round Rock",
      "containedIn": {
        "@type": "State",
        "name": "Texas"
      }
    },
    {
      "@type": "City",
      "name": "Cedar Park",
      "containedIn": {
        "@type": "State",
        "name": "Texas"
      }
    },
    {
      "@type": "City",
      "name": "Georgetown",
      "containedIn": {
        "@type": "State",
        "name": "Texas"
      }
    },
    {
      "@type": "City",
      "name": "Pflugerville",
      "containedIn": {
        "@type": "State",
        "name": "Texas"
      }
    },
    {
      "@type": "City",
      "name": "Lakeway",
      "containedIn": {
        "@type": "State",
        "name": "Texas"
      }
    }
  ],
  "priceRange": "$$-$$$",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "07:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "08:00",
      "closes": "14:00"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/delolmoconstruction",
    "https://www.instagram.com/delolmoconstruction",
    "https://www.linkedin.com/company/delolmo-construction"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Construction Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Home Renovations & Remodeling",
          "description": "Complete home renovation services including kitchen, bathroom, and whole-home remodels"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "House Flipping & Investment Projects",
          "description": "End-to-end renovation services for real estate investors and house flippers"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Concrete & Foundation Work",
          "description": "Concrete driveways, patios, foundations, and structural concrete services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Commercial Construction",
          "description": "Commercial renovation and construction services for businesses"
        }
      }
    ]
  }
}
</script>

<!-- Organization Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.delolmoconstruction.com/#organization",
  "name": "Del Olmo Construction LLC",
  "url": "https://www.delolmoconstruction.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.delolmoconstruction.com/images/delolmo-logo.png",
    "width": "600",
    "height": "200"
  },
  "description": "Del Olmo Construction is a trusted Austin, Texas general contractor providing expert renovation, remodeling, and concrete services with rapid 24-hour estimates.",
  "foundingDate": "2020",
  "founder": {
    "@type": "Person",
    "name": "Alan Del Olmo"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Austin",
    "addressRegion": "TX",
    "postalCode": "78701",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+17373874995",
    "contactType": "Customer Service",
    "email": "info@delolmoconstruction.com",
    "availableLanguage": ["English", "Spanish"],
    "areaServed": "US-TX"
  },
  "sameAs": [
    "https://www.facebook.com/delolmoconstruction",
    "https://www.instagram.com/delolmoconstruction",
    "https://www.linkedin.com/company/delolmo-construction"
  ],
  "knowsAbout": [
    "General Contracting",
    "Home Renovation",
    "Remodeling",
    "Concrete Construction",
    "House Flipping",
    "Commercial Construction",
    "Project Management"
  ]
}
</script>

<!-- Breadcrumb Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.delolmoconstruction.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://www.delolmoconstruction.com#services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Projects",
      "item": "https://www.delolmoconstruction.com#projects"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Contact",
      "item": "https://www.delolmoconstruction.com#estimate"
    }
  ]
}
</script>

<!-- NOTE: FAQPage schema should be dynamically generated from CMS -->
<!-- For now, this is a static example. You'll want to generate this from your FAQ CMS collection -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.delolmoconstruction.com/#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How quickly can I get an estimate for my construction project?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We provide detailed project estimates within 24 hours. Simply fill out our online form or call us at (737) 387-4995, and we'll schedule a consultation to assess your project needs and provide a comprehensive quote."
      }
    },
    {
      "@type": "Question",
      "name": "What areas do you serve in the Austin metro?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Del Olmo Construction serves Austin and surrounding areas including Round Rock, Cedar Park, Georgetown, Pflugerville, Lakeway, and other communities in Travis, Williamson, and Hays counties."
      }
    },
    {
      "@type": "Question",
      "name": "Are you licensed and insured?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Del Olmo Construction is fully licensed and insured. We maintain comprehensive general liability insurance and workers' compensation coverage to protect our clients and team members on every project."
      }
    }
  ]
}
</script>
```

### SECTION 3: Analytics - CHOOSE ONE OPTION

**OPTION A: Google Tag Manager (Recommended)**

```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');</script>
<!-- End Google Tag Manager -->
```
**Replace `GTM-XXXXXXX` with your actual GTM Container ID**

**OPTION B: Direct Analytics (Alternative to GTM)**

```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('consent', 'default', {
    'analytics_storage': 'denied',
    'ad_storage': 'denied'
  });

  gtag('config', 'G-XXXXXXXXXX', {
    'anonymize_ip': true,
    'send_page_view': true
  });
</script>
<!-- Replace G-XXXXXXXXXX with your actual GA4 Measurement ID -->

<!-- Facebook Pixel -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'XXXXXXXXXXXXXXX');
fbq('track', 'PageView');
</script>
<noscript>
  <img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=XXXXXXXXXXXXXXX&ev=PageView&noscript=1"/>
</noscript>
<!-- Replace XXXXXXXXXXXXXXX with your Facebook Pixel ID -->
```

### SECTION 4: Optional Analytics Tools

**Hotjar (for heatmaps)** - OPTIONAL

```html
<script>
  (function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:XXXXXXX,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
  })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
</script>
<!-- Replace XXXXXXX with your Hotjar Site ID -->
```

**OR Microsoft Clarity (alternative to Hotjar)** - OPTIONAL

```html
<script type="text/javascript">
  (function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
  })(window, document, "clarity", "script", "XXXXXXXXXX");
</script>
<!-- Replace XXXXXXXXXX with your Clarity Project ID -->
```

---

## 📍 Project Settings → Custom Code → Footer Code

Copy and paste ALL of the following into the **Footer Code** section (before `</body>`):

### SECTION 1: GTM Noscript (if using Google Tag Manager)

```html
<!-- Google Tag Manager (noscript) - ONLY if you chose GTM above -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
<!-- Replace GTM-XXXXXXX with your actual GTM Container ID -->
```

### SECTION 2: Main JavaScript

```html
<script>
/**
 * Del Olmo Construction - Main JavaScript
 */
(function() {
  'use strict';

  // Utility functions
  function $(selector) { return document.querySelector(selector); }
  function $$(selector) { return document.querySelectorAll(selector); }
  function on(element, event, handler) {
    if (element) element.addEventListener(event, handler);
  }
  function toggleClass(element, className) {
    if (element) element.classList.toggle(className);
  }
  function addClass(element, className) {
    if (element) element.classList.add(className);
  }
  function removeClass(element, className) {
    if (element) element.classList.remove(className);
  }
  function hasClass(element, className) {
    return element && element.classList.contains(className);
  }

  // Theme Toggle
  function initThemeToggle() {
    const themeToggle = $('.theme-toggle');
    const body = document.body;
    const STORAGE_KEY = 'delolmo-theme';

    const savedTheme = localStorage.getItem(STORAGE_KEY);
    if (savedTheme === 'dark') {
      addClass(body, 'theme--dark');
    }

    on(themeToggle, 'click', function() {
      toggleClass(body, 'theme--dark');
      const isDark = hasClass(body, 'theme--dark');
      localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light');
    });
  }

  // Mobile Navigation
  function initMobileNav() {
    const navToggle = $('.nav-toggle');
    const navMobile = $('.nav-menu-mobile');
    const mobileLinks = $$('.nav-link-mobile');
    const body = document.body;

    on(navToggle, 'click', function() {
      toggleClass(navMobile, 'is-open');
      toggleClass(body, 'overflow-hidden');
    });

    mobileLinks.forEach(function(link) {
      on(link, 'click', function() {
        removeClass(navMobile, 'is-open');
        removeClass(body, 'overflow-hidden');
      });
    });

    on(document, 'click', function(e) {
      if (hasClass(navMobile, 'is-open') &&
          !navMobile.contains(e.target) &&
          !navToggle.contains(e.target)) {
        removeClass(navMobile, 'is-open');
        removeClass(body, 'overflow-hidden');
      }
    });
  }

  // Navigation Scroll Effect
  function initNavScroll() {
    const nav = $('.nav');
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 100) {
        addClass(nav, 'nav--scrolled');
      } else {
        removeClass(nav, 'nav--scrolled');
      }
    });
  }

  // Smooth Scroll
  function initSmoothScroll() {
    const navLinks = $$('a[href^="#"]');
    navLinks.forEach(function(link) {
      on(link, 'click', function(e) {
        const href = link.getAttribute('href');
        if (href === '#') return;
        const target = $(href);
        if (target) {
          e.preventDefault();
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

  // Modal Controls
  function initModals() {
    const modalTriggers = $$('[data-modal-trigger]');
    const modalOverlay = $('.modal-overlay');
    const modalClose = $('.modal-close');
    const body = document.body;

    modalTriggers.forEach(function(trigger) {
      on(trigger, 'click', function(e) {
        e.preventDefault();
        addClass(modalOverlay, 'is-open');
        addClass(body, 'overflow-hidden');
      });
    });

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

    on(document, 'keydown', function(e) {
      if (e.key === 'Escape' && hasClass(modalOverlay, 'is-open')) {
        removeClass(modalOverlay, 'is-open');
        removeClass(body, 'overflow-hidden');
      }
    });
  }

  // Back to Top Button
  function initBackToTop() {
    const backToTop = $('.back-to-top');
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 500) {
        addClass(backToTop, 'is-visible');
      } else {
        removeClass(backToTop, 'is-visible');
      }
    });

    on(backToTop, 'click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // FAQ Accordion
  function initFAQAccordion() {
    const faqItems = $$('.faq-item');
    faqItems.forEach(function(item) {
      const questionRow = item.querySelector('.faq-question-row');
      const answer = item.querySelector('.faq-answer');

      on(questionRow, 'click', function() {
        const isActive = hasClass(item, 'is-active');

        faqItems.forEach(function(otherItem) {
          if (otherItem !== item) {
            removeClass(otherItem, 'is-active');
            const otherAnswer = otherItem.querySelector('.faq-answer');
            if (otherAnswer) otherAnswer.style.maxHeight = '0';
          }
        });

        toggleClass(item, 'is-active');

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

  // Cookie Banner
  function initCookieBanner() {
    const cookieBanner = $('.cookie-banner');
    const acceptBtn = $('.cookie-btn-accept');
    const STORAGE_KEY = 'delolmo-cookies-accepted';

    const cookiesAccepted = localStorage.getItem(STORAGE_KEY);
    if (!cookiesAccepted) {
      setTimeout(function() {
        addClass(cookieBanner, 'is-visible');
      }, 1000);
    }

    on(acceptBtn, 'click', function() {
      localStorage.setItem(STORAGE_KEY, 'true');
      removeClass(cookieBanner, 'is-visible');

      if (window.gtag) {
        gtag('consent', 'update', {
          'analytics_storage': 'granted'
        });
      }
    });
  }

  // Initialize all
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
    console.log('Del Olmo Construction - Ready!');
  }

  // Start
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }
})();
</script>
```

### SECTION 3: Analytics Tracking JavaScript

```html
<script>
/**
 * Del Olmo Construction - Analytics Tracking
 */
(function() {
  'use strict';

  function trackEvent(eventName, eventParams) {
    if (typeof gtag === 'function') {
      gtag('event', eventName, eventParams);
    }
  }

  function trackFBEvent(eventName, eventParams) {
    if (typeof fbq === 'function') {
      fbq('track', eventName, eventParams);
    }
  }

  // Phone Click Tracking
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

  // Form Submission Tracking
  function trackFormSubmissions() {
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

  // CTA Button Tracking
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

  // FAQ Interaction Tracking
  function trackFAQInteractions() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(function(item) {
      const questionRow = item.querySelector('.faq-question-row');
      questionRow?.addEventListener('click', function() {
        const question = item.querySelector('.faq-question')?.textContent || 'Unknown';
        trackEvent('faq_interaction', {
          question: question.substring(0, 100)
        });
      });
    });
  }

  // Scroll Depth Tracking
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

  // Social Media Tracking
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

  // Initialize all tracking
  function initAll() {
    console.log('Analytics - Initializing tracking...');
    trackPhoneCalls();
    trackFormSubmissions();
    trackCTAClicks();
    trackFAQInteractions();
    trackScrollDepth();
    trackSocialClicks();
    console.log('Analytics - Tracking ready!');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }
})();
</script>
```

---

## 📍 Inside Modal (Embed Element)

For the **Estimate Modal**, add an Embed element and paste this:

```html
<!-- GoHighLevel Form -->
<iframe
  src="https://api.leadconnectorhq.com/widget/form/YOUR_FORM_ID"
  style="width:100%;height:500px;border:none;overflow:hidden;"
  scrolling="no"
  id="ghl-form-iframe"
  title="Request Your Free Estimate"
  loading="lazy">
</iframe>

<!-- Fallback if form doesn't load -->
<noscript>
  <div style="padding: 2rem; text-align: center; background: #f9fafb; border-radius: 1rem;">
    <p style="margin-bottom: 1rem;">JavaScript is required to display this form.</p>
    <p>Please call us at <a href="tel:7373874995" style="color: #14B8A6; font-weight: bold;">(737) 387-4995</a></p>
    <p>or email <a href="mailto:info@delolmoconstruction.com" style="color: #14B8A6;">info@delolmoconstruction.com</a></p>
  </div>
</noscript>
```

**Replace `YOUR_FORM_ID` with your actual GoHighLevel Form ID**

---

## 📍 /thank-you Page (Embed Element)

On your Thank You page, add an Embed element and paste this:

```html
<!-- GoHighLevel Calendar -->
<div id="ghl-calendar-container" style="max-width: 800px; margin: 0 auto; padding: 2rem;">
  <iframe
    src="https://api.leadconnectorhq.com/widget/bookings/YOUR_CALENDAR_ID"
    style="width:100%;min-height:700px;border:none;overflow:hidden;"
    scrolling="yes"
    id="ghl-calendar-iframe"
    title="Schedule Your Consultation"
    loading="lazy">
  </iframe>

  <noscript>
    <div style="padding: 3rem; text-align: center; background: #f9fafb; border-radius: 1rem;">
      <h2 style="margin-bottom: 1rem; color: #111827;">Schedule Your Consultation</h2>
      <p style="margin-bottom: 2rem; color: #6b7280;">JavaScript is required to display the booking calendar.</p>
      <p style="margin-bottom: 1rem;">Please contact us directly to schedule:</p>
      <p style="margin-bottom: 0.5rem;">
        <strong>Phone:</strong> <a href="tel:7373874995" style="color: #14B8A6; font-weight: bold;">(737) 387-4995</a>
      </p>
      <p>
        <strong>Email:</strong> <a href="mailto:info@delolmoconstruction.com" style="color: #14B8A6;">info@delolmoconstruction.com</a>
      </p>
    </div>
  </noscript>
</div>

<!-- Track calendar view -->
<script>
  if (typeof gtag === 'function') {
    gtag('event', 'conversion', {
      'send_to': 'G-XXXXXXXXXX/CONVERSION_ID'
    });
  }
  if (typeof fbq === 'function') {
    fbq('track', 'Schedule');
  }
</script>
```

**Replace `YOUR_CALENDAR_ID` with your actual GoHighLevel Calendar ID**

---

## ✅ Quick Checklist

Before you copy-paste:

1. **Get your IDs ready:**
   - [ ] GoHighLevel Form ID
   - [ ] GoHighLevel Calendar ID
   - [ ] Google Analytics 4 ID (G-XXXXXXXXXX) OR Google Tag Manager ID (GTM-XXXXXXX)
   - [ ] Facebook Pixel ID
   - [ ] Hotjar/Clarity ID (optional)

2. **Replace placeholders:**
   - Search for `XXXXXXX` and replace with actual IDs
   - Update image URLs in JSON-LD schemas
   - Update social media URLs

3. **Choose your analytics approach:**
   - Use GTM (recommended) OR direct GA4/FB Pixel (not both)

4. **Test after implementing:**
   - Check browser console for errors
   - Verify analytics are firing
   - Test form submission
   - Test all interactive elements

---

Need help? Check `/docs/WEBFLOW-SETUP.md` for detailed build instructions!
