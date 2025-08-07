// /pages/_app.js (V4.1 最终版)

import '../styles/globals.css';
import Layout from '../components/Layout';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { locale } = router;

  // 根据当前语言确定网站标题和关键词
  const siteTitle = locale === 'zh' ? '股票指标网 - 美股、日股、港股专业分析工具' : 'Stock Indicators - Tools for US, JP, and HK Markets';
  const siteDescription = locale === 'zh' ? '在股票指标网购买专业的股票指标和选股器，适用于美股、日股、港股等市场。' : 'Purchase professional stock indicators and screeners for US, JP, and HK markets at StockIndicators.net.';
  const siteKeywords = locale === 'zh' ? '股票指标, 选股器, 美股, 日股, 港股, 技术分析' : 'Stock Indicators, Screener, US Stocks, JP Stocks, HK Stocks, Technical Analysis';

  // 后台页面不使用通用布局
  if (Component.noLayout) {
    return <Component {...pageProps} />;
  }
  
  return (
    <Layout>
      <Head>
        {/* 这里我们放全局的、不随页面变化的 Head 信息 */}
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
        <meta name="keywords" content={siteKeywords} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* 具体的页面组件，可以在自己的文件里再定义更精确的 title 和 description 来覆盖这里的默认值 */}
      <Component {...pageProps} />
    </Layout>
  );
}

// 使用 appWithTranslation 来包裹整个应用
export default appWithTranslation(MyApp);