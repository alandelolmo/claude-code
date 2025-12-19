# Del Olmo Construction - Winter Prep Service Funnel
## Technical Specification Document
### Version 1.0 | December 2024

---

## Table of Contents
1. [Project Overview](#1-project-overview)
2. [Business Requirements](#2-business-requirements)
3. [Technical Architecture](#3-technical-architecture)
4. [User Flow & Wireframes](#4-user-flow--wireframes)
5. [Data Models](#5-data-models)
6. [Pricing Engine](#6-pricing-engine)
7. [Integrations](#7-integrations)
8. [Schema.org Implementation](#8-schemaorg-implementation)
9. [Performance Requirements](#9-performance-requirements)
10. [Error Handling](#10-error-handling)
11. [Security Requirements](#11-security-requirements)
12. [Testing Plan](#12-testing-plan)
13. [GoHighLevel Setup Guide](#13-gohighlevel-setup-guide)
14. [Deployment Checklist](#14-deployment-checklist)

---

## 1. Project Overview

### 1.1 Purpose
Build a custom, mobile-first sales funnel for Del Olmo Construction's Winter Home Prep services. The funnel will allow residential and commercial customers in the Austin metro area to select service tiers, add-ons, schedule appointments, and pay a deposit via Stripe.

### 1.2 URL Structure
- **Production URL:** https://www.delolmoconstruction.com/homecare/winter-prep
- **Parent Site:** https://www.delolmoconstruction.com (Webflow)

### 1.3 Brand Guidelines
| Element | Value |
|---------|-------|
| Primary Color | Dark Navy (#1a1a2e) |
| Accent Color | Gold/Yellow (#d4a84b) |
| Font Family | Clean sans-serif (match existing site) |
| Logo | https://cdn.prod.website-files.com/691be8c6d873a989811763e1/691e0a871950475551939973_del-olmo-construction-high-resolution-logo-transparent%20-%20Only%20Logo%20no%20words.png |

### 1.4 Key Stakeholders
- **Business Owner:** Del Olmo Construction
- **Contact Email:** homecare@delolmoconstruction.com
- **Phone:** (737) 387-4995

---

## 2. Business Requirements

### 2.1 Service Tiers

#### ESSENTIAL ($410)
**Tagline:** "Basic Freeze Protection"

| Service | Included |
|---------|----------|
| Pipe insulation | ✓ |
| Outdoor faucet covers/freeze misers (2 included) | ✓ |
| Emergency shut-off valve labeling | ✓ |

#### COMPLETE ($650) — MOST POPULAR
**Tagline:** "Full Comfort & Efficiency"

| Service | Included |
|---------|----------|
| Everything in Essential | ✓ |
| HVAC filter replacement (1 included) | ✓ |
| Weatherstripping doors (2 doors included) | ✓ |
| Water heater inspection | ✓ |

#### ULTIMATE ($750)
**Tagline:** "Total Home Protection"

| Service | Included |
|---------|----------|
| Everything in Complete | ✓ |
| Attic insulation check | ✓ |
| Full home assessment with checklist report | ✓ |
| Priority scheduling | ✓ |

### 2.2 Add-On Services

#### Residential Pricing (50% margin)
| Add-On | Price |
|--------|-------|
| Gutter Cleaning | $250 |
| Additional Freeze Miser | $80 /each |
| Additional Door Weatherstripping | $60 /each |
| Additional HVAC Filter | $60 /each |

#### Commercial Pricing (65% margin)
| Add-On | Price |
|--------|-------|
| Gutter Cleaning | $360 |
| Additional Freeze Miser | $115 /each |
| Additional Door Weatherstripping | $85 /each |
| Additional HVAC Filter | $85 /each |

### 2.3 Deposit & Cancellation Policy
- **Deposit Amount:** $50 (flat fee, all tiers)
- **Refund Policy:** Full refund with 24-hour notice prior to scheduled service
- **Policy Display:** Review step + confirmation email

### 2.4 Service Area
- **Base Location:** Downtown Austin, TX
- **Radius:** Approximately 1 hour drive time
- **Validation Method:** ZIP code whitelist
- **Counties Served:** Travis, Williamson, Hays, Bastrop

### 2.5 Scheduling Parameters
| Parameter | Value |
|-----------|-------|
| Days Available | Monday-Friday (AM & PM), Saturday (AM only) |
| Time Windows | Morning (8am-12pm), Afternoon (12pm-5pm) |
| Booking Window | 48 hours minimum lead time |
| Season End | February 28, 2025 |

### 2.6 Key Messaging

#### Primary Headline
> "Don't Let Another 2021 Freeze Catch You Off Guard"

#### Value Proposition
> "Winter prep costs less than $750. A burst pipe? $5,000 to $70,000+."

#### Social Proof
> "Over 70 homes protected last year"

#### Call-to-Action
> "Get Winter-Ready"

#### Urgency/Cutoff
> "Winter prep bookings close February 28"

---

## 3. Technical Architecture

### 3.1 Technology Stack
| Component | Technology |
|-----------|------------|
| Frontend | HTML5, CSS3, JavaScript (Vanilla JS) |
| Hosting | Webflow (embedded custom code) |
| Payments | Stripe Checkout / Stripe Elements |
| Backend | Serverless Functions (Netlify/Vercel) or Webflow Logic |
| Database | GoHighLevel (CRM) |
| Email | GoHighLevel |
| Analytics | GA4, Facebook Pixel, GHL Tracking |

### 3.2 System Architecture Diagram
```
┌─────────────────────────────────────────────────────────────────┐
│                         USER BROWSER                            │
│    ┌─────────────────────────────────────────────────────────┐  │
│    │              Webflow Page (Custom Code)                 │  │
│    │  ┌───────────────────────────────────────────────────┐  │  │
│    │  │           Multi-Step Funnel Form                  │  │  │
│    │  │  [ZIP] → [Type] → [Tier] → [Add-ons] → [Info]    │  │  │
│    │  │  → [Schedule] → [Review] → [Payment] → [Confirm]  │  │  │
│    │  └───────────────────────────────────────────────────┘  │  │
│    └─────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                     SERVERLESS BACKEND                          │
│  ┌────────────────┐  ┌────────────────┐  ┌─────────────────┐   │
│  │  ZIP Validator │  │ Pricing Engine │  │ Session Manager │   │
│  └────────────────┘  └────────────────┘  └─────────────────┘   │
│  ┌────────────────┐  ┌────────────────┐  ┌─────────────────┐   │
│  │ Stripe Handler │  │  GHL API       │  │ Email Service   │   │
│  └────────────────┘  └────────────────┘  └─────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                              │
            ┌─────────────────┼─────────────────┐
            ▼                 ▼                 ▼
     ┌────────────┐   ┌────────────┐   ┌────────────┐
     │   Stripe   │   │ GoHighLevel│   │  Analytics │
     │  Payments  │   │    CRM     │   │ GA4/FB/GHL │
     └────────────┘   └────────────┘   └────────────┘
```

### 3.3 File Structure
```
/winter-prep-funnel/
├── index.html                 # Main funnel page
├── css/
│   └── funnel.css            # Styles (mobile-first)
├── js/
│   ├── funnel.js             # Main funnel logic
│   ├── pricing.js            # Pricing calculations
│   ├── validation.js         # Form validation
│   ├── zip-codes.js          # ZIP code whitelist
│   ├── tracking.js           # Analytics events
│   ├── storage.js            # Local storage handler
│   └── stripe-handler.js     # Stripe integration
├── api/
│   ├── create-payment-intent.js    # Stripe serverless function
│   ├── submit-to-ghl.js            # GHL API handler
│   ├── send-save-progress-email.js # Email handler
│   └── handle-webhook.js           # Stripe webhook handler
└── assets/
    └── images/               # Optimized WebP images
```

---

## 4. User Flow & Wireframes

### 4.1 Complete User Flow

```
START
  │
  ▼
┌─────────────────────────────────────┐
│  STEP 1: LANDING / HERO             │
│  - Headline + value prop            │
│  - "Get Winter-Ready" CTA           │
│  - Trust badges + social proof      │
└─────────────────────────────────────┘
  │
  ▼
┌─────────────────────────────────────┐
│  STEP 2: ZIP CODE CHECK             │
│  - Input: ZIP code                  │
│  - Validate against whitelist       │
│  ├─► PASS: Continue to Step 3      │
│  └─► FAIL: Show message + phone #   │
└─────────────────────────────────────┘
  │
  ▼
┌─────────────────────────────────────┐
│  STEP 3: PROPERTY TYPE              │
│  - Radio: Residential / Commercial  │
│  - Affects add-on pricing           │
└─────────────────────────────────────┘
  │
  ▼
┌─────────────────────────────────────┐
│  STEP 4: TIER SELECTION             │
│  - 3 cards: Essential/Complete/Ultimate │
│  - "Most Popular" badge on Complete │
│  - Price + features displayed       │
└─────────────────────────────────────┘
  │
  ▼
┌─────────────────────────────────────┐
│  STEP 5: ADD-ONS                    │
│  - Gutter Cleaning (checkbox)       │
│  - Extra Freeze Misers (quantity)   │
│  - Extra Doors (quantity)           │
│  - Extra HVAC Filters (quantity)    │
│  - Running total displayed          │
└─────────────────────────────────────┘
  │
  ▼
┌─────────────────────────────────────┐
│  STEP 6: PROPERTY DETAILS           │
│  - Number of outdoor faucets        │
│  - Number of doors                  │
│  - Number of HVAC systems           │
│  - Gate code / access instructions  │
└─────────────────────────────────────┘
  │
  ▼
┌─────────────────────────────────────┐
│  STEP 7: CONTACT & ADDRESS          │
│  - Full name                        │
│  - Email                            │
│  - Phone                            │
│  - Service address                  │
│  - How did you hear about us?       │
│  - Special requests / notes         │
└─────────────────────────────────────┘
  │
  ▼
┌─────────────────────────────────────┐
│  STEP 8: SCHEDULING                 │
│  - Preferred date #1 (date picker)  │
│  - Preferred date #2 (optional)     │
│  - Time window (Morning/Afternoon)  │
│  - Cutoff message displayed         │
└─────────────────────────────────────┘
  │
  ▼
┌─────────────────────────────────────┐
│  STEP 9: REVIEW & SUMMARY           │
│  - All selections displayed         │
│  - Total price                      │
│  - Deposit amount ($50)             │
│  - Cancellation policy              │
│  - Terms checkbox                   │
└─────────────────────────────────────┘
  │
  ▼
┌─────────────────────────────────────┐
│  STEP 10: PAYMENT                   │
│  - Stripe Elements (card input)     │
│  - "Pay $50 Deposit" button         │
│  ├─► SUCCESS: Continue to Step 11  │
│  └─► FAIL: Show error, retry        │
│       └─► 2nd FAIL: Show phone #    │
└─────────────────────────────────────┘
  │
  ▼
┌─────────────────────────────────────┐
│  STEP 11: CONFIRMATION              │
│  - Success message                  │
│  - "We'll confirm within 24 hours"  │
│  - Order summary                    │
│  - Contact info                     │
└─────────────────────────────────────┘
  │
  ▼
END
```

### 4.2 Error & Edge Case Flows

#### ZIP Code Rejection Flow
```
ZIP Validation FAILS
  │
  ▼
┌─────────────────────────────────────┐
│  MESSAGE:                           │
│  "We're sorry, we don't currently   │
│   service your area. For special    │
│   requests, please call us at       │
│   (737) 387-4995"                   │
│                                     │
│  [Call Now Button]                  │
└─────────────────────────────────────┘
```

#### Payment Failure Flow
```
Payment Attempt #1 FAILS
  │
  ▼
┌─────────────────────────────────────┐
│  ERROR MESSAGE:                     │
│  "Payment failed. Please check      │
│   your card details and try again." │
│                                     │
│  [Retry Payment Button]             │
└─────────────────────────────────────┘
  │
  ▼
Payment Attempt #2 FAILS
  │
  ▼
┌─────────────────────────────────────┐
│  ERROR MESSAGE:                     │
│  "We're having trouble processing   │
│   your payment. Please call us at   │
│   (737) 387-4995 to complete your   │
│   booking."                         │
│                                     │
│  [Call Now Button]                  │
│                                     │
│  ► TRIGGER: Send notification to    │
│    homecare@delolmoconstruction.com │
└─────────────────────────────────────┘
```

#### Exit Intent Flow
```
User moves to leave page
  │
  ▼
┌─────────────────────────────────────┐
│  POPUP:                             │
│  ┌─────────────────────────────────┐│
│  │  "Wait! Don't leave your pipes  ││
│  │   unprotected."                 ││
│  │                                 ││
│  │  "Have questions? Call us at    ││
│  │   (737) 387-4995 — we're happy  ││
│  │   to help."                     ││
│  │                                 ││
│  │  [Call (737) 387-4995]          ││
│  │  [Email Us]                     ││
│  │  [Save Progress & Email Link]   ││
│  │                                 ││
│  │  [✕ Close]                      ││
│  └─────────────────────────────────┘│
└─────────────────────────────────────┘
```

### 4.3 Mobile Wireframe (Single-Step View)

```
┌─────────────────────────────┐
│  ☰  DEL OLMO CONSTRUCTION   │
├─────────────────────────────┤
│                             │
│  ● ○ ○ ○ ○ ○ ○ ○ ○ ○       │  ◄── Progress indicator
│                             │
│  ┌───────────────────────┐  │
│  │                       │  │
│  │    STEP CONTENT       │  │
│  │                       │  │
│  │                       │  │
│  └───────────────────────┘  │
│                             │
│  ┌───────────────────────┐  │
│  │     NEXT BUTTON       │  │  ◄── Sticky CTA
│  └───────────────────────┘  │
│                             │
│  ◄ Back                     │
│                             │
└─────────────────────────────┘
```

---

## 5. Data Models

### 5.1 Funnel Session Object

```javascript
const funnelSession = {
  // Session metadata
  sessionId: "uuid-v4",
  createdAt: "2024-12-10T14:30:00Z",
  updatedAt: "2024-12-10T14:35:00Z",
  expiresAt: "2024-12-24T14:30:00Z", // 14 days
  currentStep: 4,
  
  // Step 2: ZIP validation
  zipCode: "78701",
  zipValidated: true,
  
  // Step 3: Property type
  propertyType: "residential", // "residential" | "commercial"
  
  // Step 4: Tier selection
  selectedTier: "complete", // "essential" | "complete" | "ultimate"
  tierPrice: 650,
  
  // Step 5: Add-ons
  addOns: {
    gutterCleaning: false,
    additionalFreezeMisers: 0,
    additionalDoors: 0,
    additionalFilters: 0
  },
  addOnsTotal: 0,
  
  // Step 6: Property details
  propertyDetails: {
    outdoorFaucets: 2,
    doors: 2,
    hvacSystems: 1,
    gateCode: "1234",
    accessInstructions: "Side gate unlocked"
  },
  
  // Step 7: Contact info
  contact: {
    fullName: "John Smith",
    email: "john@example.com",
    phone: "512-555-1234",
    serviceAddress: {
      street: "123 Main St",
      city: "Austin",
      state: "TX",
      zip: "78701"
    },
    referralSource: "Google",
    specialRequests: "Please call before arriving"
  },
  
  // Step 8: Scheduling
  scheduling: {
    preferredDate1: "2024-12-15",
    preferredDate2: "2024-12-16",
    timeWindow: "morning" // "morning" | "afternoon"
  },
  
  // Step 9: Review
  termsAccepted: true,
  
  // Step 10: Payment
  payment: {
    depositAmount: 50,
    stripePaymentIntentId: "pi_xxxxx",
    paymentStatus: "succeeded", // "pending" | "succeeded" | "failed"
    paymentAttempts: 1,
    paidAt: "2024-12-10T14:40:00Z"
  },
  
  // Calculated totals
  totals: {
    subtotal: 650,
    addOns: 0,
    total: 650,
    deposit: 50,
    balanceDue: 600
  }
};
```

### 5.2 GoHighLevel Contact Object

```javascript
const ghlContact = {
  // Standard fields
  firstName: "John",
  lastName: "Smith",
  email: "john@example.com",
  phone: "+15125551234",
  address1: "123 Main St",
  city: "Austin",
  state: "TX",
  postalCode: "78701",
  
  // Custom fields (must be created in GHL)
  customFields: {
    property_type: "Residential",
    service_tier: "Complete",
    service_total: 650,
    deposit_paid: 50,
    balance_due: 600,
    preferred_date_1: "2024-12-15",
    preferred_date_2: "2024-12-16",
    time_window: "Morning",
    outdoor_faucets: 2,
    doors: 2,
    hvac_systems: 1,
    gate_code: "1234",
    access_instructions: "Side gate unlocked",
    add_ons: "None",
    special_requests: "Please call before arriving",
    referral_source: "Google",
    stripe_payment_id: "pi_xxxxx",
    booking_date: "2024-12-10"
  },
  
  // Tags
  tags: [
    "Winter Prep",
    "Residential",
    "Deposit Paid",
    "Complete Tier"
  ],
  
  // Source
  source: "Winter Prep Funnel"
};
```

### 5.3 GoHighLevel Opportunity Object

```javascript
const ghlOpportunity = {
  name: "Winter Prep - John Smith",
  pipelineId: "HOMECARE_PIPELINE_ID", // Replace with actual ID
  stageId: "NEW_BOOKING_STAGE_ID",    // Replace with actual ID
  status: "open",
  monetaryValue: 650,
  contactId: "CONTACT_ID",            // From contact creation
  
  // Custom fields
  customFields: {
    service_tier: "Complete",
    deposit_status: "Paid",
    scheduled_date: "TBD",
    balance_due: 600
  }
};
```

---

## 6. Pricing Engine

### 6.1 Pricing Constants

```javascript
const PRICING = {
  // Base tier prices (residential & commercial same)
  tiers: {
    essential: 410,
    complete: 650,
    ultimate: 750
  },
  
  // Add-on prices by property type
  addOns: {
    residential: {
      gutterCleaning: 250,
      additionalFreezeMiser: 80,
      additionalDoor: 60,
      additionalFilter: 60
    },
    commercial: {
      gutterCleaning: 360,
      additionalFreezeMiser: 115,
      additionalDoor: 85,
      additionalFilter: 85
    }
  },
  
  // Deposit
  deposit: 50
};
```

### 6.2 Pricing Calculation Function

```javascript
/**
 * Calculate total price based on selections
 * @param {string} propertyType - "residential" or "commercial"
 * @param {string} tier - "essential", "complete", or "ultimate"
 * @param {object} addOns - Add-on selections
 * @returns {object} - Pricing breakdown
 */
function calculatePricing(propertyType, tier, addOns) {
  const tierPrice = PRICING.tiers[tier];
  const addOnPrices = PRICING.addOns[propertyType];
  
  let addOnsTotal = 0;
  const addOnBreakdown = [];
  
  if (addOns.gutterCleaning) {
    addOnsTotal += addOnPrices.gutterCleaning;
    addOnBreakdown.push({
      name: "Gutter Cleaning",
      quantity: 1,
      unitPrice: addOnPrices.gutterCleaning,
      total: addOnPrices.gutterCleaning
    });
  }
  
  if (addOns.additionalFreezeMisers > 0) {
    const total = addOns.additionalFreezeMisers * addOnPrices.additionalFreezeMiser;
    addOnsTotal += total;
    addOnBreakdown.push({
      name: "Additional Freeze Miser",
      quantity: addOns.additionalFreezeMisers,
      unitPrice: addOnPrices.additionalFreezeMiser,
      total: total
    });
  }
  
  if (addOns.additionalDoors > 0) {
    const total = addOns.additionalDoors * addOnPrices.additionalDoor;
    addOnsTotal += total;
    addOnBreakdown.push({
      name: "Additional Door Weatherstripping",
      quantity: addOns.additionalDoors,
      unitPrice: addOnPrices.additionalDoor,
      total: total
    });
  }
  
  if (addOns.additionalFilters > 0) {
    const total = addOns.additionalFilters * addOnPrices.additionalFilter;
    addOnsTotal += total;
    addOnBreakdown.push({
      name: "Additional HVAC Filter",
      quantity: addOns.additionalFilters,
      unitPrice: addOnPrices.additionalFilter,
      total: total
    });
  }
  
  const subtotal = tierPrice + addOnsTotal;
  
  return {
    tierPrice,
    addOnsTotal,
    addOnBreakdown,
    subtotal,
    deposit: PRICING.deposit,
    balanceDue: subtotal - PRICING.deposit
  };
}
```

---

## 7. Integrations

### 7.1 Stripe Integration

#### Configuration
```javascript
const STRIPE_CONFIG = {
  publishableKey: "pk_live_xxxxx", // Replace with actual key
  currency: "usd",
  depositAmount: 5000, // $50.00 in cents
  statementDescriptor: "DELOLMO WINTERPREP"
};
```

#### Create Payment Intent (Serverless Function)
```javascript
// api/create-payment-intent.js
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  try {
    const { customerEmail, customerName, metadata } = JSON.parse(event.body);
    
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 5000, // $50.00
      currency: 'usd',
      receipt_email: customerEmail,
      description: 'Winter Prep Service Deposit',
      statement_descriptor: 'DELOLMO WINTERPREP',
      metadata: {
        customerName,
        tier: metadata.tier,
        totalPrice: metadata.totalPrice,
        propertyType: metadata.propertyType,
        ...metadata
      }
    });
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        clientSecret: paymentIntent.client_secret,
        paymentIntentId: paymentIntent.id
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
```

#### Webhook Handler (Serverless Function)
```javascript
// api/handle-webhook.js
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  const sig = event.headers['stripe-signature'];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  
  let stripeEvent;
  
  try {
    stripeEvent = stripe.webhooks.constructEvent(
      event.body,
      sig,
      webhookSecret
    );
  } catch (err) {
    return { statusCode: 400, body: `Webhook Error: ${err.message}` };
  }
  
  switch (stripeEvent.type) {
    case 'payment_intent.succeeded':
      // Handle successful payment
      await handleSuccessfulPayment(stripeEvent.data.object);
      break;
    case 'payment_intent.payment_failed':
      // Handle failed payment - send notification
      await handleFailedPayment(stripeEvent.data.object);
      break;
  }
  
  return { statusCode: 200, body: 'Received' };
};
```

### 7.2 GoHighLevel Integration

#### API Configuration
```javascript
const GHL_CONFIG = {
  apiBaseUrl: "https://rest.gohighlevel.com/v1",
  locationId: "YOUR_LOCATION_ID", // Replace with actual
  apiKey: process.env.GHL_API_KEY
};
```

#### Create Contact & Opportunity (Serverless Function)
```javascript
// api/submit-to-ghl.js
const axios = require('axios');

exports.handler = async (event) => {
  const data = JSON.parse(event.body);
  
  try {
    // 1. Create Contact
    const contactResponse = await axios.post(
      `${GHL_CONFIG.apiBaseUrl}/contacts/`,
      {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        address1: data.address,
        city: data.city,
        state: data.state,
        postalCode: data.zip,
        tags: data.tags,
        source: "Winter Prep Funnel",
        customField: data.customFields
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.GHL_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );
    
    const contactId = contactResponse.data.contact.id;
    
    // 2. Create Opportunity
    const opportunityResponse = await axios.post(
      `${GHL_CONFIG.apiBaseUrl}/pipelines/${data.pipelineId}/opportunities`,
      {
        name: `Winter Prep - ${data.firstName} ${data.lastName}`,
        stageId: data.stageId,
        status: "open",
        monetaryValue: data.totalPrice,
        contactId: contactId
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.GHL_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );
    
    // 3. Trigger Workflow
    await axios.post(
      `${GHL_CONFIG.apiBaseUrl}/contacts/${contactId}/workflow/${data.workflowId}`,
      {},
      {
        headers: {
          'Authorization': `Bearer ${process.env.GHL_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        contactId,
        opportunityId: opportunityResponse.data.opportunity.id
      })
    };
    
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
```

### 7.3 Analytics Integration

#### GA4 Configuration
```javascript
const GA4_CONFIG = {
  measurementId: "G-0G28S49V8R"
};

// Initialize GA4
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-0G28S49V8R');
```

#### Facebook Pixel Configuration
```javascript
const FB_PIXEL_CONFIG = {
  pixelId: "1282038360634959"
};

// Initialize Facebook Pixel
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1282038360634959');
fbq('track', 'PageView');
```

#### Tracking Events Map
```javascript
const TRACKING_EVENTS = {
  pageView: {
    ga4: { event: 'page_view' },
    fb: { event: 'PageView' },
    ghl: { event: 'page_view' }
  },
  zipValidated: {
    ga4: { event: 'zip_validated', params: { zip_code: '' } },
    fb: { event: 'CustomizeProduct' },
    ghl: { event: 'zip_validated' }
  },
  tierSelected: {
    ga4: { event: 'tier_selected', params: { tier: '', price: 0 } },
    fb: { event: 'AddToCart', params: { content_name: '', value: 0 } },
    ghl: { event: 'tier_selected' }
  },
  addOnsSelected: {
    ga4: { event: 'addons_selected', params: { addons: '', total: 0 } },
    fb: { event: 'CustomizeProduct' },
    ghl: { event: 'addons_selected' }
  },
  contactFormCompleted: {
    ga4: { event: 'generate_lead', params: { value: 0 } },
    fb: { event: 'Lead', params: { value: 0 } },
    ghl: { event: 'lead_captured' }
  },
  paymentInitiated: {
    ga4: { event: 'begin_checkout', params: { value: 50 } },
    fb: { event: 'InitiateCheckout', params: { value: 50 } },
    ghl: { event: 'checkout_started' }
  },
  paymentCompleted: {
    ga4: { event: 'purchase', params: { value: 50, transaction_id: '' } },
    fb: { event: 'Purchase', params: { value: 50, currency: 'USD' } },
    ghl: { event: 'purchase_completed' }
  }
};

/**
 * Fire tracking event across all platforms
 * @param {string} eventName - Key from TRACKING_EVENTS
 * @param {object} data - Event-specific data
 */
function trackEvent(eventName, data = {}) {
  const events = TRACKING_EVENTS[eventName];
  if (!events) return;
  
  // GA4
  if (events.ga4) {
    gtag('event', events.ga4.event, { ...events.ga4.params, ...data });
  }
  
  // Facebook
  if (events.fb) {
    fbq('track', events.fb.event, { ...events.fb.params, ...data });
  }
  
  // GHL (via data layer or direct)
  if (events.ghl && window.ghl) {
    window.ghl.track(events.ghl.event, data);
  }
}
```

---

## 8. Schema.org Implementation

### 8.1 Organization Schema
```json
{
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Del Olmo Construction",
  "url": "https://www.delolmoconstruction.com",
  "logo": "https://cdn.prod.website-files.com/691be8c6d873a989811763e1/691e0a871950475551939973_del-olmo-construction-high-resolution-logo-transparent%20-%20Only%20Logo%20no%20words.png",
  "image": "https://www.delolmoconstruction.com/images/og-image.jpg",
  "description": "Austin's trusted general contractor offering kitchen & bath remodels, home renovations, concrete work, and seasonal home care services.",
  "telephone": "+1-737-387-4995",
  "email": "info@delolmoconstruction.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Austin",
    "addressRegion": "TX",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 30.2672,
    "longitude": -97.7431
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Austin",
      "sameAs": "https://en.wikipedia.org/wiki/Austin,_Texas"
    },
    {
      "@type": "City",
      "name": "Round Rock"
    },
    {
      "@type": "City",
      "name": "Cedar Park"
    },
    {
      "@type": "City",
      "name": "Georgetown"
    },
    {
      "@type": "City",
      "name": "Pflugerville"
    },
    {
      "@type": "City",
      "name": "Kyle"
    },
    {
      "@type": "City",
      "name": "Buda"
    },
    {
      "@type": "City",
      "name": "Bastrop"
    }
  ],
  "priceRange": "$$",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "50"
  },
  "sameAs": [
    "https://www.facebook.com/delolmoconstruction"
  ]
}
```

### 8.2 Service Schema (Winter Prep)
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Home Winterization",
  "name": "Winter Home Prep Services",
  "description": "Professional winter preparation services to protect your Austin home from freeze damage. Includes pipe insulation, faucet covers, HVAC maintenance, weatherstripping, and full home assessments.",
  "provider": {
    "@type": "HomeAndConstructionBusiness",
    "name": "Del Olmo Construction",
    "url": "https://www.delolmoconstruction.com"
  },
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 30.2672,
      "longitude": -97.7431
    },
    "geoRadius": "80467"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Winter Prep Service Packages",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Essential Winter Prep",
          "description": "Basic freeze protection including pipe insulation, 2 freeze misers, and emergency shut-off valve labeling."
        },
        "price": "410.00",
        "priceCurrency": "USD"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Complete Winter Prep",
          "description": "Full comfort & efficiency package including Essential services plus HVAC filter replacement, weatherstripping for 2 doors, and water heater inspection."
        },
        "price": "650.00",
        "priceCurrency": "USD"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Ultimate Winter Prep",
          "description": "Total home protection including Complete services plus attic insulation check, full home assessment with report, and priority scheduling."
        },
        "price": "750.00",
        "priceCurrency": "USD"
      }
    ]
  }
}
```

### 8.3 FAQ Schema
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is included in Del Olmo Construction's Winter Prep service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our Winter Prep services include pipe insulation, outdoor faucet freeze misers, emergency shut-off valve labeling, HVAC filter replacement, door weatherstripping, water heater inspection, attic insulation checks, and full home assessments depending on the package selected."
      }
    },
    {
      "@type": "Question",
      "name": "How much does Winter Prep cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Winter Prep packages start at $410 for Essential, $650 for Complete, and $750 for Ultimate. A $50 deposit is required to secure your booking, which is refundable with 24-hour notice."
      }
    },
    {
      "@type": "Question",
      "name": "What areas do you serve for Winter Prep?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We serve the Austin metro area including Travis, Williamson, Hays, and Bastrop counties. This includes Austin, Round Rock, Cedar Park, Georgetown, Pflugerville, Kyle, Buda, Bastrop, and surrounding communities within approximately 1 hour of downtown Austin."
      }
    },
    {
      "@type": "Question",
      "name": "What is the cancellation policy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your $50 deposit is fully refundable if you cancel at least 24 hours before your scheduled service. Cancellations with less than 24 hours notice forfeit the deposit."
      }
    }
  ]
}
```

### 8.4 BreadcrumbList Schema
```json
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
      "name": "Home Care",
      "item": "https://www.delolmoconstruction.com/homecare"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Winter Prep",
      "item": "https://www.delolmoconstruction.com/homecare/winter-prep"
    }
  ]
}
```

---

## 9. Performance Requirements

### 9.1 Target Metrics
| Metric | Target |
|--------|--------|
| First Contentful Paint (FCP) | < 1.5s |
| Largest Contentful Paint (LCP) | < 2.0s |
| Time to Interactive (TTI) | < 2.0s |
| Total Blocking Time (TBT) | < 200ms |
| Cumulative Layout Shift (CLS) | < 0.1 |
| Total Page Size | < 500KB |

### 9.2 Optimization Strategies

#### Images
- Use WebP format with JPEG fallback
- Lazy load all images below the fold
- Use responsive srcset for different screen sizes
- Compress all images to < 100KB each

#### CSS
- Inline critical CSS in `<head>`
- Load non-critical CSS asynchronously
- Minify all CSS
- Use CSS containment where appropriate

#### JavaScript
- Defer non-critical JS loading
- Minify and bundle JS files
- Use code splitting for step-specific logic
- Avoid render-blocking scripts

#### Fonts
- Use `font-display: swap`
- Preload critical fonts
- Subset fonts to required characters
- Use system fonts as fallback

### 9.3 Mobile-First Implementation
```css
/* Base styles for mobile (320px+) */
.funnel-container {
  width: 100%;
  padding: 16px;
}

/* Tablet (768px+) */
@media (min-width: 768px) {
  .funnel-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 24px;
  }
}

