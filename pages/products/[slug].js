// /pages/products/[slug].js
import { useState } from 'react';
import { products } from '../../data/products';
import Link from 'next/link';

export default function ProductPage({ product, relatedProducts }) { // <-- 接收 relatedProducts
  const [showModal, setShowModal] = useState(false);
  // ... (其余 state 保持不变)

  // ... (其余函数 handlePaymentClick, handleSubmitContact 保持不变)

  return (
    <div className="bg-white">
      <div className="container mx-auto px-6 py-12">
        <div className="md:flex md:items-start">
          <div className="md:w-1/2">
            <img className="rounded-lg shadow-2xl w-full" src={product.imageUrl} alt={product.name} />
          </div>
          <div className="md:w-1/2 md:pl-10 mt-8 md:mt-0">
            <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
            <p className="mt-4 text-gray-600 text-lg">{product.shortDescription}</p>
            <div className="mt-6">
              <span className="text-4xl font-bold text-indigo-600">¥{product.price}</span>
            </div>
            
            {/* 调整位置：支付方式放到介绍上面 */}
            <div className="mt-10 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">选择支付方式</h3>
              <div className="flex items-center space-x-6">
                <img src={product.alipayQr} alt="支付宝" title="点击打开支付宝支付" className="w-16 h-16 cursor-pointer transform hover:scale-110 transition-transform" onClick={() => handlePaymentClick(product.alipayQr)} />
                <img src={product.wechatQr} alt="微信支付" title="点击打开微信支付" className="w-16 h-16 cursor-pointer transform hover:scale-110 transition-transform" onClick={() => handlePaymentClick(product.wechatQr)} />
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800">详细介绍</h3>
              <p className="mt-2 text-gray-600 leading-relaxed whitespace-pre-line">{product.longDescription}</p>
            </div>
          </div>
        </div>

        {/* 新增：相关产品推荐 */}
        <div className="mt-20">
            <h2 className="text-2xl font-bold text-center mb-8">您可能还感兴趣</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedProducts.map(related => (
                    <div key={related.id} className="border rounded-lg p-4 text-center hover:shadow-lg transition-shadow">
                        <Link href={`/products/${related.slug}`}>
                            <img src={related.imageUrl} alt={related.name} className="h-40 w-full object-cover rounded-md mb-4" />
                            <h4 className="font-semibold text-lg">{related.name}</h4>
                            <span className="text-indigo-600">¥{related.price}</span>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* 模态框代码保持不变 */}
      {showModal && (
        // ...
      )}
    </div>
  );
}

export async function getStaticPaths() {
  const paths = products.map((product) => ({
    params: { slug: product.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const product = products.find((p) => p.slug === params.slug);
  
  // 查找相关产品：排除当前产品，随机取3个
  const relatedProducts = products.filter(p => p.slug !== params.slug).slice(0, 3);

  return { 
    props: { 
      product,
      relatedProducts // <-- 传递给页面
    } 
  };
}