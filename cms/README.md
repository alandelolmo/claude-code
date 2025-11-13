# Webflow CMS Collection Templates

This directory contains JSON templates and documentation for setting up Webflow CMS collections.

## Collections Overview

| Collection | Items | Used On | Purpose |
|------------|-------|---------|---------|
| Projects | ~10-20 | Home, Projects section | Showcase completed work |
| Testimonials | ~6-12 | Home, Testimonials section | Client reviews |
| FAQs | ~8-12 | Home, FAQ section | Common questions |
| Stats | 3 | Home, Hero section | Key metrics |
| Blog Posts | Future | /blog page (future) | Content marketing |

## How to Use These Templates

Webflow CMS collections cannot be imported via JSON directly. Use these files as **reference guides** when manually creating collections in Webflow.

### Step-by-Step Setup Process

#### 1. Create Collection

1. In Webflow Editor, go to **CMS** tab
2. Click **+ New Collection**
3. Name it exactly as specified in the JSON file
4. Set singular name (e.g., "Project" for "Projects")

#### 2. Add Fields

For each field in the JSON template:

1. Click **+ New Field** in the collection
2. Select the field type (PlainText, RichText, Number, Image, etc.)
3. Name the field exactly as shown
4. Configure settings:
   - Check "Required" if specified
   - Add help text for clarity
   - Set validation rules if applicable

#### 3. Field Type Mapping

JSON → Webflow field type conversions:

| JSON Type | Webflow Type | Notes |
|-----------|--------------|-------|
| PlainText | Plain Text | Single-line text |
| RichText | Rich Text | Formatted text with editor |
| Number | Number | Numeric values |
| Image | Image | Single image upload |
| MultiImage | Multi-Image | Gallery/multiple images |
| SlugField | Plain Text | Auto-generated URL slug |
| DateTime | Date/Time | Publication dates |
| Switch | Switch | True/false toggle |

#### 4. Add Sample Items

After creating all fields:

1. Click **+ New [Collection Item]**
2. Use the sample data from `sampleItems` in each JSON file
3. Fill in all fields
4. Publish the item
5. Repeat for 3-6 sample items to start

## Detailed Collection Guides

### Projects Collection

**Purpose:** Display portfolio of completed construction projects

**Key Fields:**
- **Title**: Project name (appears as heading)
- **Project Type**: Badge/category label
- **Location**: City and ZIP
- **Square Footage, Duration, Budget**: Project details
- **ROI Percentage**: For investor-focused projects
- **Short Description**: Card view text (200 chars max)
- **Full Description**: Modal/detail view text
- **Main Image**: Primary photo (recommended 1200x800px)
- **Gallery**: Additional before/after photos
- **Featured**: Toggle to show on homepage
- **Order**: Sort order (1, 2, 3, etc.)

**Where Used:**
- Homepage Projects section (filtered by Featured = true)
- Future: Dedicated Projects/Portfolio page

**Recommended Image Sizes:**
- Main Image: 1200x800px (3:2 ratio)
- Gallery Images: 1200x800px or 1600x1067px

**Sample Alt Text:**
> "Modern kitchen renovation with white cabinetry and quartz countertops in Tarrytown, Austin"

### Testimonials Collection

**Purpose:** Display client reviews and social proof

**Key Fields:**
- **Name**: Client name (can use initials for privacy)
- **Quote**: The testimonial text
- **Project Type**: What service they used (optional)
- **Location**: City (optional, for local SEO)
- **Order**: Display sequence
- **Featured**: Show on homepage

**Where Used:**
- Homepage Testimonials section
- Future: Dedicated Reviews page

**Tips:**
- Keep quotes concise (100-200 words ideal)
- Include specific details for authenticity
- Get written permission before publishing
- Use first name + last initial for privacy (e.g., "Sarah M.")

### FAQs Collection

**Purpose:** Answer common questions, improve SEO

**Key Fields:**
- **Question**: The FAQ question
- **Answer**: Detailed answer (can include formatting)
- **Category**: Group related FAQs (optional)
- **Order**: Display sequence (1 = first)

**Where Used:**
- Homepage FAQ accordion section
- Generates FAQPage JSON-LD for rich results

**Best Practices:**
- Start with 8-12 core questions
- Address objections (price, timeline, licensing)
- Use natural language people actually search
- Include local keywords (Austin, Texas)
- Update as new questions arise

**Category Suggestions:**
- General
- Pricing
- Process
- Services
- Licensing & Insurance

### Stats Collection

**Purpose:** Display key metrics in hero section

**Key Fields:**
- **Value**: The number/stat (e.g., "500+", "24hrs")
- **Label**: What it represents
- **Subtext**: Additional context (optional)
- **Order**: Position (1, 2, or 3)

**Where Used:**
- Homepage hero section (exactly 3 stats)

**Recommendations:**
- Limit to 3 stats for visual clarity
- Use impressive, verifiable numbers
- Update quarterly/annually as numbers grow
- Examples:
  - Projects completed
  - Years in business
  - Client satisfaction rate
  - Estimate turnaround time
  - Team size

### Blog Posts Collection (Future)

**Purpose:** Content marketing, SEO, thought leadership

