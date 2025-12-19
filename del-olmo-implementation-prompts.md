# Del Olmo Construction - Winter Prep Funnel
## Code Generation Prompts for Implementation
### Version 1.0 | December 2024

---

## How to Use This Document

This document contains **27 prompts** organized into **7 phases**. Feed each prompt to a code-generation LLM (like Claude) in order. Each prompt:

- Builds on previous work
- Includes an ELI5 explanation for beginners
- Has clear success criteria

---

## Phase Summary

| Phase | Steps | Description | Est. Time |
|-------|-------|-------------|-----------|
| 1 | 1-4 | Foundation (config, HTML, CSS) | 2-3 hrs |
| 2 | 5-15 | Core Funnel UI (all 11 steps) | 6-8 hrs |
| 3 | 16-19 | Business Logic (pricing, validation) | 2-3 hrs |
| 4 | 20-21 | Integrations (Stripe, GHL) | 3-4 hrs |
| 5 | 22-24 | Advanced Features | 2-3 hrs |
| 6 | 25-26 | Testing & Polish | 2-3 hrs |
| 7 | 27 | Deployment | 1-2 hrs |

**Total: ~18-26 hours**

---

# PHASE 1: FOUNDATION

---

## PROMPT 1: Configuration File

```
Create a configuration file for the Del Olmo Construction Winter Prep funnel.

FILE: js/config.js

The CONFIG object should contain:

1. BUSINESS_INFO:
   - name: "Del Olmo Construction"
   - phone: "(737) 387-4995"
   - email: "homecare@delolmoconstruction.com"
   - noReplyEmail: "no-reply@delolmoconstruction.com"
   - website: "https://www.delolmoconstruction.com"

2. PRICING:
   tiers:
     essential: { name: "Essential", price: 410, tagline: "Basic Freeze Protection" }
     complete: { name: "Complete", price: 650, tagline: "Full Comfort & Efficiency", popular: true }
     ultimate: { name: "Ultimate", price: 750, tagline: "Total Home Protection" }
   
   addOns:
     residential:
       gutterCleaning: 250
       additionalFreezeMiser: 80
       additionalDoor: 60
       additionalFilter: 60
     commercial:
       gutterCleaning: 360
       additionalFreezeMiser: 115
       additionalDoor: 85
       additionalFilter: 85
   
   deposit: 50

3. TIER_FEATURES (arrays of included services):
   essential: ["Pipe insulation", "Outdoor faucet covers (2 included)", "Emergency shut-off valve labeling"]
   complete: ["Everything in Essential", "HVAC filter replacement (1 included)", "Weatherstripping (2 doors)", "Water heater inspection"]
   ultimate: ["Everything in Complete", "Attic insulation check", "Full home assessment", "Priority scheduling"]

4. SCHEDULING:
   minLeadTimeHours: 48
   seasonEnd: "2025-02-28"
   availableDays: { monday: true, tuesday: true, wednesday: true, thursday: true, friday: true, saturday: "morning", sunday: false }

5. MESSAGING:
   headline: "Don't Let Another 2021 Freeze Catch You Off Guard"
   valueProposition: "Winter prep costs less than $750. A burst pipe? $5,000 to $70,000+."
   socialProof: "Over 70 homes protected last year"
   cta: "Get Winter-Ready"

6. ANALYTICS:
   ga4Id: "G-0G28S49V8R"
   fbPixelId: "1282038360634959"

7. URLS:
   privacy: "https://www.delolmoconstruction.com/privacy"
   terms: "https://www.delolmoconstruction.com/terms"

Use ES6 export. Add JSDoc comments. Use Object.freeze() to prevent modifications.

ELI5: This config file is like a recipe card - all the ingredients (prices, text, settings) in one place. If we need to change a price, we change it HERE and it updates everywhere!
```

---

## PROMPT 2: ZIP Code Validation

