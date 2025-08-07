// /pages/products/[slug].js (重构后的版本)
import { useState } from 'react';
import { products } from '../../data/products';

export default function ProductPage({ product }) {
  const [showModal, setShowModal] = useState(false);
  const [qrCode, setQrCode] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  if (!product) {
    return <div>产品未找到</div>;
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
    <div className="bg-white">
      <div className="container mx-auto px-6 py-12">
        <div className="md:flex md:items-start">
          <div className="md:w-1/2">
            <img className="rounded-lg shadow-2xl w-full" src={product.imageUrl} alt={product.name} />
            <p className="text-sm text-gray-500 mt-4">
              <b>图片上传提示：</b> 将此产品的图片 (如 {product.slug}.png) 上传到 <code>/public/images/products/</code> 文件夹中。
            </p>
          </div>
          <div className="md:w-1/2 md:pl-10 mt-8 md:mt-0">
            <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
            <p className="mt-4 text-gray-600 text-lg">{product.shortDescription}</p>
            <div className="mt-6">
              <span className="text-4xl font-bold text-indigo-600">¥{product.price}</span>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800">详细介绍</h3>
              <p className="mt-2 text-gray-600 leading-relaxed">{product.longDescription}</p>
            </div>
            <div className="mt-10 flex items-center space-x-6">
              <h3 className="text-lg font-semibold text-gray-800">选择支付方式:</h3>
              <img src={product.alipayQr} alt="支付宝" title="点击打开支付宝支付" className="w-16 h-16 cursor-pointer transform hover:scale-110 transition-transform" onClick={() => handlePaymentClick(product.alipayQr)} />
              <img src={product.wechatQr} alt="微信支付" title="点击打开微信支付" className="w-16 h-16 cursor-pointer transform hover:scale-110 transition-transform" onClick={() => handlePaymentClick(product.wechatQr)} />
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4">
          <div className="bg-white p-8 rounded-lg shadow-xl text-center max-w-md w-full relative">
            <button onClick={() => setShowModal(false)} className="absolute top-2 right-3 text-2xl text-gray-500 hover:text-gray-800">&times;</button>
            <h2 className="text-2xl font-bold mb-4">扫码支付 - {product.name}</h2>
            <img src={qrCode} alt="付款二维码" className="w-56 h-56 mx-auto border p-2" />
            <p className="my-4 text-gray-700 font-semibold">支付完成后，请务必在下方填写您的联系方式</p>
            {!submitMessage ? (
              <form onSubmit={handleSubmitContact}>
                <input
                  type="text"
                  value={contactInfo}
                  onChange={(e) => setContactInfo(e.target.value)}
                  placeholder="填写微信号 / WhatsApp / Telegram"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
                <button type="submit" disabled={isSubmitting} className="w-full mt-4 px-4 py-3 bg-indigo-600 text-white font-bold rounded hover:bg-indigo-700 disabled:bg-gray-400">
                  {isSubmitting ? '正在提交...' : '我已支付，提交联系方式'}
                </button>
              </form>
            ) : (
              <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-md">
                <p>{submitMessage}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export async function getStaticPaths() {
  const paths = products.map((product) => ({
    params: { slug: product.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const product = products.find((p) => p.slug === params.slug);
  return { props: { product } };
}