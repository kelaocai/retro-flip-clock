# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React flip clock component library - a beautiful, customizable library for displaying flip card animations inspired by classic mechanical flip clocks. Built with Next.js and distributed as `@flip-clock/core`.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4

## Common Commands

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run lint      # Run ESLint
npm run start     # Start production server
npm run test      # Run tests (watch mode)
npm run test:run  # Run tests (single run)
```

## Architecture

### Core Components

- `components/core/flip-card.tsx` - Base flip card component with 3D flip animation
- `components/core/flip-clock.tsx` - Complete clock component with time management
- `index.ts` - Library entry point exporting `FlipCard` and `FlipClock`

### Types

Defined in `lib/types.ts`:
- `FlipCardProps` - Props for FlipCard component
- `FlipClockProps` - Props for FlipClock component
- `FlipClockTimeState` - Time state interface

### Key Props

**FlipClock:**
- `format`: `'12h' | '24h'` - Time format (default: `'24h'`)
- `showSeconds`: `boolean` - Show seconds (default: `true`)
- `animationDuration`: `number` - Animation duration in ms (default: `500`)
- `cardWidth`/`cardHeight`: Tailwind width/height classes
- `isImmersive`: `boolean` - Immersive fullscreen mode

**FlipCard:**
- `value`: Current display value (required)
- `prevValue`: Previous display value (required)
- `animationDuration`: Animation duration in ms (default: `500`)
- `textColor`/`backgroundColor`: Hex color strings

## Development Notes

- Demo page is in `app/page.tsx`
- Demo uses Next.js theme provider with light/dark mode toggle
- The library uses CSS 3D transforms for flip animations
- Animation timing is controlled via CSS custom properties
- Tests are run with Vitest (see `vitest.config.ts`)
- CI/CD is configured in `.github/workflows/ci.yml`