```
Create a ZIP code validation module for the Austin service area.

FILE: js/zip-codes.js

Include these ZIP codes (approximately 1 hour from downtown Austin):

TRAVIS COUNTY (44):
78701, 78702, 78703, 78704, 78705, 78712, 78717, 78719, 78721-78759 (fill all valid)

WILLIAMSON COUNTY (12):
78613, 78615, 78617, 78626, 78628, 78633, 78634, 78641, 78642, 78664, 78665, 78681

HAYS COUNTY (6):
78610, 78619, 78620, 78640, 78652, 78666

BASTROP COUNTY (6):
78602, 78612, 78621, 78650, 78659, 78662

ADDITIONAL (4):
78653, 78660, 78669, 78676

Export:
1. SERVICE_AREA_ZIPS - Set of all valid ZIPs (for O(1) lookup)
2. isValidServiceArea(zipCode) - Returns true/false, handles strings/numbers, sanitizes input
3. getCountyByZip(zipCode) - Returns county name or null

Include input sanitization and test examples in comments.

ELI5: This is a guest list - when someone enters their ZIP code, we instantly check if they're "on the list" (in our service area). Using a Set makes this check super fast!
```

---

## PROMPT 3: HTML Structure

```
Create the base HTML structure for the funnel.

FILE: index.html

Include:

1. HEAD:
   - Meta tags (charset, viewport, description, OG tags)
   - Title: "Winter Prep Services | Del Olmo Construction"
   - Preconnect: js.stripe.com, fonts.googleapis.com
   - CSS links: variables.css, base.css, components.css, funnel.css
   - Schema.org JSON-LD for: Organization, Service, FAQPage, BreadcrumbList

2. BODY:
   - Skip link for accessibility
   - Header: logo + phone number
   - Progress indicator (10 dots for steps 2-11)
   - 11 step containers (data-step="1" through "11"), all hidden except step 1
   - Exit intent modal (hidden)
   - Footer: copyright + legal links
   - Scripts: config.js, zip-codes.js, pricing.js, validation.js, storage.js, tracking.js, funnel.js, Stripe.js, stripe-handler.js

Use semantic HTML. Add comments marking sections. Don't add step content yet - just containers.

ELI5: This is the house frame - we mark where every room (step) will be, but don't add furniture (content) yet. The Schema.org stuff helps Google understand what our page is about.
```

---

## PROMPT 4: CSS Foundation

```
Create four CSS files with mobile-first styling.

FILE 1: css/variables.css
CSS custom properties for:
- Colors: primary (#1a1a2e), accent (#d4a84b), success, error, text shades, backgrounds
- Spacing: xs(4px) through 3xl(64px)
- Typography: font-family, sizes (xs-4xl), weights, line-heights
- Borders: radius sizes, shadows
- Transitions: fast(150ms), normal(250ms), slow(350ms)
- Z-index scale

FILE 2: css/base.css
Reset and base styles:
- Box-sizing border-box
- Body typography
- Link styles
- Button reset
- Input styles (16px font to prevent iOS zoom!)
- .hidden, .sr-only classes

FILE 3: css/components.css
Reusable components:
- .btn, .btn--primary, .btn--secondary, .btn--large, .btn--loading
- .card, .card--selected, .card--clickable
- .badge, .badge--accent
- .input-group, .input-label, .input-error
- .progress-dots, .progress-dot, .progress-dot--active/--completed
- .quantity-selector

FILE 4: css/funnel.css
Layout styles:
- .funnel-header, .funnel-container, .funnel-step
- .step-title, .step-subtitle, .step-navigation
- .tier-grid, .tier-card, .tier-price, .tier-features
- .addon-list, .addon-item
- .review-section, .review-row
- .exit-modal, .exit-modal-content
- Media queries for tablet (768px) and desktop (1024px)

ELI5: CSS variables are like paint cans with labels - we pick colors once, then use the labels everywhere. Mobile-first means we design for phones FIRST, then add styles for bigger screens.
```

---

# PHASE 2: CORE FUNNEL UI

---

## PROMPT 5: Hero Section (Step 1)

