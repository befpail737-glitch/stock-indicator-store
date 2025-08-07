// /pages/api/submit-order.js

// 这是一个模拟的内存数据库，用于存储提交的信息。
// 在生产环境中应使用Cloudflare D1或KV数据库。
const orders = []; 

// 必须声明在 Edge 环境中运行
export const runtime = 'edge';

// 函数必须声明为 async，因为要使用 await
export default async function handler(req, res) { 
  // 只处理 POST 请求
  if (req.method === 'POST') {
    try {
      // 在 Edge 环境中，必须使用 await req.json() 来获取请求体
      const { productName, contactInfo } = await req.json(); 

      // 简单的验证
      if (!productName || !contactInfo) {
        return new Response(JSON.stringify({ message: '缺少产品名称或联系方式。' }), { status: 400 });
      }

      const newOrder = {
        productName,
        contactInfo,
        receivedAt: new Date().toISOString(),
      };
      orders.push(newOrder);

      // 【重要】在日志中加入 V3.1 标识，以便我们确认是新版本在运行
      console.log('【V3.1】收到新订单:', newOrder); 

      // 在 Edge 环境中，必须使用 new Response() 来返回结果
      return new Response(JSON.stringify({ message: '提交成功！' }), { status: 200 });

    } catch (error) {
      console.error('【V3.1】API 内部错误:', error);
      return new Response(JSON.stringify({ message: '服务器内部错误。' }), { status: 500 });
    }
  } else {
    // 处理非 POST 请求
    return new Response(`Method ${req.method} Not Allowed`, { status: 405 });
  }
}