# 闲鱼 API 认证说明

## API 认证类型

### 1. 应用级 API（无需登录）

**适用场景：** 公开数据查询

**所需凭证：**
- ✅ App Key
- ✅ App Secret
- ❌ Session Key

**典型 API：**
- 商品搜索（如果支持）
- 类目查询
- 公开商品信息获取

**认证方式：**
```
请求参数自动签名：
- timestamp
- app_key
- sign_method
- sign（使用 App Secret 生成）
```

### 2. 用户级 API（需要授权）

**适用场景：** 操作用户数据

**所需凭证：**
- ✅ App Key
- ✅ App Secret
- ✅ Session Key（访问令牌）

**典型 API：**
- 发布商品
- 修改商品信息
- 查看订单
- 获取个人闲鱼数据

**获取 Session Key 的方式：**

#### 方式一：沙箱测试账号
```bash
# 在淘宝开放平台创建测试账号
# 获取测试用的 Session Key
TAOBAO_SESSION_KEY=沙箱测试账号的session
```

#### 方式二：OAuth 2.0 授权
1. 引导用户跳转到淘宝授权页面
2. 用户授权后获取授权码
3. 使用授权码换取 Session Key

#### 方式三：自授权（测试用）
在淘宝开放平台控制台获取自己的 Session Key

## 当前配置分析

### 已配置
```
TAOBAO_APP_KEY = 35262690
TAOBAO_APP_SECRET = 874f9e99127cdcd5160fbde502999bcd
```

### 未配置
```
TAOBAO_SESSION_KEY = 空
```

### 影响范围

| 功能 | 是否可用 | 原因 |
|------|---------|------|
| 公开商品搜索 | ❓ 取决于 API 类型 | 需要确认 `taobao.idle.item.search` 是否支持应用级调用 |
| 商品详情查询 | ❓ 取决于 API 类型 | 需要确认 API 是否需要 Session Key |
| 发布商品 | ❌ 不支持 | 需要 Session Key |
| 查看订单 | ❌ 不支持 | 需要 Session Key |

## 测试建议

### 测试 1：确认商品搜索 API 类型

使用当前配置（无 Session Key）测试：
```bash
curl "http://localhost:5000/api/items/search?q=test&page=1&pageSize=5"
```

**可能的结果：**
- ✅ 成功：说明该 API 支持应用级调用
- ❌ 失败（Invalid session）：说明需要 Session Key
- ❌ 失败（Invalid method）：说明 API 名称错误

### 测试 2：如果需要 Session Key

#### 在淘宝开放平台获取：
1. 登录 [淘宝开放平台](https://open.taobao.com)
2. 进入你的应用管理
3. 查看应用详情
4. 获取测试账号的 Session Key

#### 配置到环境变量：
```bash
# .env.local
TAOBAO_SESSION_KEY=你的session_key_here
```

## 闲鱼平台特殊性

### 注意事项：

1. **闲鱼 API 可能有限制**
   - 闲鱼 API 可能不是公开的
   - 需要申请特殊权限才能调用

2. **可能的替代方案**
   - 使用淘宝通用 API
   - 使用闲鱼开放平台（如果有独立平台）
   - 使用爬虫技术（需谨慎，遵守规则）

3. **测试账号**
   - 可以在淘宝开放平台创建沙箱测试账号
   - 测试账号有独立的 App Key 和 Session Key

## 下一步行动

1. **配置 Vercel 环境变量**（必须）
   - TAOBAO_APP_KEY
   - TAOBAO_APP_SECRET

2. **测试商品搜索**
   - 确认是否需要 Session Key

3. **如果需要 Session Key**
   - 在淘宝开放平台获取
   - 配置到 .env.local 和 Vercel

4. **确认 API 名称**
   - 查看闲鱼 API 文档
   - 确认正确的 API 名称

## 参考资源

- [淘宝开放平台文档](https://open.taobao.com/doc.htm)
- [闲鱼开放平台](https://open.1688.com/doc/index.htm)
- [TOP API 调用说明](https://open.taobao.com/doc.htm?articleId=101617&docType=1)
