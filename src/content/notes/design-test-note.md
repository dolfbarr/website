---
title: 'Typography and Styling Showcase'
date: 2026-08-24
description: 'A comprehensive markdown note testing headings, code blocks, blockquotes, tables, images with and without captions, and typography rendering.'
image:
  url: '/note-images/laptop-workspace.jpg'
  alt: 'Modern workspace setup with laptop and notebook'
  width: 1200
  height: 800
tags:
  - design
  - typography
  - showcase
---

## 🎨 Typography & Heading Hierarchy

This is a comprehensive note designed to visually verify the prose typography, block spacing, and syntax highlighting across light and dark themes.

Good design is as little design as possible. Less, but better — because it concentrates on the essential aspects, and the products are not burdened with non-essentials.

### Sub-heading: Interactive Elements & Code

Inline code elements look like `const greeting = "Hello, world!"` and links seamlessly transition like [Dolf's Home](/) without layout jumps.

> "Simplicity is about subtracting the obvious and adding the meaningful."  
> — John Maeda, The Laws of Simplicity

#### Code Block Syntax Highlighting

```typescript
interface Developer {
  name: string
  role: string
  experienceYears: number
  skills: string[]
}

const dolf: Developer = {
  name: 'Dolf Barr',
  role: 'Senior Software Engineer',
  experienceYears: 12,
  skills: ['TypeScript', 'React', 'Astro', 'Tailwind CSS'],
}
```

### 🖼️ Images & Visual Figures

#### 1. Standalone Image (No Caption)

![Laptop and workspace environment](/note-images/laptop-workspace.jpg)

#### 2. Semantic Figure with Captioned Explanation

<figure>
  <img src="/note-images/desk-stationery.jpg" alt="Minimalist desk stationery and design tools" />
  <figcaption>Figure 1: Minimalist desk stationery layout showcasing clean studio ergonomics.</figcaption>
</figure>

### ⚡ Interactive Live Embeds (Playgrounds & Iframes)

You can embed interactive live playgrounds (StackBlitz, CodeSandbox), interactive widgets, or media directly in markdown notes:

<iframe
  src="https://stackblitz.com/edit/vitejs-vite-ts?embed=1&file=src%2Fmain.ts&hideNavigation=1&view=preview"
  title="Interactive Vite + TypeScript Live Playground"
  class="h-96 w-full"
  loading="lazy"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts">
</iframe>

### Lists & Structured Data

Here is an unordered list of frontend principles:

- **Clean Separation of Concerns**: Isolating business logic from presentation.
- **Performance Budgeting**: Sub-second First Contentful Paint.
- **Accessibility (a11y)**: Accessible semantic structure for all users.

And an ordered pipeline workflow:

1. Lint and type-check codebase.
2. Run automated unit test suite with 100% coverage.
3. Validate visual regression snapshots across responsive viewports.

### Markdown Table Presentation

| Framework    | Rendering Strategy                     | Type System   | Primary Use Case                    |
| :----------- | :------------------------------------- | :------------ | :---------------------------------- |
| **Astro**    | Static Site Generation (SSG) / Islands | TypeScript    | Content-rich sites & portfolios     |
| **React**    | Client-Side Hydration & Components     | TypeScript    | Interactive web apps & dashboards   |
| **Tailwind** | Utility-First Compiler                 | CSS / PostCSS | Design systems & responsive styling |