```
Add hero/landing content to step 1 and create the main funnel controller.

HTML for step 1:
- Urgency banner: "⏰ Winter prep bookings close February 28"
- Headline (h1): "Don't Let Another 2021 Freeze Catch You Off Guard"
- Subtitle: "Winter prep costs less than $750. A burst pipe? $5,000 to $70,000+."
- Social proof: "✓ Over 70 homes protected last year"
- CTA button: "Get Winter-Ready" (id="hero-cta")
- Trust badges: Satisfaction Guaranteed, Registered & Insured, 24-Hour Estimates

CSS additions:
- .hero, .hero-title, .hero-subtitle, .urgency-banner, .trust-badges

JS (js/funnel.js):
- State object: { currentStep: 1, funnelData: {} }
- init() - Setup on DOMContentLoaded
- showStep(n) - Hide all steps, show step n, update progress dots, scroll to top
- nextStep() / prevStep()
- Event listener on hero CTA to advance to step 2

ELI5: The hero is our "movie trailer" - it needs to grab attention, create urgency (remember that freeze!), show value, and give ONE clear action to take.
```

---

## PROMPT 6: ZIP Code Step (Step 2)

```
Build the ZIP code validation step.

HTML for step 2:
- Title: "Let's Check Your Service Area"
- Subtitle: "Enter your ZIP code to confirm we serve your neighborhood."
- Input: text, id="zip-input", maxlength=5, inputmode=numeric
- Error container: id="zip-error"
- Note: "We serve Austin and surrounding areas..."
- Out-of-area message (hidden): friendly message + call button
- Navigation: Back button, "Check Availability" button

JS additions:
- Import isValidServiceArea from zip-codes.js
- On input: strip non-digits, clear errors
- validateAndProceed(): 
  - Validate format (5 digits)
  - Check service area
  - If valid: store ZIP, track event, nextStep()
  - If out of area: show out-of-area message with phone button

ELI5: This is the bouncer checking IDs. Before anyone continues, we verify they're from our service area. If not, we give them our phone number instead of a dead end.
```

---

## PROMPT 7: Property Type (Step 3)

```
Build property type selection step.

HTML for step 3:
- Title: "What Type of Property?"
- Two large clickable cards:
  - Residential (🏠): "Single-family homes, townhomes, condos"
  - Commercial (🏢): "Offices, retail spaces, multi-unit buildings"
- Note: "Commercial properties use residential base packages with commercial add-on rates."
- Navigation: Back, Continue (disabled until selection)

JS additions:
- Click handler on cards: add 'selected' class, store propertyType, enable continue
- Store funnelData.propertyType = 'residential' or 'commercial'

ELI5: Asking "Is this for your house or business?" The answer changes add-on prices later. Big cards are easier to tap on phones than tiny radio buttons!
```

---

## PROMPT 8: Tier Selection (Step 4)

```
Build service tier selection step.

HTML for step 4:
- Title: "Choose Your Winter Prep Package"
- Three tier cards in a grid:
  
  ESSENTIAL ($410):
  - Features: Pipe insulation, 2 faucet covers, valve labeling
  - Button: "Select Essential"
  
  COMPLETE ($650) - "Most Popular" badge:
  - Features: + HVAC filter, 2 door weatherstripping, water heater inspection
  - Button: "Select Complete"
  
  ULTIMATE ($750):
  - Features: + Attic check, full assessment, priority scheduling
  - Button: "Select Ultimate"

- Note: "All packages require a $50 refundable deposit"
- Navigation: Back, "Continue to Add-Ons" (disabled until selection)

JS additions:
- Click handler: select tier, store tierPrice, enable continue
- Update button text to show selection: "Continue with Complete"

ELI5: This is the menu - Small, Medium, Large. The middle "Most Popular" option guides undecided customers. The gold border when selected gives satisfying feedback!
```

---

## PROMPT 9: Add-Ons (Step 5)

