import { NextRequest, NextResponse } from 'next/server';
import { searchIdleItems, isTaobaoConfigured } from '@/lib/taobao';

export async function GET(request: NextRequest) {
  try {
    // 检查API配置
    if (!isTaobaoConfigured()) {
      return NextResponse.json(
        {
          error: 'API未配置',
          message: '请在 .env.local 文件中配置 TAOBAO_APP_KEY 和 TAOBAO_APP_SECRET',
        },
        { status: 500 }
      );
    }

    // 获取搜索参数
    const searchParams = request.nextUrl.searchParams;
    const q = searchParams.get('q') || '';
    const page = parseInt(searchParams.get('page') || '1');
    const pageSize = parseInt(searchParams.get('pageSize') || '20');

    if (!q) {
      return NextResponse.json(
        { error: '请提供搜索关键词' },
        { status: 400 }
      );
    }

    // 调用淘宝API
    const result = await searchIdleItems({ q, page, pageSize });

    return NextResponse.json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error('API调用失败:', error);
    return NextResponse.json(
      {
        error: 'API调用失败',
        message: error instanceof Error ? error.message : '未知错误',
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    // 检查API配置
    if (!isTaobaoConfigured()) {
      return NextResponse.json(
        {
          error: 'API未配置',
          message: '请在 .env.local 文件中配置 TAOBAO_APP_KEY 和 TAOBAO_APP_SECRET',
        },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { q, page, pageSize } = body;

    if (!q) {
      return NextResponse.json(
        { error: '请提供搜索关键词' },
        { status: 400 }
      );
    }

    // 调用淘宝API
    const result = await searchIdleItems({
      q,
      page: page || 1,
      pageSize: pageSize || 20,
    });

    return NextResponse.json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error('API调用失败:', error);
    return NextResponse.json(
      {
        error: 'API调用失败',
        message: error instanceof Error ? error.message : '未知错误',
      },
      { status: 500 }
    );
  }
}
