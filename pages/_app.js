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
    
    if (router.pathname === '/') return [];

    const crumbPaths = pathSegments.map((segment, index) => {
      const href = '/' + pathSegments.slice(0, index + 1).join('/');
      let name = segment;

      if (segment === 'products' && pathSegments.length === 1) {
        name = '所有产品';
      } else if (index === 1 && pathSegments[0] === 'products') {
        const product = products.find(p => p.slug === segment);
        name = product ? product.name : segment;
      } else if (segment === 'contact') {
        name = '联系我们';
      }
      
      return { name, href };
    });

    if (router.pathname.startsWith('/products/')) {
      return [{name: '所有产品', href: '/products'}, ...crumbPaths.slice(1)];
    }

    return crumbPaths;
  };

  const breadcrumbPaths = generateBreadcrumbPaths();

  if (Component.noLayout) {
    return <Component {...pageProps} />;
  }

  return (
    <Layout>
      <Head>
        <title>股票指标商城 - 专业股票分析工具</title>
        {/* ... meta tags ... */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* 在布局内部，页面组件之上渲染面包屑 */}
      {breadcrumbPaths.length > 0 && <Breadcrumbs paths={breadcrumbPaths} />}
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;