'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  ArrowUpRight,
  Package,
  TrendingUp,
  Users,
  Activity,
  Search,
  CheckCircle2,
  XCircle,
  Loader2,
} from 'lucide-react';

interface ApiStatus {
  status: string;
  apiConfigured: boolean;
  appKey: string | null;
  appSecret: string | null;
}

interface SearchResult {
  success: boolean;
  data?: any;
  error?: string;
}

export default function DashboardPage() {
  const [apiStatus, setApiStatus] = useState<ApiStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [searching, setSearching] = useState(false);
  const [searchResult, setSearchResult] = useState<SearchResult | null>(null);

  // 检查API状态
  useEffect(() => {
    fetch('/api/status')
      .then((res) => res.json())
      .then((data) => {
        setApiStatus(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('获取API状态失败:', err);
        setLoading(false);
      });
  }, []);

  // 搜索商品
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setSearching(true);
    setSearchResult(null);

    try {
      const res = await fetch('/api/items/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ q: searchQuery }),
      });

      const data = await res.json();
      setSearchResult(data);
    } catch (error) {
      setSearchResult({
        success: false,
        error: error instanceof Error ? error.message : '搜索失败',
      });
    } finally {
      setSearching(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* 顶部导航 */}
      <nav className="border-b bg-white/50 backdrop-blur-sm dark:bg-slate-900/50">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-orange-600">
              <span className="text-sm font-bold text-white">闲</span>
            </div>
            <span className="text-lg font-bold tracking-tight">闲鱼数据分析平台</span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-600 dark:text-slate-400">
              欢迎回来，test
            </span>
            <Link href="/login">
              <Button variant="outline" size="sm">
                退出登录
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* 主要内容区 */}
      <main className="container mx-auto flex-1 px-4 py-8">
        <div className="mx-auto max-w-7xl">
          {/* 标题 */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">数据概览</h1>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              查看您的闲鱼商品数据分析结果
            </p>
          </div>

          {/* API 状态卡片 */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>API 状态</CardTitle>
                  <CardDescription>阿里开放平台接口配置状态</CardDescription>
                </div>
                {loading ? (
                  <Loader2 className="h-5 w-5 animate-spin text-slate-400" />
                ) : apiStatus?.apiConfigured ? (
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                ) : (
                  <XCircle className="h-5 w-5 text-red-500" />
                )}
              </div>
            </CardHeader>
            <CardContent>
              {loading ? (
                <p className="text-sm text-slate-600 dark:text-slate-400">加载中...</p>
              ) : apiStatus?.apiConfigured ? (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span className="text-slate-600 dark:text-slate-400">
                      App Key: {apiStatus.appKey}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span className="text-slate-600 dark:text-slate-400">
                      App Secret: {apiStatus.appSecret}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400">
                    <XCircle className="h-4 w-4" />
                    <span>API 未配置</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    请在 .env.local 文件中配置 TAOBAO_APP_KEY 和 TAOBAO_APP_SECRET
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* 商品搜索功能 */}
          {apiStatus?.apiConfigured && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>商品搜索</CardTitle>
                <CardDescription>搜索闲鱼平台商品</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSearch} className="flex gap-2">
                  <Input
                    placeholder="输入商品关键词，如：iPhone、二手自行车..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    disabled={searching}
                    className="flex-1"
                  />
                  <Button type="submit" disabled={searching || !searchQuery.trim()}>
                    {searching ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <Search className="mr-2 h-4 w-4" />
                    )}
                    搜索
                  </Button>
                </form>

                {/* 搜索结果 */}
                {searchResult && (
                  <div className="mt-4">
                    {searchResult.success ? (
                      <div className="space-y-2">
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          搜索成功！返回数据：
                        </p>
                        <pre className="max-h-96 overflow-auto rounded-lg bg-slate-100 p-4 text-xs dark:bg-slate-800">
                          {JSON.stringify(searchResult.data, null, 2)}
                        </pre>
                      </div>
                    ) : (
                      <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-800 dark:bg-red-950/20 dark:text-red-400">
                        {searchResult.error}
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* 数据卡片 */}
          <div className="mb-8 grid gap-6 md:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  监控商品数
                </CardTitle>
                <Package className="h-4 w-4 text-slate-600 dark:text-slate-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">0</div>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                  {apiStatus?.apiConfigured ? 'API已就绪' : '等待API配置'}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  价格变动提醒
                </CardTitle>
                <TrendingUp className="h-4 w-4 text-slate-600 dark:text-slate-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">0</div>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                  {apiStatus?.apiConfigured ? 'API已就绪' : '等待API配置'}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  竞品分析
                </CardTitle>
                <Users className="h-4 w-4 text-slate-600 dark:text-slate-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">0</div>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                  {apiStatus?.apiConfigured ? 'API已就绪' : '等待API配置'}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  活跃度
                </CardTitle>
                <Activity className="h-4 w-4 text-slate-600 dark:text-slate-400" />
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold">0%</span>
                  <ArrowUpRight className="h-4 w-4 text-green-500" />
                </div>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                  {apiStatus?.apiConfigured ? 'API已就绪' : '等待API配置'}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* 快速操作 */}
          <Card>
            <CardHeader>
              <CardTitle>快速操作</CardTitle>
              <CardDescription>常用功能快捷入口</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button
                className="w-full justify-start"
                variant="outline"
                disabled={!apiStatus?.apiConfigured}
              >
                <Package className="mr-2 h-4 w-4" />
                搜索商品
                <ArrowUpRight className="ml-auto h-4 w-4" />
              </Button>
              <Button
                className="w-full justify-start"
                variant="outline"
                disabled={!apiStatus?.apiConfigured}
              >
                <TrendingUp className="mr-2 h-4 w-4" />
                价格监控
                <ArrowUpRight className="ml-auto h-4 w-4" />
              </Button>
              <Button
                className="w-full justify-start"
                variant="outline"
                disabled={!apiStatus?.apiConfigured}
              >
                <Users className="mr-2 h-4 w-4" />
                竞品分析
                <ArrowUpRight className="ml-auto h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
