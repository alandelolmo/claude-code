# JSON-LD Schema Templates

This directory contains structured data (JSON-LD) templates for SEO and rich results in search engines.

## Files

### `local-business.json`
Combined GeneralContractor + LocalBusiness schema with:
- Business contact information
- Service areas (Austin metro)
- Operating hours
- Service catalog
- Geographic coordinates

**Implementation**: Add to Webflow Project Settings → Custom Code → Head Code (all pages)

### `organization.json`
Organization schema with:
- Company information
- Founder details
- Social media links
- Areas of expertise

**Implementation**: Add to Webflow Project Settings → Custom Code → Head Code (home page)

### `faq-page.json`
FAQPage schema for rich FAQ results in Google.

**Implementation**:
1. This template contains sample FAQs
2. In production, this should be dynamically generated from the FAQs CMS collection
3. Use Webflow's CMS + Custom Code to loop through FAQs and build this JSON-LD
4. Add to Home page custom code

### `breadcrumb.json`
Breadcrumb navigation schema.

**Implementation**: Add to Webflow Project Settings → Custom Code → Head Code (home page)

## Dynamic Schema Implementation

For CMS-driven content (FAQs, blog posts), you'll need to:

1. **In Webflow CMS template pages**: Add custom code embed
2. **Use Webflow's CMS fields**: Reference fields within `<script type="application/ld+json">` tags
3. **Example for Blog Posts**:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "{{cms-field:title}}",
  "datePublished": "{{cms-field:publish-date}}",
  "author": {
    "@type": "Person",
    "name": "Alan Del Olmo"
  }
}
</script>
```

## Validation

After implementation, validate all schemas using:
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)

## Notes

- **DO NOT** add AggregateRating schema until you have real customer reviews
- Update image URLs with actual Webflow asset URLs
- Adjust service areas based on actual coverage
- Update social media URLs with real profiles
- Verify business hours match actual availability
