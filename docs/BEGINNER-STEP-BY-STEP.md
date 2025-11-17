# Complete Webflow Implementation Guide for Beginners
## Del Olmo Construction Website - Step by Step

This guide assumes you know NOTHING about Webflow. Follow each step exactly.

---

# PART 1: PROJECT SETUP (10 minutes)

## Step 1.1: Open Your Webflow Project

1. Go to https://webflow.com
2. Log in to your account
3. You should see your "Del Olmo Construction" project
4. Click on it to open the Designer

**What you'll see:** The Webflow Designer interface with a toolbar on the left, canvas in the middle, and panels on the right.

---

## Step 1.2: Add Custom Code to Project Settings

### Open Project Settings:
1. Look at the **top-left corner** of Webflow Designer
2. Click the Webflow logo (or "W" icon)
3. In the dropdown menu, click **"Project Settings"**
4. A new tab will open with project settings

### Add Head Code:

1. In Project Settings, look for tabs across the top
2. Click the **"Custom Code"** tab
3. You'll see two big text boxes:
   - **Head Code** (top box)
   - **Footer Code** (bottom box)

4. **Scroll down to see the Head Code section** (it's the first/top section)
5. Click inside the **Head Code** text box

**NOW:** Open the file `/docs/COPY-PASTE-GUIDE.md` in your repository

6. Scroll to **"SECTION 1: CSS Variables & Styles"**
7. Copy EVERYTHING starting from `<style>` all the way to the ending `</style>` for all 4 style blocks
   - This is about 600+ lines of code
   - Make sure you get ALL 4 `<style>...</style>` blocks

8. **Paste** into the Head Code box in Webflow

9. **Below that**, scroll in COPY-PASTE-GUIDE.md to **"SECTION 2: JSON-LD Structured Data"**
10. Copy ALL the `<script type="application/ld+json">` blocks (there are 4 of them)
11. **Paste** below the CSS in the Head Code box

12. **Below that**, scroll to **"SECTION 3: Analytics"**
13. Choose **OPTION A: Google Tag Manager** OR **OPTION B: Direct Analytics**
    - If you don't have these IDs yet, **SKIP THIS** for now, come back later
14. Copy the code and paste below the schemas

**Your Head Code box should now have:**
- 4 CSS `<style>` blocks
- 4 JSON-LD `<script>` blocks
- Analytics code (or skip for now)

15. Click **"Save Changes"** button at the top-right

### Add Footer Code:

1. **Scroll down** on the same Custom Code page
2. Find the **"Footer Code"** section (below Head Code)
3. Click inside the **Footer Code** text box

4. Go back to `/docs/COPY-PASTE-GUIDE.md`
5. Scroll to the section **"Project Settings → Custom Code → Footer Code"**
6. Copy **SECTION 2: Main JavaScript** (the big `<script>` block)
7. **Paste** into Footer Code box

8. **Below that**, copy **SECTION 3: Analytics Tracking JavaScript**
9. **Paste** below the main JavaScript

**Your Footer Code box should now have:**
- Main JavaScript (the long script with theme toggle, mobile nav, etc.)
- Analytics JavaScript (event tracking)

10. Click **"Save Changes"** button

11. **Close the Project Settings tab** and go back to the Webflow Designer

✅ **Checkpoint:** You've now added all the CSS and JavaScript. The site won't look different yet because we haven't added any content.

---

# PART 2: PAGE STRUCTURE SETUP (5 minutes)

## Step 2.1: Prepare the Body Element

1. In Webflow Designer, look at the **left sidebar** (Navigator panel)
2. You should see a tree structure starting with **"Body"**
3. Click on **"Body"** to select it

4. Look at the **right sidebar** - you should see style panels
5. At the very top-right, there's a field that says **"Add a class"** or shows existing classes
6. Click in that field and type: `page-wrapper`
7. Press **Enter**

✅ **Checkpoint:** The body now has the class "page-wrapper" which connects it to our CSS.

---

## Step 2.2: Understanding How We'll Build

**Important:** There are TWO ways to add content to Webflow:

### Method A: Embed Elements (EASIER, FASTER)
- Add "Embed" elements from the Add panel
- Paste HTML directly
- Good for static sections
- **We'll use this for most sections**

### Method B: Visual Builder (MORE CONTROL)
- Drag and drop divs, text, images
- Add classes manually
- Connect to CMS
- **We'll use this ONLY for CMS sections (Projects, FAQs, Testimonials)**

**For this guide, we'll use Method A (Embeds) to get you up and running fast.**

---

# PART 3: ADD NAVIGATION (15 minutes)

## Step 3.1: Add the Navigation Section

1. Look at the **left sidebar** - find the **"Add" panel** (plus icon)
2. If you don't see elements, click the **"+"** icon at the top-left
3. Scroll down to find **"Embed"** (it has a `</>` icon)
4. **Drag** the Embed element onto your canvas
5. Drop it at the **very top** of the page

**You'll see:** A gray box that says "Embed"

## Step 3.2: Paste Navigation HTML

1. **Double-click** the Embed element you just added
2. A code editor will pop up

3. Open `/docs/BODY-CONTENT-PART-1.md` from your repository
4. Find **"SECTION 1: Navigation Header"**
5. Copy EVERYTHING from `<nav class="nav">` to `</nav>` and the `<div style="height: 80px;">` below it
   - This is about 80 lines of code

6. **Paste** into the Webflow Embed code editor
7. Click **"Save & Close"**

**You'll see:** Navigation bar appear at the top! It might not be styled perfectly yet - that's okay.

## Step 3.3: Fix Navigation Images

The navigation has a logo placeholder. Let's fix it:

1. **Right-click** the Embed element → **"Edit Embed"**
2. Find this line: `<img src="images/delolmo-logo.png" alt="Del Olmo Construction" class="nav-logo" />`
3. Change it to a temporary placeholder:
   ```html
   <img src="https://via.placeholder.com/200x60/14B8A6/FFFFFF?text=Del+Olmo" alt="Del Olmo Construction" class="nav-logo" />
   ```
4. Click **"Save & Close"**

**Later:** You'll upload your real logo and replace this URL.

✅ **Checkpoint:** You should see a teal navigation bar with a placeholder logo and menu items.

---

# PART 4: ADD HERO SECTION (10 minutes)

## Step 4.1: Add Hero Embed

1. From the **Add panel** (left sidebar), drag another **"Embed"** element
2. Drop it **below the navigation** on your canvas

## Step 4.2: Paste Hero HTML

1. **Double-click** the new Embed element
2. Open `/docs/BODY-CONTENT-PART-1.md`
3. Find **"SECTION 2: Hero Section"**
4. Copy the ENTIRE section from `<section id="hero"...` to `</section>`
5. **Paste** into the Embed editor
6. Click **"Save & Close"**

**You'll see:** A hero section with heading, subtitle, buttons, and stats placeholders.

✅ **Checkpoint:** You should see the hero section with "Austin's Trusted General Contractor" heading.

---

# PART 5: ADD REMAINING STATIC SECTIONS (30 minutes)

**Repeat this process for each section:**

For EACH section below:
1. Add new **Embed** element below the previous section
2. Double-click to open the editor
3. Find the section in BODY-CONTENT files
4. Copy the entire `<section>...</section>` code
5. Paste into Embed
6. Save & Close

### Add These Sections in Order:

**From BODY-CONTENT-PART-1.md:**
- ✅ SECTION 3: Trust Bar
- ✅ SECTION 4: Services Section
- ✅ **SKIP** SECTION 5: Projects (we'll do this with CMS later)
- ✅ SECTION 6: Process Section
- ✅ SECTION 7: Who We Serve
- ✅ SECTION 8: Service Areas

**From BODY-CONTENT-PART-2.md:**
- ✅ SECTION 9: Estimate CTA Section
- ✅ **SKIP** SECTION 10: FAQ (CMS later)
- ✅ **SKIP** SECTION 11: Testimonials (CMS later)
- ✅ SECTION 12: Final CTA Section
- ✅ SECTION 13: Footer
- ✅ SECTION 14: Back to Top Button
- ✅ SECTION 15: Cookie Banner
- ✅ SECTION 16: Estimate Modal

**Note:** For now, SKIP the CMS sections (Projects, FAQ, Testimonials). We'll add those properly in Part 6.

✅ **Checkpoint:** After adding all these, scroll through your site. You should see all sections with content!

---

# PART 6: SET UP CMS COLLECTIONS (45 minutes)

**Now let's do the CMS sections properly.**

## Step 6.1: Create Projects Collection

1. At the top of Webflow Designer, click the **"CMS"** icon (it looks like a database/collection icon)
2. Click **"+ New Collection"**
3. Name it: `Projects`
4. Singular name: `Project`
5. Click **"Create Collection"**

### Add Fields to Projects:

For each field below, click **"+ New Field"** and add:

1. **Title** (Plain Text) - already created
2. **Slug** (auto-created from Title) - already created
3. Click **"+ New Field"** → **Plain Text** → Name: `Project Type`
4. Click **"+ New Field"** → **Plain Text** → Name: `Location`
5. Click **"+ New Field"** → **Number** → Name: `Square Footage`
6. Click **"+ New Field"** → **Plain Text** → Name: `Duration`
7. Click **"+ New Field"** → **Plain Text** → Name: `Budget`
8. Click **"+ New Field"** → **Number** → Name: `ROI Percentage`
9. Click **"+ New Field"** → **Plain Text** → Name: `Short Description`
10. Click **"+ New Field"** → **Rich Text** → Name: `Full Description`
11. Click **"+ New Field"** → **Image** → Name: `Main Image`
12. Click **"+ New Field"** → **Switch** → Name: `Featured`

### Add Sample Project:

1. Click **"+ New Project"** button
2. Fill in:
   - Title: `Luxury Kitchen Renovation`
   - Project Type: `Kitchen Remodel`
   - Location: `Austin, TX 78703`
   - Square Footage: `450`
   - Duration: `6 weeks`
   - Budget: `$95,000`
   - Short Description: `Complete kitchen transformation with custom cabinetry`
   - **Featured**: Toggle ON
   - Main Image: Upload any placeholder image or use: https://via.placeholder.com/800x600/14B8A6/FFFFFF?text=Kitchen+Remodel

3. Click **"Save"** (top-right)
4. Click **"Publish"** (the arrow icon next to Save)

**Repeat** to add 2-3 more sample projects (vary the titles and details)

## Step 6.2: Create Testimonials Collection

1. Click **"CMS"** → **"+ New Collection"**
2. Name: `Testimonials`, Singular: `Testimonial`
3. Add fields:
   - **Name** (Plain Text)
   - **Quote** (Rich Text)
   - **Project Type** (Plain Text) - optional
   - **Location** (Plain Text) - optional
   - **Featured** (Switch)
   - **Order** (Number)

4. Add 3 sample testimonials with Featured ON

## Step 6.3: Create FAQs Collection

1. **CMS** → **"+ New Collection"**
2. Name: `FAQs`, Singular: `FAQ`
3. Add fields:
   - **Question** (Plain Text)
   - **Answer** (Rich Text)
   - **Order** (Number)

4. Add 5-6 sample FAQs

## Step 6.4: Create Stats Collection

1. **CMS** → **"+ New Collection"**
2. Name: `Stats`, Singular: `Stat`
3. Add fields:
   - **Value** (Plain Text)
   - **Label** (Plain Text)
   - **Order** (Number)

4. Add exactly 3 stats:
   - Value: `500+`, Label: `Projects Completed`, Order: `1`
   - Value: `24 HRS`, Label: `Estimate Turnaround`, Order: `2`
   - Value: `98%`, Label: `Client Satisfaction`, Order: `3`

✅ **Checkpoint:** You now have 4 CMS collections with sample content!

---

# PART 7: ADD CMS SECTIONS TO PAGE (45 minutes)

**Now we'll properly add the CMS-driven sections using Webflow's Collection List.**

## Step 7.1: Add Projects Section

### Remove the Embed (if you added one):
1. If you added a Projects embed earlier, **delete it**

### Add Collection List:

1. From **Add panel** (left sidebar), find **"Collection List"** (not Embed)
2. **Drag** it onto your canvas where Projects should go (after Services section)
3. A popup will ask "Which collection?" → Select **"Projects"**
4. Click **"Add Collection List"**

**You'll see:** A purple Collection List Wrapper with a Collection Item inside.

### Style the Collection List Wrapper:

1. Click the **Collection List Wrapper** (the outer purple element)
2. On the right sidebar, add class: `projects`
3. Click the "+" to add another class: `section`
4. Click the "+" to add another class: `section--light`

### Add Section Header:

1. With Collection List Wrapper still selected, press **Enter** to go inside it
2. Add a **Div Block** (from Add panel) at the very top
3. Give it class: `section-header`
4. Inside that div, add:
   - **Heading** (H2) with text: `Featured Projects`
   - Give it class: `section-header__title`
   - Below that, **Paragraph** with text: `See our recent work...`
   - Give it class: `section-header__subtitle`

### Style the Collection Item:

1. Click on **Collection Item** (the element that will repeat)
2. Add classes: `project-card` `card` `card--interactive`

### Add Content to Collection Item:

Inside Collection Item, add these elements:

1. **Image** → Bind to: `Main Image`
   - Set width: 100%, height: 300px
   - Object fit: Cover

2. **Text Block** → Bind to: `Project Type`
   - Add classes: `badge` `badge--primary`
   - Position: Absolute, Top: 1rem, Right: 1rem

3. **Heading (H3)** → Bind to: `Title`
   - Add class: `project-title`

4. **Paragraph** → Bind to: `Location`
   - Add class: `project-location`

5. **Paragraph** → Bind to: `Short Description`
   - Add class: `project-description`

### Set Collection List Settings:

1. Click **Collection List Wrapper**
2. In right panel, find **Collection List Settings**
3. **Filter**: Add filter → `Featured` IS `true`
4. **Limit**: Set to `4`
5. **Sort**: By `Created Date` Descending

### Make it a Grid:

1. Click **Collection List** (the middle purple element, between Wrapper and Item)
2. Add classes: `projects-grid` `grid` `grid-cols-2`
3. In Style panel, set Gap: 2rem

✅ **Checkpoint:** You should see 2-4 project cards displaying your sample projects!

---

## Step 7.2: Add FAQ Section (Similar Process)

1. Add **Collection List** → Select **"FAQs"** collection
2. Add wrapper classes: `faq` `section` `section--light`
3. Add section header with title "Frequently Asked Questions"
4. Style Collection Item with class: `faq-item`
5. Inside Collection Item:
   - **Div** with class `faq-question-row` containing:
     - **Heading (H3)** → Bind to `Question`, class: `faq-question`
     - **Text** with just `+`, class: `faq-toggle-icon`
   - **Div** with class `faq-answer` containing:
     - **Rich Text** → Bind to `Answer`
6. Set to sort by `Order` Ascending
7. No limit (show all)

## Step 7.3: Add Testimonials Section

1. Add **Collection List** → Select **"Testimonials"** collection
2. Add wrapper classes: `testimonials` `section` `section--dark`
3. Add section header
4. Style Collection Item with classes: `testimonial-card` `card` `card--dark`
5. Inside Collection Item:
   - **Text** with `★★★★★`, class: `testimonial-stars`
   - **Rich Text** → Bind to `Quote`, class: `testimonial-quote`
   - **Text** → Bind to `Name`, class: `testimonial-name`
6. Make Collection List a grid: classes `testimonials-grid` `grid` `grid-cols-3`
7. Filter: `Featured` IS `true`, Limit: `6`

✅ **Checkpoint:** All CMS sections now showing real content from collections!

---

# PART 8: ADD GOHIGHLEVEL INTEGRATIONS (15 minutes)

## Step 8.1: Add Form to Estimate Modal

1. Find the **Estimate Modal** embed you added earlier
2. **Right-click** → **"Edit Embed"**
3. Find the part that says `[Add GHL Form Embed Here]`
4. Replace it with this code:

```html
<iframe
  src="https://api.leadconnectorhq.com/widget/form/YOUR_FORM_ID"
  style="width:100%;height:500px;border:none;overflow:hidden;"
  scrolling="no"
  title="Request Your Free Estimate">
</iframe>
```

5. Replace `YOUR_FORM_ID` with your actual GoHighLevel form ID
6. If you don't have it yet, leave the placeholder for now
7. **Save & Close**

## Step 8.2: Create Thank You Page

1. In Webflow Designer, look for **Pages panel** (left sidebar, folder icon)
2. Click **"+"** next to Pages
3. Name: `thank-you`
4. Click **"Create Page"**

5. On this new page, add:
   - **Heading (H1)**: `Thank You!`
   - **Paragraph**: `Schedule your consultation below`
   - **Embed** element with calendar code:

```html
<iframe
  src="https://api.leadconnectorhq.com/widget/bookings/YOUR_CALENDAR_ID"
  style="width:100%;min-height:700px;border:none;"
  title="Schedule Your Consultation">
</iframe>
```

6. Replace `YOUR_CALENDAR_ID` with your actual calendar ID

---

# PART 9: FINAL TOUCHES (30 minutes)

## Step 9.1: Replace Placeholder Images

1. Go through each section
2. Find images with `via.placeholder.com` URLs
3. Upload your real images to Webflow Assets
4. Edit embeds and replace URLs with your image URLs

## Step 9.2: Update Contact Information

Search all embeds for:
- `(737) 387-4995` - Replace with real phone if different
- `info@delolmoconstruction.com` - Replace with real email
- Social media URLs - Add your real Facebook, Instagram, LinkedIn

## Step 9.3: Update Analytics IDs

1. Go back to **Project Settings** → **Custom Code**
2. Find all instances of `XXXXXXX` in Head Code
3. Replace with your actual:
   - GA4 ID: `G-XXXXXXXXXX`
   - GTM ID: `GTM-XXXXXXX`
   - FB Pixel ID: `XXXXXXXXXXXXXXX`

## Step 9.4: Set Up Page Settings (SEO)

1. Click **Pages** panel (left sidebar)
2. Click on **Home** page
3. Click the gear icon (⚙️) next to it
4. Set:
   - **Title**: `Austin General Contractor | Del Olmo Construction`
   - **Meta Description**: `Licensed Austin general contractor specializing in renovations...`
   - **Open Graph Image**: Upload your hero image

---

# PART 10: TEST & PUBLISH (20 minutes)

## Step 10.1: Test Functionality

**Test these:**
1. Click nav menu items - do they scroll smoothly?
2. Open mobile preview (icon at top) - does hamburger menu work?
3. Click "Get Estimate" buttons - does modal open?
4. Press ESC - does modal close?
5. Click FAQ questions - do they expand?
6. Scroll down - does back-to-top button appear?

**To test JavaScript:**
- Press **F12** to open browser console
- Look for any red errors
- Should see: "Del Olmo Construction - Ready!"

## Step 10.2: Responsive Testing

1. At top of Webflow, click the **desktop icon**
2. Select **Tablet** view
3. Check layout looks good
4. Select **Mobile Portrait**
5. Check mobile menu works
6. Check all sections stack properly

## Step 10.3: Publish

1. Click the **"Publish"** button (top-right, purple)
2. Select **"Publish to webflow.io"**
3. Click **"Publish"**
4. Wait for it to complete
5. Click **"View Site"** to see it live!

---

# TROUBLESHOOTING

## Nothing is styled / looks plain:
- ✅ Check Project Settings → Custom Code → Head Code has CSS
- ✅ Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- ✅ Check for syntax errors in Custom Code (red indicators)

## Navigation not staying at top:
- ✅ Select the nav embed
- ✅ In Style panel, Position → Fixed
- ✅ Top: 0, Left: 0, Right: 0

## Modal not opening:
- ✅ Check Footer Code has JavaScript
- ✅ Check button has `data-modal-trigger` attribute
- ✅ Press F12, look for JavaScript errors

## CMS not showing:
- ✅ Collection items must be "Published" not "Draft"
- ✅ Check filter settings (Featured = true)
- ✅ Make sure Collection List is bound to correct collection

## Images not showing:
- ✅ Upload images to Webflow Assets first
- ✅ Use Webflow's image URLs, not local file paths

---

# CHECKLIST

After following all steps, you should have:

- ✅ Navigation with logo and menu
- ✅ Hero section with headline
- ✅ Trust bar with icons
- ✅ Services grid (6 services)
- ✅ Projects section showing CMS items
- ✅ Process section (4 steps)
- ✅ Who We Serve section
- ✅ Service Areas grid
- ✅ Estimate CTA section
- ✅ FAQ accordion from CMS
- ✅ Testimonials from CMS
- ✅ Final CTA
- ✅ Footer with 4 columns
- ✅ Back to top button
- ✅ Cookie banner
- ✅ Estimate modal (placeholder)
- ✅ /thank-you page

---

**You did it!** 🎉

If you get stuck on ANY step, tell me:
1. Which step number you're on
2. What you see vs what you expect
3. Any error messages

I'll help you debug!
