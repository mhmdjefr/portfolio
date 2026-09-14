---
name: Obsidian Nexus
colors:
  surface: '#0f131c'
  surface-dim: '#0f131c'
  surface-bright: '#353942'
  surface-container-lowest: '#0a0e16'
  surface-container-low: '#181c24'
  surface-container: '#1c2028'
  surface-container-high: '#262a33'
  surface-container-highest: '#31353e'
  on-surface: '#dfe2ee'
  on-surface-variant: '#c2c6d6'
  inverse-surface: '#dfe2ee'
  inverse-on-surface: '#2c3039'
  outline: '#8c909f'
  outline-variant: '#424754'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e6a'
  primary-container: '#4d8eff'
  on-primary-container: '#00285d'
  inverse-primary: '#005ac2'
  secondary: '#b2c5ff'
  on-secondary: '#002b73'
  secondary-container: '#014dbf'
  on-secondary-container: '#b7c8ff'
  tertiary: '#7bd0ff'
  on-tertiary: '#00354a'
  tertiary-container: '#009bd1'
  on-tertiary-container: '#002d40'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#dae2ff'
  secondary-fixed-dim: '#b2c5ff'
  on-secondary-fixed: '#001848'
  on-secondary-fixed-variant: '#0040a2'
  tertiary-fixed: '#c4e7ff'
  tertiary-fixed-dim: '#7bd0ff'
  on-tertiary-fixed: '#001e2c'
  on-tertiary-fixed-variant: '#004c69'
  background: '#0f131c'
  on-background: '#dfe2ee'
  surface-variant: '#31353e'
typography:
  display:
    fontFamily: Space Grotesk
    fontSize: 3.5rem
    fontWeight: '700'
    lineHeight: 4rem
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 2.25rem
    fontWeight: '600'
    lineHeight: 2.75rem
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 1.75rem
    fontWeight: '600'
    lineHeight: 2.25rem
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 1.5rem
    fontWeight: '600'
    lineHeight: 2rem
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 1.25rem
    fontWeight: '500'
    lineHeight: 1.75rem
    letterSpacing: -0.015em
  body-lg:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: 1.75rem
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: 1.5rem
    letterSpacing: -0.005em
  body-sm:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: '400'
    lineHeight: 1.25rem
    letterSpacing: '0'
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 0.8125rem
    fontWeight: '400'
    lineHeight: 1.25rem
    letterSpacing: -0.01em
  label-tag:
    fontFamily: JetBrains Mono
    fontSize: 0.6875rem
    fontWeight: '500'
    lineHeight: 1rem
    letterSpacing: 0.04em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system targets high-caliber engineers, technical founders, and product teams looking for engineering precision, craft, and architectural depth. The aesthetic merges the laser-focused productivity mechanics of Linear with the modern, refined edge delivery of Vercel. 

The aesthetic is technical minimalism layered with low-profile luminous depth. It relies on deep obsidian canvases, hairline borders, and targeted electric-blue focal highlights rather than heavy skeuomorphism or loud decorative elements. The emotional response is calm, commanding, focused, and meticulously constructed—evoking raw computing power controlled through clean interface architecture.

## Colors

The system is constructed dark-mode-first, leveraging deep optical values to eliminate visual fatigue while maximizing semantic contrast.

### Palette Mechanics
- **Base Canvas (`#0B0F17`):** The ground layer of all viewports.
- **Surface Elevation 1 (`#111827`):** Secondary regions, panel shells, and inactive container fills.
- **Surface Elevation 2 (`#1E293B`):** Modals, flyouts, and active hovered states.
- **Accents (`#3B82F6` & `#4C7DF0`):** Electric and royal cobalt blue reserved strictly for focal interactions, primary actions, active telemetry, and code highlights.
- **Borders & Dividers:** Built using `rgba(255, 255, 255, 0.08)` on dark layers, shifting to `rgba(59, 130, 246, 0.4)` upon keyboard focus or deliberate selection.
- **Text & Foreground:** `#F8FAFC` for high-contrast primary values, `#94A3B8` for secondary labels and descriptions, and `#475569` for code annotations and disabled states.

## Typography

Typographic scale is anchored by three functional disciplines:
1. **Space Grotesk** for structural headlines, headers, and section markers. Provides structural geometry with tight, intentional letter-spacing.
2. **Inter** for readable, neutral body copy and descriptive metadata.
3. **JetBrains Mono** for status chips, commit SHAs, technical indicators, pill badges, and code snippets.

