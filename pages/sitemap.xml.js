// /pages/sitemap.xml.js
import { products } from '../data/products';

export const runtime = 'experimental-edge'; // <-- 确保是这个值

// 您可以先把域名换成Cloudflare提供的，部署成功后再换成自己的最终域名
const BASE_URL = 'https://stock-indicator-store.pages.dev'; 

function generateSiteMap(products) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${BASE_URL}</loc>
     </url>
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