/* Desktop (1024px+) */
@media (min-width: 1024px) {
  .funnel-container {
    max-width: 800px;
    padding: 32px;
  }
}
```

---

## 10. Error Handling

### 10.1 Error Types & Responses

| Error Type | User Message | Action |
|------------|--------------|--------|
| ZIP not in service area | "We're sorry, we don't currently service your area. For special requests, please call us at (737) 387-4995" | Show call button |
| Payment declined (1st attempt) | "Payment failed. Please check your card details and try again." | Allow retry |
| Payment declined (2nd attempt) | "We're having trouble processing your payment. Please call us at (737) 387-4995 to complete your booking." | Show call button, send notification |
| Network error | "Connection error. Please check your internet and try again." | Auto-retry with backoff |
| Server error | "Something went wrong on our end. Please try again or call (737) 387-4995." | Log error, show call button |
| Session expired | "Your session has expired. Your progress has been saved." | Offer to reload |
| Invalid date selected | "Please select a date at least 48 hours from now." | Highlight valid dates |
| Past season cutoff | "Winter prep bookings have closed for this season. Please call for availability." | Show call button |

### 10.2 Error Logging
```javascript
/**
 * Log error to console and optional monitoring service
 * @param {string} errorType - Category of error
 * @param {object} errorData - Error details
 */
