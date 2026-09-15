---
name: Precision Blue
colors:
  surface: '#fbf8ff'
  surface-dim: '#d4d8f7'
  surface-bright: '#fbf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f2ff'
  surface-container: '#ececff'
  surface-container-high: '#e4e7ff'
  surface-container-highest: '#dde1ff'
  on-surface: '#151a31'
  on-surface-variant: '#424654'
  inverse-surface: '#2a2f47'
  inverse-on-surface: '#f0efff'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0055d5'
  primary: '#0052d0'
  on-primary: '#ffffff'
  primary-container: '#2d6cf0'
  on-primary-container: '#fefbff'
  inverse-primary: '#b3c5ff'
  secondary: '#565f6b'
  on-secondary: '#ffffff'
  secondary-container: '#dae3f1'
  on-secondary-container: '#5c6571'
  tertiary: '#525c6c'
  on-tertiary: '#ffffff'
  tertiary-container: '#6a7585'
  on-tertiary-container: '#fdfbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae1ff'
  primary-fixed-dim: '#b3c5ff'
  on-primary-fixed: '#001849'
  on-primary-fixed-variant: '#003fa3'
  secondary-fixed: '#dae3f1'
  secondary-fixed-dim: '#bec7d5'
  on-secondary-fixed: '#131c26'
  on-secondary-fixed-variant: '#3f4853'
  tertiary-fixed: '#d8e3f6'
  tertiary-fixed-dim: '#bcc7da'
  on-tertiary-fixed: '#111c2a'
  on-tertiary-fixed-variant: '#3d4857'
  background: '#fbf8ff'
  on-background: '#151a31'
  surface-variant: '#dde1ff'
typography:
  display-hero:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.015em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 26px
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.04em
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
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
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system channels the intellectual clarity of Notion combined with the rigorous, technical confidence of Stripe. Built exclusively around a clean, high-efficiency light palette, it emphasizes structural precision, deliberate typography, and tactile restraint.

- **Brand Personality**: Systematic, lucid, authoritative, and frictionless.
- **Target Audience**: Engineers, product teams, quantitative analysts, and modern knowledge workers seeking density without visual clutter.
- **Emotional Response**: A calm sense of velocity, order, and crisp mechanical reliability.
- **Aesthetic Direction**: Ultra-clean modern tech minimalism. Depth is established through immaculate 1px border lines, subtle ice-blue ambient tints, pure-white elevated surfaces, and strict grid alignments. We reject decorative blur blobs, skeuomorphic gradients, and saturated novelty in favor of utility and structural refinement.

## Colors

The palette is engineered around an ultra-crisp sky-tinted spectrum set against deep structural slate.

- **Canvas & Backgrounds**: The base canvas rests on `#F5F8FF` (subtle off-white infused with a pale cool tint). Elevated workspace blocks transition to pure `#FFFFFF`.
- **Primary Accent (`#2D6CF0`)**: An uncompromising electric cobalt applied strictly to critical interactions—primary action triggers, focused input states, selected radio/checkbox marks, and inline semantic links.
- **Secondary Surfaces & Accents (`#E8F1FF`)**: Soft sky cyan wash used for subtle badges, low-priority selected states, code pill backgrounds, and table row selections.
- **Structural Outlines (`#DCE7FA`)**: The primary mechanism of spatial definition. 1px crisp, cool slate-tinted borders separate modules without creating visual noise.
- **Text & Hierarchy**:
  - `Display / Headings`: `#1A1F36` (high-contrast deep ink slate).
  - `Body Text`: `#5B6178` (neutral mid-tone charcoal providing optimal reading rhythm).
  - `Muted / Meta`: `#8B94A5` (lightened graphite for timestamps, table column headers, and helper text).

## Typography

The pairing blends the structured, geometric attitude of **Space Grotesk** for headings with the functional legibility of **Inter** for dense, readable interfaces.

- **Headlines (Space Grotesk)**: Used selectively for page titles, modal headers, metrics, and major section markers. Kerning is slightly tightened (`-0.01em` to `-0.02em`) to produce a confident, modern editorial edge.
- **Body & Controls (Inter)**: Built for high scanability in forms, tables, sidebars, and documentation. Line heights stay disciplined (1.4–1.5x) to maintain compact vertical cadence.
- **Monospace (JetBrains Mono)**: Reserved for API keys, JSON payloads, inline code parameters, and ledger balances.

## Layout & Spacing

This design system uses a strict 8pt base grid with a 4pt sub-rhythm for micro-elements (chips, inputs, button padding).

- **Grid Architecture**:
  - **Desktop (1200px+)**: 12-column responsive fluid grid with `2rem` outer margins and `1.5rem` gutters. Maximum content canvas spans `1280px` for optimal data density.
  - **Tablet (768px - 1199px)**: 8-column layout with `1.5rem` outer margins and `1.25rem` gutters. Sidebars fold into collapsible overlay drawers or icon strips.
  - **Mobile (<768px)**: 4-column layout with `1rem` margins and `1rem` gutters. Multi-column cards stack vertically; tables scroll along the horizontal overflow plane.