```
Build add-ons selection step.

HTML for step 5:
- Title: "Would You Like Any Add-Ons?"
- Running total bar (sticky): "Current Total: $[amount]"

- Gutter Cleaning: checkbox + price ($250 residential / $360 commercial)
- Additional Freeze Misers: quantity selector (0-10) + price per unit
- Additional Doors: quantity selector (show only if tier includes doors)
- Additional HVAC Filters: quantity selector (show only if tier includes HVAC)

- Summary box: Package price + Add-ons subtotal = Total
- Link: "No thanks, continue without add-ons"
- Navigation: Back, Continue

JS additions:
- funnelData.addOns = { gutterCleaning: false, additionalFreezeMisers: 0, etc. }
- calculateAddOnsTotal() - Get prices based on propertyType
- Quantity increment/decrement handlers
- Update display when any add-on changes
- Show/hide conditional add-ons based on tier

ELI5: "Would you like fries with that?" We offer extras that complement the main package. The live-updating total builds trust - no surprises!
```

---

## PROMPT 10: Property Details (Step 6)

```
Build property details collection step.

HTML for step 6:
- Title: "Tell Us About Your Property"
- Faucets count: number input (default 2)
- Doors count: number input (if tier includes doors)
- HVAC systems count: number input (if tier includes HVAC)
- Gate code: text input (optional)
- Access instructions: textarea (optional)
- Note: "We may suggest adjusting add-ons based on your answers"
- Navigation: Back, Continue

JS additions:
- Conditional field visibility based on tier
- Store in funnelData.propertyDetails
- Basic validation (counts >= 1)

ELI5: Getting practical info for the service crew - how many faucets to protect, how to get in. If they have MORE faucets than freeze misers, we'll flag that in review!
```

---

## PROMPT 11: Contact Info (Step 7)

```
Build contact information step.

HTML for step 7:
- Title: "Your Contact Information"
- Full name: text input (required)
- Email: email input (required)
- Phone: tel input (required, auto-formats as (XXX) XXX-XXXX)
- Address section:
  - Street address (required)
  - City (required)
  - State: "TX" (readonly)
  - ZIP: pre-filled from step 2 (readonly)
- How did you hear about us?: select dropdown
- Special requests: textarea (optional)
- Privacy note: "🔒 Your information is secure..."
- Navigation: Back, Continue

JS additions:
- Phone auto-formatting on input
- Email validation
- Store in funnelData.contact
- Pre-fill ZIP from earlier

ELI5: Getting contact details. We pre-fill what we already know (ZIP, state). Phone auto-formatting looks professional. The privacy note builds trust.
```

---

## PROMPT 12: Scheduling (Step 8)

```
Build scheduling step.

HTML for step 8:
- Title: "Choose Your Preferred Dates"
- Season reminder: "⏰ Winter prep bookings close February 28, 2025"
- Preferred Date 1: date input (required)
- Preferred Date 2: date input (optional backup)
- Time window: radio cards for Morning (8am-12pm) or Afternoon (12pm-5pm)
- Notes: "48 hours minimum", "Saturday mornings only"
- Navigation: Back, "Review Your Order"

JS additions:
- Set min date (48 hours from now)
- Set max date (Feb 28, 2025)
- Disable Sundays
- If Saturday selected, auto-select morning, disable afternoon
- Store in funnelData.scheduling

ELI5: "When would you like us to come?" We enforce rules: 48 hour minimum notice, no Sundays, Saturday mornings only. Two date options reduce back-and-forth.
```

---

## PROMPT 13: Review (Step 9)

```
Build review/summary step.

HTML for step 9:
- Title: "Review Your Order"
- Sections with "Edit" links:
  - Service Package: tier name, features, price
  - Add-Ons: list with quantities and prices
  - Property Details: faucets, doors, HVAC, access info
  - Contact Information: name, email, phone, address
  - Appointment: dates, time window

- Order total box (dark background):
  - Package: $X
  - Add-ons: $X
  - Total: $X
  - Deposit due today: $50
  - Balance due at service: $X

- Policy box: Refund policy text
- Terms checkbox: "I agree to Terms and Privacy Policy" (required)
- Navigation: Back, "Proceed to Payment"

JS additions:
- populateReviewStep() - Pull all data from funnelData
- Edit links go to specific steps, return to review after
- Terms checkbox validation

ELI5: The Amazon checkout page - see EVERYTHING before paying. Each section has "Edit" so mistakes are fixable. The terms checkbox is legally required.
```

---

## PROMPT 14: Payment (Step 10)

