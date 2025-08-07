// /pages/sitemap.xml.js
import { products } from '../data/products';

export const runtime = 'edge'; // <-- 添加这一行

const BASE_URL = 'https://stock-indicator.com'; // 部署后请替换成你的域名

function generateSiteMap(products) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!-- Add the home page -->
     <url>
       <loc>${BASE_URL}</loc>
     </url>
     <!-- Add product pages -->
     ${products
       .map(({ slug }) => {
         return `
       <url>
           <loc>${`${BASE_URL}/products/${slug}`}</loc>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  const sitemap = generateSiteMap(products);

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;