All display and headline tiers must apply negative letter spacing to preserve optical balance against deep dark backgrounds.

## Layout & Spacing

The layout is anchored on an 8px grid rhythm with a disciplined 12-column system for standard desktop displays and a single-column reflow for mobile devices.

### Form Factor Behavior
- **Desktop (1024px and above):** 12-column grid container capped at 1200px max-width, `3rem` canvas margins, and `1.5rem` gutters. Section vertical rhythm maintains `5rem` to `7rem` between modules.
- **Tablet (768px – 1023px):** 6-column grid container with `2rem` margins and `1.25rem` gutters.
- **Mobile (under 768px):** Single-column stacked layout with `1.25rem` margin gutters. All two-up metrics panels and project showcase grids collapse vertically.

## Elevation & Depth

Depth is conveyed through luminance stacking, micro-borders, and radial glows instead of traditional heavy drop shadows.

- **Stacking Surfaces:** Ground plane starts at `#0B0F17`. First-tier interactive components live on `#111827`. Floating dialogs, popovers, and elevated panels sit on `#1E293B`.
- **Micro Hairlines:** Every raised layer must be bounded by a 1px ring `border: 1px solid rgba(255, 255, 255, 0.08)`. Never use thick solid borders on dark backgrounds.
- **Interactive Glow:** On element hover, transition from standard borders to `border-color: rgba(59, 130, 246, 0.45)` coupled with a low-spread outer glow: `box-shadow: 0 0 20px -4px rgba(59, 130, 246, 0.15)`.
- **Frosted Glass Backdrops:** Sticky navigation bars and transient command panels use `background: rgba(11, 15, 23, 0.75)` with `backdrop-filter: blur(12px)`.

## Shapes

The interface embraces a structured, engineered architectural feel. Standard cards, inputs, and containment modules utilize `0.25rem` (4px) to `0.5rem` (8px) corner radii.

The only exception to this tight geometric treatment is metadata tags and status indicators, which strictly adopt a fully rounded pill shape (`rounded-full` / `9999px`) to visually differentiate data attributes and stack markers from structural layout cards.

## Components

### Buttons
- **Primary:** Background `#3B82F6`, foreground `#FFFFFF`, border `1px solid rgba(255, 255, 255, 0.15)`, radius `0.375rem`. Hover triggers `#4C7DF0` with an outer soft glow `box-shadow: 0 0 16px rgba(59, 130, 246, 0.35)`.
- **Secondary:** Background `rgba(255, 255, 255, 0.03)`, foreground `#F8FAFC`, border `1px solid rgba(255, 255, 255, 0.08)`. Hover transitions to `rgba(255, 255, 255, 0.07)` and `border-color: rgba(255, 255, 255, 0.18)`.
- **Ghost / Icon:** Background `transparent`, foreground `#94A3B8`. Hover states use foreground `#F8FAFC` and background `rgba(255, 255, 255, 0.05)`.

### Chips & Pill Tags
- Fully rounded (`9999px`), padding `0.2rem 0.65rem`.
- Font: `JetBrains Mono`, size `0.6875rem`, uppercase with `0.04em` tracking.
- Visuals: Semi-transparent background `rgba(59, 130, 246, 0.08)`, border `1px solid rgba(59, 130, 246, 0.25)`, text `#38BDF8`.

### Cards & Project Showcases
- Surface: `#111827`, border `1px solid rgba(255, 255, 255, 0.08)`, radius `0.5rem`.
- Interactive Behavior: Under hover, transit seamlessly over 150ms ease-out to `border-color: rgba(59, 130, 246, 0.4)` and a low-frequency radial gradient background highlight originating from the cursor.

### Input Fields & Search Bars
- Background `#0B0F17`, border `1px solid rgba(255, 255, 255, 0.1)`, radius `0.375rem`, padding `0.5rem 0.75rem`.
- Text `#F8FAFC`, placeholder text `#475569`.
- Focus state eliminates standard browser outlines, applying `border-color: #3B82F6` and `box-shadow: 0 0 0 1px #3B82F6`.

### Terminal & Code Blocks
- Background `#070A0F`, inset hairline border `1px solid rgba(255, 255, 255, 0.06)`, padding `1rem`.
- Embedded copy triggers and system indicators aligned to the top-right header rail using `label-tag` typography.