- **Rhythm Rules**: Keep internal component padding tight (`space-sm` to `space-md`) while allowing generous separation between primary sections (`space-xl`), producing a layout that feels compact without feeling congested.

## Elevation & Depth

Visual hierarchy relies on flat surface stratification punctuated by delicate, cool-tinted ambient shadows rather than high blur opacities.

- **Level 0 (Canvas Base)**: `#F5F8FF` solid fill. Flat with 0 elevation.
- **Level 1 (Default Surface / Cards / Panels)**: `#FFFFFF` fill enclosed by a continuous `1px solid #DCE7FA` border. Ambient elevation: `0 1px 3px rgba(45, 108, 240, 0.04), 0 1px 2px rgba(26, 31, 54, 0.03)`.
- **Level 2 (Hovered Cards / Dropdowns / Popovers)**: `#FFFFFF` fill with `1px solid #C7D8F8`. Shadow: `0 4px 12px -2px rgba(45, 108, 240, 0.08), 0 2px 6px -1px rgba(26, 31, 54, 0.04)`.
- **Level 3 (Modals / Floating Overlays)**: `#FFFFFF` fill framed by `1px solid #DCE7FA`. Shadow: `0 12px 32px -4px rgba(26, 31, 54, 0.08), 0 4px 12px -2px rgba(45, 108, 240, 0.06)`.
- **Backdrop Overlays**: Solid dark slate tint with light dispersion: `rgba(26, 31, 54, 0.35)`. No backdrop blur filters are permitted.

## Shapes

The shape system adopts **Soft (Level 1)** corner geometry, evoking structural engineering and software precision:

- **Base Radius (0.25rem / 4px)**: Checkboxes, tags, code snippets, inline tooltips, and table cell highlights.
- **Medium Radius (0.375rem / 6px)**: Standard form inputs, buttons, chips, and dropdown menu items.
- **Large Radius (0.5rem / 8px)**: Cards, modular panels, dialogs, and slide-out sheets.
- **Pill Radius (9999px)**: Restricted entirely to status indicator chips and notification count badges.

## Components

### Buttons
- **Primary**: Background `#2D6CF0`, text `#FFFFFF`, border `1px solid #2D6CF0`, font weight 500. Hover state: `#1E56D0`. Active: `#194BB8`. Focus ring: `0 0 0 3px rgba(45, 108, 240, 0.25)`.
- **Secondary**: Background `#FFFFFF`, text `#1A1F36`, border `1px solid #DCE7FA`. Hover: background `#F5F8FF`, border `#BFCFEF`.
- **Subtle / Ghost**: Background transparent, text `#5B6178`. Hover: background `#E8F1FF`, text `#2D6CF0`.
- **Padding**: Vertical 8px, Horizontal 14px (medium); height 36px.

### Input Fields
- **Default**: Background `#FFFFFF`, border `1px solid #DCE7FA`, text `#1A1F36`, placeholder `#8B94A5`. Height 36px, internal padding `0 12px`.
- **Focus**: Border `#2D6CF0`, box-shadow `0 0 0 3px rgba(45, 108, 240, 0.15)`.
- **Error**: Border `#E5484D`, box-shadow `0 0 0 3px rgba(229, 72, 77, 0.15)`.

### Cards & Data Panels
- **Structure**: Surface `#FFFFFF`, border `1px solid #DCE7FA`, radius 8px, padding 20px.
- **Header Separator**: Optional `1px solid #EDF3FC` line separating metadata from panel bodies.

### Chips & Badges
- **Informative**: Background `#E8F1FF`, text `#2D6CF0`, border `1px solid #D0E2FF`, radius 4px or pill, font size 12px, font weight 500.
- **Neutral / Meta**: Background `#F0F4FA`, text `#5B6178`, border `1px solid #DCE7FA`.
- **Success / Active**: Background `#E6F7ED`, text `#137A4B`, border `1px solid #C4EED0`.

### Lists & Tables
- **Table Headers**: Background `#F8FAFC`, text `#8B94A5`, uppercase, font size 11px, letter-spacing `0.04em`, bottom border `1px solid #DCE7FA`.
- **Row States**: Default white; hover state triggers `#F5F8FF`. Cell borders use `1px solid #EDF3FC`.

### Checkboxes & Radios
- **Default Unchecked**: Background `#FFFFFF`, border `1px solid #BACCE8`, 16px square (checkbox) or circle (radio).
- **Checked State**: Background `#2D6CF0`, border `#2D6CF0`, icon/dot `#FFFFFF`. Focus ring matches standard input specs.