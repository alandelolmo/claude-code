# Building Del Olmo Construction in Webflow Visual Builder
## Complete Beginner's Guide - Section by Section

This guide assumes you have the **original CSS** in your Head Code (from COPY-PASTE-GUIDE.md). We'll build each section using Webflow's visual builder and apply the correct classes.

---

# ✅ PREREQUISITE: Verify CSS is Loaded

Before starting, make sure you have the CSS:

1. **Project Settings → Custom Code → Head Code**
2. Should contain 4 large `<style>` blocks with CSS
3. Look for classes like `.btn`, `.card`, `.section`, `.container`, etc.
4. If missing, copy from `/docs/COPY-PASTE-GUIDE.md` Section 1

---

# 🧹 STEP 0: Clean Slate

Let's start fresh:

1. **Delete ALL Embed elements** on your page (if any)
2. Keep only CMS Collection Lists (Projects, FAQs, Testimonials)
3. We'll rebuild everything properly using the visual builder

---

# 📱 SECTION 1: NAVIGATION

## Step 1.1: Add Navigation Container

1. From **Add Panel** (left, + icon), drag **Nav Link Block** to top of page
2. Select it, delete default content inside
3. With the Nav Link Block selected, **right panel** → add class: `nav`

## Step 1.2: Add Inner Container

1. With `nav` selected, press **Enter** to add inside it
2. Add a **Div Block**
3. Give it classes: `nav-inner` `container`

## Step 1.3: Add Logo

1. Inside `nav-inner`, add a **Link Block**
2. Give it class: `nav-logo-link`
3. Set Link Settings: **Home Page** (/)
4. Inside the link, add an **Image**
5. Give image class: `nav-logo`
6. Upload your logo or use placeholder
7. Set image size: Width **Auto**, Height **40px**

## Step 1.4: Add Desktop Menu

1. After the logo (still inside `nav-inner`), add a **Div Block**
2. Give it class: `nav-menu`
3. Set Layout to **Flex**, direction **Horizontal**
4. Set Gap: **2rem**

**Inside `nav-menu`, add these:**

**Link 1:**
- Add **Link Block**
- Text: `Services`
- Link to: `#services`
- Class: `nav-link`

**Link 2:**
- Add **Link Block**
- Text: `Projects`
- Link to: `#projects`
- Class: `nav-link`

**Link 3:**
- Add **Link Block**
- Text: `Process`
- Link to: `#process`
- Class: `nav-link`

**Link 4:**
- Add **Link Block**
- Text: `FAQ`
- Link to: `#faq`
- Class: `nav-link`

**Phone Link:**
- Add **Link Block**
- Link to: `tel:7373874995`
- Class: `nav-phone`
- Add HTML Embed with this code:
```html
<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
</svg>
```
- After the embed, add **Text Block**: `(737) 387-4995`
- Give text class: `nav-phone-text`

**CTA Button:**
- Add **Button**
- Text: `Get Free Estimate`
- Classes: `btn` `btn--primary` `nav-cta-btn`
- In **Button Settings** → **Add Attribute**:
  - Name: `data-modal-trigger`
  - Value: (leave empty)
- In **Button Settings** → **Add Attribute**:
  - Name: `data-location`
  - Value: `nav`

## Step 1.5: Set Nav to Fixed Position

1. Select the main `nav` element
2. In **Style Panel** (right):
   - Position: **Fixed**
   - Top: **0px**
   - Left: **0px**
   - Right: **0px**
   - Z-index: **1020**

## Step 1.6: Add Body Padding

1. Select **Body** in Navigator
2. In Style Panel:
   - Padding Top: **80px**

✅ **Test:** You should see a navigation bar that stays at the top when you scroll!

---

# 🎯 SECTION 2: HERO

## Step 2.1: Create Hero Section

1. Add **Section** element to page
2. Give it classes: `hero` `section` `section--dark`
3. Set an ID: `hero` (for anchor links)

## Step 2.2: Add Hero Inner Container

1. Inside the section, add **Div Block**
2. Give it classes: `hero-inner` `container`

## Step 2.3: Add Hero Content

1. Inside `hero-inner`, add **Div Block**
2. Give it class: `hero-content`

**Inside `hero-content`, add:**

**Heading:**
- Add **Heading (H1)**
- Text: `Austin's Trusted General Contractor`
- Classes: `hero-heading` `heading-lg`

