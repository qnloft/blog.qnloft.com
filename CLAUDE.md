# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `pnpm dev` - Start development server
- `pnpm build` - Build for production with pagefind search index
- `pnpm preview` - Preview production build locally
- `pnpm check` - Run Astro type checking
- `pnpm type-check` - Run TypeScript compiler checks
- `pnpm format` - Format code with Biome
- `pnpm lint` - Lint and fix code with Biome
- `pnpm new-post` - Create new blog post

## Architecture Overview

This is an Astro-based blog with Svelte components, featuring:
- **Content**: Markdown posts in `src/content/posts/`
- **Components**: Mix of Astro (.astro) and Svelte (.svelte) components
- **Styling**: Tailwind CSS with custom Stylus styles
- **Internationalization**: Multi-language support in `src/i18n/`
- **Search**: Pagefind integration for client-side search
- **Syntax Highlighting**: Expressive Code for code blocks
- **Math Support**: KaTeX for mathematical notation

Key directories:
- `src/content/` - Blog posts and content configuration
- `src/components/` - UI components (Astro + Svelte)
- `src/utils/` - Utility functions
- `src/plugins/` - Custom remark/rehype plugins
- `src/styles/` - CSS/Stylus stylesheets

## Code Quality
- TypeScript throughout the codebase
- Biome for formatting and linting
- Conventional commits for commit messages