// /components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-indigo-600 hover:text-indigo-500">
            股票指标商城
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-gray-600 hover:text-indigo-600 font-semibold">
                首页
              </Link>
            </li>
            {/* 未来可以添加更多链接，例如“博客”、“关于我们”等 */}
            <li>
              <Link href="/#products" className="text-gray-600 hover:text-indigo-600 font-semibold" scroll={false}>
                所有产品
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