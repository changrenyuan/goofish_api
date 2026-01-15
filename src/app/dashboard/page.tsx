import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ArrowUpRight,
  ArrowDownRight,
  Package,
  TrendingUp,
  Users,
  Activity,
} from 'lucide-react';

export const metadata: Metadata = {
  title: '仪表盘 - 闲鱼数据分析平台',
  description: '闲鱼商品数据分析平台仪表盘',
};

export default function DashboardPage() {
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
            <Button variant="outline" size="sm">
              退出登录
            </Button>
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

          {/* API 申请提示 */}
          <Card className="mb-8 border-dashed bg-orange-50 dark:bg-orange-950/20">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900/30">
                  <svg
                    className="h-5 w-5 text-orange-600 dark:text-orange-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                    等待 API 审核通过
                  </h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    当前为演示版本，完整功能需要阿里开放平台 API 审核通过后才能使用。
                    审核通过后，系统将集成以下接口：
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Badge variant="outline">商品搜索接口</Badge>
                    <Badge variant="outline">商品详情接口</Badge>
                    <Badge variant="outline">用户信息接口</Badge>
                    <Badge variant="outline">交易数据接口</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

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
                  等待 API 接入
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
                  等待 API 接入
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
                  等待 API 接入
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
                  等待数据更新
                </p>
              </CardContent>
            </Card>
          </div>

          {/* 功能区域 */}
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>快速操作</CardTitle>
                <CardDescription>
                  常用功能快捷入口
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="outline" disabled>
                  <Package className="mr-2 h-4 w-4" />
                  搜索商品
                  <ArrowUpRight className="ml-auto h-4 w-4" />
                </Button>
                <Button className="w-full justify-start" variant="outline" disabled>
                  <TrendingUp className="mr-2 h-4 w-4" />
                  价格监控
                  <ArrowUpRight className="ml-auto h-4 w-4" />
                </Button>
                <Button className="w-full justify-start" variant="outline" disabled>
                  <Users className="mr-2 h-4 w-4" />
                  竞品分析
                  <ArrowUpRight className="ml-auto h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>最近动态</CardTitle>
                <CardDescription>
                  系统最新活动
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                      <svg
                        className="h-4 w-4 text-blue-600 dark:text-blue-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                        欢迎使用闲鱼数据分析平台
                      </p>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        系统已就绪，等待 API 审核通过
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                      <svg
                        className="h-4 w-4 text-green-600 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                        账户创建成功
                      </p>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        您已成功登录系统
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 功能说明 */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>功能说明</CardTitle>
              <CardDescription>
                API 审核通过后将支持以下功能
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2 rounded-lg border p-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30">
                    <Package className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                    商品搜索
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    实时搜索闲鱼商品，支持关键词、价格、类目等多维度筛选
                  </p>
                </div>

                <div className="space-y-2 rounded-lg border p-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/30">
                    <TrendingUp className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                    价格监控
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    自动跟踪商品价格变化，生成价格走势图表
                  </p>
                </div>

                <div className="space-y-2 rounded-lg border p-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/30">
                    <Users className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                    智能定价
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    基于数据分析，为您提供最优定价建议
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
