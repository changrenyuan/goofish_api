import { ApiClient } from '@local/topsdk';

// 懒加载淘宝客户端，确保环境变量已加载
function getClient(): ApiClient {
  const appKey = process.env.TAOBAO_APP_KEY;
  const appSecret = process.env.TAOBAO_APP_SECRET;

  console.log('环境变量检查:', {
    hasAppKey: !!appKey,
    hasAppSecret: !!appSecret,
    appKey,
  });

  if (!appKey || !appSecret) {
    throw new Error('appkey or appsecret need!');
  }

  return new ApiClient({
    appkey: appKey,
    appsecret: appSecret,
    url: 'https://eco.taobao.com/router/rest',
  });
}

// 闲鱼商品搜索接口
export async function searchIdleItems(params: {
  q: string; // 搜索关键词
  page?: number; // 页码
  pageSize?: number; // 每页数量
}) {
  try {
    console.log('开始搜索闲鱼商品，参数:', params);
    const client = getClient();
    console.log('客户端创建成功，开始调用API');

    const apiParams = {
      q: params.q,
      page_no: params.page || 1,
      page_size: params.pageSize || 20,
    };
    console.log('API参数:', apiParams);

    // 将回调函数转换为 Promise
    const result = await new Promise((resolve, reject) => {
      client.execute('taobao.idle.item.search', apiParams, function(error: any, response: any) {
        console.log('回调函数被调用，error:', error, 'response:', response);
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });

    console.log('API调用返回结果:', JSON.stringify(result, null, 2));
    return result;
  } catch (error) {
    console.error('搜索闲鱼商品失败，详细错误:', error);
    console.error('错误堆栈:', error instanceof Error ? error.stack : 'No stack');
    throw error;
  }
}

// 闲鱼商品详情接口
export async function getIdleItemDetail(itemId: string) {
  try {
    const client = getClient();
    const result = await new Promise((resolve, reject) => {
      client.execute('taobao.idle.item.info', {
        item_id: itemId,
      }, function(error, response) {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
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
    const client = getClient();
    const result = await new Promise((resolve, reject) => {
      client.execute('taobao.idle.user.info', {
        seller_id: sellerId,
      }, function(error, response) {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
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
