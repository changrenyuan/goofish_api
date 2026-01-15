import { ApiClient } from 'top-sdk-ts';

// 初始化淘宝客户端
export const taobaoClient = new ApiClient({
  appKey: process.env.TAOBAO_APP_KEY || '',
  appSecret: process.env.TAOBAO_APP_SECRET || '',
  restUrl: 'https://eco.taobao.com/router/rest',
});

// 闲鱼商品搜索接口
export async function searchIdleItems(params: {
  q: string; // 搜索关键词
  page?: number; // 页码
  pageSize?: number; // 每页数量
}) {
  try {
    const result = await taobaoClient.execute('taobao.idle.item.search', {
      q: params.q,
      page_no: params.page || 1,
      page_size: params.pageSize || 20,
    });
    return result;
  } catch (error) {
    console.error('搜索闲鱼商品失败:', error);
    throw error;
  }
}

// 闲鱼商品详情接口
export async function getIdleItemDetail(itemId: string) {
  try {
    const result = await taobaoClient.execute('taobao.idle.item.info', {
      item_id: itemId,
    });
    return result;
  } catch (error) {
    console.error('获取商品详情失败:', error);
    throw error;
  }
}

// 闲鱼用户信息接口
export async function getIdleUserInfo(sellerId: string) {
  try {
    const result = await taobaoClient.execute('taobao.idle.user.info', {
      seller_id: sellerId,
    });
    return result;
  } catch (error) {
    console.error('获取用户信息失败:', error);
    throw error;
  }
}

// 检查API配置是否完整
export function isTaobaoConfigured(): boolean {
  return !!(
    process.env.TAOBAO_APP_KEY &&
    process.env.TAOBAO_APP_SECRET
  );
}
