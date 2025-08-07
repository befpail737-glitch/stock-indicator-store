// /pages/contact.js
import Head from 'next/head';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>联系我们 - 股票指标商城</title>
        <meta name="description" content="获取股票指标商城的联系方式，包括微信、QQ、Telegram等，我们随时为您提供服务。" />
      </Head>
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">联系我们</h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            我们很高兴能为您服务。您可以通过扫描下方的二维码，添加我们的客服微信、QQ、Telegram或WhatsApp进行咨询、购买或获取售后支持。
          </p>
          <div className="flex justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img 
                src="/images/contact-info.png" 
                alt="联系方式二维码" 
                className="max-w-md w-full"
              />
              <p className="mt-4 text-sm text-gray-500">（请使用相应App扫描二维码）</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}