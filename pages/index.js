// /pages/index.js
import Link from 'next/link';
import { products } from '../data/products';

// 首页只展示前3个作为特色产品
const featuredProducts = products.slice(0, 3);

export default function Home() {
  return (
    <div className="bg-white">
      {/* 1. 英雄横幅 (Hero Section) */}
      <section className="bg-gray-900 text-white">
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            用数据驱动决策，用指标点亮未来
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            欢迎来到股票指标商城。我们致力于提供经过市场深度验证的专业股票分析工具，帮助您在复杂的金融市场中洞察先机，稳操胜券。
          </p>
          <div className="mt-8">
            <Link href="/products" className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-500 transition-transform duration-300 inline-block transform hover:scale-105">
                探索所有指标
            </Link>
          </div>
        </div>
      </section>

      {/* 2. 特色介绍区块 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">为何选择我们？</h2>
            <p className="text-gray-600 mt-2">我们不仅仅是售卖指标，更是提供一套完整的交易辅助方案。</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">精准信号</h3>
              <p className="text-gray-600">所有指标均经过大量历史数据回测，确保信号的有效性与及时性，过滤市场噪音。</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">专业策略</h3>
              <p className="text-gray-600">从抄底摸顶到趋势跟踪，覆盖多种交易风格，无论您是短线客还是长线价值投资者，都能找到利器。</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">永久使用</h3>
              <p className="text-gray-600">一次购买，永久授权。并提供后续的指标更新服务与使用指导，让您的投资与时俱进。</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* 3. 特色产品区块 */}
      <section id="products" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-10">我们的核心产品</h3>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map(product => (
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
      </section>
    </div>
  );
}