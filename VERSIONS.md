# 版本说明

本项目提供两个版本供开发者选择：

## 版本对比

| 特性 | Vite 版本 (main) ⭐ | Next.js 版本 (nextjs) |
|------|---------------------|----------------------|
| **开发体验** |
| 开发服务器启动 | 极快（< 1s） | 较快（~3s） |
| 热更新速度 | 极快 | 快 |
| 配置复杂度 | 简单 | 中等 |
| **构建产物** |
| 构建产物大小 | 小（~200KB） | 中等 |
| 依赖包数量 | 少（~34 个） | 多（~173 个） |
| 输出目录 | `dist/` | `out/` |
| **功能特性** |
| SSR/SSG 支持 | ❌ | ✅ |
| 静态导出 | ✅ | ✅ |
| API Routes | ❌ | ✅ |
| 图片优化 | ❌ | ✅ |
| **适用场景** |
| 纯前端项目 | ✅ 推荐 | ✅ |
| 需要 SSR | ❌ | ✅ |
| 组件库开发 | ✅ 推荐 | ⚠️ |
| 快速原型 | ✅ 推荐 | ✅ |

## 推荐使用场景

### Vite 版本（main 分支）⭐ 推荐

适合以下场景：
- 纯前端单页应用
- 组件库开发和演示
- 快速原型开发
- 追求极致的开发体验
- 希望减少依赖体积

**优势：**
- 开发服务器启动速度极快
- HMR（热模块替换）响应迅速
- 配置简洁，易于理解和维护
- 依赖体积小，安装速度快
- 构建产物更小

### Next.js 版本（nextjs 分支）

适合以下场景：
- 需要服务端渲染（SSR）
- 需要静态站点生成（SSG）
- 需要 API Routes
- 需要 Next.js 生态的其他功能
- 已有 Next.js 技术栈的团队

**优势：**
- 完整的 Next.js 生态支持
- 内置图片优化
- 支持 SSR/SSG
- 可以添加 API 端点

## 如何选择？

```
需要 SSR/SSG？
├─ 是 → 使用 Next.js 版本（nextjs 分支）
└─ 否 → 使用 Vite 版本（main 分支）⭐

追求极致开发体验？
└─ 是 → 使用 Vite 版本（main 分支）⭐

已有 Next.js 项目？
├─ 是 → 使用 Next.js 版本（nextjs 分支）
└─ 否 → 使用 Vite 版本（main 分支）⭐
```

## 切换版本

### 切换到 Vite 版本（推荐）

```bash
git checkout main
npm install
npm run dev
# 访问 http://localhost:5173
```

### 切换到 Next.js 版本

```bash
git checkout nextjs
npm install
npm run dev
# 访问 http://localhost:3000/retro-flip-clock
```

## 技术栈对比

### Vite 版本（main）

```json
{
  "核心依赖": {
    "react": "19.2.0",
    "react-dom": "19.2.0"
  },
  "构建工具": {
    "vite": "^6.0.0",
    "@vitejs/plugin-react": "^5.1.4"
  },
  "样式": {
    "tailwindcss": "^4.1.9",
    "tw-animate-css": "1.3.3"
  },
  "测试": {
    "vitest": "^4.0.18",
    "@testing-library/react": "^16.3.2"
  }
}
```

### Next.js 版本（nextjs）

```json
{
  "核心依赖": {
    "next": "16.0.3",
    "react": "19.2.0",
    "react-dom": "19.2.0"
  },
  "UI 库": {
    "@radix-ui/*": "多个组件",
    "lucide-react": "^0.454.0"
  },
  "样式": {
    "tailwindcss": "^4.1.9",
    "tailwindcss-animate": "^1.0.7"
  },
  "测试": {
    "vitest": "^4.0.18",
    "@testing-library/react": "^16.3.2"
  }
}
```

## 维护策略

- **主要开发分支**：main（Vite 版本）
- **稳定维护分支**：nextjs（Next.js 版本）

新功能优先在 main 分支开发，重要的 bug 修复会同步到两个分支。

## 相关链接

- [Vite 版本（main 分支）](https://github.com/kelaocai/retro-flip-clock/tree/main)
- [Next.js 版本（nextjs 分支）](https://github.com/kelaocai/retro-flip-clock/tree/nextjs)
- [在线演示](https://kelaocai.github.io/retro-flip-clock/)
- [问题反馈](https://github.com/kelaocai/retro-flip-clock/issues)
