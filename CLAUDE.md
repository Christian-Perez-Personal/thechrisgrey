# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal website for Christian Perez (@thechrisgrey) - Founder & CEO of Altivum Inc., former Green Beret (18D), host of The Vector Podcast, and author of "Beyond the Assessment". Built with React + TypeScript + Vite, styled with Tailwind CSS, deployed on AWS Amplify.

## Development Commands

**Local Development:**
```bash
npm run dev          # Start dev server at http://localhost:5173
npm run build        # TypeScript compile + production build (outputs to dist/)
npm run preview      # Preview production build locally
npm run lint         # Run ESLint on TypeScript files
```

**Deployment:**
- Pushing to `main` branch automatically triggers AWS Amplify deployment
- Amplify uses `amplify.yml` configuration (runs `npm ci` then `npm run build`)
- Build artifacts from `dist/` directory are deployed

## Architecture

### Routing & Layout
- React Router v6 with client-side routing
- Global layout in `App.tsx`: `<ScrollToTop>` → `<Navigation>` → `<Routes>` → `<Footer>`
- 8 main routes: `/` (Home), `/about`, `/altivum`, `/podcast`, `/beyond-the-assessment`, `/blog`, `/links`, `/contact`

### Design System (Tailwind)

**Custom Color Palette** (defined in `tailwind.config.js`):
- `altivum-dark`: #0A0F1C (backgrounds)
- `altivum-navy`: #1A2332 (cards, nav)
- `altivum-blue`: #2E4A6B (accents)
- `altivum-slate`: #4A5A73
- `altivum-silver`: #9BA6B8 (body text)
- `altivum-gold`: #C5A572 (highlights, CTAs)

**Typography System:**
- All fonts use SF Pro Display (Apple's system font) with fallbacks to Helvetica Neue, Segoe UI
- Centralized typography utilities in `src/utils/typography.ts`
- Consistent ultra-light weight (200) across all text
- Fluid sizing using `clamp()` for responsive design
- 7 predefined text styles: `heroHeader`, `sectionHeader`, `cardTitleLarge`, `cardTitleSmall`, `subtitle`, `bodyText`, `smallText`
- Usage: Import `typography` and apply styles inline: `<h1 style={typography.heroHeader}>Title</h1>`
- NEVER use Google Fonts (Inter, Playfair, Montserrat) - those were removed in favor of SF Pro Display

**Icons:**
- Google Material Icons loaded via CDN in `index.html`
- Usage: `<span className="material-icons">icon_name</span>`
- Brand logos (social media) use inline SVG paths

**Custom Animations:**
- `animate-fade-in`: Hero section entrance (1.2s)
- `animate-nav-fade-in`: Navigation delayed entrance (0.8s with 2s delay)
- `shimmer`: Background shimmer effect
- Defined as Tailwind keyframes in `tailwind.config.js`

### Home Page Scroll Experience

The Home page (`src/pages/Home.tsx`) features a sophisticated scroll-based animation system:

**Structure:**
1. **Hero Section (100vh)**: Static hero image with fade-in animation
2. **Summary Section (450vh mobile / 500vh desktop)**: Sticky profile image with scroll-triggered key points
3. **CTA Section**: Standard content with social links

**Summary Section Mechanics:**
- Profile image is `position: sticky` inside a tall container (450vh mobile, 500vh desktop)
- 4 key points fade in from left as user scrolls:
  - Mobile: appear every 50vh
  - Desktop: appear every 80vh
  - Points: Personal Biography, Altivum Inc, The Vector Podcast, Beyond the Assessment
- Scroll progress tracked via `useState` + `useEffect` with throttled scroll listener using `requestAnimationFrame`
- Key points styled as left-aligned tabs with `border-l-4 border-altivum-gold`
- Uses `will-change: opacity, transform` for performance optimization

**Navigation Transparency:**
- Nav bar stays transparent through hero + summary sections (600vh total on home page)
- Becomes solid (`bg-altivum-navy/95 backdrop-blur-md`) after scrolling past summary
- Threshold: `window.innerHeight * 6` in `Navigation.tsx`
- On other pages, nav becomes solid after 20px scroll

### Navigation Structure

The Navigation component (`src/components/Navigation.tsx`) features a dropdown system:

**Desktop Navigation:**
- "About" is a dropdown button with 4 sub-items:
  - Personal Biography (`/about`)
  - Altivum Inc (`/altivum`)
  - The Vector Podcast (`/podcast`)
  - Beyond the Assessment (`/beyond-the-assessment`)
- Dropdown closes when clicking outside (using `useRef` and `mousedown` event listener)
- Other nav items: Home, Blog, Links, Contact

**Mobile Navigation:**
- Hamburger menu toggle (visible on `md:hidden`)
- "About" section expanded inline with all sub-items
- Menu has solid background (`bg-altivum-navy/95 backdrop-blur-md`) for readability

### SEO & Metadata

**SEO Component** (`src/components/SEO.tsx`):
- Uses `react-helmet-async` for dynamic meta tags
- Automatically appends "| Christian Perez" to page titles
- Default OG image: `https://thechrisgrey.com/og.png`
- Includes JSON-LD structured data with `@graph` for AI discovery:
  - Person schema for Christian Perez
  - Organization schema for Altivum Inc.
  - WebSite schema for the site itself
- Custom structured data can be merged via `structuredData` prop
- All pages should use this component for consistent SEO

**Usage:**
```tsx
<SEO
  title="Page Title"
  description="Page description"
  keywords="optional, keywords"
  structuredData={[...]} // optional additional schemas
/>
```

### Component Patterns

**Responsive Design:**
- Mobile-first approach with Tailwind breakpoints (`sm:`, `md:`, `lg:`)
- Touch-optimized with `touch-manipulation` class on interactive elements
- Mobile-specific considerations: larger tap targets (min-h-[48px]), adjusted spacing

**Images:**
- Assets stored in `src/assets/`
- Import and use: `import heroImage from '../assets/hero2.png'`
- Large images: profile photos, hero banners, featured content
- Small images: QR codes, logos

## Key Files

- `tailwind.config.js`: Custom colors, fonts, animations
- `src/utils/typography.ts`: Centralized typography system
- `src/components/Navigation.tsx`: Fixed nav with scroll-based transparency and dropdown menu
- `src/components/SEO.tsx`: SEO/metadata management with structured data
- `src/pages/Home.tsx`: Complex scroll animations and sticky sections
- `amplify.yml`: AWS Amplify build configuration
- `index.html`: Material Icons CDN link, favicon, base meta tags

## Deployment Notes

- **Never commit** `node_modules/` or `dist/` (in `.gitignore`)
- Assets in `public/` are copied to dist root (e.g., `public/tcg.png` → `/tcg.png`)
- Vite bundles `src/assets/` imports with cache-busting hashes
- Build must succeed (`npm run build`) before deploying
- Site is hosted at `https://thechrisgrey.com`
