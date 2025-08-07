// /pages/index.js (重构后的版本)
import Link from 'next/link';
import { products } from '../data/products'; // 直接从数据文件导入

export default function Home({ products }) { // 从 props 接收 products
  return (
    <div className="bg-gray-50">
      <main>
        {/* Hero Section */}
        <section className="bg-white">
          <div className="container mx-auto px-6 py-16 text-center">
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              发现强大的股票指标
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              我们提供一系列经过市场验证的专业股票指标和选股器，助您在复杂的市场中精准决策，提升投资胜率。
            </p>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-12 bg-gray-50">
          <div className="container mx-auto px-6">
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-10">我们的核心产品</h3>
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
        </section>
      </main>
    </div>
  );
}

// 在构建时预取数据
export async function getStaticProps() {
  // 在服务器端构建时，直接从数据文件读取比调用API更快
  // const res = await fetch('http://localhost:3000/api/products');
  // const products = await res.json();
  
  return {
    props: {
      products,
    },
  };
}