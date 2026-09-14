// ===== Config =====
const DATA_PATHS = {
  profile:  "data/profile.json",
  projects: "data/projects.json"
};

let ALL_PROJECTS   = [];
let ACTIVE_CATEGORY = "All";

// ===== Helpers =====
const $  = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

async function loadJSON(path) {
  const res = await fetch(path);
  if (!res.ok) throw new Error(`Failed to load ${path}: ${res.status}`);
  return res.json();
}

// ===== Typewriter =====
function typeText(el, text, speed = 60) {
  el.textContent = "";
  let i = 0;
  const tick = () => {
    if (i <= text.length) {
      el.textContent = text.slice(0, i);
      i++;
      setTimeout(tick, speed);
    }
  };
  tick();
}

// ===== Typewriter loop for subtitle =====
function typeLoop(el, phrases, speed = 55, pause = 2000) {
  let pi = 0;
  let ci = 0;
  let deleting = false;

  function tick() {
    const phrase = phrases[pi];
    if (!deleting) {
      el.textContent = phrase.slice(0, ci + 1);
      ci++;
      if (ci === phrase.length) {
        deleting = true;
        setTimeout(tick, pause);
        return;
      }
    } else {
      el.textContent = phrase.slice(0, ci - 1);
      ci--;
      if (ci === 0) {
        deleting = false;
        pi = (pi + 1) % phrases.length;
      }
    }
    setTimeout(tick, deleting ? speed / 2 : speed);
  }
  tick();
}

// ===== Render: profile stats =====
function renderStats(stats) {
  const grid = $("#statGrid");
  stats.forEach((s) => {
    const el = document.createElement("div");
    el.className = "stat-item";
    el.innerHTML = `
      <div class="stat-num">${s.number}</div>
      <div class="stat-label">${s.label}</div>
    `;
    grid.appendChild(el);
  });
}

// ===== Render: skills =====
function renderSkills(skills) {
  const grid = $("#skillGrid");
  skills.forEach((s) => {
    const el = document.createElement("div");
    el.className = "skill-item";
    el.innerHTML = `
      <div class="skill-label">${s.label}</div>
      <div class="skill-desc">${s.desc}</div>
    `;
    grid.appendChild(el);
  });
}

// ===== Render: project card =====
function projectCard(project) {
  const card = document.createElement("article");
  card.className = "project-card";
  card.setAttribute("data-type", project.type);

  const stackHTML = project.stack
    .map((s) => `<span class="stack-tag">${s}</span>`)
    .join("");

  const imgHTML = project.image
    ? `<div class="project-img-wrap">
        <img src="${project.image}" alt="${project.name} screenshot" loading="lazy">
       </div>`
    : "";

  card.innerHTML = `
    ${imgHTML}
    <div class="project-body">
      <div class="project-meta">
        <span class="project-type">${project.type}</span>
        <span class="project-status">${project.status}</span>
      </div>
      <h3 class="project-name">${project.name}</h3>
      <p class="project-tagline">${project.tagline}</p>
      <p class="project-desc">${project.description}</p>
      <div class="project-stack">${stackHTML}</div>
      <div class="project-footer">
        <a href="${project.repo}" target="_blank" rel="noopener" class="project-link" aria-label="View ${project.name} on GitHub">
          View Repo
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M4 10L10 4M10 4H5M10 4V9" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  `;
  return card;
}

// ===== Render: project grid =====
function renderProjectGrid() {
  const grid = $("#projectGrid");
  grid.innerHTML = "";
  const filtered = ACTIVE_CATEGORY === "All"
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter((p) => p.type === ACTIVE_CATEGORY);

  filtered.forEach((p) => grid.appendChild(projectCard(p)));

  // re-trigger reveal on new cards
  setTimeout(() => {
    grid.querySelectorAll(".project-card").forEach((el, i) => {
      setTimeout(() => el.classList.add("visible"), i * 80);
    });
  }, 50);
}

