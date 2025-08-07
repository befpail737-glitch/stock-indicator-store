// /pages/admin/dashboard.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Dashboard() {
    const router = useRouter();

    useEffect(() => {
        const isAdmin = sessionStorage.getItem('isAdmin');
        if (isAdmin !== 'true') {
            router.push('/admin/login');
        }
    }, [router]);

    // 这里可以添加管理产品、查看订单等功能
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold">欢迎, admin!</h1>
            <p className="mt-4">这里是后台管理仪表盘。您可以在这里管理网站的产品和订单。</p>
            {/* 在此开发产品管理界面 */}
        </div>
    );
}