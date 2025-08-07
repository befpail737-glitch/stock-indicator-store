// /pages/products/index.js

import Link from 'next/link';
import { products } from '../../data/products';
import Head from 'next/head';

export default function ProductsPage({ products }) {
  return (
    <>
      <Head>
        <title>技术指标 - 股票指标网</title>
        <meta name="description" content="浏览我们所有的专业股票技术指标，包括抄底王、六彩神龙、RSI背离王等，找到最适合您交易策略的工具。" />
      </Head>
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-10">技术指标</h1>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {products.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                <img className="h-56 w-full object-cover" src={product.imageUrl} alt={product.name} />
                <div className="p-6">
                  <h4 className="font-bold text-xl mb-2">{product.name}</h4>
                  <p className="text-gray-700 text-base mb-4">{product.shortDescription}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-indigo-600">¥{product.price}</span>
                    <Link href={`/products/${product.slug}`} className="px-5 py-2 bg-indigo-600 text-white text-sm font-bold rounded-full hover:bg-indigo-700 transition-colors">
                        查看详情
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

// 这段 getStaticProps 函数会确保此页面只获取“指标类”产品
export async function getStaticProps() {
  // 筛选出 category 为 'indicator' 的产品，或者没有 category 字段的老数据
  const indicators = products.filter(p => p.category === 'indicator' || !p.category); 
  
  return {
    props: {
      // 将过滤后的结果传递给页面组件，变量名保持为 products
      products: indicators, 
    },
  };
}