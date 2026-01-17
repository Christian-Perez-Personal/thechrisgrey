# Ideas to Consider

## Portfolio/Projects Showcase

**Goal:** Allow visitors to explore projects and sites I've built without the page feeling too busy or the implementation looking cheesy.

---

### Option 1: Device Mockups

Show live sites inside a MacBook or phone frame. Click to expand into a full interactive modal.

**Pros:**
- Feels polished and intentional
- Device frame adds visual context
- Interactive on demand, not forced

**Cons:**
- More complex to implement well
- Need to handle responsive device frames

**Implementation notes:**
- Could use CSS-only device frames or a library
- Modal opens with full iframe, close button returns to gallery
- Consider lazy-loading iframes only when modal opens

---

### Option 2: Screenshot Grid with Modal Preview

Clean card grid with static screenshots. Click opens a modal with the live iframe embedded.

**Pros:**
- Clean initial view, no iframe overhead
- User opts into the interactive experience
- Screenshots load fast, iframe loads on demand
- Fits the current minimalist design language

**Cons:**
- Screenshots can get stale if sites change
- Two-step interaction (click to preview, click to visit)

**Implementation notes:**
- Screenshot cards with subtle hover effect (scale, border glow)
- Modal with iframe + "Visit Site" external link button
- Could add project title, tech stack badges on cards

---

### Design Considerations

- Both options should respect the site's aesthetic: thin borders, generous whitespace, subtle animations
- Modal backdrop should use `bg-altivum-dark/90 backdrop-blur-md` for consistency
- Consider X-Frame-Options - some sites may not allow embedding (have fallback)
- Mobile: possibly skip iframe entirely and just link to live site

---

### Sites to Potentially Showcase

- Altivum.io
- VetROI
- GradROI
- The Vector Podcast site
- Client projects (with permission)
