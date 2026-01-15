import { NextResponse } from 'next/server';
import { isTaobaoConfigured, taobaoClient } from '@/lib/taobao';

export async function GET() {
  const configured = isTaobaoConfigured();

  return NextResponse.json({
    status: 'ok',
    apiConfigured: configured,
    appKey: configured ? process.env.TAOBAO_APP_KEY : null,
    appSecret: configured
      ? `${process.env.TAOBAO_APP_SECRET?.substring(0, 8)}***`
      : null,
    environment: {
      nodeEnv: process.env.NODE_ENV,
      hasAppKey: !!process.env.TAOBAO_APP_KEY,
      hasAppSecret: !!process.env.TAOBAO_APP_SECRET,
    },
  });
}
