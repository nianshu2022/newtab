# 部署指南

本指南将帮助你将网站导航部署到 Cloudflare Pages，并设置自动部署。

## 前置要求

1. **GitHub 账号** - 用于存储代码
2. **Cloudflare 账号** - 用于托管网站（免费）
3. **Node.js 18+** - 用于本地开发（可选）

## 步骤 1: 将代码推送到 GitHub

1. 在 GitHub 上创建一个新仓库
2. 将本地代码推送到仓库：

```bash
git init
git add .
git commit -m "初始提交：网站导航项目"
git branch -M main
git remote add origin https://github.com/你的用户名/仓库名.git
git push -u origin main
```

## 步骤 2: 获取 Cloudflare API Token

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 点击右上角你的头像，选择 **"My Profile"**
3. 进入 **"API Tokens"** 标签页
4. 点击 **"Create Token"**
5. 选择 **"Create Custom Token"**，配置如下：
   - **Token name**: `newtab-navigation-deploy`
   - **Permissions**:
     - Account: `Cloudflare Pages:Edit`
     - Zone: `Zone:Read`（如果需要自定义域名）
   - **Account Resources**: 选择你的账号
   - **Zone Resources**: 选择所有区域（如果需要自定义域名）
6. 点击 **"Continue to summary"**，然后点击 **"Create Token"**
7. **重要**: 复制生成的 Token（只显示一次，请妥善保存）

## 步骤 3: 获取 Account ID

1. 在 Cloudflare Dashboard 右侧栏可以看到 **"Account ID"**
2. 复制这个 ID

## 步骤 4: 配置 GitHub Secrets

1. 进入你的 GitHub 仓库
2. 点击 **Settings** → **Secrets and variables** → **Actions**
3. 点击 **"New repository secret"**，添加以下两个 Secret：

   **Secret 1:**
   - Name: `CLOUDFLARE_API_TOKEN`
   - Value: 你刚才复制的 API Token

   **Secret 2:**
   - Name: `CLOUDFLARE_ACCOUNT_ID`
   - Value: 你的 Account ID

## 步骤 5: 首次手动创建 Cloudflare Pages 项目（可选）

虽然 GitHub Actions 会自动部署，但你也可以先在 Cloudflare Pages 中创建项目：

1. 进入 [Cloudflare Pages](https://dash.cloudflare.com/?to=/:account/pages)
2. 点击 **"Create a project"**
3. 选择 **"Connect to Git"**
4. 选择你的 GitHub 仓库
5. 配置：
   - **Project name**: `newtab-navigation`
   - **Production branch**: `main`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
6. 点击 **"Save and Deploy"**

**注意**: 如果你使用 GitHub Actions 自动部署，可以跳过手动创建步骤，GitHub Actions 会自动创建项目。

## 步骤 6: 触发自动部署

1. 推送代码到 `main` 分支：
   ```bash
   git push origin main
   ```

2. 查看 GitHub Actions：
   - 进入你的 GitHub 仓库
   - 点击 **Actions** 标签页
   - 查看部署状态

3. 部署成功后：
   - GitHub Actions 会自动在 Cloudflare Pages 上部署
   - 你的网站将自动获得一个 `*.pages.dev` 的域名
   - 可以在 Cloudflare Pages 控制台查看部署状态和 URL

## 自定义域名（可选）

1. 在 Cloudflare Pages 控制台中，进入你的项目
2. 点击 **"Custom domains"**
3. 添加你的域名
4. 按照提示配置 DNS 记录

## 验证部署

访问你的 Cloudflare Pages URL，你应该能看到：
- ✅ 搜索引擎选择器（百度、谷歌、GitHub）
- ✅ 搜索输入框和搜索按钮
- ✅ 按分组展示的网站导航
- ✅ 点击网站图标可以在新标签页打开

## 更新网站列表

编辑 `src/data/sites.ts` 文件来修改网站列表，然后：

```bash
git add .
git commit -m "更新网站列表"
git push origin main
```

GitHub Actions 会自动触发新的部署。

## 故障排除

### GitHub Actions 部署失败

1. 检查 Secrets 是否正确配置
2. 检查 Account ID 是否正确
3. 查看 GitHub Actions 日志了解详细错误信息

### 构建失败

1. 确保 `package.json` 中的依赖都已安装
2. 检查 TypeScript 编译是否有错误
3. 本地运行 `npm run build` 测试构建过程

### 网站无法访问

1. 检查 Cloudflare Pages 部署状态
2. 检查自定义域名 DNS 配置（如果使用）
3. 清除浏览器缓存后重试

## 需要帮助？

- [Cloudflare Pages 文档](https://developers.cloudflare.com/pages/)
- [GitHub Actions 文档](https://docs.github.com/en/actions)
- 检查项目 README.md 了解更多信息

