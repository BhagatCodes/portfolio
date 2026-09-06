# Shubham Chauhan — Portfolio

A React + Vite portfolio, styled after lusion.co's monochrome, motion-driven
aesthetic: a custom difference-blend cursor, kinetic hero type, a colorful
gradient accent system, scroll-linked parallax on every section, brand/skill
icons, and a project list with a cursor-following live preview panel.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Structure

```
src/
  components/   Cursor, Navbar, Hero, Marquee, Intro, Projects,
                Journey, Skills, Achievement, Contact, Footer
  data/         projects.js — edit this to add/change project entries
  hooks/        useReveal.js — scroll-reveal animation hook
  index.css     all styling, theme tokens at the top
public/
  Shubham_Chauhan_Resume.pdf   — swap this file to update the résumé download
```

## To customize

- **Colors / theme**: edit the CSS variables at the top of `src/index.css`.
- **Projects**: edit `src/data/projects.js`.
- **Copy**: edit the relevant component under `src/components/`.
- **Résumé**: replace `public/Shubham_Chauhan_Resume.pdf` with an updated file
  (keep the same filename, or update the `href` in `Hero.jsx` and `Contact.jsx`).
- **LinkedIn / GitHub links**: not included since the source résumé only had
  placeholder text for these — add them to `Navbar.jsx` and `Footer.jsx` once
  you have the real URLs.

## Notes

- The custom cursor automatically disables itself on touch devices.
- Built with `framer-motion` for the hero's line-reveal animation, all
  parallax effects, and scroll-linked transforms.
- Icons come from `lucide-react` (generic UI icons) and `react-icons/si`
  (brand icons: React, WordPress, Tailwind, etc.) — everything else uses
  plain CSS transitions/keyframes to stay lightweight.
