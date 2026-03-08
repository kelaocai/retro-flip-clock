# Next.js 版本说明

这是 Retro Flip Clock 的 Next.js 版本分支。

## 分支说明

本项目提供两个版本供开发者选择：

- **main 分支**（推荐）：基于 Vite + React 的轻量级版本
  - 更快的开发服务器启动速度
  - 更简洁的配置
  - 更小的依赖体积
  - 适合纯前端项目

- **nextjs 分支**（当前分支）：基于 Next.js 的版本
  - 完整的 Next.js 生态支持
  - 适合需要 SSR/SSG 的场景
  - 适合需要集成 Next.js 其他功能的项目

## 使用方法

```bash
# 克隆仓库并切换到 nextjs 分支
git clone https://github.com/kelaocai/retro-flip-clock.git
cd retro-flip-clock
git checkout nextjs

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

访问 `http://localhost:3000/retro-flip-clock`

## 技术栈

- Next.js 16
- React 19
- TypeScript 5
- Tailwind CSS 4

## 切换到 Vite 版本

如果你想使用更轻量的 Vite 版本：

```bash
git checkout main
npm install
npm run dev
```

访问 `http://localhost:5173`

## 版本对比

| 特性 | Vite 版本 (main) | Next.js 版本 (nextjs) |
|------|------------------|----------------------|
| 开发服务器启动 | 极快 | 较快 |
| 热更新速度 | 极快 | 快 |
| 构建产物大小 | 小 | 中等 |
| 依赖包数量 | 少（~34 个） | 多（~173 个） |
| SSR/SSG 支持 | 无 | 有 |
| 配置复杂度 | 简单 | 中等 |
| 适用场景 | 纯前端项目 | 需要 SSR 的项目 |

## 维护说明

- 本分支保持稳定，不会频繁更新
- 新功能优先在 main 分支（Vite 版本）开发
- 重要的 bug 修复会同步到两个分支

## 相关链接

- [主分支 (Vite 版本)](https://github.com/kelaocai/retro-flip-clock/tree/main)
- [在线演示](https://kelaocai.github.io/retro-flip-clock/)
- [问题反馈](https://github.com/kelaocai/retro-flip-clock/issues)
