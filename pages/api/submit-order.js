// /pages/api/submit-order.js
// 这是一个模拟的内存数据库，用于存储提交的信息。
// 注意：服务重启后数据会丢失。在生产环境中应使用Cloudflare KV或D1数据库。
const orders = [];

export const runtime = 'edge'; // <-- 添加这一行

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { productName, contactInfo } = req.body;

    if (!productName || !contactInfo) {
      return res.status(400).json({ message: '缺少产品名称或联系方式。' });
    }

    const newOrder = {
      productName,
      contactInfo,
      receivedAt: new Date().toISOString(),
    };

    orders.push(newOrder);

    // 在Cloudflare部署后，你可以在函数的日志中看到这条信息
    console.log('收到新订单:', newOrder); 

    res.status(200).json({ message: '提交成功！' });
  } else {
    // 允许管理员通过GET请求查看所有订单（简单演示）
    if (process.env.NODE_ENV === 'development') { // 仅在开发模式下可用
        res.status(200).json(orders);
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
}