```
Build payment step with Stripe Elements.

HTML for step 10:
- Title: "Secure Payment"
- Security badges: 🔒 256-bit encryption, 💳 Powered by Stripe, ✓ PCI compliant
- Order summary: Service total, Deposit now, Balance later
- Card element container: id="card-element"
- Card errors: id="card-errors"
- Billing name input
- Pay button: "Pay $50 Deposit"
- Error container for payment failures
- Trust note: "We never see your card details"
- Navigation: Back (no forward - pay button is the action)

JS (js/stripe-handler.js):
- Initialize Stripe with publishable key
- Create card element with styling
- Mount on step 10 show
- submitPayment():
  1. Create PaymentIntent via API
  2. Confirm with Stripe
  3. Handle success → nextStep()
  4. Handle failure → show error, retry logic
- Track payment attempts (2 failures → show "call us")

ELI5: Stripe handles ALL card security - we never see card numbers. Customer types into Stripe's secure field. We just get a "token" saying payment worked!
```

---

## PROMPT 15: Confirmation (Step 11)

```
Build confirmation step.

HTML for step 11:
- Animated checkmark icon
- Title: "Booking Confirmed!"
- Subtitle: "We'll confirm your appointment within 24 hours."
- Email note showing customer's email

- Booking summary card:
  - Confirmation number
  - Service: tier name
  - Requested dates
  - Time window
  - Service address
  - Deposit paid: $50
  - Balance due: $X

- "What Happens Next" numbered list:
  1. We'll confirm within 24 hours
  2. You'll receive confirmation email
  3. Team arrives during your window
  4. Pay remaining balance after service

- Contact info: phone + email
- Buttons: Return to Website, Print Confirmation
- Prevent back navigation

JS additions:
- Generate confirmation number (from payment ID)
- Populate all fields from funnelData
- Track purchase conversion
- Disable back button

ELI5: The "Thank You" page! Big checkmark says "It worked!" Clear next steps reduce anxiety. The animated checkmark is a little celebration moment!
```

---

# PHASE 3: BUSINESS LOGIC

---

## PROMPT 16: Validation Module

```
Create comprehensive form validation.

FILE: js/validation.js

Export functions:

1. Basic validators:
   - isRequired(value) - false for empty/whitespace
   - hasMinLength(value, min)
   - hasMaxLength(value, max)

2. Format validators:
   - isValidEmail(email) - regex check
   - isValidPhone(phone) - 10+ digits after stripping
   - isValidZipCode(zip) - exactly 5 digits
   - isValidDate(dateString) - valid format and actual date
   - isDateInRange(date, min, max)
   - isNotSunday(date)

3. Sanitizers:
   - sanitizeString(value) - trim, remove dangerous chars
   - sanitizePhone(phone) - digits only
   - formatPhone(digits) - returns (XXX) XXX-XXXX

4. Form validators:
   - validateContactForm(data) - returns { valid, errors }
   - validateScheduling(data) - returns { valid, errors }

5. Field helper:
   - validateField(fieldName, value) - single field check

6. Error messages object

ELI5: Validation is quality control - check everything BEFORE it goes through. Never trust user input! Tell users exactly what's wrong so they can fix it.
```

---

## PROMPT 17: Pricing Module

```
Create pricing calculation engine.

FILE: js/pricing.js

Export functions:

1. getTierPrice(tierKey) - returns price from CONFIG
2. getAddOnPrice(addOnKey, propertyType, quantity) - returns total for that add-on
3. calculateAddOnsTotal(addOns, propertyType) - sum of all add-ons
4. calculateTotal(tierKey, addOns, propertyType) - tier + add-ons
5. calculateDeposit() - always 50
6. calculateBalance(total) - total - 50
7. generatePriceBreakdown(tierKey, addOns, propertyType) - detailed object for display
8. formatCurrency(amount) - "$650" format
9. getAvailableAddOns(tierKey) - which add-ons apply to this tier
10. suggestAddOns(tier, propertyDetails, currentAddOns) - suggestions if faucets > freeze misers, etc.

Include unit test examples in comments.

ELI5: This is the cash register - all math in one place. If prices change, we update CONFIG and the math still works. The suggestion engine is smart selling!
```

