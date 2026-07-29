// ===== Config =====
const DATA_PATHS = {
  profile: "data/profile.json",
  projects: "data/projects.json"
};

let ALL_PROJECTS = [];
let ACTIVE_CATEGORY = "All";

// ===== Helpers =====
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

async function loadJSON(path) {
  const res = await fetch(path);
  if (!res.ok) throw new Error(`Failed to load ${path}: ${res.status}`);
  return res.json();
}

function typeText(el, text, speed = 55) {
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

// ===== Render: profile =====
function renderProfile(profile) {
  typeText($("#typedName"), profile.name);

  $("#linkedinLink").href = profile.links.linkedin.startsWith("http")
    ? profile.links.linkedin
    : `https://linkedin.com/in/${profile.links.linkedin}`;
  $("#emailLink").href = `mailto:${profile.links.email}`;

  const statGrid = $("#statGrid");
  profile.stats.forEach((s) => {
    const div = document.createElement("div");
    div.className = "rounded-2xl border border-line bg-white px-4 py-6 text-center shadow-sm shadow-primary/5";
    div.innerHTML = `
      <div class="font-display font-extrabold text-2xl sm:text-3xl text-primary">${s.number}</div>
      <div class="text-xs sm:text-sm text-body mt-1">${s.label}</div>
    `;
    statGrid.appendChild(div);
  });

  const skillGrid = $("#skillGrid");
  profile.skills.forEach((s) => {
    const div = document.createElement("div");
    div.className = "rounded-xl border border-line bg-white px-4 py-4 hover:border-primary/50 transition-colors";
    div.innerHTML = `
      <div class="font-display font-semibold text-sm text-ink">${s.label}</div>
      <div class="text-xs text-body mt-1">${s.desc}</div>
    `;
    skillGrid.appendChild(div);
  });
}

// ===== Render: projects =====
function projectCard(project) {
  const card = document.createElement("article");
  card.className =
    "group rounded-2xl border border-line bg-white p-7 flex flex-col justify-between hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300";

  const stackHTML = project.stack
    .map(
      (s) =>
        `<span class="text-xs font-medium px-2.5 py-1 rounded-full bg-bg border border-line text-body">${s}</span>`
    )
    .join("");

  card.innerHTML = `
    <div>
      <div class="flex items-center justify-between mb-4">
        <span class="text-xs font-display font-semibold text-primary uppercase tracking-wide">${project.type}</span>
        <span class="text-xs font-medium text-body">${project.status}</span>
      </div>
      <h3 class="font-display text-xl font-bold text-ink mb-1.5">${project.name}</h3>
      <p class="text-body text-sm mb-3">${project.tagline}</p>
      <p class="text-body text-sm leading-relaxed mb-5">${project.description}</p>
      <div class="flex flex-wrap gap-2 mb-6">${stackHTML}</div>
    </div>
    <a href="${project.repo}" target="_blank" rel="noopener"
       class="inline-flex items-center gap-1.5 font-display text-sm font-semibold text-primary group-hover:text-primarydark transition-colors">
      View Repo
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M4 10L10 4M10 4H5M10 4V9" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </a>
  `;
  return card;
}

function renderProjectGrid() {
  const grid = $("#projectGrid");
  grid.innerHTML = "";
  const filtered =
    ACTIVE_CATEGORY === "All"
      ? ALL_PROJECTS
      : ALL_PROJECTS.filter((p) => p.type === ACTIVE_CATEGORY);
  filtered.forEach((p) => grid.appendChild(projectCard(p)));
}

function renderFilterBar() {
  const bar = $("#filterBar");
  const categories = ["All", ...new Set(ALL_PROJECTS.map((p) => p.type))];
  bar.innerHTML = "";
  categories.forEach((cat) => {
    const btn = document.createElement("button");
    const isActive = cat === ACTIVE_CATEGORY;
    btn.className = `px-4 py-2 rounded-full text-xs font-display font-semibold border transition-colors ${
      isActive
        ? "bg-primary border-primary text-white"
        : "bg-white border-line text-body hover:border-primary/50 hover:text-ink"
    }`;
    btn.textContent = cat;
    btn.addEventListener("click", () => {
      ACTIVE_CATEGORY = cat;
      renderFilterBar();
      renderProjectGrid();
    });
    bar.appendChild(btn);
  });
}

// ===== Scroll-spy with sliding pill =====
function initScrollSpy() {
  const sections = $$("section[id]");
  const links = $$("[data-link]");

  links.forEach((link) => {
    if (!link.querySelector(".pill")) {
      const pill = document.createElement("span");
      pill.className = "pill";
      link.prepend(pill);
    }
  });

  const setActive = (id) => {
    links.forEach((link) => {
      link.classList.toggle("active", link.dataset.target === id);
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );

  sections.forEach((s) => observer.observe(s));
}

// ===== Mobile menu =====
function initMobileMenu() {
  const btn = $("#menuBtn");
  const menu = $("#mobileMenu");
  if (!btn || !menu) return;

  btn.addEventListener("click", () => menu.classList.toggle("hidden"));
  $$('#mobileMenu [data-link]').forEach((a) =>
    a.addEventListener("click", () => menu.classList.add("hidden"))
  );
}

// ===== Init =====
async function init() {
  $("#year").textContent = new Date().getFullYear();

  initMobileMenu();

  try {
    const [profile, projects] = await Promise.all([
      loadJSON(DATA_PATHS.profile),
      loadJSON(DATA_PATHS.projects)
    ]);
    renderProfile(profile);
    ALL_PROJECTS = projects;
    renderFilterBar();
    renderProjectGrid();
  } catch (err) {
    console.error(err);
    $("#projectGrid").innerHTML =
      '<p class="text-sm text-primary">Failed to load project data.</p>';
  }

  initScrollSpy();
}

document.addEventListener("DOMContentLoaded", init);