**Subtitle:**
- Add **Paragraph**
- Text: `Fast estimates. Quality craftsmanship. Proven results. From kitchen remodels to full renovations, we bring your vision to life.`
- Class: `hero-subtitle`
- In Style Panel:
  - Font Size: **1.25rem**
  - Margin Top: **1.5rem**
  - Margin Bottom: **2rem**

**Buttons Container:**
- Add **Div Block**
- Class: `hero-ctas`
- Set Layout: **Flex**, direction **Horizontal**
- Gap: **1rem**

**Inside buttons container:**

**Button 1:**
- Add **Button**
- Text: `Get Your 24-Hour Estimate`
- Classes: `btn` `btn--primary` `btn--large`
- Add Attributes:
  - `data-modal-trigger` (empty value)
  - `data-location` = `hero`

**Button 2:**
- Add **Link Block** (not button, so it can have icon)
- Link to: `tel:7373874995`
- Classes: `btn` `btn--secondary` `btn--large`
- Inside, add HTML Embed with phone icon:
```html
<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" style="margin-right: 0.5rem;">
  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
</svg>
```
- After embed, add **Text**: `Call (737) 387-4995`

## Step 2.4: Add Stats (CMS Collection)

1. After `hero-ctas`, add **Div Block**
2. Class: `hero-stats`
3. Style Panel:
  - Layout: **Grid**
  - Columns: **3**
  - Gap: **2rem**
  - Margin Top: **4rem**

**Inside stats container:**
- Add **Collection List Wrapper**
- Connect to: **Stats** collection
- Sort by: **Order** ascending
- Limit: **3**

**Style Collection Item:**
- Classes: `hero-stat-card` `stat-card`

**Inside Collection Item:**

**Value:**
- Add **Text Block**
- Bind to: **Value** field
- Class: `stat-card__value`

**Label:**
- Add **Text Block**
- Bind to: **Label** field
- Class: `stat-card__label`

✅ **Test:** Hero should have teal gradient background (from CSS) with centered white content!

---

# 🛡️ SECTION 3: TRUST BAR

## Step 3.1: Create Section

1. Add **Section**
2. Classes: `trust-bar` `section` `section--light`
3. Style Panel:
  - Padding Top: **2rem**
  - Padding Bottom: **2rem**

## Step 3.2: Add Container

1. Inside section, add **Div Block**
2. Classes: `trust-bar-inner` `container`
3. Style Panel:
  - Layout: **Flex**
  - Direction: **Horizontal**
  - Justify: **Space Around**
  - Align: **Center**
  - Gap: **2rem**
  - Flex Wrap: **Wrap**

## Step 3.3: Add Trust Items

**Item 1 - Licensed & Insured:**
1. Add **Div Block**
2. Class: `trust-item`
3. Style: Flex horizontal, gap 0.75rem

Inside:
- Add **HTML Embed** with shield icon:
```html
<svg width="24" height="24" viewBox="0 0 20 20" fill="#14B8A6">
  <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
</svg>
```
- Add **Text Block**: `Licensed & Insured`
- Text class: `trust-item-text`
- Style: Font weight 600

**Repeat for:**
- Item 2: Star icon + `5-Star Rated`
- Item 3: Clock icon + `24-Hour Estimates`
- Item 4: Location icon + `Serving Austin Metro`

Icon codes available in `/docs/BODY-CONTENT-PART-1.md` Section 3.

✅ **Test:** Light gray bar with 4 trust badges!

---

# 🏗️ SECTION 4: SERVICES

## Step 4.1: Create Section

1. Add **Section**
2. Classes: `services` `section` `section--light`
3. ID: `services`

## Step 4.2: Add Container

1. Add **Div Block**
2. Classes: `services-inner` `container`

## Step 4.3: Add Section Header

1. Add **Div Block**
2. Class: `section-header`

Inside:
- **Heading (H2)**: `Our Services`
  - Class: `section-header__title`
- **Paragraph**: `Comprehensive construction solutions...`
  - Class: `section-header__subtitle`

## Step 4.4: Create Services Grid

1. Add **Div Block**
2. Classes: `services-grid` `grid` `grid-cols-3`
3. Style Panel:
  - Gap: **2rem**

## Step 4.5: Add Service Card (Repeat 6 Times)

**For each service:**

1. Add **Div Block**
2. Classes: `service-card` `card`

**Inside card:**

**Icon:**
- Add **Div Block**
- Class: `icon-wrapper`
- Add HTML Embed with icon (from BODY-CONTENT-PART-1.md)

