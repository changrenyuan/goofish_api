import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: '闲鱼商品数据分析平台',
  description: '基于阿里开放平台的闲鱼电商数据智能分析系统',
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* 顶部导航 */}
      <nav className="border-b bg-white/50 backdrop-blur-sm dark:bg-slate-900/50">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-orange-600">
              <span className="text-sm font-bold text-white">闲</span>
            </div>
            <span className="text-lg font-bold tracking-tight">闲鱼数据分析平台</span>
          </div>
          <Button asChild variant="outline" size="sm">
            <a href="/login">登录系统</a>
          </Button>
        </div>
      </nav>

      {/* 主要内容区 */}
      <main className="container mx-auto flex-1 px-4 py-12">
        <div className="mx-auto max-w-5xl">
          {/* 标题区 */}
          <div className="mb-12 text-center">
            <Badge className="mb-4" variant="secondary">
              基于阿里开放平台 · 闲鱼API
            </Badge>
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
              闲鱼商品数据分析平台
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
              智能化监控闲鱼市场价格走势，为商家提供数据驱动的定价建议和竞争对手分析
            </p>
          </div>

          {/* 核心功能卡片 */}
          <div className="mb-12 grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30">
                  <svg
                    className="h-5 w-5 text-blue-600 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <CardTitle>价格监控</CardTitle>
                <CardDescription>
                  实时跟踪同类商品价格变化
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  自动采集闲鱼平台商品数据，生成价格走势图表，帮助商家把握市场动态
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/30">
                  <svg
                    className="h-5 w-5 text-green-600 dark:text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <CardTitle>智能定价</CardTitle>
                <CardDescription>
                  AI驱动的价格建议系统
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  基于历史数据和竞品分析，为商家提供最优定价建议，提升商品竞争力
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/30">
                  <svg
                    className="h-5 w-5 text-purple-600 dark:text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                </div>
                <CardTitle>竞品分析</CardTitle>
                <CardDescription>
                  深度竞争对手研究
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  全面分析竞争对手的销售策略、用户评价，制定差异化竞争方案
                </p>
              </CardContent>
            </Card>
          </div>

          {/* 技术架构 */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>技术架构</CardTitle>
              <CardDescription>基于现代化技术栈构建</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Next.js 16</Badge>
                <Badge variant="outline">React 19</Badge>
                <Badge variant="outline">TypeScript</Badge>
                <Badge variant="outline">Tailwind CSS</Badge>
                <Badge variant="outline">阿里开放平台 API</Badge>
                <Badge variant="outline">Vercel 部署</Badge>
              </div>
            </CardContent>
          </Card>

          {/* API 申请说明 */}
          <Card>
            <CardHeader>
              <CardTitle>API 集成计划</CardTitle>
              <CardDescription>申请使用的阿里开放平台接口</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-2">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>商品搜索接口 - 获取闲鱼商品列表数据</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>商品详情接口 - 获取商品详细信息及历史价格</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>用户信息接口 - 获取卖家信用等级和评价数据</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>交易数据接口 - 获取历史成交记录</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* 行动按钮 */}
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg" className="rounded-full">
              <a href="/login">立即体验</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <a
                href="https://open.taobao.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                了解阿里开放平台
              </a>
            </Button>
          </div>
        </div>
      </main>

      {/* 页脚 */}
      <footer className="border-t bg-white/50 backdrop-blur-sm dark:bg-slate-900/50">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-slate-600 dark:text-slate-400">
          <p>© 2025 闲鱼数据分析平台 · 基于阿里开放平台构建</p>
        </div>
      </footer>
    </div>
  );
}