---

## PROMPT 18: Storage Module

```
Create local storage persistence for funnel progress.

FILE: js/storage.js

Constants:
- STORAGE_KEY = 'delolmo_winter_prep_funnel'
- EXPIRY_DAYS = 14

Export functions:

1. saveFunnelData(data) - Save to localStorage with timestamp and expiry
2. loadFunnelData() - Load and validate (check expiry, version)
3. clearFunnelData() - Remove from storage
4. hasSavedProgress() - Boolean check
5. getOrCreateSessionId() - UUID for session tracking
6. generateProgressToken(data) - For save-progress-email feature
7. loadFromProgressToken(token) - Resume from token
8. isStorageAvailable() - Check if localStorage works
9. setupAutoSave(getDataFn, intervalMs) - Returns cleanup function

Handle errors gracefully (storage might be disabled).

ELI5: This is "save game" for forms. If someone closes the browser, they don't start over! The 14-day expiry clears old data. Auto-save means they never lose progress.
```

---

## PROMPT 19: Tracking Module

```
Create unified analytics tracking for GA4, Facebook Pixel, and GoHighLevel.

FILE: js/tracking.js

Event mappings:
- pageView: GA4 page_view, FB PageView
- zipValidated: GA4 zip_validated, FB CustomizeProduct
- propertyTypeSelected: GA4 property_type_selected
- tierSelected: GA4 select_item, FB AddToCart
- addOnsSelected: GA4 add_to_cart
- contactFormCompleted: GA4 generate_lead, FB Lead
- schedulingCompleted: GA4 scheduling_completed, FB Schedule
- reviewCompleted: GA4 begin_checkout, FB InitiateCheckout
- paymentCompleted: GA4 purchase, FB Purchase
- paymentFailed: GA4 payment_failed
- exitIntentShown: GA4 exit_intent_shown
- funnelAbandoned: GA4 funnel_abandoned

Export functions:
1. initTracking() - Load GA4 and FB scripts
2. trackEvent(eventName, data) - Fire to all platforms
3. trackPageView()
4. trackStepView(stepNumber, stepName)
5. trackConversion(transactionId, value)

ELI5: Tracking is like security cameras - we see where customers go, what they click, and where they leave. One function fires to GA4, Facebook, AND GHL!
```

---

# PHASE 4: INTEGRATIONS

---

## PROMPT 20: Stripe API Functions

```
Create serverless functions for Stripe.

FILE: api/create-payment-intent.js

- Accept POST with customerEmail, customerName, metadata
- Create PaymentIntent for $50 (5000 cents)
- Include metadata: tier, totalPrice, propertyType
- Return clientSecret and paymentIntentId
- Handle errors gracefully

FILE: api/handle-webhook.js

- Verify Stripe webhook signature
- Handle payment_intent.succeeded - log success
- Handle payment_intent.payment_failed - trigger notification
- Return 200 on success

FILE: api/notify-payment-failure.js

- Accept POST with customer details
- Send email to homecare@delolmoconstruction.com
- Include: name, email, phone, tier, error message
- For when payment fails twice

Include CORS headers for delolmoconstruction.com

ELI5: Serverless functions run in the cloud. Customer clicks Pay → we ask Stripe to prepare → Stripe gives a secret code → customer's card info goes DIRECTLY to Stripe → we just hear "success" or "failed"!
```

---

## PROMPT 21: GoHighLevel API Functions

```
Create serverless function for GHL integration.

FILE: api/submit-to-ghl.js

Steps:
1. Create Contact with:
   - Standard fields: name, email, phone, address
   - Custom fields: property_type, service_tier, service_total, deposit_paid, balance_due, preferred_dates, time_window, property_details, add_ons, referral_source, stripe_payment_id
   - Tags: Winter Prep, Residential/Commercial, Deposit Paid, [Tier] Tier
   - Source: Winter Prep Funnel

2. Create Opportunity:
   - Pipeline: Homecare
   - Stage: New Booking
   - Monetary value: total price
   - Link to contact

3. Trigger Workflow:
   - Homecare Service Booked workflow

FILE: api/submit-abandoned.js

For exit intent saves:
- Create contact with Abandoned Funnel tag
- Trigger abandoned funnel workflow
- Include partial data (step reached, tier selected if any)

ELI5: GHL is the super-powered contact list. When someone books, we add them, create a "deal" to track, and start automated emails (confirmation, reminders, review request).
```

