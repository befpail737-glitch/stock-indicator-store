// /pages/products/[slug].js
import { useState } from 'react';
import { products } from '../../data/products';
import Link from 'next/link';
import Head from 'next/head';

export default function ProductPage({ product, relatedProducts }) {
  const [showModal, setShowModal] = useState(false);
  const [qrCode, setQrCode] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  if (!product) {
    return <div>产品加载中...</div>;
  }

  const handlePaymentClick = (qr) => {
    setQrCode(qr);
    setShowModal(true);
  };

  const handleSubmitContact = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/submit-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productName: product.name,
          contactInfo: contactInfo,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitMessage(`提交成功！您的联系方式：${contactInfo}。我们将在24小时内与您联系。`);
        setContactInfo(''); // 清空输入框
      } else {
        throw new Error(result.message || '提交失败，请稍后重试。');
      }
    } catch (error) {
      setSubmitMessage(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>{product.name} - 股票指标商城</title>
        <meta name="description" content={product.shortDescription} />
      </Head>
      <div className="bg-white">
        <div className="container mx-auto px-6 py-12">
          <div className="md:flex md:items-start">
            <div className="md:w-1/2">
              <img className="rounded-lg shadow-2xl w-full" src={product.imageUrl} alt={product.name} />
            </div>
            <div className="md:w-1/2 md:pl-10 mt-8 md:mt-0">
              <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
              <p className="mt-4 text-gray-600 text-lg">{product.shortDescription}</p>
              <div className="mt-6">
                <span className="text-4xl font-bold text-indigo-600">¥{product.price}</span>
              </div>
              
              <div className="mt-10 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">选择支付方式</h3>
                <div className="flex items-center space-x-6">
                  <img src={product.alipayQr} alt="支付宝" title="点击打开支付宝支付" className="w-16 h-16 cursor-pointer transform hover:scale-110 transition-transform" onClick={() => handlePaymentClick(product.alipayQr)} />
                  <img src={product.wechatQr} alt="微信支付" title="点击打开微信支付" className="w-16 h-16 cursor-pointer transform hover:scale-110 transition-transform" onClick={() => handlePaymentClick(product.wechatQr)} />
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-800">详细介绍</h3>
                <p className="mt-2 text-gray-600 leading-relaxed whitespace-pre-line">{product.longDescription}</p>
              </div>
            </div>
          </div>

          <div className="mt-20">
   