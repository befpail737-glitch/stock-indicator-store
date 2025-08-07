// /components/Navbar.js
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

export default function Navbar() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { locale } = router;

  const changeLanguage = (newLocale) => {
    router.push(router.pathname, router.asPath, { locale: newLocale });
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-4">
          <img src="/images/logo.png" alt="指标商店 Logo" className="h-16" />
          <span className="text-2xl font-bold text-gray-800">指标商店</span>
        </Link>
        
        <div className="flex items-center">
          <nav>
            <ul className="flex space-x-8 items-center font-semibold">
              <li><Link href="/">{t('nav_home')}</Link></li>
              <li><Link href="/products">{t('nav_indicators')}</Link></li>
              <li><Link href="/screeners">{t('nav_screeners')}</Link></li>
              <li><Link href="/contact">{t('nav_contact')}</Link></li>
              <li><Link href="/admin/login">{t('nav_admin')}</Link></li>
            </ul>
          </nav>

          {/* 语言切换器 */}
          <div className="ml-8 border-l pl-6 space-x-4">
            <button 
              onClick={() => changeLanguage('zh')} 
              className={`font-semibold ${locale === 'zh' ? 'text-indigo-600' : 'text-gray-500 hover:text-indigo-600'}`}>
                中文
            </button>
            <button 
              onClick={() => changeLanguage('en')} 
              className={`font-semibold ${locale === 'en' ? 'text-indigo-600' : 'text-gray-500 hover:text-indigo-600'}`}>
                English
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}