// ===== Render: filter bar =====
function renderFilterBar() {
  const bar = $("#filterBar");
  const categories = ["All", ...new Set(ALL_PROJECTS.map((p) => p.type))];
  bar.innerHTML = "";

  categories.forEach((cat) => {
    const btn = document.createElement("button");
    btn.className = `filter-btn${cat === ACTIVE_CATEGORY ? " active" : ""}`;
    btn.textContent = cat;
    btn.setAttribute("aria-pressed", cat === ACTIVE_CATEGORY ? "true" : "false");
    btn.addEventListener("click", () => {
      ACTIVE_CATEGORY = cat;
      renderFilterBar();
      renderProjectGrid();
    });
    bar.appendChild(btn);
  });
}

// ===== Nav: scroll effects =====
function initNav() {
  const nav = $("#nav");
  const onScroll = () => {
    nav.classList.toggle("scrolled", window.scrollY > 40);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

// ===== Nav: scroll spy =====
function initScrollSpy() {
  const sections  = $$("section[id]");
  const links     = $$("#navLinks a[data-target]");

  const setActive = (id) => {
    links.forEach((a) => {
      const isActive = a.dataset.target === id;
      a.classList.toggle("active", isActive);
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    },
    { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
  );

  sections.forEach((s) => observer.observe(s));
}

// ===== Mobile menu =====
function initMobileMenu() {
  const btn  = $("#mobileBtn");
  const menu = $("#navLinks");
  if (!btn || !menu) return;

  btn.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    btn.setAttribute("aria-expanded", isOpen.toString());
  });

  menu.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      menu.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    })
  );

  // close on outside click
  document.addEventListener("click", (e) => {
    if (!btn.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    }
  });
}

// ===== Scroll reveal =====
function initReveal() {
  const revealEls = $$(".reveal");
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
  );
  revealEls.forEach((el) => obs.observe(el));
}

// ===== Cursor glow =====
function initCursorGlow() {
  const glow = $("#cursorGlow");
  if (!glow || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    if (glow) glow.style.display = "none";
    return;
  }
  let raf;
  let mx = 0, my = 0;
  let gx = 0, gy = 0;

  document.addEventListener("mousemove", (e) => {
    mx = e.clientX;
    my = e.clientY;
    if (!raf) raf = requestAnimationFrame(moveGlow);
  });

  function moveGlow() {
    gx += (mx - gx) * 0.08;
    gy += (my - gy) * 0.08;
    glow.style.left = gx + "px";
    glow.style.top  = gy + "px";
    raf = requestAnimationFrame(moveGlow);
  }
}

// ===== Init =====
async function init() {
  // Footer year
  $("#year").textContent = new Date().getFullYear();

  // Init interactions
  initNav();
  initMobileMenu();
  initReveal();
  initCursorGlow();

  try {
    const [profile, projects] = await Promise.all([
      loadJSON(DATA_PATHS.profile),
      loadJSON(DATA_PATHS.projects)
    ]);

    // Hero
    setTimeout(() => typeText($("#typedName"), profile.name), 200);
    typeLoop($("#heroSubtitle"), [
      profile.role,
      "Mobile Developer · Kotlin & Compose",
      "Computer Vision Enthusiast",
      "Web Developer"
    ]);

    // Update contact links
    const li = $("#contactLinkedin");
    const em = $("#contactEmail");
    const ed = $("#contactEmailDisplay");

    if (li) li.href = profile.links.linkedin;
    if (em) em.href = `mailto:${profile.links.email}`;
    if (ed) ed.textContent = profile.links.email;

    // Stats, skills, projects
    renderStats(profile.stats);
    renderSkills(profile.skills);
    ALL_PROJECTS = projects;
    renderFilterBar();
    renderProjectGrid();

  } catch (err) {
    console.error(err);
    const grid = $("#projectGrid");
    if (grid) grid.innerHTML = `<p style="padding:2rem;color:var(--on-surface-dim);font-family:var(--font-mono);font-size:.875rem;">Failed to load project data.</p>`;
  }

  // Scroll spy after render
  initScrollSpy();
}

document.addEventListener("DOMContentLoaded", init);