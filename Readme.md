# React-Portfolio made with love and with beautiful UI.

# Sahan Randika — Portfolio

A terminal / developer-OS themed portfolio built with **React + Vite**, styled to match the
[abdulmomin.dev](https://www.abdulmomin.dev/) aesthetic (code-editor hero, `git log` experience
timeline, GitHub-repo project cards, JSON-viewer contact section).

## Stack

React 18 · Vite 5 · Framer Motion · react-icons · react-parallax-tilt · react-router-hash-link

## Getting started

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build → /dist
npm run preview  # preview the production build
```

## Project structure

```
src/
  main.jsx              # entry point (BrowserRouter + global CSS)
  App.jsx               # page shell — assembles every section
  index.css             # the entire design system / theme
  data/
    portfolio.js        # ← EDIT THIS. All content lives here.
  components/
    Navbar.jsx          # sticky nav + hash links + mobile menu
    Hero.jsx            # kernel badge + code-editor card
    About.jsx           # tilt avatar card + terminal log + stats
    SectionHeading.jsx  # reusable animated heading
    Skills.jsx          # draggable skill "universe"
    Experience.jsx      # git-log styled timeline
    Projects.jsx        # GitHub-repo styled tilt cards
    Blogs.jsx           # posts (with empty-state fallback)
    Contact.jsx         # JSON viewer + compose form
    Footer.jsx
public/
  favicon.svg
  images/avatar.jpg     # ← add your photo here
```

## Customizing

1. **Content** — open `src/data/portfolio.js` and update `profile`, `social`, `about`,
   `skills`, `experience`, `projects`, `blogs`, and `contact`. The whole site reads from there.
2. **Photo** — drop a square image at `public/images/avatar.jpg`, then in `About.jsx` swap the
   placeholder block for `<img src={profile.avatar} alt={profile.name} />`.
3. **Colors** — every accent is a CSS variable at the top of `index.css` (`--cyan`, `--green`,
   `--amber`, `--magenta`, `--red`). Change them once, they apply everywhere.
4. **Contact form** — `Contact.jsx` currently opens the visitor's mail client via `mailto:`.
   To collect submissions instead, wire `handleSubmit` to [Formspree](https://formspree.io) or
   [EmailJS](https://www.emailjs.com).

## Deploying to GitHub Pages

`gh-pages` is already in your dependencies. To deploy:

1. In `vite.config.js`, set `base: '/<your-repo-name>/'`.
2. Add to `package.json` scripts: `"deploy": "npm run build && gh-pages -d dist"`.
3. Run `npm run deploy`.

For a custom domain or root deploy, keep `base: '/'`.

> Note: this app uses `BrowserRouter` but navigation is all in-page hash links, so it works on
> static hosts without extra redirect rules.