// /components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/">
          {/* Logo - 图片尺寸可以根据您的Logo进行调整 */}
          <img src="/images/logo.png" alt="股票指标商城 Logo" className="h-10" />
        </Link>
        <nav>
          <ul className="flex space-x-6 items-center">
            <li>
              <Link href="/" className="text-gray-600 hover:text-indigo-600 font-semibold">
                首页
              </Link>
            </li>
            <li>
              <Link href="/products" className="text-gray-600 hover:text-indigo-600 font-semibold">
                所有产品
              </Link>
            </li>
            {/* 新增的联系我们页面 */}
            <li>
              <Link href="/contact" className="text-gray-600 hover:text-indigo-600 font-semibold">
                联系我们
              </Link>
            </li>
            <li>
              <Link href="/admin/login" className="text-gray-600 hover:text-indigo-600 font-semibold">
                后台登录
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}