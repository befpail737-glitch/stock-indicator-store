// /pages/api/submit-order.js
const orders = []; 
export const runtime = 'edge';

export default async function handler(req, res) { 
  if (req.method === 'POST') {
    try {
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
    return new Response(`Method ${req.method} Not Allowed`, { status: 405 });
  }
}
