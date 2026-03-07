# Flip Clock

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![CI](https://github.com/kelaocai/retro-flip-clock/actions/workflows/ci.yml/badge.svg)](https://github.com/kelaocai/retro-flip-clock/actions/workflows/ci.yml)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue.svg)](https://www.typescriptlang.org)
[![Next.js](https://img.shields.io/badge/Next.js-16-black.svg)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev)

A beautiful, customizable React component library for displaying flip card animations inspired by classic mechanical flip clocks and scoreboards.

### Preview

![Flip Clock Preview](https://github.com/user-attachments/assets/a1bbc5cb-aa56-4690-9484-9164ab3ccf13)

### Full Screen Mode

![Flip Clock Full Screen](https://github.com/user-attachments/assets/562fdafd-32dd-4f5a-b48f-bf1aae11c4c6)

## Why this exists

Building a retro-style flip clock from scratch is painful:

- Complex 3D transform animations require deep CSS knowledge
- Managing flip state and timing is error-prone
- Hard to customize styling while maintaining the authentic mechanical feel
- Most solutions are either too simple or overly bloated

`@flip-clock/core` provides a drop-in solution with smooth 3D animations, full TypeScript support, and complete customization control.

## Install

```bash
npm install @flip-clock/core
# or
yarn add @flip-clock/core
# or
pnpm add @flip-clock/core
```

## Quick Start

### Basic Clock

```tsx
import { FlipClock } from '@flip-clock/core'

export default function App() {
  return <FlipClock />
}
```

### With Options

```tsx
import { FlipClock } from '@flip-clock/core'

export default function App() {
  return (
    <FlipClock
      format="12h"
      showSeconds={true}
      animationDuration={600}
    />
  )
}
```

### Custom Flip Card

```tsx
import { FlipCard } from '@flip-clock/core'

export default function App() {
  return (
    <FlipCard
      value="42"
      prevValue="41"
      animationDuration={500}
    />
  )
}
```

## Features

- Smooth 3D flip animations with realistic physics
- 12h/24h time format support
- Customizable card dimensions and colors
- Responsive design for all devices
- Full TypeScript support with type definitions
- Lightweight - zero additional dependencies

## API Reference

### FlipClock Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `format` | `'12h' \| '24h'` | `'24h'` | Time format |
| `showSeconds` | `boolean` | `true` | Show seconds display |
| `animationDuration` | `number` | `500` | Animation duration (ms) |
| `cardWidth` | `string` | `'w-24 md:w-28'` | Tailwind width class |
| `cardHeight` | `string` | `'h-32 md:h-40'` | Tailwind height class |
| `containerClassName` | `string` | - | Additional container classes |
| `onTimeChange` | `function` | - | Time change callback |

### FlipCard Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | required | Current display value |
| `prevValue` | `string` | required | Previous display value |
| `animationDuration` | `number` | `500` | Animation duration (ms) |
| `cardWidth` | `string` | `'w-24'` | Tailwind width class |
| `cardHeight` | `string` | `'h-32'` | Tailwind height class |
| `textColor` | `string` | `'#e8e8e8'` | Text color (hex) |
| `backgroundColor` | `string` | `'#1a1a1a'` | Background color (hex) |
| `fontSize` | `number` | `90` | Font size for numbers |

## Customization

### Custom Theme

```tsx
<FlipClock
  containerClassName="bg-blue-900 rounded-lg"
  cardWidth="w-32 md:w-40"
  cardHeight="h-40 md:h-48"
  animationDuration={600}
/>
```

### Countdown Timer

```tsx
import { FlipClock } from '@flip-clock/core'
import { useState, useEffect } from 'react'

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    hours: '00',
    minutes: '05',
    seconds: '00'
  })

  useEffect(() => {
    // Your countdown logic
  }, [])

  return <FlipClock />
}
```

### Scoreboard

```tsx
import { FlipCard } from '@flip-clock/core'

export default function Scoreboard() {
  return (
    <div className="flex gap-4">
      <FlipCard value="24" prevValue="23" />
      <span className="text-4xl">-</span>
      <FlipCard value="18" prevValue="17" />
    </div>
  )
}
```

## Demo

Live demo: https://retro-flip-clock.vercel.app

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT
