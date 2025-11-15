# 创建 Cloudflare Pages 项目

错误信息显示：`Could not route to /client/v4/accounts/***/pages/projects/newtab-navigation`

这是因为 Cloudflare Pages 项目还不存在，需要先创建。

## 快速创建步骤

### 方法一：手动创建（推荐）

1. **登录 Cloudflare Dashboard**
   - 访问：https://dash.cloudflare.com/
   - 登录你的账号

2. **进入 Pages**
   - 点击左侧菜单的 **"Workers & Pages"**
   - 或直接访问：https://dash.cloudflare.com/?to=/:account/pages

3. **创建项目**
   - 点击 **"Create a project"** 按钮
   - 选择 **"Upload assets"**（重要：不要选择 "Connect to Git"，因为我们使用 GitHub Actions 部署）

4. **配置项目**
   - **Project name**: `newtab-navigation`（必须与 GitHub Actions 中的 projectName 一致）
   - 其他设置可以暂时跳过或使用默认值

5. **完成创建**
   - 点击 **"Create project"**
   - 项目创建后，你可以先上传一个简单的文件测试，或者直接跳过

6. **重新运行 GitHub Actions**
   - 返回 GitHub：https://github.com/nianshu2022/newtab/actions
   - 点击失败的运行
   - 点击 **"Re-run all jobs"**

### 方法二：使用 Wrangler CLI（可选）

如果你想通过命令行创建，可以运行：

```bash
# 安装 wrangler（如果还没安装）
npm install -g wrangler

# 登录 Cloudflare
wrangler login

# 创建 Pages 项目（但这需要先上传内容）
# 所以还是推荐使用方法一
```

## 验证项目已创建

1. 访问：https://dash.cloudflare.com/?to=/:account/pages
2. 你应该能看到 `newtab-navigation` 项目在列表中
3. 如果看到项目，说明创建成功

## 重要提示

- ✅ **项目名称必须完全匹配**：`newtab-navigation`
- ✅ 创建项目后，GitHub Actions 就可以正常部署了
- ✅ 第一次部署后，项目会自动获得一个 `*.pages.dev` 的域名

## 创建项目后的下一步

1. ✅ 项目已创建
2. ✅ GitHub Secrets 已配置
3. ✅ 推送代码或重新运行 GitHub Actions
4. ✅ 部署成功后，访问 Cloudflare Pages 提供的 URL

## 常见问题

**Q: 为什么不能选择 "Connect to Git"？**

A: 因为我们使用的是 GitHub Actions 来部署，而不是 Cloudflare 的 Git 集成。如果选择 "Connect to Git"，Cloudflare 会尝试自己构建和部署，这可能与我们的 GitHub Actions 冲突。

**Q: 项目名称可以不同吗？**

A: 不可以。GitHub Actions 工作流中配置的 `projectName: newtab-navigation` 必须与 Cloudflare 中的项目名称完全一致。

**Q: 创建项目后还是报错？**

A: 
1. 确认项目名称完全一致
2. 等待几分钟让项目完全创建
3. 检查 API Token 权限是否正确（需要 `Cloudflare Pages:Edit`）

