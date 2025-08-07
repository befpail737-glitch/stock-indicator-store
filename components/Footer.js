// /components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="text-center">
          <h3 className="text-xl font-bold mb-2">股票指标商城</h3>
          <p className="text-gray-400">致力于提供专业、高效的股票分析工具，助力您的投资决策。</p>
        </div>
        <hr className="my-6 border-gray-700" />
        <div className="text-center text-gray-400">
          <p>© {new Date().getFullYear()} 股票指标商城. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}