---

# PHASE 5: ADVANCED FEATURES

---

## PROMPT 22: Exit Intent Popup

```
Build exit intent detection and popup.

HTML additions:
Exit modal with:
- Title: "Wait! Don't leave your pipes unprotected."
- Text: "Have questions? Call us at (737) 387-4995"
- Buttons: Call, Email, Save Progress & Email Link
- Dismiss link

Save progress form:
- Email input
- Send button
- Success message

JS additions:
- Detect mouse leaving viewport (desktop)
- Detect visibility change (mobile)
- showExitModal() / hideExitModal()
- Track exitIntentShown event
- Save progress flow:
  1. Generate progress token
  2. Save to localStorage
  3. Submit to GHL as abandoned
  4. Send email with resume link
  5. Show success message
- Disable exit intent during payment step

ELI5: Like a salesperson saying "Wait, before you go..." We detect when they're leaving and offer help: call us, email us, or we'll save their spot and email them a link to continue later!
```

---

## PROMPT 23: Error Handling System

```
Build comprehensive error handling.

FILE: js/error-handler.js

Error types: VALIDATION, NETWORK, PAYMENT, SERVER, STORAGE

Functions:
1. showErrorToast(type, customMessage) - Bottom toast notification, auto-dismiss 5s
2. showErrorModal(type, options) - For serious errors, with retry/call buttons
3. fetchWithRetry(url, options, maxRetries) - Exponential backoff retry
4. showFieldError(fieldId, message) - Form field errors with ARIA
5. clearFieldError(fieldId)
6. clearAllFieldErrors()
7. logError(type, details) - Console + optional remote logging

Global handlers:
- window.onerror for uncaught errors
- window.onunhandledrejection for promises

Payment failure handling:
- First attempt: "Check your card and try again"
- Second attempt: "Please call us to complete booking"
- Send notification to business

ELI5: Error handling is the safety net. When things break (they will!), we catch it gracefully with friendly messages, not scary technical errors. We also LOG everything so we can fix problems!
```

---

## PROMPT 24: Loading States & Polish

```
Add loading states and micro-interactions throughout.

CSS additions:
- .btn--loading with spinner animation
- .loading-overlay for full-page loading
- .skeleton for placeholder loading
- Step transition animations (slide in/out)
- Card selection pulse animation
- Quantity bump animation
- Input focus glow
- Progress dot animations
- Confirmation checkmark draw animation

JS additions:
- setButtonLoading(btn, isLoading)
- showPageLoading(message) / hidePageLoading()
- transitionToStep(from, to) - Smooth step transitions

Apply to:
- All async operations (ZIP check, payment)
- Step transitions
- Card selections
- Quantity changes

ELI5: Loading states say "something is happening, don't worry!" Animations make the app feel professional and alive. The confirmation checkmark is a mini celebration - makes completing the form feel GOOD!
```

---

# PHASE 6: TESTING

---

## PROMPT 25: Unit Tests

```
Create unit tests for core modules.

FILE: tests/pricing.test.js
- getTierPrice returns correct values
- calculateAddOnsTotal with no add-ons = 0
- calculateAddOnsTotal with gutter residential = 250
- calculateAddOnsTotal with gutter commercial = 360
- calculateTotal combines correctly
- formatCurrency works

FILE: tests/validation.test.js
- isRequired false for empty
- isRequired true for content
- isValidEmail true/false cases
- isValidPhone true for 10 digits
- isValidZipCode true for 5 digits
- validateContactForm returns errors for empty
- validateContactForm valid for complete data

FILE: tests/zip-codes.test.js
- isValidServiceArea true for Austin ZIP
- isValidServiceArea false for Houston ZIP
- isValidServiceArea handles bad input
- getCountyByZip returns correct county

Use simple assertion-based testing (no framework needed).

ELI5: Unit tests check each part BEFORE assembling. If getTierPrice('complete') doesn't return 650, the test fails and we know exactly what broke!
```

