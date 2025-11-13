# HTML Embed Snippets

Pre-built HTML snippets for integrating third-party services with the Del Olmo Construction Webflow site.

## Files Overview

### Analytics & Tracking

| File | Description | Location in Webflow |
|------|-------------|---------------------|
| `google-analytics.html` | GA4 tracking code | Project Settings → Head Code |
| `google-tag-manager.html` | GTM container (head + body) | Head Code + Footer Code |
| `facebook-pixel.html` | Meta Pixel for FB ads | Project Settings → Head Code |
| `hotjar.html` | Heatmaps & session recordings (optional) | Project Settings → Head Code |
| `microsoft-clarity.html` | Session recordings (alternative to Hotjar) | Project Settings → Head Code |

### GoHighLevel Integrations

| File | Description | Location in Webflow |
|------|-------------|---------------------|
| `gohighlevel-form.html` | Lead capture form embed | Inside modal on home page |
| `gohighlevel-calendar.html` | Booking calendar widget | /thank-you page |

## Implementation Guide

### Step 1: Analytics Setup (Choose ONE approach)

**Option A: Google Tag Manager (Recommended)**
1. Use `google-tag-manager.html`
2. Add head code to Project Settings → Head Code
3. Add body code to Project Settings → Footer Code (at very top)
4. Configure GA4, Facebook Pixel, and other tags WITHIN GTM dashboard
5. Benefits: Easier to manage multiple tags, no code changes needed

**Option B: Direct Implementation**
1. Use `google-analytics.html` for GA4
2. Use `facebook-pixel.html` for FB tracking
3. Add both to Project Settings → Head Code
4. Benefits: Simpler, fewer dependencies

### Step 2: GoHighLevel Setup

#### Lead Form Integration

1. **Get Your GHL Form ID:**
   - Log into GoHighLevel
   - Go to Sites → Forms
   - Click on your estimate request form
   - Copy the Form ID from the URL or embed code

2. **Add Form to Webflow:**
   - Open `gohighlevel-form.html`
   - Replace `YOUR_FORM_ID` with your actual form ID
   - In Webflow, add an Embed element inside `.modal-form-wrapper`
   - Paste the code
   - Test by opening the modal and verifying the form loads

3. **Style Matching (Optional):**
   - In GHL form editor, customize colors to match your brand:
     - Button color: `#14B8A6` (teal)
     - Text color: `#111827` (dark gray)
   - Or use the JavaScript option in the embed for custom styles

#### Calendar Integration

1. **Get Your GHL Calendar ID:**
   - Log into GoHighLevel
   - Go to Calendars
   - Click on your consultation calendar
   - Copy the Calendar ID from settings or embed code

2. **Add Calendar to Thank You Page:**
   - Open `gohighlevel-calendar.html`
   - Replace `YOUR_CALENDAR_ID` with your actual calendar ID
   - In Webflow, create `/thank-you` page
   - Add an Embed element
   - Paste the code

3. **Set Up Form Redirect:**
   - In GHL form settings, set the redirect URL to:
     `https://www.delolmoconstruction.com/thank-you`

### Step 3: Optional Analytics Tools

#### Hotjar (Heatmaps & Recordings)
1. Sign up at https://www.hotjar.com
2. Get your Site ID from Hotjar dashboard
3. Use `hotjar.html` and replace `XXXXXXX`
4. Add to Project Settings → Head Code

#### Microsoft Clarity (Free Alternative)
1. Sign up at https://clarity.microsoft.com
2. Get your Project ID
3. Use `microsoft-clarity.html` and replace `XXXXXXXXXX`
4. Add to Project Settings → Head Code

**Note:** Use either Hotjar OR Clarity, not both (they serve the same purpose)

## Required IDs Checklist

Before implementation, gather these IDs:

- [ ] Google Analytics 4 Measurement ID (format: `G-XXXXXXXXXX`)
- [ ] Google Tag Manager Container ID (format: `GTM-XXXXXXX`)
- [ ] Facebook Pixel ID (format: 15-16 digits)
- [ ] GoHighLevel Form ID
- [ ] GoHighLevel Calendar ID
- [ ] Hotjar Site ID (optional)
- [ ] Microsoft Clarity Project ID (optional)

