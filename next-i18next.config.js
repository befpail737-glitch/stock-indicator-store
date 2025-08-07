// next-i18next.config.js (最终正确版)

const path = require('path');

module.exports = {
  i18n: {
    locales: ['zh', 'en'],
    defaultLocale: 'zh',
  },
  localePath: path.resolve('./public/locales'),
};
