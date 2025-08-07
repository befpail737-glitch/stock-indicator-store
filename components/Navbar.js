// /components/Navbar.js

import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo 和网站标题组合 */}
        <Link href="/" className="flex items-center space-x-4">
          {/* Logo 图片，h-16 是一个足够大的尺寸 */}
          <img src="/images/logo.png" alt="指标商店 Logo" className="h-16" />
          {/* 网站标题 */}
          <span className="text-2xl font-bold text-gray-800">
            指标商店
          </span>
        </Link>
        
        {/* 导航链接 */}
        <nav>
          <ul className="flex space-x-8 items-center font-semibold">
            <li><Link href="/" className="text-gray-700 hover:text-indigo-600">首页</Link></li>
            <li><Link href="/products" className="text-gray-700 hover:text-indigo-600">技术指标</Link></li>
            <li><Link href="/screeners" className="text-gray-700 hover:text-indigo-600">选股器</Link></li>
            <li><Link href="/contact" className="text-gray-700 hover:text-indigo-600">联系我们</Link></li>
            <li><Link href="/admin/login" className="text-gray-700 hover:text-indigo-600">后台登录</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}