---

## PROMPT 26: E2E Testing Checklist

```
Create comprehensive testing checklist.

HAPPY PATH TESTS:
- [ ] Residential complete flow → confirmation
- [ ] Commercial complete flow
- [ ] All add-ons selected
- [ ] Multiple date options

ERROR HANDLING TESTS:
- [ ] Invalid ZIP format
- [ ] Out-of-area ZIP
- [ ] Invalid email
- [ ] Invalid phone
- [ ] Sunday date
- [ ] Date < 48 hours
- [ ] Date > Feb 28
- [ ] Declined card (test: 4000 0000 0000 0002)
- [ ] Second payment failure

SESSION TESTS:
- [ ] Progress saves on exit
- [ ] Resume prompt on return
- [ ] 14-day expiry works

EXIT INTENT TESTS:
- [ ] Modal appears on leave
- [ ] Call button works
- [ ] Email button works
- [ ] Save progress works
- [ ] Resume link works

MOBILE TESTS:
- [ ] iPhone Safari
- [ ] Android Chrome
- [ ] Correct keyboards
- [ ] No zoom on inputs

BROWSER TESTS:
- [ ] Chrome, Safari, Firefox, Edge

ACCESSIBILITY:
- [ ] Keyboard navigation
- [ ] Screen reader announces
- [ ] Focus management
- [ ] Color contrast

PERFORMANCE:
- [ ] Lighthouse > 90
- [ ] Load < 2 seconds

ELI5: E2E testing is being a secret shopper - go through EVERYTHING as a real customer would. The checklist ensures nothing is forgotten!
```

---

# PHASE 7: DEPLOYMENT

---

## PROMPT 27: Deployment

```
Final deployment steps.

ENVIRONMENT VARIABLES:
STRIPE_SECRET_KEY=sk_live_xxxxx
STRIPE_PUBLISHABLE_KEY=pk_live_xxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxx
GHL_API_KEY=xxxxx
GHL_LOCATION_ID=xxxxx
GHL_PIPELINE_ID=xxxxx
GHL_NEW_BOOKING_STAGE_ID=xxxxx
GHL_WORKFLOW_ID=xxxxx

STRIPE WEBHOOK:
1. Add endpoint: https://[site]/api/handle-webhook
2. Select events: payment_intent.succeeded, payment_intent.payment_failed
3. Copy secret to env vars

WEBFLOW INTEGRATION:
Option A: Embed custom code in Webflow page
Option B: Host on Netlify/Vercel, link from Webflow

LIVE PAYMENT TEST:
1. Complete funnel with YOUR card
2. Pay $50
3. Verify: Stripe receipt, GHL contact, email
4. Refund test payment

MONITORING:
- Stripe dashboard
- Google Analytics
- Error tracking (optional)
- Uptime monitoring

ROLLBACK PLAN:
1. Unpublish page in Webflow
2. Notify team
3. Investigate
4. Fix and redeploy

POST-LAUNCH:
- Monitor first 24 hours closely
- Watch conversion rates
- Gather feedback

ELI5: Deployment is opening night! Test with REAL money (then refund). Watch closely the first day. Have a plan to "undo" if something breaks. Celebrate that first real booking! 🎉
```

---

## Summary

This blueprint provides **27 prompts** that systematically build the complete Winter Prep funnel:

1. **Phase 1 (Steps 1-4)**: Foundation
2. **Phase 2 (Steps 5-15)**: All 11 funnel UI steps  
3. **Phase 3 (Steps 16-19)**: Business logic modules
4. **Phase 4 (Steps 20-21)**: Stripe & GHL integrations
5. **Phase 5 (Steps 22-24)**: Advanced features
6. **Phase 6 (Steps 25-26)**: Testing
7. **Phase 7 (Step 27)**: Deployment

Each prompt includes:
- Clear deliverables
- Code structure guidance
- ELI5 explanations for beginners
- Integration with previous steps

**Total estimated implementation time: 18-26 hours**
