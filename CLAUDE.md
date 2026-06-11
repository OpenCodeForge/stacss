# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server at http://localhost:4321
npm run build    # static build to dist/
npm run preview  # preview the build locally
```

There is no test suite and no linter configured.

## Architecture

This is an **Astro 4 static site** — the documentation website for the STACSS CSS architecture convention. It deploys to [stacss.dev](https://stacss.dev) via Netlify (`netlify.toml`).

### Layout hierarchy

- `Layout.astro` — base shell (Navbar, Footer, global `<head>`). Used directly by the landing page.
- `DocsLayout.astro` — wraps `Layout.astro` and adds `DocsSidebar`. Used by all `/docs/*` pages. It also injects a client-side script that auto-generates `id` attributes and `#` anchor links from any `.docs-section__title` heading.

### Docs navigation

The sidebar links are hardcoded in `DocsSidebar.astro`. Adding a new docs page requires updating the `nav` array there.

### Styles

All CSS lives in a single file: `src/styles/main.scss`. It follows BEM naming. Sass variables for colors, typography, and radii are declared at the top of that file — use them rather than hardcoding values. The `modern-compiler` Sass API is set in `astro.config.mjs`.

### CodeBlock component

`CodeBlock.astro` renders code with `set:text` (no external syntax highlighter). Syntax highlighting is done with hand-authored `<span>` elements and CSS classes (`.keyword`, `.string`, `.comment`, `.class`) inside the `code` string passed as a prop.
