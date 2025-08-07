// /data/products.js (V4.2 最终完整版)

export const products = [
  // === 技术指标 ===
  {
    id: 1, slug: 'chaodi-king', priceRMB: 199, category: 'indicator',
    name: { zh: '抄底王', en: 'Super Bottom-Finder' },
    shortDescription: { zh: '精准捕捉市场底部信号，助您稳健抄底。', en: 'Accurately captures market bottom signals to help you buy low steadily.' },
    longDescription: { zh: '本指标通过多重算法分析市场情绪与资金流向，能在股价进入历史性低位区域时发出明确信号。', en: 'This indicator analyzes market sentiment and capital flow through multiple algorithms, providing clear signals when a stock price enters a historical low zone.' },
    imageUrl: '/images/products/chaodi-king.png', alipayQr: '/images/qr-alipay.png', wechatQr: '/images/qr-wechat.png',
  },
  {
    id: 2, slug: 'liucai-shenlong', priceRMB: 299, category: 'indicator',
    name: { zh: '六彩神龙', en: 'Rainbow Dragon' },
    shortDescription: { zh: '多维度趋势分析，轻松识别主力动向。', en: 'Multi-dimensional trend analysis to easily identify institutional movements.' },
    longDescription: { zh: '通过红、黄、蓝等六色彩带直观展示市场成本、主力动向和趋势变化。', en: 'Visually displays market costs, institutional movements, and trend changes through six colored ribbons.' },
    imageUrl: '/images/products/liucai-shenlong.png', alipayQr: '/images/qr-alipay.png', wechatQr: '/images/qr-wechat.png',
  },
  {
    id: 3, slug: 'rsi-divergence-king', priceRMB: 188, category: 'indicator',
    name: { zh: 'RSI背离王', en: 'RSI Divergence King' },
    shortDescription: { zh: '自动监测RSI背离，抓住反转先机。', en: 'Automatically monitors RSI divergence to seize reversal opportunities.' },
    longDescription: { zh: '全市场自动扫描，一旦发现价格与RSI指标出现底背离或顶背离，立即弹出信号提醒。', en: 'Scans the entire market automatically, providing instant alerts upon detecting price/RSI bullish or bearish divergence.' },
    imageUrl: '/images/products/rsi-king.png', alipayQr: '/images/qr-alipay.png', wechatQr: '/images/qr-wechat.png',
  },
  {
    id: 4, slug: 'haidilaoyue', priceRMB: 258, category: 'indicator',
    name: { zh: '海底捞月', en: 'Moon-Scooping' },
    shortDescription: { zh: '专为捕捉超跌反弹行情设计。', en: 'Designed specifically for capturing oversold bounce rallies.' },
    longDescription: { zh: '当股价经历长期下跌后，出现恐慌性抛售，指标将进入海底区域。一旦出现特定企稳K线组合，即发出“捞月”信号。', en: 'When a stock undergoes a long-term decline and panic selling occurs, this indicator enters the "seabed" zone and signals a buy opportunity upon specific stabilization patterns.' },
    imageUrl: '/images/products/haidilaoyue.png', alipayQr: '/images/qr-alipay.png', wechatQr: '/images/qr-wechat.png',
  },
  {
    id: 5, slug: 'nx-cd-selector-indicator', priceRMB: 399, category: 'indicator',
    name: { zh: 'NX/CD选股器(指标版)', en: 'NX/CD Selector (Indicator Ver.)' },
    shortDescription: { zh: '结合多种经典技术形态，一键筛选出处于牛熊转换或吸筹阶段的潜力股。', en: 'Combines classic technical patterns to screen for potential stocks in bull/bear transition or accumulation phases.' },
    longDescription: { zh: '本指标集合了多种经典技术形态（如W底、头肩底）和量价关系模型，能一键从数千只股票中筛选出正处于主力吸筹或即将由熊转牛关键节点的潜力股。', en: 'This indicator integrates various classic technical patterns (like W-bottoms) and volume-price models to identify stocks at key accumulation or trend-reversal points.' },
    imageUrl: '/images/products/selector.png', alipayQr: '/images/qr-alipay.png', wechatQr: '/images/qr-wechat.png',
  },

  // === 专业选股器 ===
  // 美股
  { id: 101, slug: 'us-screener-30min', name: { zh: '美股30分钟抄底选股器', en: 'US Stocks 30-Min Bottom Screener' }, priceRMB: 499, category: 'screener', shortDescription: { zh: '实时扫描全美股，捕捉30分钟级别的超跌反弹机会。', en: 'Real-time scanner for US stocks to catch 30-minute level oversold bounce opportunities.' }, longDescription: { zh: '适合日内短线交易者，基于量价关系和特定K线形态，筛选出即将发生反弹的股票。', en: 'Ideal for intraday traders, it filters stocks poised for a rebound based on volume-price analysis and specific candlestick patterns.' }, imageUrl: '/images/products/us-screener-30min.png', alipayQr: '/images/qr-alipay.png', wechatQr: '/images/qr-wechat.png' },
  { id: 102, slug: 'us-screener-1hr', name: { zh: '美股1小时抄底选股器', en: 'US Stocks 1-Hour Bottom Screener' }, priceRMB: 499, category: 'screener', shortDescription: { zh: '捕捉小时级别的波段性底部，提高交易成功率。', en: 'Catches hourly-level swing bottoms to improve trading success rates.' }, longDescription: { zh: '结合小时线MACD背离和成交量异动，筛选出波段性建仓机会。', en: 'Combines hourly MACD divergence and volume anomalies to identify swing trading entry points.' }, imageUrl: '/images/products/us-screener-1hr.png', alipayQr: '/images/qr-alipay.png', wechatQr: '/images/qr-wechat.png' },
  { id: 103, slug: 'us-screener-daily', name: { zh: '美股日级别抄底选股器', en: 'US Stocks Daily Bottom Screener' }, priceRMB: 599, category: 'screener', shortDescription: { zh: '寻找日线级别的价值洼地，适合波段和中线投资者。', en: 'Finds daily-level value zones, suitable for swing and medium-term investors.' }, longDescription: { zh: '扫描符合多重底部技术形态（如W底、头肩底）的股票，发出中长线布局信号。', en: 'Scans for stocks forming multiple bottom patterns (like W-bottoms, inverse H&S) and issues medium-to-long-term entry signals.' }, imageUrl: '/images/products/us-screener-daily.png', alipayQr: '/images/qr-alipay.png', wechatQr: '/images/qr-wechat.png' },
  { id: 104, slug: 'us-screener-weekly', name: { zh: '美股周级别抄底选股器', en: 'US Stocks Weekly Bottom Screener' }, priceRMB: 599, category: 'screener', shortDescription: { zh: '发掘周线级别的历史性大底，专为长线价值投资者设计。', en: 'Discovers weekly-level historical bottoms, designed for long-term value investors.' }, longDescription: { zh: '从基本面和技术面双重维度出发，寻找被市场错杀的优质公司在周线级别的买入点。', en: 'Identifies buying points for high-quality, undervalued companies at the weekly level from both fundamental and technical perspectives.' }, imageUrl: '/images/products/us-screener-weekly.png', alipayQr: '/images/qr-alipay.png', wechatQr: '/images/qr-wechat.png' },
  
  // 日股
  { id: 201, slug: 'jp-screener-30min', name: { zh: '日股30分钟抄底选股器', en: 'JP Stocks 30-Min Bottom Screener' }, priceRMB: 499, category: 'screener', shortDescription: { zh: '实时扫描全日股，捕捉30分钟级别的超跌反弹机会。', en: 'Real-time scanner for Japanese stocks to catch 30-minute level oversold bounce opportunities.' }, longDescription: { zh: '适合日内短线交易者，基于量价关系和特定K线形态，筛选出即将发生反弹的股票。', en: 'Ideal for intraday traders, it filters stocks poised for a rebound based on volume-price analysis and specific candlestick patterns.' }, imageUrl: '/images/products/jp-screener-30min.png', alipayQr: '/images/qr-alipay.png', wechatQr: '/images/qr-wechat.png' },
  { id: 202, slug: 'jp-screener-1hr', name: { zh: '日股1小时抄底选股器', en: 'JP Stocks 1-Hour Bottom Screener' }, priceRMB: 499, category: 'screener', shortDescription: { zh: '捕捉小时级别的波段性底部，提高交易成功率。', en: 'Catches hourly-level swing bottoms to improve trading success rates.' }, longDescription: { zh: '结合小时线MACD背离和成交量异动，筛选出波段性建仓机会。', en: 'Combines hourly MACD divergence and volume anomalies to identify swing trading entry points.' }, imageUrl: '/images/products/jp-screener-1hr.png', alipayQr: '/images/qr-alipay.png', wechatQr: '/images/qr-wechat.png' },
  { id: 203, slug: 'jp-screener-daily', name: { zh: '日股日级别抄底选股器', en: 'JP Stocks Daily Bottom Screener' }, priceRMB: 599, category: 'screener', shortDescription: { zh: '寻找日线级别的价值洼地，适合波段和中线投资者。', en: 'Finds daily-level value zones, suitable for swing and medium-term investors.' }, longDescription: { zh: '扫描符合多重底部技术形态（如W底、头肩底）的股票，发出中长线布局信号。', en: 'Scans for stocks forming multiple bottom patterns (like W-bottoms, inverse H&S) and issues medium-to-long-term entry signals.' }, imageUrl: '/images/products/jp-screener-daily.png', alipayQr: '/images/qr-alipay.png', wechatQr: '/images/qr-wechat.png' },
  { id: 204, slug: 'jp-screener-weekly', name: { zh: '日股周级别抄底选股器', en: 'JP Stocks Weekly Bottom Screener' }, priceRMB: 599, category: 'screener', shortDescription: { zh: '发掘周线级别的历史性大底，专为长线价值投资者设计。', en: 'Discovers weekly-level historical bottoms, designed for long-term value investors.' }, longDescription: { zh: '从基本面和技术面双重维度出发，寻找被市场错杀的优质公司在周线级别的买入点。', en: 'Identifies buying points for high-quality, undervalued companies at the weekly level from both fundamental and technical perspectives.' }, imageUrl: '/images/products/jp-screener-weekly.png', alipayQr: '/images/qr-alipay.png', wechatQr: '/images/qr-wechat.png' },

  // 港股
  { id: 301, slug: 'hk-screener-30min', name: { zh: '港股30分钟抄底选股器', en: 'HK Stocks 30-Min Bottom Screener' }, priceRMB: 499, category: 'screener', shortDescription: { zh: '实时扫描全港股，捕捉30分钟级别的超跌反弹机会。', en: 'Real-time scanner for Hong Kong stocks to catch 30-minute level oversold bounce opportunities.' }, longDescription: { zh: '适合日内短线交易者，基于量价关系和特定K线形态，筛选出即将发生反弹的股票。', en: 'Ideal for intraday traders, it filters stocks poised for a rebound based on volume-price analysis and specific candlestick patterns.' }, imageUrl: '/images/products/hk-screener-30min.png', alipayQr: '/images/qr-alipay.png', wechatQr: '/images/qr-wechat.png' },
  { id: 302, slug: 'hk-screener-1hr', name: { zh: '港股1小时抄底选股器', en: 'HK Stocks 1-Hour Bottom Screener' }, priceRMB: 499, category: 'screener', shortDescription: { zh: '捕捉小时级别的波段性底部，提高交易成功率。', en: 'Catches hourly-level swing bottoms to improve trading success rates.' }, longDescription: { zh: '结合小时线MACD背离和成交量异动，筛选出波段性建仓机会。', en: 'Combines hourly MACD divergence and volume anomalies to identify swing trading entry points.' }, imageUrl: '/images/products/hk-screener-1hr.png', alipayQr: '/images/qr-alipay.png', wechatQr: '/images/qr-wechat.png' },
  { id: 303, slug: 'hk-screener-daily', name: { zh: '港股日级别抄底选股器', en: 'HK Stocks Daily Bottom Screener' }, priceRMB: 599, category: 'screener', shortDescription: { zh: '寻找日线级别的价值洼地，适合波段和中线投资者。', en: 'Finds daily-level value zones, suitable for swing and medium-term investors.' }, longDescription: { zh: '扫描符合多重底部技术形态（如W底、头肩底）的股票，发出中长线布局信号。', en: 'Scans for stocks forming multiple bottom patterns (like W-bottoms, inverse H&S) and issues medium-to-long-term entry signals.' }, imageUrl: '/images/products/hk-screener-daily.png', alipayQr: '/images/qr-alipay.png', wechatQr: '/images/qr-wechat.png' },
  { id: 304, slug: 'hk-screener-weekly', name: { zh: '港股周级别抄底选股器', en: 'HK Stocks Weekly Bottom Screener' }, priceRMB: 599, category: 'screener', shortDescription: { zh: '发掘周线级别的历史性大底，专为长线价值投资者设计。', en: 'Discovers weekly-level historical bottoms, designed for long-term value investors.' }, longDescription: { zh: '从基本面和技术面双重维度出发，寻找被市场错杀的优质公司在周线级别的买入点。', en: 'Identifies buying points for high-quality, undervalued companies at the weekly level from both fundamental and technical perspectives.' }, imageUrl: '/images/products/hk-screener-weekly.png', alipayQr: '/images/qr-alipay.png', wechatQr: '/images/qr-wechat.png' },
];