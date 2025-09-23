# Images Directory Structure

This directory contains all images used in the SavantX website.

## Folder Organization

### `/logos/`
- Company logos
- Brand assets
- Logo variations (light/dark themes)

### `/icons/`
- SVG icons
- UI icons
- Navigation icons
- Social media icons

### `/hero/`
- Hero section images
- Banner images
- Background images

## Usage in Next.js

Images in the `public/images/` directory can be referenced in your components like this:

```tsx
import Image from 'next/image';

// For logos
<Image src="/images/logos/savantx-logo.png" alt="SavantX Logo" width={200} height={50} />

// For icons
<Image src="/images/icons/menu-icon.svg" alt="Menu" width={24} height={24} />

// For hero images
<Image src="/images/hero/hero-banner.jpg" alt="Hero Banner" width={1200} height={600} />
```

## File Naming Conventions

- Use kebab-case for file names: `company-logo.svg`
- Include size/type in filename when needed: `logo-light-200x50.png`
- Use descriptive names: `hero-banner-desktop.jpg`

## Image Optimization

Next.js automatically optimizes images when using the `Image` component. For best performance:
- Use appropriate formats (SVG for icons, WebP/PNG for photos)
- Provide proper width and height attributes
- Use the `priority` prop for above-the-fold images