function logError(errorType, errorData) {
  const errorLog = {
    type: errorType,
    timestamp: new Date().toISOString(),
    sessionId: getSessionId(),
    currentStep: getCurrentStep(),
    userAgent: navigator.userAgent,
    url: window.location.href,
    data: errorData
  };
  
  console.error('Funnel Error:', errorLog);
  
  // Send to monitoring (if configured)
  if (window.errorMonitor) {
    window.errorMonitor.capture(errorLog);
  }
}
```

### 10.3 Payment Failure Notification
```javascript
/**
 * Send notification on payment failure
 * @param {object} paymentData - Payment attempt details
 */
async function notifyPaymentFailure(paymentData) {
  await fetch('/api/notify-payment-failure', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      to: 'homecare@delolmoconstruction.com',
      subject: 'Payment Failure - Winter Prep Funnel',
      customerName: paymentData.customerName,
      customerEmail: paymentData.customerEmail,
      customerPhone: paymentData.customerPhone,
      tier: paymentData.tier,
      amount: paymentData.amount,
      errorMessage: paymentData.error,
      timestamp: new Date().toISOString()
    })
  });
}
```

---

## 11. Security Requirements

### 11.1 Data Protection
- All form data transmitted over HTTPS
- Stripe handles all payment card data (PCI compliant)
- No sensitive data stored in localStorage (except session ID)
- API keys stored as environment variables (never in client code)

### 11.2 Input Validation
```javascript
const VALIDATION_RULES = {
  zipCode: {
    pattern: /^\d{5}$/,
    message: "Please enter a valid 5-digit ZIP code"
  },
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: "Please enter a valid email address"
  },
  phone: {
    pattern: /^[\d\s\-\(\)\.]+$/,
    minLength: 10,
    message: "Please enter a valid phone number"
  },
  fullName: {
    minLength: 2,
    maxLength: 100,
    message: "Please enter your full name"
  }
};

