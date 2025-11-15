# 快速修复：手动创建项目

如果自动创建项目失败，请手动创建一次，之后就可以自动部署了。

## 手动创建步骤（只需一次）

1. **访问 Cloudflare Pages**
   - 登录：https://dash.cloudflare.com/
   - 进入：Workers & Pages → Pages

2. **创建项目**
   - 点击 **"Create a project"**
   - 选择 **"Upload assets"**（不要选择 "Connect to Git"）

3. **配置项目**
   - **Project name**: `newtab-navigation`（必须完全一致）
   - **Production branch**: `main`
   - 其他使用默认值

4. **完成创建**
   - 点击 **"Create project"**
   - 可以上传一个简单的 `index.html` 文件，或直接完成创建

5. **重新运行 GitHub Actions**
   - 访问：https://github.com/nianshu2022/newtab/actions
   - 点击失败的运行
   - 点击 **"Re-run all jobs"**

## 为什么需要手动创建？

可能的原因：
- ✅ API Token 权限可能不够（虽然应该有 `Cloudflare Pages:Edit` 权限）
- ✅ 第一次创建项目需要特殊权限
- ✅ 手动创建后，之后的部署就可以自动进行了

## 检查 API Token 权限

如果自动创建持续失败，检查你的 API Token：

1. 访问：https://dash.cloudflare.com/profile/api-tokens
2. 找到你的 Token
3. 确认权限包括：
   - ✅ Account: `Cloudflare Pages:Edit`
   - ✅ Account Resources: 选择了你的账号

如果权限不够，创建一个新的 Token 并更新 GitHub Secrets。

