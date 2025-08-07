/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // V3.2 Build - 这行注释会强制 Cloudflare 进行一次全新的构建，以刷新所有数据缓存。
  // 这将确保它读取最新的 product.js 文件。
}

module.exports = nextConfig