// /components/Breadcrumbs.js
import Link from 'next/link';

export default function Breadcrumbs({ paths }) {
  return (
    <nav aria-label="Breadcrumb" className="bg-gray-100">
      <div className="container mx-auto px-6 py-3">
        <ol className="flex items-center space-x-2 text-sm text-gray-500">
          <li>
            <Link href="/" className="hover:text-gray-700">首页</Link>
          </li>
          {paths.map((path, index) => (
            <li key={index}>
              <div className="flex items-center">
                <span className="mx-2">/</span>
                {index === paths.length - 1 ? (
                  <span className="font-semibold text-gray-700">{path.name}</span>
                ) : (
                  <Link href={path.href} className="hover:text-gray-700">{path.name}</Link>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}