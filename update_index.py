import html
import json
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parent
INDEX_PATH = ROOT / 'index.html'
PROFILE_PATH = ROOT / 'data' / 'profile.json'
PROJECTS_PATH = ROOT / 'data' / 'projects.json'
DESIGN_REFERENCE_PATH = ROOT / 'assets' / 'precision_blue' / 'DESIGN.md'
PORTFOLIO_REFERENCE_PATH = ROOT / 'assets' / 'jeffri_software_developer_portfolio_light_mode' / 'code.html'

# Keep generated project cards aligned with the Precision Blue reference assets.
COLORS = {
  'canvas': '#F5F8FF',
  'surface': '#FFFFFF',
  'surface-soft': '#E8F1FF',
  'border': '#DCE7FA',
  'border-soft': '#D0E2FF',
  'text': '#1A1F36',
  'text-muted': '#5B6178',
  'primary': '#2D6CF0',
}

CATEGORY_BY_TYPE = {
  'android': 'mobile',
  'computer vision': 'cv',
  'web': 'web',
}


def load_json(path):
  with path.open(encoding='utf-8') as file:
    return json.load(file)


def escape(value):
  return html.escape(str(value), quote=True)


profile = load_json(PROFILE_PATH)
projects = load_json(PROJECTS_PATH)
html_document = INDEX_PATH.read_text(encoding='utf-8')
reference_design = DESIGN_REFERENCE_PATH.read_text(encoding='utf-8')
reference_template = PORTFOLIO_REFERENCE_PATH.read_text(encoding='utf-8')

if 'Precision Blue' not in reference_design or 'id="projects-grid"' not in reference_template:
  raise RuntimeError('Design references in assets are incomplete or moved.')

project_cards = []
for project in projects:
  project_type = escape(project['type'])
  category = CATEGORY_BY_TYPE.get(project['type'].strip().lower(), project['type'].strip().lower())
  image_path = ROOT / project['image']
  image_html = (
    f'<img alt="{escape(project["name"])} Preview" '
    f'class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" '
    f'src="{escape(project["image"])}"/>'
    if image_path.is_file()
    else ''
  )
  tech_tags = ''.join(
    f'<span class="px-2.5 py-0.5 rounded bg-[{COLORS["surface-soft"]}] '
    f'border border-[{COLORS["border-soft"]}] font-label-tag text-label-tag '
    f'text-[#1D58D8] font-medium">{escape(technology)}</span>'
    for technology in project['stack']
  )
  project_cards.append(f'''
<article class="project-card group flex flex-col rounded-lg bg-[{COLORS['surface']}] border border-[{COLORS['border']}] overflow-hidden hover:border-[{COLORS['primary']}]/40 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md" data-category="{escape(category)}">
<div class="relative w-full h-56 bg-[{COLORS['canvas']}] overflow-hidden border-b border-[{COLORS['border']}]">
{image_html}
<span class="absolute top-3 right-3 px-2.5 py-1 rounded bg-white/95 backdrop-blur-md border border-[{COLORS['border-soft']}] font-label-tag text-label-tag uppercase text-[{COLORS['primary']}] font-semibold shadow-xs">
  {project_type}
</span>
</div>
<div class="p-6 flex flex-col flex-1 justify-between">
<div>
<h3 class="font-headline-md text-headline-sm text-[{COLORS['text']}] group-hover:text-[{COLORS['primary']}] transition-colors mb-2 font-semibold">
  {escape(project['name'])}
</h3>
<p class="font-body-md text-body-md text-[{COLORS['text-muted']}] mb-6 leading-relaxed">
  {escape(project['description'])}
</p>
</div>
<div>
<div class="flex flex-wrap gap-1.5 mb-6">
{tech_tags}
</div>
<div class="flex items-center justify-between pt-4 border-t border-[{COLORS['border']}]">
<a class="inline-flex items-center gap-1.5 font-label-code text-label-code text-[{COLORS['text-muted']}] hover:text-[{COLORS['primary']}] transition-colors" href="{escape(project['repo'])}" rel="noopener noreferrer" target="_blank">
<span class="material-symbols-outlined text-[16px]">code</span>
<span>Source</span>
</a>
</div>
</div>
</div>
</article>''')

projects_html = '\n'.join(project_cards)
project_grid = (
  f'<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="projects-grid">\n'
  f'{projects_html}\n</div>\n<!-- Scalability Badge / Load More -->'
)
grid_pattern = (
  r'<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" '
  r'id="projects-grid">.*?<!-- Scalability Badge / Load More -->'
)
html_document, replacements = re.subn(
  grid_pattern,
  lambda _: project_grid,
  html_document,
  count=1,
  flags=re.DOTALL,
)

if replacements != 1:
  raise RuntimeError('Could not find the projects grid in index.html.')

html_document = html_document.replace(
  'All Projects (3)',
  f'All Projects ({len(projects)})',
)
INDEX_PATH.write_text(html_document, encoding='utf-8')
