// /components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/">
          {/* 再放大一点，确保效果 h-14 (3.5rem) */}
          <img src="/images/logo.png" alt="股票指标网 Logo" className="h-14" />
        </Link>
        <nav>
          <ul className="flex space-x-8 items-center font-semibold">
            <li><Link href="/" className="text-gray-700 hover:text-indigo-600">首页</Link></li>
            <li><Link href="/products" className="text-gray-700 hover:text-indigo-600">技术指标</Link></li>
            {/* 新增导航 */}
            <li><Link href="/screeners" className="text-gray-700 hover:text-indigo-600">选股器</Link></li>
            <li><Link href="/contact" className="text-gray-700 hover:text-indigo-600">联系我们</Link></li>
            <li><Link href="/admin/login" className="text-gray-700 hover:text-indigo-600">后台登录</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}