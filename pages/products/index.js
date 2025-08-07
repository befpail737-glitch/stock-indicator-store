// /pages/products/index.js
import Link from 'next/link';
import { products } from '../../data/products';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

export default function ProductsPage({ products: indicatorProducts }) {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { locale } = router;
  const exchangeRate = 7.2;

  return (
    <>
      <Head>
        <title>{t('nav_indicators')} - 指标商店</title>
      </Head>
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-10">{t('nav_indicators')}</h1>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {indicatorProducts.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg">
                <img className="h-56 w-full object-cover" src={product.imageUrl} alt={product.name[locale]} />
                <div className="p-6">
                  <h4 className="font-bold text-xl mb-2">{product.name[locale]}</h4>
                  <p className="text-gray-700 text-base mb-4">{product.shortDescription[locale]}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-indigo-600">
                      {locale === 'zh' 
                        ? `¥${product.priceRMB}` 
                        : `$${Math.round(product.priceRMB / exchangeRate)}`}
                    </span>
                    <Link href={`/products/${product.slug}`} className="px-5 py-2 bg-indigo-600 text-white text-sm font-bold rounded-full">
                      {t('view_details')}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  const indicators = products.filter(p => p.category === 'indicator' || !p.category);
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      products: indicators,
    },
  };
}