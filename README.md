# Flip Clock - Retro Flip Card Display Library

A beautiful, customizable React library for displaying flip card animations inspired by classic mechanical flip clocks and scoreboards.

![Flip Clock Demo](https://your-demo-url.com/flip-clock.gif)

## Features

- 🎬 Smooth 3D flip animations with realistic physics
- 🎨 Fully customizable styling and animations
- ⏰ Built-in FlipClock component with 12h/24h format support
- 🧩 Reusable FlipCard component for custom implementations
- 📱 Responsive design that works on all devices
- ♿ Accessibility-first design
- 📦 Zero dependencies (only React)
- 🎯 TypeScript support with full type definitions

## Installation

\`\`\`bash
npm install @flip-clock/core
# or
yarn add @flip-clock/core
# or
pnpm add @flip-clock/core
\`\`\`

## Quick Start

### Basic Clock

\`\`\`tsx
import { FlipClock } from '@flip-clock/core'

export default function App() {
  return <FlipClock />
}
\`\`\`

### Custom Clock with 12-hour format

\`\`\`tsx
import { FlipClock } from '@flip-clock/core'

export default function App() {
  return (
    <FlipClock
      format="12h"
      showSeconds={true}
      onTimeChange={(time) => console.log(time)}
    />
  )
}
\`\`\`

### Individual Flip Card

\`\`\`tsx
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
\`\`\`

## Props

### FlipClock

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `format` | `'12h' \| '24h'` | `'24h'` | Time format (12-hour or 24-hour) |
| `showSeconds` | `boolean` | `true` | Show seconds display |
| `onTimeChange` | `(time) => void` | - | Callback when time changes |
| `containerClassName` | `string` | - | Additional CSS classes for container |
| `cardWidth` | `string` | `'w-24 md:w-28'` | Tailwind width classes for cards |
| `cardHeight` | `string` | `'h-32 md:h-40'` | Tailwind height classes for cards |
| `animationDuration` | `number` | `500` | Animation duration in milliseconds |

### FlipCard

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | Required | Current display value |
| `prevValue` | `string` | Required | Previous display value |
| `animationDuration` | `number` | `500` | Animation duration in milliseconds |
| `cardWidth` | `string` | `'w-24'` | Tailwind width classes |
| `cardHeight` | `string` | `'h-32'` | Tailwind height classes |
| `fontSize` | `number` | `90` | Font size for numbers |
| `textColor` | `string` | `'#e8e8e8'` | Text color (hex) |
| `backgroundColor` | `string` | `'#1a1a1a'` | Background color (hex) |

## Examples

### Countdown Timer

\`\`\`tsx
import { FlipClock } from '@flip-clock/core'
import { useState, useEffect } from 'react'

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    hours: '00',
    minutes: '05',
    seconds: '00'
  })

  useEffect(() => {
    // Your countdown logic here
  }, [])

  return <FlipClock />
}
\`\`\`

### Scoreboard

\`\`\`tsx
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
\`\`\`

## Customization

### Custom Theme

\`\`\`tsx
import { FlipClock } from '@flip-clock/core'

export default function CustomTheme() {
  return (
    <FlipClock
      containerClassName="bg-blue-900 rounded-lg"
      cardWidth="w-32 md:w-40"
      cardHeight="h-40 md:h-48"
      animationDuration={600}
    />
  )
}
\`\`\`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

The library is optimized for performance with:
- Minimal re-renders using React hooks
- GPU-accelerated CSS animations
- Efficient state management

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Setup

\`\`\`bash
# Clone the repository
git clone https://github.com/yourusername/flip-clock.git

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
\`\`\`

## License

MIT © 2025 - See LICENSE file for details.

## Changelog

See [CHANGELOG.md](./CHANGELOG.md) for detailed version history.

## Support

- Documentation: [docs.example.com](https://docs.example.com)
- Issues: [GitHub Issues](https://github.com/yourusername/flip-clock/issues)
- Discussions: [GitHub Discussions](https://github.com/yourusername/flip-clock/discussions)

---

Made with ❤️ by the Flip Clock community
