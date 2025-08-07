// /pages/_app.js
import '../styles/globals.css';
import Layout from '../components/Layout';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Breadcrumbs from '../components/Breadcrumbs';
import { products } from '../data/products';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // ... (面包屑逻辑保持不变) ...

  return (
    <Layout>
      <Head>
        {/* 主要标题 */}
        <title>股票指标网 - 美股、日股、港股专业分析工具</title>
        {/* 描述 */}
        <meta name="description" content="在股票指标网购买专业的股票指标，适用于美股、日股、港股等市场。我们提供抄底、六彩神龙、RSI背离王等精准的选股器，提升您的投资回报率。" />
        {/* 副标题关键词 */}
        <meta name="keywords" content="股票指标, 选股器, 美股, 日股, 港股, 技术分析, 股票软件" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* ... (其余代码保持不变) ... */}
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;