**Title:**
- Add **Heading (H3)**
- Text: `Kitchen & Bath Remodeling`
- Class: `service-title`

**Description:**
- Add **Paragraph**
- Text: `Transform your kitchen or bathroom...`
- Class: `service-description`

**List:**
- Add **List**
- Class: `service-list` `list-styled`
- Add 4 list items with benefits

**Badge (optional):**
- Add **Div Block**, class: `service-badges`
- Inside, add **Text**: `Popular`
- Class: `badge` `badge--primary`

**Repeat for all 6 services:**
1. Kitchen & Bath Remodeling
2. House Flipping & Investor Services
3. Concrete & Foundation Work
4. Commercial Construction
5. Full Home Renovations
6. Additions & Extensions

✅ **Test:** 6 service cards in a 3-column grid!

---

# 📊 SECTION 5: PROJECTS (CMS)

## Step 5.1: Create Section

1. Add **Section**
2. Classes: `projects` `section` `section--light`
3. ID: `projects`

## Step 5.2: Add Container

1. Add **Div Block**
2. Classes: `projects-inner` `container`

## Step 5.3: Add Section Header

(Same as services - title + subtitle)

## Step 5.4: Add Collection List

1. Add **Collection List Wrapper**
2. Connect to: **Projects**
3. Filter: **Featured** = **true**
4. Sort: **Created Date** descending
5. Limit: **6**

## Step 5.5: Style Collection List

1. Select **Collection List** (middle purple element)
2. Classes: `projects-grid` `grid` `grid-cols-2`
3. Style: Gap **2rem**

## Step 5.6: Build Collection Item

1. Select **Collection Item**
2. Classes: `project-card` `card` `card--interactive`

**Inside Collection Item:**

**Image Container:**
- Add **Div Block**
- Style: Position **Relative**, Border radius **0.75rem**, Overflow **Hidden**, Margin bottom **1rem**

Inside image container:
- **Image** → Bind to: **Main Image**
  - Style: Width **100%**, Height **300px**, Object fit **Cover**
- **Text Block** → Bind to: **Project Type**
  - Classes: `project-badge` `badge` `badge--primary`
  - Style: Position **Absolute**, Top **1rem**, Right **1rem**

**Title:**
- **Heading (H3)** → Bind to: **Title**
- Class: `project-title`

**Location:**
- **Paragraph** → Add text: `📍 ` then bind to **Location**
- Class: `project-location`

**Description:**
- **Paragraph** → Bind to: **Short Description**
- Class: `project-description`

**Stats Grid:**
- Add **Div Block**, class: `project-stats-grid`
- Style: Grid 3 columns, gap 1rem, padding top 1rem, border-top 1px solid #E5E7EB

Inside stats (3 divs):
- Label text (small, gray): `Area`
- Value → Bind to: **Square Footage**, add text ` SF`
- Repeat for Duration and Budget

✅ **Test:** Project cards showing with images, badges positioned correctly!

---

# 🔄 SECTION 6: PROCESS

## Step 6.1: Create Section

1. Add **Section**
2. Classes: `process` `section` `section--light`
3. ID: `process`

## Step 6.2: Add Container & Header

Same structure as before.

## Step 6.3: Create Process Grid

1. Add **Div Block**
2. Classes: `process-grid` `grid` `grid-cols-4`
3. Gap: **2rem**

## Step 6.4: Add Process Step (Repeat 4 Times)

For each step:

1. Add **Div Block**
2. Class: `process-step`
3. Style: Text align **center**

**Inside:**

**Badge:**
- **Text Block**: `1`
- Classes: `process-step-number` `badge` `badge--primary`
- Style: Font size **1.5rem**, Width **60px**, Height **60px**

**Title:**
- **Heading (H3)**: `Free Consultation`
- Class: `process-step-title`

**Description:**
- **Paragraph**: Description text
- Class: `process-step-description`

**Timeline:**
- **Text Block**: `Day 1`
- Class: `process-step-timeline`

**4 Steps:**
1. Free Consultation (Day 1)
2. Detailed Estimate (Within 24 Hours)
3. Project Kickoff (Week 1)
4. Quality Completion (On Schedule)

✅ **Test:** 4 process steps in a row!

---

# 👥 SECTION 7: WHO WE SERVE

Similar to Services section but 3 cards:
- Homeowners
- Real Estate Investors
- Business Owners

