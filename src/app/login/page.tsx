'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // 简单的客户端验证
    if (!username || !password) {
      setError('请输入用户名和密码');
      setIsLoading(false);
      return;
    }

    // 演示：简单的验证逻辑（实际项目应该调用后端API）
    // 模拟API调用延迟
    await new Promise(resolve => setTimeout(resolve, 800));

    if (username === 'test' && password === 'test123') {
      // 登录成功，跳转到仪表盘
      router.push('/dashboard');
    } else {
      // 登录失败
      setError('用户名或密码错误，请使用测试账号：test / test123');
    }

    setIsLoading(false);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-4 dark:from-slate-900 dark:to-slate-800">
      <div className="w-full max-w-md">
        {/* Logo 和标题 */}
        <div className="mb-8 text-center">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-600">
              <span className="text-xl font-bold text-white">闲</span>
            </div>
            <span className="text-2xl font-bold tracking-tight">闲鱼数据分析平台</span>
          </Link>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            登录您的账户
          </p>
        </div>

        {/* 登录表单卡片 */}
        <Card>
          <CardHeader>
            <CardTitle>账户登录</CardTitle>
            <CardDescription>
              请输入您的账户信息以访问系统
            </CardDescription>
          </CardHeader>
          <CardContent>
            {error && (
              <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-600 dark:border-red-800 dark:bg-red-950/20 dark:text-red-400">
                {error}
              </div>
            )}
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label htmlFor="username">用户名</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="请输入用户名"
                  className="h-11"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  disabled={isLoading}
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">密码</Label>
                  <Link
                    href="#"
                    className="text-sm text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"
                  >
                    忘记密码?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="请输入密码"
                  className="h-11"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                />
              </div>

              <Button type="submit" className="h-11 w-full rounded-full" disabled={isLoading}>
                {isLoading ? '登录中...' : '登录'}
              </Button>

              <Separator />

              <div className="text-center text-sm text-slate-600 dark:text-slate-400">
                还没有账户?{' '}
                <Link
                  href="#"
                  className="font-medium text-slate-900 underline hover:text-slate-700 dark:text-slate-200 dark:hover:text-slate-400"
                >
                  立即注册
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* 测试账号提示 */}
        <Card className="mt-6 border-dashed">
          <CardContent className="pt-6">
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-medium">测试账号信息</span>
              </div>
              <div className="grid gap-2 pl-6">
                <div className="flex justify-between">
                  <span className="text-slate-600 dark:text-slate-400">
                    用户名:
                  </span>
                  <code className="rounded bg-slate-100 px-2 py-0.5 text-slate-900 dark:bg-slate-800 dark:text-slate-200">
                    test
                  </code>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600 dark:text-slate-400">
                    密码:
                  </span>
                  <code className="rounded bg-slate-100 px-2 py-0.5 text-slate-900 dark:bg-slate-800 dark:text-slate-200">
                    test123
                  </code>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 返回首页 */}
        <div className="mt-6 text-center">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/">← 返回首页</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
