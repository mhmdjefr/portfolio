# Muhammad Jeffri — Software Developer Portfolio

Personal portfolio for work across mobile development, web platforms, and computer vision.

Live site: [mhmdjefr.vercel.app](https://mhmdjefr.vercel.app)

## Current Stack

- HTML5 with a single self-contained page in `index.html`
- Tailwind CSS via CDN for the active page layout
- IBM Plex Sans and IBM Plex Mono for typography
- Inline vanilla JavaScript for navigation, scroll highlighting, filters, theme switching, and form interactions
- Vercel for hosting and deployment

## Project Structure

```text
├── index.html       # Active production page
├── data/
│   ├── profile.json # Reference profile data
│   └── projects.json# Reference project metadata
├── css/
│   └── style.css    # Earlier standalone stylesheet
├── js/
│   └── main.js      # Earlier data-driven interaction script
└── update_index.py  # Legacy generator, not required at runtime
```

The deployed page currently uses the markup and inline script in `index.html` directly. The files under `css/`, `js/`, and `data/`, along with `update_index.py`, are retained as supporting or legacy source material and are not loaded automatically by the active page.

## Run Locally

Serve the repository with any local HTTP server:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000> in a browser. A local server is recommended so browser navigation and external resources behave consistently.

## Deploy

Push changes to the `main` branch. Vercel deploys the repository automatically.

Built with clean HTML, focused interactions, and modern web standards.
