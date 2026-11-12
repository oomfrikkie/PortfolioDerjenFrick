# Portfolio — Derjen Frick

Personal portfolio. React 19 + Vite + React Router, plain CSS, deployed on Vercel.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm run lint
```

Or with Docker, from the repo root: `docker compose up --build`.

## Structure

```
src/
  App.jsx                  routes + scroll handling
  index.css                design tokens (colours, fonts) and shared classes
  components/              Nav, Footer, ProjectCard, BlenderSection
  pages/                   Home, ProjectDetail, NotFound
  data/
    projects.json          every project (cards + detail pages)
    projectTypes.js        the project categories and their labels
    renders.js             picks up the Blender images automatically
  assets/blender/          drop Blender renders here
public/
  projects/                project screenshots (.webp)
  avatar.webp, me.jpg, Derjen_Frick_cv.pdf
```

## Add a project

Add an object to `src/data/projects.json`. The home page card and the detail page at
`/projects/<slug>` are both generated from it.

```json
{
  "slug": "my-project",
  "title": "My Project",
  "type": "personal",
  "summary": "One sentence, max ~85 characters so it fits two lines on the card.",
  "description": ["First paragraph.", "Second paragraph."],
  "highlights": ["Short point", "Another point"],
  "stack": ["NestJS", "PostgreSQL"],
  "link": "https://github.com/...",
  "linkLabel": "View on GitHub",
  "cover": "/projects/my-project-cover.webp",
  "images": [
    { "src": "/projects/my-project-home.webp", "caption": "Home page", "width": 1920, "height": 1080 }
  ]
}
```

| Field | Notes |
| --- | --- |
| `type` | `personal`, `university` or `game`. A filter tab appears on its own once a type has a project. |
| `stack` | Shown as "Built with" tags. Leave `[]` to hide. |
| `link` | `null` hides the button. |
| `cover` | Card image, shown at 16:9 from its top-left corner. About 1100px wide is enough. |
| `images` | First one is the big image on the detail page. `width`/`height` are the real pixel size of the file. |
| `device` | Optional. `"mobile"` draws phone frames. Crop those images to the phone screen only, no bezel. |

Screenshots: capture just the page (no browser tabs or toolbars) and save as WebP in `public/projects/`.

### Game dev projects

Same as above with `"type": "game"`. Put the engine in `stack` (`["Unity", "C#"]`) and use
`link` for the itch.io page, a gameplay video or the repo.

## Add Blender renders

Drop images into `src/assets/blender/`. That's it: the "Learning Blender" section and its nav
link appear when the folder has at least one image. Captions come from the file name
(`02-low-poly-house.png` becomes "Low poly house") and the order is alphabetical.

## Change the look

Colours, fonts and widths are CSS variables at the top of `src/index.css`.
