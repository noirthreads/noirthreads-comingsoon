# NoirThreads - Coming Soon Page Requirements

## 1. Project Overview

NoirThreads is a new streetwear fashion POD (Print-on-Demand) brand. We need a **Coming Soon** landing page to build anticipation, collect emails, and establish the brand’s aesthetic before launch.

The page should be minimal, bold, and aligned with streetwear culture (dark, edgy, urban).

---

## 2. Goals of the Page

- Announce "Coming Soon" with the brand name **NoirThreads**.
- Build anticipation for launch.
- Collect emails for early access / newsletter sign-ups.
- Showcase streetwear vibe (dark, modern, minimal aesthetic).
- Mobile-first design (fully responsive).

---

## 3. Tech Stack Requirements

- **Frontend Framework:** Next.js or React (developer’s choice).
- **Styling:** TailwindCSS (preferred).
- **Fonts:** Google Fonts (urban/street style – e.g., Anton, Oswald, Inter).
- **Icons:** Lucide or Heroicons.
- **Animations:** Framer Motion for subtle fade/slide-in effects.
- **Deployment:** Vercel (static hosting).

---

## 4. Page Structure

### Header

- Logo/Brand Name: **NoirThreads** (bold typography).
- Minimal navigation (optional): "Home", "About", "Notify Me".

### Hero Section

- Large "Coming Soon" text with animation.
- Tagline: "Streetwear for the bold. Dropping soon."
- Background: dark/black with subtle texture, gradient, or street-art-inspired background.

### Email Signup Section

- Input field + CTA button (“Notify Me”).
- Store emails in a placeholder function (or integrate with Mailchimp/ConvertKit later).
- Success message after submission.

### Social Links Section

- Instagram, TikTok, Twitter (icons, linking to brand handles – placeholders for now).

### Footer

- Minimal footer with © NoirThreads 2025.
- Secondary link to privacy/terms (placeholder).

---

## 5. Visual Style Guide

- **Color Palette:**

  - Black: `#000000`
  - White: `#FFFFFF`
  - Gray: `#1A1A1A` / `#2E2E2E`
  - Accent: Red `#E50914` (or another bold accent).

- **Typography:**

  - Headings: Bold, uppercase (Anton / Oswald).
  - Body: Clean sans-serif (Inter / Roboto).

- **Layout:**

  - Fullscreen hero section.
  - Centered text & CTA.
  - Grid-based alignment.

- **Moodboard Keywords:**
  - Streetwear, urban, bold, minimal, edgy.

---

## 6. Features to Implement

- [ ] Responsive layout (mobile-first).
- [ ] Dark mode aesthetic (default dark theme).
- [ ] Smooth scroll + animations (fade-in for hero text, button hover effects).
- [ ] Email capture with validation.
- [ ] SEO basics: title, meta description, OpenGraph tags.
- [ ] Favicon with NoirThreads logo (placeholder).

---

## 7. Deliverables

- `index.js` or `page.tsx` file with Coming Soon page.
- `styles/globals.css` with Tailwind setup.
- `components` folder (optional) for modular code:
  - `Header.jsx`
  - `Hero.jsx`
  - `EmailForm.jsx`
  - `Footer.jsx`

---

## 8. Future Enhancements (Optional)

- Countdown timer until launch date.
- Animated streetwear graphics in background.
- Integration with Mailchimp or Supabase for real email storage.

---

## 9. Example Inspiration

- Streetwear landing pages with minimal bold type (Supreme, Off-White).
- Dark themes with neon/red accents.

---

## 10. Page Flow Summary

1. User lands → sees **NoirThreads logo + Coming Soon**.
2. Tagline sets the vibe.
3. User enters email → confirmation message appears.
4. Social links to follow brand.
5. Footer with copyright.

---

## 11. File Structure (Suggested)

```
/noirthreads-comingsoon
  /components
    Header.jsx
    Hero.jsx
    EmailForm.jsx
    Footer.jsx
  /public
    favicon.ico
    logo.png
  pages/
    index.js
  styles/
    globals.css
  package.json
  tailwind.config.js
```

---

## 12. Example Text Content

- Hero Heading: **"NOIRTHREADS"**
- Subheading: **"Streetwear for the bold. Dropping soon."**
- CTA Button: **"Notify Me"**
- Footer: © NoirThreads 2025. All rights reserved.

---

## End of Requirements
