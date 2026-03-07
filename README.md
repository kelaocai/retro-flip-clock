# Flip Clock - Retro Flip Card Display Library

[中文](#中文) | [English](#english)

---

## English

A beautiful, customizable React library for displaying flip card animations inspired by classic mechanical flip clocks and scoreboards.

### window preview

![Screen-2025-12-01-123313](https://github.com/user-attachments/assets/a1bbc5cb-aa56-4690-9484-9164ab3ccf13)

### full screen
<img width="1916" height="1239" alt="SCR-20260307-qtni" src="https://github.com/user-attachments/assets/562fdafd-32dd-4f5a-b48f-bf1aae11c4c6" />


### DEMO
https://retro-flip-clock.vercel.app

### Features

- 🎬 Smooth 3D flip animations with realistic physics
- 🎨 Fully customizable styling and animations
- ⏰ Built-in FlipClock component with 12h/24h format support
- 🧩 Reusable FlipCard component for custom implementations
- 📱 Responsive design that works on all devices
- ♿ Accessibility-first design
- 📦 Zero dependencies (only React)
- 🎯 TypeScript support with full type definitions

### Installation

```bash
npm install @flip-clock/core
# or
yarn add @flip-clock/core
# or
pnpm add @flip-clock/core
```

### Quick Start

#### Basic Clock

```tsx
import { FlipClock } from '@flip-clock/core'

export default function App() {
  return <FlipClock />
}
```

#### Custom Clock with 12-hour format

```tsx
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
```

#### Individual Flip Card

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

### Props

#### FlipClock

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `format` | `'12h' \| '24h'` | `'24h'` | Time format (12-hour or 24-hour) |
| `showSeconds` | `boolean` | `true` | Show seconds display |
| `onTimeChange` | `(time) => void` | - | Callback when time changes |
| `containerClassName` | `string` | - | Additional CSS classes for container |
| `cardWidth` | `string` | `'w-24 md:w-28'` | Tailwind width classes for cards |
| `cardHeight` | `string` | `'h-32 md:h-40'` | Tailwind height classes for cards |
| `animationDuration` | `number` | `500` | Animation duration in milliseconds |

#### FlipCard

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

### Examples

#### Countdown Timer

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
    // Your countdown logic here
  }, [])

  return <FlipClock />
}
```

#### Scoreboard

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

### Customization

#### Custom Theme

```tsx
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
```

### Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Performance

The library is optimized for performance with:
- Minimal re-renders using React hooks
- GPU-accelerated CSS animations
- Efficient state management

### Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

#### Development Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/flip-clock.git

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

### License

MIT © 2025 - See LICENSE file for details.

### Changelog

See [CHANGELOG.md](./CHANGELOG.md) for detailed version history.

### Support

- Documentation: [docs.example.com](https://docs.example.com)
- Issues: [GitHub Issues](https://github.com/yourusername/flip-clock/issues)
- Discussions: [GitHub Discussions](https://github.com/yourusername/flip-clock/discussions)

---

## 中文

一个精美、可定制的 React 库，用于显示灵感来自经典机械翻牌钟和记分牌的翻牌卡动画。

![Flip Clock Demo](https://your-demo-url.com/flip-clock.gif)

### 特性

- 🎬 流畅的 3D 翻转动画，具有逼真的物理效果
- 🎨 完全可定制的样式和动画
- ⏰ 内置 FlipClock 组件，支持 12h/24h 格式
- 🧩 可复用的 FlipCard 组件，用于自定义实现
- 📱 响应式设计，适配所有设备
- ♿ 可访问性优先设计
- 📦 零依赖（仅需 React）
- 🎯 完整的 TypeScript 类型支持

### 安装

```bash
npm install @flip-clock/core
# 或
yarn add @flip-clock/core
# 或
pnpm add @flip-clock/core
```

### 快速开始

#### 基础时钟

```tsx
import { FlipClock } from '@flip-clock/core'

export default function App() {
  return <FlipClock />
}
```

#### 自定义 12 小时制时钟

```tsx
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
```

#### 单个翻牌卡片

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

### 属性

#### FlipClock

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `format` | `'12h' \| '24h'` | `'24h'` | 时间格式（12小时或24小时） |
| `showSeconds` | `boolean` | `true` | 是否显示秒数 |
| `onTimeChange` | `(time) => void` | - | 时间改变时的回调函数 |
| `containerClassName` | `string` | - | 容器的额外 CSS 类名 |
| `cardWidth` | `string` | `'w-24 md:w-28'` | 卡片宽度 Tailwind 类名 |
| `cardHeight` | `string` | `'h-32 md:h-40'` | 卡片高度 Tailwind 类名 |
| `animationDuration` | `number` | `500` | 动画时长（毫秒） |

#### FlipCard

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `value` | `string` | 必需 | 当前显示的值 |
| `prevValue` | `string` | 必需 | 上一个显示的值 |
| `animationDuration` | `number` | `500` | 动画时长（毫秒） |
| `cardWidth` | `string` | `'w-24'` | 卡片宽度 Tailwind 类名 |
| `cardHeight` | `string` | `'h-32'` | 卡片高度 Tailwind 类名 |
| `fontSize` | `number` | `90` | 数字字体大小 |
| `textColor` | `string` | `'#e8e8e8'` | 文字颜色（十六进制） |
| `backgroundColor` | `string` | `'#1a1a1a'` | 背景颜色（十六进制） |

### 示例

#### 倒计时器

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
    // 你的倒计时逻辑在这里
  }, [])

  return <FlipClock />
}
```

#### 记分牌

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

### 自定义

#### 自定义主题

```tsx
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
```

### 浏览器支持

- Chrome（最新版）
- Firefox（最新版）
- Safari（最新版）
- Edge（最新版）

### 性能

该库经过性能优化，具有：
- 使用 React Hooks 最小化重新渲染
- GPU 加速的 CSS 动画
- 高效的状态管理

### 贡献指南

欢迎贡献代码！请随时提交 Pull Request。对于重大更改，请先打开 Issue 讨论您想要做的更改。

#### 开发环境设置

```bash
# 克隆仓库
git clone https://github.com/yourusername/flip-clock.git

# 安装依赖
npm install

# 运行开发服务器
npm run dev

# 为生产环境构建
npm run build
```

### 许可证

MIT © 2025 - 详见 LICENSE 文件

### 更新日志

详见 [CHANGELOG.md](./CHANGELOG.md) 获取版本历史记录。

### 支持

- 文档：[docs.example.com](https://docs.example.com)
- 问题：[GitHub Issues](https://github.com/yourusername/flip-clock/issues)
- 讨论：[GitHub Discussions](https://github.com/yourusername/flip-clock/discussions)

---

Made with ❤️ by the Flip Clock community
