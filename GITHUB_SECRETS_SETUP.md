# GitHub Secrets 配置指南

如果遇到 `Error: Input required and not supplied: accountId` 错误，说明 GitHub Secrets 还未正确配置。

## 快速配置步骤

### 1. 访问 Secrets 配置页面

直接访问你的仓库 Secrets 配置页面：
**https://github.com/nianshu2022/newtab/settings/secrets/actions**

或者手动导航：
1. 进入仓库：https://github.com/nianshu2022/newtab
2. 点击 **Settings**（设置）
3. 左侧菜单选择 **Secrets and variables** → **Actions**
4. 点击 **New repository secret**

### 2. 配置第一个 Secret：CLOUDFLARE_API_TOKEN

1. 点击 **"New repository secret"**
2. 填写：
   - **Name**: `CLOUDFLARE_API_TOKEN`（必须完全一致，区分大小写）
   - **Secret**: 你的 Cloudflare API Token（见下方获取方法）

### 3. 配置第二个 Secret：CLOUDFLARE_ACCOUNT_ID

1. 再次点击 **"New repository secret"**
2. 填写：
   - **Name**: `CLOUDFLARE_ACCOUNT_ID`（必须完全一致，区分大小写）
   - **Secret**: 你的 Cloudflare Account ID（见下方获取方法）

### 4. 获取 Cloudflare API Token

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 点击右上角你的头像 → **"My Profile"**
3. 进入 **"API Tokens"** 标签页
4. 点击 **"Create Token"**
5. 选择 **"Create Custom Token"**，配置如下：
   
   **Token 配置**：
   - **Token name**: `newtab-navigation-deploy`
   
   **Permissions（权限）**：
   - **Account** → **Cloudflare Pages** → **Edit**
   
   **Account Resources（账户资源）**：
   - **Include** → **All accounts**（或选择你的账号）
   
6. 点击 **"Continue to summary"**，然后点击 **"Create Token"**
7. **重要**: 复制生成的 Token（只显示一次！）

### 5. 获取 Account ID

1. 在 Cloudflare Dashboard 右侧栏可以看到 **"Account ID"**
2. 点击复制即可


### 6. 验证配置

配置完成后：
1. 返回 GitHub Actions 页面：https://github.com/nianshu2022/newtab/actions
2. 如果之前有失败的运行，可以点击 **"Re-run all jobs"** 重新运行
3. 或者推送一个小更改来触发新的运行：
   ```bash
   git commit --allow-empty -m "触发部署测试"
   git push
   ```

## 常见问题

### Q: 为什么需要这两个 Secrets？

- `CLOUDFLARE_API_TOKEN`: 用于身份验证，允许 GitHub Actions 访问你的 Cloudflare 账号
- `CLOUDFLARE_ACCOUNT_ID`: 用于标识要部署到的 Cloudflare 账号

### Q: Secrets 名称必须完全一致吗？

是的！GitHub Actions 工作流中使用的是：
- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

名称必须完全匹配（区分大小写）。

### Q: 如何确认 Secrets 已配置？

1. 访问：https://github.com/nianshu2022/newtab/settings/secrets/actions
2. 你应该能看到两个 Secrets：
   - CLOUDFLARE_API_TOKEN
   - CLOUDFLARE_ACCOUNT_ID

### Q: 配置后还是没有生效？

1. 检查 Secrets 名称是否正确（区分大小写）
2. 确认 Token 和 Account ID 的值正确
3. 重新运行失败的 GitHub Actions 工作流
4. 查看 GitHub Actions 日志确认错误信息

## 需要帮助？

如果仍然遇到问题，请检查：
1. Cloudflare Token 是否有效
2. Token 是否有正确的权限（Cloudflare Pages: Edit）
3. GitHub Actions 是否已启用（Settings → Actions → General）

