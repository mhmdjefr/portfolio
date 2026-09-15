# 🚀 Muhammad Jeffri — Software Developer Portfolio

Welcome to the source code of my personal portfolio website!

This portfolio is built to showcase my work across **mobile engineering**, **web platforms**, and **computer vision**. It's designed with a custom "Obsidian Nexus" aesthetic—focusing on a premium dark mode, semantic HTML, and vanilla CSS/JS (no heavy frameworks, no unnecessary dependencies).

**🌐 Live Site:** [https://mhmdjefr.vercel.app](https://mhmdjefr.vercel.app)

---

## 🛠 Tech Stack

- **HTML5:** Semantic, accessible structure
- **CSS3:** Custom CSS variables, grid/flexbox layouts, responsive design, animations (No Tailwind or external CSS frameworks)
- **Vanilla JS:** Lightweight interactions, intersection observers, typewriter effects, JSON data loading
- **JSON:** Data-driven architecture (Skills and Projects are dynamically loaded from `data/profile.json` and `data/projects.json`)
- **Hosting:** Vercel (Auto-deploy on Git push)

## 📁 Project Structure

```
├── css/
│   └── style.css    # Custom Obsidian Nexus design system
├── data/
│   ├── profile.json # Skills, stats, and profile details
│   └── projects.json# Project details and metadata
├── js/
│   └── main.js      # Core interactions and DOM manipulation
└── index.html       # Main HTML entrypoint
```

## 🔄 Adding New Projects

Adding a new project is completely data-driven. Simply edit `data/projects.json` and append a new object:

```json
{
  "id": "project-id",
  "name": "Project Name",
  "tagline": "A short one-liner description",
  "description": "A more detailed description.",
  "stack": ["Kotlin", "Compose"],
  "repo": "https://github.com/mhmdjefr/project-repo",
  "status": "Active",
  "type": "Android"
}
```

The filter tabs and grid will automatically update to reflect your new content!

## 🏃‍♂️ Running Locally

1. Clone this repository
2. Run a local web server (e.g. `python -m http.server 8000` or use VS Code Live Server)
3. Open `http://localhost:8000` in your browser

*(Note: Loading JSON files requires a server, simply opening `index.html` via `file://` might block the data loading due to CORS policies).*

---
*Built with clean code & modern web standards.*
