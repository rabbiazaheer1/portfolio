# Rabbia Zaheer Portfolio — React + Vite

This is a React + Vite migration of the existing HTML/CSS/JS portfolio.

## Structure
- `src/components/` — Navbar, Hero, About, Skills, Projects, Contact, Footer
- `src/data/projects.js` — project data; edit this file to add/update projects
- `src/assets/` — project thumbnail assets
- `src/index.css` — original portfolio styling + responsive CSS
- `src/App.jsx` — page composition and existing animations
- `public/` — favicon/manifest assets

## Run
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Updating projects
Edit only `src/data/projects.js` to add a new project or update its title, description, technologies, live URL, GitHub URL, and image.
