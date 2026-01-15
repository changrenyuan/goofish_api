# 阿里开放平台 API 配置指南

## 已完成的工作

1. ✅ 安装了淘宝开放平台 SDK (`top-sdk-ts`)
2. ✅ 创建了 API 调用封装 (`src/lib/taobao.ts`)
3. ✅ 创建了 API 路由 (`src/app/api/`)
4. ✅ 更新了仪表盘页面，添加了 API 状态检查和搜索功能

## 需要配置的环境变量

请在 `.env.local` 文件中配置以下环境变量：

```env
TAOBAO_APP_KEY=35262690
TAOBAO_APP_SECRET=你的AppSecret
TAOBAO_SESSION_KEY=你的SessionKey（可选）
```

## 获取配置信息

1. **App Key**: 已知为 `35262690`
2. **App Secret**: 需要在阿里开放平台获取
   - 访问 [阿里开放平台控制台](https://open.taobao.com/)
   - 进入你的应用管理
   - 查看应用详情，获取 App Secret
3. **Session Key**: 如果需要调用需要用户授权的接口，需要获取 Session Key

## 配置步骤

1. 打开 `.env.local` 文件
2. 将 `TAOBAO_APP_SECRET=请填写你的AppSecret` 替换为真实的 App Secret
3. 保存文件
4. 重启开发服务器（如果正在运行）

## 重启开发服务器

如果开发服务器正在运行，需要重启以加载新的环境变量：

```bash
# 停止当前服务器（Ctrl+C）
# 然后重新启动
coze dev
```

## 测试 API 配置

配置完成后，访问以下地址测试：

1. **API 状态检查**: http://localhost:5000/api/status
2. **仪表盘页面**: http://localhost:5000/dashboard

## API 接口说明

### 1. 商品搜索接口

**端点**: `POST /api/items/search`

**请求参数**:
```json
{
  "q": "搜索关键词",
  "page": 1,
  "pageSize": 20
}
```

**示例**:
```bash
curl -X POST http://localhost:5000/api/items/search \
  -H "Content-Type: application/json" \
  -d '{"q":"iPhone"}'
```

### 2. API 状态接口

**端点**: `GET /api/status`

返回当前 API 配置状态

## 闲鱼 API 接口列表

根据申请，系统支持以下接口：

| 接口名称 | 方法名 | 说明 |
|---------|--------|------|
| 商品搜索 | taobao.idle.item.search | 根据关键词搜索闲鱼商品 |
| 商品详情 | taobao.idle.item.info | 获取商品详细信息 |
| 用户信息 | taobao.idle.user.info | 获取卖家信息 |
| 交易数据 | taobao.idle.trade.data | 获取交易数据 |

## 注意事项

1. **环境变量安全**: `.env.local` 文件不要提交到 Git 仓库
2. **API 限流**: 淘宝开放平台有 API 调用频率限制，请注意不要超限
3. **错误处理**: 所有 API 调用都有错误处理，会返回详细的错误信息
4. **开发环境**: 当前为开发环境，生产环境需要配置生产环境的 App Key 和 App Secret

## 故障排除

### 错误: "appkey or appsecret need!"

**原因**: 环境变量未正确配置

**解决**: 检查 `.env.local` 文件中的配置是否正确，并重启服务器

### 错误: "API调用失败"

**原因**: API 密钥错误或网络问题

**解决**:
1. 检查 App Key 和 App Secret 是否正确
2. 检查网络连接
3. 查看阿里开放平台控制台，确认应用状态是否正常

## 后续开发计划

1. ✅ API 基础集成
2. ⏳ 完善商品搜索功能
3. ⏳ 实现价格监控功能
4. ⏳ 实现智能定价算法
5. ⏳ 数据可视化优化
