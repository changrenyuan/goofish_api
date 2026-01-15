import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    allEnv: {
      TAOBAO_APP_KEY: process.env.TAOBAO_APP_KEY,
      TAOBAO_APP_SECRET: process.env.TAOBAO_APP_SECRET,
      TAOBAO_SESSION_KEY: process.env.TAOBAO_SESSION_KEY,
      NODE_ENV: process.env.NODE_ENV,
    },
    exists: {
      hasAppKey: !!process.env.TAOBAO_APP_KEY,
      hasAppSecret: !!process.env.TAOBAO_APP_SECRET,
    },
  });
}
