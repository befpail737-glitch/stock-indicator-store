// /components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/">
          {/* 将 h-10 (高度2.5rem) 修改为 h-12 (高度3rem) 或更大 */}
          <img src="/images/logo.png" alt="股票指标网 Logo" className="h-12" />
        </Link>
        <nav>
          {/* ... (其余代码保持不变) ... */}
        </nav>
      </div>
    </header>
  );
}