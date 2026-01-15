# Vercel 环境变量配置问题排查指南

## 问题现象

部署到 Vercel 后显示：
```
API 未配置
请在 .env.local 文件中配置 TAOBAO_APP_KEY 和 TAOBAO_APP_SECRET
```

## 诊断步骤

### 步骤 1：访问调试端点

访问你的部署 URL：
```
https://你的项目.vercel.app/api/debug/env
```

### 步骤 2：检查返回结果

#### 情况 A：hasAppKey: false, hasAppSecret: false
**说明：** 环境变量未配置或未生效

**解决方法：**

1. **登录 Vercel Dashboard**
   ```
   https://vercel.com/dashboard
   ```

2. **进入项目设置**
   - 选择项目 `goofish_api`
   - 点击 **Settings** 标签
   - 选择 **Environment Variables**

3. **添加环境变量**
   点击 **Add New**，添加以下变量：

   | Name | Value | Environment |
   |------|-------|-------------|
   | TAOBAO_APP_KEY | 35262690 | Production |
   | TAOBAO_APP_SECRET | 874f9e99127cdcd5160fbde502999bcd | Production |

   **重要：**
   - Name 必须完全大写（TAOBAO_APP_KEY，不是 taobao_app_key）
   - Environment 选择 **Production**（不要只选 Preview 或 Development）
   - Value 不要加引号
   - Value 前后不要有空格

4. **保存并重新部署**
   - 点击页面底部的 **Save** 按钮
   - 进入 **Deployments** 标签
   - 点击最新部署右侧的三个点（...）
   - 选择 **Redeploy**
   - 等待部署完成（约 1-2 分钟）

#### 情况 B：hasAppKey: true, 但 appKey 为空字符串
**说明：** 环境变量配置了，但值为空

**解决方法：**
- 重新编辑环境变量，确保 Value 有值
- 检查是否有多余的空格
- 重新部署

#### 情况 C：hasAppKey: true, hasAppSecret: true，但还是提示未配置
**说明：** 环境变量已正确配置，可能是代码读取问题

**解决方法：**
创建一个本地测试页面验证：

```bash
# 本地测试
curl http://localhost:5000/api/debug/env
```

如果本地正常，说明 Vercel 有特殊配置问题。请联系我进一步排查。

## 常见错误

### 错误 1：环境变量名称大小写错误

❌ **错误：**
```
taobao_app_key (小写)
Taobao_App_Key (驼峰命名)
```

✅ **正确：**
```
TAOBAO_APP_KEY (全大写)
```

### 错误 2：环境变量作用域选择错误

❌ **错误：**
- 只选择了 **Development**
- 只选择了 **Preview**

✅ **正确：**
- 选择 **Production**（生产环境）
- 或选择 **All**（所有环境）

### 错误 3：配置后没有重新部署

❌ **错误：**
添加环境变量后直接刷新页面

✅ **正确：**
添加环境变量后必须重新部署项目

### 错误 4：环境变量值格式错误

❌ **错误：**
```
TAOBAO_APP_KEY = "35262690" (带引号)
TAOBAO_APP_KEY =  35262690  (带空格)
```

✅ **正确：**
```
TAOBAO_APP_KEY = 35262690
```

## 终极解决方案：使用 NEXT_PUBLIC_ 前缀

如果以上方法都不行，可以使用 Next.js 的公开环境变量（仅用于测试）：

### 1. 在 Vercel 添加环境变量

| Name | Value | Environment |
|------|-------|-------------|
| NEXT_PUBLIC_TAOBAO_APP_KEY | 35262690 | Production |
| NEXT_PUBLIC_TAOBAO_APP_SECRET | 874f9e99127cdcd5160fbde502999bcd | Production |

### 2. 修改代码

需要修改 `src/lib/taobao.ts` 和相关文件，将：
```typescript
process.env.TAOBAO_APP_KEY
```
改为：
```typescript
process.env.NEXT_PUBLIC_TAOBAO_APP_KEY
```

**注意：** 这种方式会暴露环境变量到前端，仅用于紧急情况。

## 联系支持

如果以上方法都无法解决，请提供以下信息：

1. 调试端点的返回结果：`/api/debug/env`
2. Vercel 环境变量配置截图
3. Vercel 部署日志

我会进一步帮你排查问题。
