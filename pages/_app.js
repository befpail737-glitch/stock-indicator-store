// /pages/_app.js

import '../styles/globals.css';
import Layout from '../components/Layout';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Breadcrumbs from '../components/Breadcrumbs';
import { products } from '../data/products';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // 生成面包屑路径的逻辑
  const generateBreadcrumbPaths = () => {
    const pathSegments = router.asPath.split('?')[0].split('/').filter(v => v.length > 0);
    
    // 首页不需要面包屑
    if (router.pathname === '/') return [];

    const crumbPaths = pathSegments.map((segment, index) => {
      const href = '/' + pathSegments.slice(0, index + 1).join('/');
      let name = segment;

      // 根据路径动态设置面包屑名称
      if (segment === 'products' && pathSegments.length === 1) {
        name = '技术指标';
      } else if (segment === 'screeners' && pathSegments.length === 1) {
        name = '专业选股器';
      } else if (index === 1 && pathSegments[0] === 'products') {
        const product = products.find(p => p.slug === segment);
        name = product ? product.name : segment;
      } else if (segment === 'contact') {
        name = '联系我们';
      }
      
      return { name, href };
    });

    // 特殊处理产品详情页的面包屑结构
    if (router.pathname.startsWith('/products/')) {
      const product = products.find(p => p.slug === pathSegments[1]);
      if (product) {
        if (product.category === 'screener') {
          return [{name: '专业选股器', href: '/screeners'}, ...crumbPaths.slice(1)];
        }
        return [{name: '技术指标', href: '/products'}, ...crumbPaths.slice(1)];
      }
    }

    return crumbPaths;
  };

  const breadcrumbPaths = generateBreadcrumbPaths();

  // 后台页面不使用通用布局
  if (Component.noLayout) {
    return <Component {...pageProps} />;
  }

  return (
    <Layout>
      <Head>
        <title>股票指标网 - 美股、日股、港股专业分析工具</title>
        <meta name="description" content="在股票指标网购买专业的股票指标和选股器，适用于美股、日股、港股等市场。我们提供抄底、六彩神龙、RSI背离王等精准的工具，提升您的投资回报率。" />
        <meta name="keywords" content="股票指标, 选股器, 美股, 日股, 港股, 技术分析, 股票软件" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* 在布局内部，页面组件之上渲染面包屑 */}
      {breadcrumbPaths.length > 0 && <Breadcrumbs paths={breadcrumbPaths} />}
      
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;