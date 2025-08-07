// /pages/api/submit-order.js
// 这是一个模拟的内存数据库。在生产环境中应使用Cloudflare D1或KV。
const orders = []; 
export const runtime = 'edge';

// 函数需要声明为 async
export default async function handler(req, res) { 
  if (req.method === 'POST') {
    try {
      // 需要使用 await req.json() 来获取请求体
      const { productName, contactInfo } = await req.json(); 

      if (!productName || !contactInfo) {
        return new Response(JSON.stringify({ message: '缺少产品名称或联系方式。' }), { status: 400 });
      }

      const newOrder = {
        productName,
        contactInfo,
        receivedAt: new Date().toISOString(),
      };
      orders.push(newOrder);
      console.log('收到新订单:', newOrder);

      return new Response(JSON.stringify({ message: '提交成功！' }), { status: 200 });

    } catch (error) {
      console.error('API Error:', error);
      return new Response(JSON.stringify({ message: '服务器内部错误。' }), { status: 500 });
    }
  } else {
    // Edge Runtime 中 res 对象用法不同，我们用 Response 对象来返回
    return new Response(`Method ${req.method} Not Allowed`, { status: 405 });
  }
}