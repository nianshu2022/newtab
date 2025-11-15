# 网站导航 - NewTab Navigation

一个功能丰富的网站导航网站，由 Cloudflare Pages 驱动。支持网站分组展示、多搜索引擎选择等功能。

## 功能特性

- 🎯 **网站导航**: 展示网站图标和名称，点击后在新标签页打开
- 📁 **分组展示**: 网站按类别进行分组展示
- 🔍 **多搜索引擎**: 支持百度、谷歌、GitHub 三种搜索引擎
- 🚀 **快速部署**: 自动部署到 Cloudflare Pages
- 💻 **响应式设计**: 适配桌面端和移动端

## 技术栈

- **TypeScript**: 类型安全的开发体验
- **JavaScript**: 前端交互逻辑
- **HTML/CSS**: 页面结构和样式
- **Cloudflare Pages**: 静态网站托管和部署

## 项目结构

```
.
├── src/
│   ├── data/
│   │   └── sites.ts          # 网站数据配置
│   ├── scripts/
│   │   └── main.ts           # 主要逻辑代码
│   └── types/
│       └── search.ts         # 类型定义
├── styles/
│   └── main.css              # 样式文件
├── index.html                # 入口 HTML 文件
├── package.json              # 项目配置
├── tsconfig.json             # TypeScript 配置
├── wrangler.toml             # Cloudflare Workers 配置
└── .github/
    └── workflows/
        └── deploy.yml        # GitHub Actions 自动部署
```

## 本地开发

### 前置要求

- Node.js 18+ 
- npm 或 yarn

### 安装依赖

```bash
npm install
```

### 构建项目

```bash
npm run build
```

### 本地预览

```bash
npm run dev
```

## 部署到 Cloudflare Pages

> 📖 **详细部署指南**: 请查看 [DEPLOY.md](./DEPLOY.md) 获取完整的部署步骤和故障排除指南。

### 方式一：使用 GitHub Actions 自动部署（推荐）

1. **Fork 或克隆此仓库到你的 GitHub 账号**

2. **获取 Cloudflare API Token**
   - 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - 进入 "My Profile" → "API Tokens"
   - 点击 "Create Token"
   - 使用 "Edit Cloudflare Workers" 模板，或创建自定义令牌，需要以下权限：
     - Account: `Cloudflare Pages:Edit`
     - Zone: `Zone:Read` (如果需要自定义域名)

3. **获取 Account ID**
   - 在 Cloudflare Dashboard 右侧栏可以看到 Account ID

4. **配置 GitHub Secrets**
   - 进入你的 GitHub 仓库
   - Settings → Secrets and variables → Actions
   - 添加以下 Secrets:
     - `CLOUDFLARE_API_TOKEN`: 你的 API Token
     - `CLOUDFLARE_ACCOUNT_ID`: 你的 Account ID

5. **推送代码到 main 分支**
   ```bash
   git push origin main
   ```
   
   推送后，GitHub Actions 会自动触发构建和部署。

### 方式二：手动部署

1. **安装 Wrangler CLI**
   ```bash
   npm install -g wrangler
   ```

2. **登录 Cloudflare**
   ```bash
   wrangler login
   ```

3. **构建项目**
   ```bash
   npm run build
   ```

4. **部署**
   ```bash
   npm run deploy
   ```

## 自定义网站列表

编辑 `src/data/sites.ts` 文件，修改 `siteGroups` 数组来添加或修改网站：

```typescript
export const siteGroups: SiteGroup[] = [
  {
    id: "your-group-id",
    name: "分组名称",
    sites: [
      {
        id: "site-id",
        name: "网站名称",
        url: "https://example.com",
        icon: "https://example.com/favicon.ico"
      }
    ]
  }
];
```

## 添加搜索引擎

编辑 `src/types/search.ts` 文件来添加更多搜索引擎：

```typescript
export type SearchEngine = "baidu" | "google" | "github" | "your-engine";

export const searchEngineUrls: Record<SearchEngine, string> = {
  // ... 现有搜索引擎
  "your-engine": "https://your-search-engine.com/search?q="
};
```

然后在 `index.html` 中添加对应的按钮。

## 许可证

MIT License

## 贡献

欢迎提交 Issue 和 Pull Request！

