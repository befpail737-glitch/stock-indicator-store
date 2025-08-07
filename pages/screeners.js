// /pages/screeners.js (V3.1 稳定版)
import Link from 'next/link';
import { products } from '../data/products';
import Head from 'next/head';

export default function ScreenersPage({ screeners }) {
  return (
    <>
      <Head>
        <title>专业选股器 - 股票指标网</title>
        <meta name="description" content="一系列针对美股、日股、港股的专业选股器，助您高效发现投资机会。" />
      </Head>
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-2">专业选股器</h1>
          <p className="text-center text-gray-600 mb-10">覆盖美股、日股、港股市场，满足您的多元化交易需求</p>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {screeners.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                <img className="h-48 w-full object-cover" src={product.imageUrl} alt={product.name} />
                <div className="p-4">
                  <h4 className="font-semibold text-lg mb-2 h-14">{product.name}</h4>
                  <p className="text-gray-600 text-sm mb-3 h-20">{product.shortDescription}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-indigo-600">¥{product.price}</span>
                    <Link href={`/products/${product.slug}`} className="px-4 py-2 bg-indigo-600 text-white text-xs font-bold rounded-full hover:bg-indigo-700 transition-colors">
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

export async function getStaticProps() {
  const screeners = products.filter(p => p.category === 'screener');
  return {
    props: {
      screeners,
    },
  };
}```

---

### **您的下一步**

1.  **逐一替换**：请用上面提供的4个代码块，完整替换掉您本地对应的4个文件。
2.  **确认其他文件**：同时，请确保您已经按照我之前的指示，恢复了 `/data/products.js` (最重要), `/pages/_app.js`, `/components/Navbar.js` 等文件的代码。
3.  **提交并推送**：通过 GitHub Desktop 提交并推送这次“回滚”操作。

完成之后，您的网站就会彻底恢复到功能完整、运行稳定的纯中文版本。