## Testing

### Test Analytics

1. **GA4:**
   - Open site in browser
   - Open DevTools → Network tab
   - Filter for `google-analytics.com`
   - Look for `collect` requests
   - Or use GA4 DebugView in GA dashboard

2. **GTM:**
   - Install GTM Preview extension
   - Click "Preview" in GTM dashboard
   - Navigate to your site
   - Verify tags are firing

3. **Facebook Pixel:**
   - Install Meta Pixel Helper extension
   - Visit your site
   - Check that pixel is detected and firing PageView

### Test GHL Integrations

1. **Form:**
   - Open modal
   - Verify form loads (no errors)
   - Submit a test entry
   - Check GHL dashboard for the lead
   - Verify you receive email notification

2. **Calendar:**
   - Visit /thank-you page
   - Verify calendar loads
   - Book a test appointment
   - Check GHL calendar for the booking

## Troubleshooting

### Form/Calendar Not Loading

**Check:**
- Form/Calendar ID is correct (no spaces, complete ID)
- GHL account is active and form/calendar is published
- Browser console for JavaScript errors
- Browser ad-blocker isn't blocking the iframe

**Solutions:**
- Try the alternate embed method (JavaScript vs iframe)
- Add error handling to your custom JS
- Use the fallback noscript content

### Analytics Not Tracking

**Check:**
- IDs are correct (G-XXXXXXXXXX format for GA4)
- Code is in the correct location (head vs footer)
- Browser console for errors
- Ad-blockers disabled for testing
- Cookie consent has been granted

**Solutions:**
- Use GTM Preview mode to debug
- Check GTM/GA4 real-time reports
- Verify gtag.js is loading in Network tab

### CORS or Mixed Content Errors

**Check:**
- All embeds use HTTPS (not HTTP)
- Webflow site has SSL enabled
- GHL forms/calendar are on HTTPS endpoints

**Solutions:**
- Force HTTPS in all embed URLs
- Contact GHL support if their endpoints aren't HTTPS

## Privacy & Compliance

### GDPR/CCPA Compliance

1. **Cookie Consent:**
   - The site includes a cookie banner (implemented via JavaScript)
   - Before consent, analytics storage is denied:
     ```javascript
     gtag('consent', 'default', {
       'analytics_storage': 'denied'
     });
     ```
   - After consent, it's granted via the cookie banner accept button

2. **Privacy Policy:**
   - Create a /privacy page in Webflow
   - Disclose all tracking technologies
   - Explain data collection and usage
   - Provide opt-out instructions

3. **Terms of Service:**
   - Create a /terms page in Webflow
   - Include standard terms for service businesses

### Data Retention

Configure in each platform:
- **GA4:** Settings → Data Retention → Set to 14 months
- **GHL:** Check data retention policies
- **Hotjar/Clarity:** Configure in dashboard settings

## Performance Optimization

### Load Scripts Asynchronously
All provided scripts use `async` or deferred loading to avoid blocking page render.

### Minimize Tracking Scripts
Choose one analytics setup (GTM preferred) to reduce redundant scripts.

### Monitor Page Speed
After adding all scripts, test with:
- Google PageSpeed Insights
- Webflow's built-in performance metrics
- GTmetrix or similar tools

Target: Keep total script load under 500KB for fast load times.

## Support & Resources

- **Google Analytics:** https://support.google.com/analytics
- **Google Tag Manager:** https://support.google.com/tagmanager
- **Facebook Pixel:** https://www.facebook.com/business/help/
- **GoHighLevel:** https://help.gohighlevel.com/
- **Webflow:** https://university.webflow.com/

## Updates & Maintenance

- Review analytics quarterly
- Update tracking codes when platforms release new versions
- Test all integrations after Webflow updates
- Monitor GHL webhook/API changes
- Keep form/calendar IDs documented for team reference