/**
 * Validate input against rules
 * @param {string} field - Field name
 * @param {string} value - Input value
 * @returns {object} - { valid: boolean, message: string }
 */
function validateInput(field, value) {
  const rules = VALIDATION_RULES[field];
  if (!rules) return { valid: true };
  
  if (rules.pattern && !rules.pattern.test(value)) {
    return { valid: false, message: rules.message };
  }
  
  if (rules.minLength && value.length < rules.minLength) {
    return { valid: false, message: rules.message };
  }
  
  if (rules.maxLength && value.length > rules.maxLength) {
    return { valid: false, message: rules.message };
  }
  
  return { valid: true };
}
```

### 11.3 CSRF Protection
- Use Stripe's built-in CSRF protection for payments
- Validate session tokens on all API calls
- Implement rate limiting on form submissions

### 11.4 Content Security Policy
```html
<meta http-equiv="Content-Security-Policy" content="
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://js.stripe.com https://www.googletagmanager.com https://connect.facebook.net;
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https: blob:;
  connect-src 'self' https://api.stripe.com https://*.google-analytics.com https://www.facebook.com https://rest.gohighlevel.com;
  frame-src https://js.stripe.com https://hooks.stripe.com;
  font-src 'self' https://fonts.gstatic.com;
">
```

---

## 12. Testing Plan

### 12.1 Unit Tests

| Component | Test Cases |
|-----------|------------|
| Pricing Engine | Calculate correct tier prices |
| | Calculate residential add-on prices |
| | Calculate commercial add-on prices |
| | Handle zero add-ons |
| | Handle multiple add-ons |
| ZIP Validator | Accept valid service area ZIPs |
| | Reject invalid ZIPs |
| | Reject out-of-area ZIPs |
| | Handle malformed input |
| Date Validator | Reject dates < 48 hours out |
| | Reject dates after Feb 28 |
| | Accept valid dates |
| | Handle weekend restrictions |
| Form Validator | Validate email format |
| | Validate phone format |
| | Validate ZIP format |
| | Require mandatory fields |

### 12.2 Integration Tests

| Integration | Test Cases |
|-------------|------------|
| Stripe | Create payment intent successfully |
| | Handle card declined |
| | Process successful payment |
| | Webhook receives events |
| GoHighLevel | Create contact successfully |
| | Create opportunity successfully |
| | Trigger workflow |
| | Handle API errors |
| Email | Send confirmation email |
| | Send save-progress email |
| | Send failure notification |
| Analytics | Fire GA4 events |
| | Fire FB Pixel events |
| | Track all funnel steps |

### 12.3 End-to-End Tests

| Scenario | Steps |
|----------|-------|
| Happy Path - Residential | 1. Load page |
| | 2. Enter valid ZIP |
| | 3. Select Residential |
| | 4. Select Complete tier |
| | 5. Add gutter cleaning |
| | 6. Enter property details |
| | 7. Enter contact info |
| | 8. Select schedule |
| | 9. Accept terms |
| | 10. Complete payment |
| | 11. Verify confirmation |
| | 12. Verify GHL contact created |
| | 13. Verify email received |
| Happy Path - Commercial | Same as above with commercial selection |
| ZIP Rejection | Enter out-of-area ZIP, verify rejection message |
| Payment Failure | Use Stripe test card for decline, verify retry flow |
| Session Recovery | Complete 5 steps, close browser, reopen, verify progress |
| Exit Intent | Begin funnel, trigger exit, verify popup |
| Mobile Flow | Complete full flow on mobile viewport |

### 12.4 Performance Tests

| Test | Target |
|------|--------|
| Page Load (3G) | < 3s |
| Page Load (4G) | < 2s |
| Page Load (WiFi) | < 1.5s |
| Lighthouse Score (Mobile) | > 90 |
| Lighthouse Score (Desktop) | > 95 |

### 12.5 Browser Compatibility

| Browser | Versions |
|---------|----------|
| Chrome | Latest 2 |
| Safari | Latest 2 |
| Firefox | Latest 2 |
| Edge | Latest 2 |
| iOS Safari | 14+ |
| Android Chrome | Latest |

---

## 13. GoHighLevel Setup Guide

### 13.1 Custom Fields to Create

Navigate to: Settings → Custom Fields → Contact

| Field Name | Field ID (suggested) | Type |
|------------|---------------------|------|
| Property Type | property_type | Dropdown (Residential, Commercial) |
| Service Tier | service_tier | Dropdown (Essential, Complete, Ultimate) |
| Service Total | service_total | Number |
| Deposit Paid | deposit_paid | Number |
| Balance Due | balance_due | Number |
| Preferred Date 1 | preferred_date_1 | Date |
| Preferred Date 2 | preferred_date_2 | Date |
| Time Window | time_window | Dropdown (Morning, Afternoon) |
| Outdoor Faucets | outdoor_faucets | Number |
| Doors | doors | Number |
| HVAC Systems | hvac_systems | Number |
| Gate Code | gate_code | Text |
| Access Instructions | access_instructions | Text Area |
| Add-Ons | add_ons | Text Area |
| Special Requests | special_requests | Text Area |
| Referral Source | referral_source | Dropdown (Google, Facebook, Referral, Other) |
| Stripe Payment ID | stripe_payment_id | Text |
| Booking Date | booking_date | Date |

### 13.2 Pipeline Setup

**Pipeline Name:** Homecare

**Stages:**
1. New Booking
2. Appointment Confirmed
3. Service Scheduled
4. Service Completed
5. Invoice Sent
6. Paid
7. Closed

### 13.3 Tags to Create

- Winter Prep
- Residential
- Commercial
- Deposit Paid
- Essential Tier
- Complete Tier
- Ultimate Tier
- Abandoned Funnel

### 13.4 Workflow: "Homecare Service Booked"

**Trigger:** Contact Tag Added = "Deposit Paid"

**Actions:**

1. **Immediately - Send Email (Customer Confirmation)**
   - From: no-reply@delolmoconstruction.com
   - Subject: "Your Winter Prep Booking is Confirmed!"
   - Template: See Section 13.5

2. **Immediately - Send SMS (Customer)**
   - Message: "Thanks for booking your Winter Prep with Del Olmo Construction! We'll confirm your appointment within 24 hours. Questions? Call (737) 387-4995"

3. **Immediately - Send Internal Notification**
   - To: homecare@delolmoconstruction.com
   - Subject: "New Winter Prep Booking - {{contact.full_name}}"
   - Include all contact details and booking info

4. **Immediately - Send SMS to Owner**
   - To: [Your Phone Number]
   - Message: "New Winter Prep booking: {{contact.full_name}} - {{customField.service_tier}} (${{customField.service_total}})"

5. **Wait 48 hours before scheduled date**
   - Send Email Reminder
   - Subject: "Your Winter Prep Appointment is in 2 Days"

6. **Wait 24 hours before scheduled date**
   - Send SMS Reminder
   - Message: "Reminder: Your Winter Prep service is tomorrow! We'll arrive during your {{customField.time_window}} window. Questions? (737) 387-4995"

7. **Wait 1 day after service date**
   - Send Review Request Email
   - Subject: "How was your Winter Prep service?"

### 13.5 Email Templates

#### Customer Confirmation Email
```
Subject: Your Winter Prep Booking is Confirmed!

