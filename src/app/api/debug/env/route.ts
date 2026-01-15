import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    message: '环境变量调试信息',
    environment: {
      nodeEnv: process.env.NODE_ENV,
      vercelEnv: process.env.VERCEL_ENV,
      isProduction: process.env.NODE_ENV === 'production',
    },
    // 检查环境变量是否存在
    hasAppKey: !!process.env.TAOBAO_APP_KEY,
    hasAppSecret: !!process.env.TAOBAO_APP_SECRET,
    hasSessionKey: !!process.env.TAOBAO_SESSION_KEY,
    // 显示环境变量的值（脱敏）
    appKey: process.env.TAOBAO_APP_KEY,
    appSecretPrefix: process.env.TAOBAO_APP_SECRET?.substring(0, 8) + '***',
    appSecretLength: process.env.TAOBAO_APP_SECRET?.length || 0,
    // 所有环境变量（过滤敏感信息）
    allEnvKeys: Object.keys(process.env).filter(key =>
      key.startsWith('TAOBAO_') ||
      key.includes('VERCEL') ||
      key.includes('NODE_ENV')
    ),
  });
}
