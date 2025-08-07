// /pages/_app.js (V3.1 稳定版)
import '../styles/globals.css';
import Layout from '../components/Layout';
import Head from 'next/head';
import Breadcrumbs from '../components/Breadcrumbs';
import { useRouter } from 'next/router';
import { products } from '../data/products';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  // (这里是 V3.1 的面包屑逻辑)
  const generateBreadcrumbPaths = () => {
    const pathSegments = router.asPath.split('?')[0].split('/').filter(v => v.length > 0);
    if (router.pathname === '/') return [];
    const crumbPaths = pathSegments.map((segment, index) => {
      const href = '/' + pathSegments.slice(0, index + 1).join('/');
      let name = segment;
      if (segment === 'products') name = '技术指标';
      else if (segment === 'screeners') name = '专业选股器';
      else if (segment === 'contact') name = '联系我们';
      else if (index === 1 && pathSegments[0] === 'products') {
        const product = products.find(p => p.slug === segment);
        name = product ? product.name : segment;
      }
      return { name, href };
    });
    if (router.pathname.startsWith('/products/')) {
      const product = products.find(p => p.slug === pathSegments[1]);
      if (product?.category === 'screener') {
        return [{ name: '专业选股器', href: '/screeners' }, ...crumbPaths.slice(1)];
      }
      return [{ name: '技术指标', href: '/products' }, ...crumbPaths.slice(1)];
    }
    return crumbPaths;
  };
  const breadcrumbPaths = generateBreadcrumbPaths();
  if (Component.noLayout) { return <Component {...pageProps} />; }

  return (
    <Layout>
      <Head>
        <title>股票指标网 - 美股、日股、港股专业分析工具</title>
        <meta name="description" content="在股票指标网购买专业的股票指标和选股器，适用于美股、日股、港股等市场。" />
        <meta name="keywords" content="股票指标, 选股器, 美股, 日股, 港股, 技术分析" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {breadcrumbPaths.length > 0 && <Breadcrumbs paths={breadcrumbPaths} />}
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;