**Key Fields:**
- **Title**: Post headline
- **Summary**: Excerpt for listing pages
- **Body**: Full post content
- **Main Image**: Featured image (1200x630px for social sharing)
- **Category**: Post type/topic
- **Author**: Writer (default: "Alan Del Olmo")
- **Publish Date**: When published
- **Featured**: Highlight on blog home
- **Meta Description**: SEO description (160 chars)

**Where Used:**
- /blog listing page (future)
- /blog/[slug] post template (future)
- Homepage "Latest Posts" section (optional)

**Blog Topic Ideas:**
- Renovation tips for Austin homeowners
- House flipping strategies
- Before/after project showcases
- Seasonal maintenance guides
- Local Austin construction news
- Material comparisons
- Budget planning guides

## CMS Best Practices

### Content Strategy

1. **Start Small**
   - Launch with 4-6 projects
   - 6 testimonials
   - 8-10 FAQs
   - 3 hero stats
   - Blog can wait until later

2. **Maintain Quality**
   - Professional photos only
   - Proofread all text
   - Verify facts and figures
   - Get client approval for projects/testimonials

3. **Regular Updates**
   - Add new projects monthly
   - Collect testimonials after each job
   - Update stats quarterly
   - Blog posts: 2-4x per month (when blog launches)

### SEO Optimization

**For All CMS Items:**
- Use descriptive, keyword-rich titles
- Write unique meta descriptions
- Optimize image file names (`austin-kitchen-remodel.jpg` not `IMG_1234.jpg`)
- Write detailed alt text for all images
- Include location keywords naturally

**For Blog Posts:**
- Target one primary keyword per post
- Use headings (H2, H3) to structure content
- Internal link to service pages
- Include clear call-to-action
- Aim for 800-1500 words for SEO value

### Image Guidelines

**Technical Requirements:**
- Format: JPG (photos) or PNG (graphics/logos)
- Max file size: 500KB per image (compress before upload)
- Resolution: 72 DPI for web
- Color space: RGB (not CMYK)

**Recommended Sizes:**
- Project main images: 1200x800px
- Blog featured images: 1200x630px
- Testimonial headshots (if used): 400x400px

**Tools:**
- Compress: TinyPNG, ImageOptim, Squoosh
- Resize: Photoshop, Canva, GIMP
- Stock photos: Unsplash, Pexels (if needed)

### Performance Tips

1. **Limit Collection Items**
   - Don't exceed 100 items per collection on the current plan
   - Archive old items rather than delete
   - Use filters to show relevant items only

2. **Optimize Images**
   - Compress all images before upload
   - Use Webflow's responsive image features
   - Enable lazy loading

3. **Filter Smart**
   - Use "Featured" toggle instead of loading all items
   - Set limits on collection lists (e.g., show max 6 projects)

## Workflow Recommendations

### Adding a New Project

1. Complete project and get client approval
2. Take professional photos (or hire photographer)
3. Compress and rename images
4. Create new Project item in Webflow CMS
5. Fill in all fields
6. Set "Featured" if it should appear on homepage
7. Set appropriate "Order" number
8. Publish
9. Test on live site

### Collecting Testimonials

1. Email client after project completion
2. Request feedback/review
3. Get written permission to publish
4. Edit for length/clarity if needed (with permission)
5. Add to Testimonials CMS
6. Send thank-you note to client

### Updating FAQs

1. Track questions from:
   - Form submissions
   - Phone calls
   - Email inquiries
2. Add new FAQ if question appears 3+ times
3. Review quarterly and update answers
4. Remove outdated FAQs
5. Reorder based on relevance/importance

## Troubleshooting

### CMS Items Not Showing

- Check if item is Published (not Draft)
- Verify filters on Collection List
- Check "Featured" toggle if used
- Ensure item isn't filtered out by conditions

### Images Not Loading

- Check file size (max 4MB in Webflow)
- Verify image format (JPG, PNG, GIF, SVG)
- Re-upload if necessary
- Clear browser cache

### Rich Text Formatting Issues

- Paste as plain text first, then format
- Avoid copying from Word/Google Docs directly
- Use Webflow's rich text editor formatting
- Preview before publishing

## Migration & Backup

Webflow doesn't provide easy CMS export, so:

1. **Document Everything**
   - Keep a spreadsheet of all CMS items
   - Back up images to cloud storage
   - Save content in Google Docs

2. **Regular Backups**
   - Monthly: Export/screenshot collection structure
   - Before major changes: Duplicate collections
   - Use Webflow's backup feature

3. **Version Control**
   - Note when changes are made
   - Keep old content in "Archive" if needed
   - Document what works for future reference

## Next Steps

1. Set up Projects collection first (most visible)
2. Add Testimonials (social proof)
3. Create FAQs (SEO + user help)
4. Add Stats (quick wins)
5. Hold Blog for Phase 2 (after site launch)

## Resources

- [Webflow CMS Documentation](https://university.webflow.com/lesson/intro-to-the-cms)
- [Image Optimization Guide](https://university.webflow.com/lesson/image-optimization)
- [SEO Best Practices](https://university.webflow.com/lesson/seo-title-and-meta-description)
