// /components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-8">
        {/* 新增：免责声明 */}
        <div className="text-center border border-gray-600 rounded-lg p-4 mb-8">
            <h4 className="font-bold text-yellow-400 mb-2">投资风险警告</h4>
            <p className="text-xs text-gray-400">
              本平台仅销售技术分析指标工具，所有指标仅作为辅助参考，不构成任何投资建议或承诺。金融市场存在风险，投资需谨慎。基于本平台指标进行的一切投资操作所造成的任何盈亏，均由投资者自行承担，本平台概不负责。您的投资，您自己负责！
            </p>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-bold mb-2">股票指标网</h3>
          <p className="text-gray-400">致力于提供专业、高效的股票分析工具，助力您的投资决策。</p>
        </div>
        <hr className="my-6 border-gray-700" />
        <div className="text-center text-gray-400">
          <p>© {new Date().getFullYear()} 股票指标网. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}