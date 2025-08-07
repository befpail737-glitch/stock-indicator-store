// /pages/api/products.js
import { products } from '../../data/products';

export const runtime = 'edge'; // <-- 添加这一行

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(products);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}