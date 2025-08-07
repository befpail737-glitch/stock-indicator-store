// /pages/_app.js
import '../styles/globals.css';
import Layout from '../components/Layout';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  // 对后台页面不使用通用布局
  if (Component.noLayout) {
    return <Component {...pageProps} />;
  }

  return (
    <Layout>
      <Head>
        <title>股票指标商城 - 专业股票分析工具</title>
        <meta name="description" content="购买专业的股票指标，包括抄底、六彩神龙、RSI背离王等，使用精准的选股器提升您的投资回报率。" />
        <meta name="keywords" content="股票指标, 股票软件指标, 选股器, 抄底指标, 六彩神龙, 海底捞月, RSI背离, 技术分析" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;