// next-i18next.config.js (修正版)

const path = require('path'); // 这行在构建时（Node.js环境）是可用的

module.exports = {
  i18n: {
    // 支持的语言列表
    locales: ['zh', 'en'],
    // 默认语言
    defaultLocale: 'zh',
  },
  // 【重要】添加这个配置
  // 这会告诉 next-i18next 配置文件在服务器上的具体位置，
  // 从而避免它在客户端/Edge环境中去动态解析路径，也就避免了调用 'path' 模块。
  localePath: path.resolve('./public/locales'),
};