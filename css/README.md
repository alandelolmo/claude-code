# Custom CSS Files

Custom CSS for the Del Olmo Construction Webflow site.

## Files

### `variables.css`
CSS custom properties (variables) for:
- Colors (brand, semantic, theme-based)
- Typography (font families, sizes, weights)
- Spacing scale
- Layout dimensions
- Borders and radius
- Shadows
- Transitions
- Z-index layers

**Implementation**: Add to Webflow Project Settings → Custom Code → Head Code (all pages)

### `utilities.css`
Utility classes for:
- Containers and sections
- Typography helpers
- Spacing (margins, paddings)
- Flexbox utilities
- Grid utilities
- Display utilities
- Common helpers

**Implementation**: Add to Webflow Project Settings → Custom Code → Head Code (all pages)

### `components.css`
Component styles for:
- Buttons (.btn, .btn--primary, .btn--secondary)
- Badges
- Cards
- Section headers
- Stats
- Icon wrappers
- Forms
- Links
- Lists

**Implementation**: Add to Webflow Project Settings → Custom Code → Head Code (all pages)

### `layout.css`
Major layout components:
- Navigation header
- Mobile navigation
- Theme toggle
- Footer
- Modal/overlay
- Back to top button
- Cookie banner

**Implementation**: Add to Webflow Project Settings → Custom Code → Head Code (all pages)

## Usage in Webflow

### Option 1: Single Combined File
Combine all CSS files into one and add to Project Settings → Custom Code:

```html
<style>
  /* Paste contents of variables.css */
  /* Paste contents of utilities.css */
  /* Paste contents of components.css */
  /* Paste contents of layout.css */
</style>
```

### Option 2: Separate Files (Recommended for Maintenance)
Add each file separately in order:

```html
<style>
  /* variables.css content */
</style>
<style>
  /* utilities.css content */
</style>
<style>
  /* components.css content */
</style>
<style>
  /* layout.css content */
</style>
```

### Option 3: External Hosting
1. Host CSS files on a CDN or server
2. Link them in Webflow custom code:

```html
<link rel="stylesheet" href="https://yourdomain.com/css/delolmo-styles.css">
```

## Class Naming Convention

All custom classes follow BEM-inspired naming:
- Block: `.component-name`
- Element: `.component-name__element`
- Modifier: `.component-name--modifier`
- State: `.is-active`, `.is-open`, `.is-visible`

## Responsive Design

All components are mobile-first and responsive:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## Dark Theme

The dark theme is controlled by the `.theme--dark` class on the body element. All color variables automatically adjust when this class is present.

Toggle with JavaScript:
```javascript
document.body.classList.toggle('theme--dark');
```

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- iOS Safari (latest 2 versions)
- Android Chrome (latest 2 versions)

## Notes

- All spacing uses a consistent 4px scale
- Colors use CSS variables for easy theming
- Transitions use consistent timing functions
- Z-index values follow a defined scale to prevent conflicts
