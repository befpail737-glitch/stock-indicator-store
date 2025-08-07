// /pages/admin/login.js
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function AdminLogin() {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        // 在真实应用中，这里会调用API进行验证
        if (password === '123') { // 简化验证
            // 使用 sessionStorage 或 cookie 来标记登录状态
            sessionStorage.setItem('isAdmin', 'true');
            router.push('/admin/dashboard');
        } else {
            setError('密码错误');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="p-8 bg-white rounded-lg shadow-md w-full max-w-sm">
                <h1 className="text-2xl font-bold text-center mb-6">后台管理登录</h1>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block text-gray-700">账号</label>
                        <input type="text" value="admin" readOnly className="w-full px-3 py-2 bg-gray-200 border rounded-md" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700">密码</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                    <button type="submit" className="w-full py-2 px-4 bg-indigo-600 text-white font-bold rounded hover:bg-indigo-500">
                        登录
                    </button>
                </form>
            </div>
        </div>
    );
}

// 对后台页面不使用通用布局
AdminLogin.noLayout = true;