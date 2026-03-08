/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/retro-flip-clock',
  images: {
    unoptimized: true,
  },
  turbopack: {
    // Ensure Turbopack treats this project directory as the workspace root
    root: process.cwd(),
  },
}

export default nextConfig
