import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  // 禁用 Next.js 热重载，由 nodemon 处理重编译
  reactStrictMode: false,
  // 为 GitHub Pages 启用静态导出
  output: 'export',
  // GitHub Pages 下通常托管在 /{repo} 路径
  // 在 CI 中通过环境变量 NEXT_PUBLIC_BASE_PATH 传入，如 "/repo-name"
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  // 静态资源前缀与 basePath 保持一致（避免资源 404）
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
  // next/image 在静态导出下需关闭优化
  images: {
    unoptimized: true,
  },
  // 推荐开启结尾斜杠以减少 404 概率
  trailingSlash: true,
  // 确保跨源资源难题安全加载
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "upgrade-insecure-requests"
          }
        ]
      }
    ];
  },
  webpack: (config, { dev }) => {
    if (dev) {
      // 禁用 webpack 的热模块替换
      config.watchOptions = {
        ignored: ['**/*'], // 忽略所有文件变化
      };
    }
    return config;
  },
  eslint: {
    // 构建时忽略ESLint错误
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