Hi {{contact.first_name}},

Thank you for booking your Winter Prep service with Del Olmo Construction!

BOOKING DETAILS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Service: {{customField.service_tier}} Winter Prep
Total: ${{customField.service_total}}
Deposit Paid: ${{customField.deposit_paid}}
Balance Due: ${{customField.balance_due}}

Requested Dates:
• {{customField.preferred_date_1}}
• {{customField.preferred_date_2}}
Time Window: {{customField.time_window}}

Service Address:
{{contact.address1}}
{{contact.city}}, {{contact.state}} {{contact.postal_code}}

WHAT'S NEXT:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
We'll contact you within 24 hours to confirm your appointment date and time.

CANCELLATION POLICY:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Your $50 deposit is fully refundable if you cancel at least 24 hours before your scheduled service.

Questions? Call us at (737) 387-4995 or reply to this email.

Thank you for choosing Del Olmo Construction!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Del Olmo Construction
Austin's Trusted General Contractor
(737) 387-4995
www.delolmoconstruction.com
```

### 13.6 Workflow: "Abandoned Funnel Follow-up"

**Trigger:** Contact Tag Added = "Abandoned Funnel"

**Actions:**

1. **Wait 1 hour**
   - Send Email
   - Subject: "Still thinking about Winter Prep?"
   - Body: Include resume link

2. **Wait 24 hours**
   - Send SMS
   - Message: "Hi {{contact.first_name}}, you started booking Winter Prep but didn't finish. Austin's next freeze could come any day - finish your booking here: [link] or call (737) 387-4995"

3. **Wait 3 days**
   - Send Email
   - Subject: "Don't let the freeze catch you off guard"
   - Body: Fear-based messaging about 2021 freeze

### 13.7 API Key Setup

1. Navigate to: Settings → Business Profile → Labs
2. Enable "API Access"
3. Go to: Settings → Business Profile → API Keys
4. Click "Create New Key"
5. Name: "Winter Prep Funnel"
6. Save the key securely (shown only once)

---

## 14. Deployment Checklist

### 14.1 Pre-Deployment

- [ ] All environment variables configured
  - [ ] STRIPE_SECRET_KEY
  - [ ] STRIPE_PUBLISHABLE_KEY
  - [ ] STRIPE_WEBHOOK_SECRET
  - [ ] GHL_API_KEY
  - [ ] GHL_LOCATION_ID
  - [ ] GHL_PIPELINE_ID
  - [ ] GHL_STAGE_ID
  - [ ] GHL_WORKFLOW_ID

- [ ] Stripe setup complete
  - [ ] Live mode enabled
  - [ ] Webhook endpoint configured
  - [ ] Test transaction successful

- [ ] GoHighLevel setup complete
  - [ ] All custom fields created
  - [ ] Pipeline created with stages
  - [ ] Tags created
  - [ ] Workflows built and activated
  - [ ] API key generated

- [ ] Analytics verified
  - [ ] GA4 tracking code installed
  - [ ] Facebook Pixel installed
  - [ ] GHL tracking snippet added
  - [ ] Test events firing correctly

- [ ] All tests passing
  - [ ] Unit tests
  - [ ] Integration tests
  - [ ] E2E tests
  - [ ] Mobile tests

- [ ] Performance verified
  - [ ] Lighthouse score > 90
  - [ ] Page load < 2s

- [ ] Legal pages linked
  - [ ] Privacy Policy
  - [ ] Terms of Service

### 14.2 Deployment Steps

1. [ ] Deploy serverless functions
2. [ ] Upload static assets to CDN
3. [ ] Add custom code to Webflow
4. [ ] Publish Webflow page
5. [ ] Verify SSL certificate
6. [ ] Test live payment (small amount, refund)
7. [ ] Verify GHL contact creation
8. [ ] Verify email delivery
9. [ ] Test on multiple devices/browsers

### 14.3 Post-Deployment

- [ ] Monitor error logs (24 hours)
- [ ] Verify analytics data flowing
- [ ] Check email deliverability
- [ ] Confirm GHL automation triggers
- [ ] Set up uptime monitoring
- [ ] Document any issues found

### 14.4 Rollback Plan

If critical issues discovered:
1. Disable funnel page in Webflow (set to draft)
2. Redirect URL to main site
3. Notify team
4. Investigate and fix
5. Re-test before re-deployment

---

## Appendix A: ZIP Code Whitelist

The following ZIP codes are within approximately 1 hour of downtown Austin and should be included in the validation whitelist:

### Travis County
78701, 78702, 78703, 78704, 78705, 78712, 78717, 78719, 78721, 78722, 78723, 78724, 78725, 78726, 78727, 78728, 78729, 78730, 78731, 78732, 78733, 78734, 78735, 78736, 78737, 78738, 78739, 78741, 78742, 78744, 78745, 78746, 78747, 78748, 78749, 78750, 78751, 78752, 78753, 78754, 78756, 78757, 78758, 78759

### Williamson County
78613 (Cedar Park), 78615 (Coupland), 78617 (Del Valle), 78626 (Georgetown), 78628 (Georgetown), 78633 (Georgetown), 78634 (Hutto), 78641 (Leander), 78642 (Liberty Hill), 78664 (Round Rock), 78665 (Round Rock), 78681 (Round Rock), 78717 (Austin), 78727 (Austin), 78728 (Austin), 78729 (Austin), 78750 (Austin)

### Hays County
78610 (Buda), 78619 (Driftwood), 78620 (Dripping Springs), 78640 (Kyle), 78652 (Manchaca), 78666 (San Marcos), 78737 (Austin), 78739 (Austin)

### Bastrop County
78602 (Bastrop), 78612 (Cedar Creek), 78621 (Elgin), 78650 (McDade), 78659 (Paige), 78662 (Red Rock)

### Additional Service Areas
78653 (Manor), 78660 (Pflugerville), 78669 (Spicewood), 78676 (Wimberley)

---

## Appendix B: Glossary

| Term | Definition |
|------|------------|
| Freeze Miser | Insulated outdoor faucet cover that prevents freezing |
| GHL | GoHighLevel - CRM and marketing automation platform |
| LCP | Largest Contentful Paint - Core Web Vital metric |
| PCI | Payment Card Industry - Security standard for payments |
| ROM | Rough Order of Magnitude - Preliminary estimate |
| Schema.org | Structured data vocabulary for SEO |
| Serverless | Cloud functions that run without managing servers |
| Webhook | HTTP callback for real-time notifications |

---

**Document Version:** 1.0
**Last Updated:** December 2024
**Author:** Claude (Anthropic)
**For:** Del Olmo Construction

---

*This specification is ready for developer implementation. All requirements, integrations, and testing criteria have been defined based on stakeholder input.*