Use classes:
- Section: `who-we-serve` `section` `section--light`
- Container: `who-inner` `container`
- Grid: `who-grid` `grid` `grid-cols-3`
- Card: `who-card` `card`
- Icon: `who-icon`
- Title: `who-title`
- Description: `who-description`

---

# 🗺️ SECTION 8: SERVICE AREAS

## Create Grid of Cities

1. Section classes: `service-areas` `section` `section--light`
2. Grid classes: `service-areas-grid` `grid` `grid-cols-4`
3. Card classes: `service-area-card` `card`
4. City name: `service-area-name`
5. County: `service-area-county`

Add 8 cities:
- Austin (Travis County)
- Round Rock (Williamson County)
- Cedar Park (Williamson County)
- Georgetown (Williamson County)
- Pflugerville (Travis County)
- Lakeway (Travis County)
- Leander (Williamson County)
- Kyle (Hays County)

---

# 💼 SECTION 9: ESTIMATE CTA

1. Section classes: `estimate` `section` `section--light`
2. Container class: `estimate-inner` `container`
3. Style: Grid 2 columns, gap 4rem

**Column 1: Text**
- Heading
- Paragraph
- List of benefits
- CTA button

**Column 2: Visual**
- Placeholder or gradient box with icon

---

# ❓ SECTION 10: FAQ (CMS)

## Already Built with Collection List

Should already have:
- Collection List connected to FAQs
- Items with `faq-item` class
- Question row with `faq-question-row` class
- Toggle icon with `faq-toggle-icon` class
- Answer panel with `faq-answer` class

If not, build similar to Projects section.

---

# ⭐ SECTION 11: TESTIMONIALS (CMS)

## Already Built with Collection List

Should already have:
- Section classes: `testimonials` `section` `section--dark`
- Grid classes: `testimonials-grid` `grid` `grid-cols-3`
- Card classes: `testimonial-card` `card` `card--dark`
- Stars: `testimonial-stars`
- Quote: `testimonial-quote`
- Name: `testimonial-name`

---

# 🚀 SECTION 12: FINAL CTA

1. Section classes: `cta-final` `section` `section--accent`
2. Container class: `cta-final-inner` `container`
3. Style: Text align center, max-width 800px, margin auto

Inside:
- Heading: `cta-final-heading`
- Paragraph: `cta-final-text`
- Buttons container: `cta-final-buttons`

---

# 👣 SECTION 13: FOOTER

## Build Footer Grid

1. Section classes: `footer` `section` `section--dark`
2. Container: `footer-inner` `container`
3. Grid: `footer-grid` `grid` `grid-cols-4`, gap 3rem

**4 Columns:**

**Column 1 - About:**
- Heading: `footer-heading`
- Text blocks: `footer-text`

**Column 2 - Quick Links:**
- Heading
- Links with class: `footer-link`

**Column 3 - Services:**
- Same structure

**Column 4 - Contact:**
- Phone, email, hours
- Social icons container: `footer-social`
- Social links: `footer-social-link`

**Footer Bottom:**
- Div class: `footer-bottom`
- Copyright + legal links

---

# 🔼 FLOATING ELEMENTS

## Back to Top Button

1. Add **Button** anywhere on page
2. Class: `back-to-top`
3. Style:
   - Position: **Fixed**
   - Bottom: **2rem**
   - Right: **2rem**
   - Z-index: **1030**
4. Inside: Add up arrow icon

## Cookie Banner

1. Add **Div Block**
2. Class: `cookie-banner`
3. Style:
   - Position: **Fixed**
   - Bottom: **0**
   - Left: **0**
   - Right: **0**
   - Z-index: **1030**

Inside:
- Text: `cookie-text`
- Button: `cookie-btn-accept`

---

# ✅ FINAL CHECKS

After building all sections:

1. **Preview** the site
2. Check all sections have proper backgrounds
3. Check grids are working (3 columns, 2 columns, etc.)
4. Check mobile view (responsive breakpoints)
5. **Publish**

---

# 🎨 COLOR REFERENCE

Your CSS defines these automatically when you use the right classes:

- `.section--light` → Light gray background (#F9FAFB)
- `.section--dark` → Dark gray background (#1F2937)
- `.section--accent` → Teal gradient
- `.btn--primary` → Teal button
- `.btn--secondary` → Outlined button
- `.badge--primary` → Teal badge

**No need to manually set colors!** The classes handle everything.

---

**This is the proper way to build in Webflow.** Want me to walk you through building one specific section in even MORE detail?
