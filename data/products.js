// /data/products.js
export const products = [
  // --- 指标类产品 ---
  {
    id: 1,
    slug: 'chaodi-king',
    name: '抄底王',
    price: '199',
    category: 'indicator',
    shortDescription: '精准捕捉市场底部信号，助您稳健抄底。',
    longDescription: '本指标通过多重算法分析市场情绪与资金流向，能在股价进入历史性低位区域时发出明确信号，是稳健型投资者的必备利器。',
    imageUrl: '/images/products/chaodi-king.png',
    alipayQr: '/images/qr-alipay.png', wechatQr: '/images/qr-wechat.png',
  },
  {
    id: 2,
    slug: 'liucai-shenlong',
    name: '六彩神龙',
    price: '299',
    category: 'indicator',
    shortDescription: '多维度趋势分析，轻松识别主力动向。',
    longDescription: '通过红、黄、蓝等六色彩带直观展示市场成本、主力动向和趋势变化。红色代表获利盘，黄色代表浮动筹码，蓝色代表套牢盘。',
    imageUrl: '/images/products/liucai-shenlong.png',
    alipayQr: '/images/qr-alipay.png', wechatQr: '/images/qr-wechat.png',
  },
  // ... 其他旧指标产品保持不变 ...
  
  // --- 新增：选股器类产品 ---
  // 美股
  { id: 101, slug: 'us-screener-30min', name: '美股30分钟抄底选股器', price: '499', category: 'screener', shortDescription: '实时扫描全美股，捕捉30分钟级别的超跌反弹机会。', longDescription: '适合日内短线交易者，基于量价关系和特定K线形态，筛选出即将发生反弹的股票。', imageUrl: '/images/products/us-screener-30min.png', alipayQr: '/images/qr-alipay.png', wechatQr: '/images/qr-wechat.png' },
  { id: 102, slug: 'us-screener-1hr', name: '美股1小时抄底选股器', price: '499', category: 'screener', shortDescription: '捕捉小时级别的波段性底部，提高交易成功率。', longDescription: '结合小时线MACD背离和成交量异动，筛选出波段性建仓机会。', imageUrl: '/images/products/us-screener-1hr.png', alipayQr: '/images/qr-alipay.png', wechatQr: '/images/qr-wechat.png' },
  { id: 103, slug: 'us-screener-daily', name: '美股日级别抄底选股器', price: '599', category: 'screener', shortDescription: '寻找日线级别的价值洼地，适合波段和中线投资者。', longDescription: '扫描符合多重底部技术形态（如W底、头肩底）的股票，发出中长线布局信号。', imageUrl: '/images/products/us-screener-daily.png', alipayQr: '/images/qr-alipay.png', wechatQr: '/images/qr-wechat.png' },
  { id: 104, slug: 'us-screener-weekly', name: '美股周级别抄底选股器', price: '599', category: 'screener', shortDescription: '发掘周线级别的历史性大底，专为长线价值投资者设计。', longDescription: '从基本面和技术面双重维度出发，寻找被市场错杀的优质公司在周线级别的买入点。', imageUrl: '/images/products/us-screener-weekly.png', alipayQr: '/images/qr-alipay.png', wechatQr: '/images/qr-wechat.png' },
  // 日股
  { id: 201, slug: 'jp-screener-30min', name: '日股30分钟抄底选股器', price: '499', category: 'screener', shortDescription: '实时扫描全日股，捕捉30分钟级别的超跌反弹机会。', longDescription: '适合日内短线交易者，基于量价关系和特定K线形态，筛选出即将发生反弹的股票。', imageUrl: '/images/products/jp-screener-30min.png', alipayQr: '/images/qr-alipay.png', wechatQr: '/images/qr-wechat.png' },
  { id: 202, slug: 'jp-screener-1hr', name: '日股1小时抄底选股器', price: '499', category: 'screener', shortDescription: '捕捉小时级别的波段性底部，提高交易成功率。', longDescription: '结合小时线MACD背离和成交量异动，筛选出波段性建仓机会。', imageUrl: '/images/products/jp-screener-1hr.png', alipayQr: '/images/qr-alipay.png', wechatQr: '/images/qr-wechat.png' },
  { id: 203, slug: 'jp-screener-daily', name: '日股日级别抄底选股器', price: '599', category: 'screener', shortDescription: '寻找日线级别的价值洼地，适合波段和中线投资者。', longDescription: '扫描符合多重底部技术形态（如W底、头肩底）的股票，发出中长线布局信号。', imageUrl: '/images/products/jp-screener-daily.png', alipayQr: '/images/qr-alipay.png', wechatQr: '/images/qr-wechat.png' },
  { id: 204, slug: 'jp-screener-weekly', name: '日股周级别抄底选股器', price: '599', category: 'screener', shortDescription: '发掘周线级别的历史性大底，专为长线价值投资者设计。', longDescription: '从基本面和技术面双重维度出发，寻找被市场错杀的优质公司在周线级别的买入点。', imageUrl: '/images/products/jp-screener-weekly.png', alipayQr: '/images/qr-alipay.png', wechatQr: '/images/qr-wechat.png' },
  // 港股
  { id: 301, slug: 'hk-screener-30min', name: '港股30分钟抄底选股器', price: '499', category: 'screener', shortDescription: '实时扫描全港股，捕捉30分钟级别的超跌反弹机会。', longDescription: '适合日内短线交易者，基于量价关系和特定K线形态，筛选出即将发生反弹的股票。', imageUrl: '/images/products/hk-screener-30min.png', alipayQr: '/images/qr-alipay.png', wechatQr: '/images/qr-wechat.png' },
  { id: 302, slug: 'hk-screener-1hr', name: '港股1小时抄底选股器', price: '499', category: 'screener', shortDescription: '捕捉小时级别的波段性底部，提高交易成功率。', longDescription: '结合小时线MACD背离和成交量异动，筛选出波段性建仓机会。', imageUrl: '/images/products/hk-screener-1hr.png', alipayQr: '/images/qr-alipay.png', wechatQr: '/images/qr-wechat.png' },
  { id: 303, slug: 'hk-screener-daily', name: '港股日级别抄底选股器', price: '599', category: 'screener', shortDescription: '寻找日线级别的价值洼地，适合波段和中线投资者。', longDescription: '扫描符合多重底部技术形态（如W底、头肩底）的股票，发出中长线布局信号。', imageUrl: '/images/products/hk-screener-daily.png', alipayQr: '/images/qr-alipay.png', wechatQr: '/images/qr-wechat.png' },
  { id: 304, slug: 'hk-screener-weekly', name: '港股周级别抄底选股器', price: '599', category: 'screener', shortDescription: '发掘周线级别的历史性大底，专为长线价值投资者设计。', longDescription: '从基本面和技术面双重维度出发，寻找被市场错杀的优质公司在周线级别的买入点。', imageUrl: '/images/products/hk-screener-weekly.png', alipayQr: '/images/qr-alipay.png', wechatQr: '/images/qr-wechat.png' },
];