# 故障排除指南

## 问题：CLOUDFLARE_ACCOUNT_ID 报错但已配置

如果遇到 "CLOUDFLARE_ACCOUNT_ID 未配置" 错误，但你已经配置了 Secrets，请按以下步骤排查：

### 1. 确认 Secret 名称完全正确

**关键：Secret 名称必须完全一致，包括大小写！**

✅ 正确名称：
- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

❌ 错误示例：
- `CLOUDFLARE_Account_ID`（大小写错误）
- `cloudflare_account_id`（全小写）
- `CLOUDFLARE-ACCOUNT-ID`（使用连字符）
- `CLOUDFLARE_ACCOUNTID`（缺少下划线）

### 2. 确认配置位置正确

确保 Secrets 是在**仓库级别**配置的，而不是组织级别：

1. 访问：https://github.com/nianshu2022/newtab/settings/secrets/actions
2. 确保你看到的是 "Repository secrets" 部分
3. 不要配置在 "Environment secrets" 或 "Organization secrets" 中

### 3. 检查 Secret 值是否为空

1. 访问 Secrets 页面
2. 点击 `CLOUDFLARE_ACCOUNT_ID` 旁边的编辑按钮（铅笔图标）
3. 检查 Value 字段是否有内容
4. 如果为空，请重新填写并保存

### 4. 重新创建 Secret

如果仍然不行，尝试删除并重新创建：

1. 删除现有的 `CLOUDFLARE_ACCOUNT_ID` Secret
2. 点击 "New repository secret"
3. **仔细输入**名称：`CLOUDFLARE_ACCOUNT_ID`（直接复制这个名称）
4. 填入你的 Account ID
5. 保存

### 5. 确认 Account ID 格式

Cloudflare Account ID 通常是：
- 32 位十六进制字符串
- 格式类似：`abc123def45678901234567890123456`
- 不包含空格或特殊字符

获取位置：
- Cloudflare Dashboard 右侧栏
- 或访问：https://dash.cloudflare.com/（登录后在右侧栏查看）

### 6. 检查 GitHub Actions 权限

确保 GitHub Actions 已启用：

1. 访问：https://github.com/nianshu2022/newtab/settings/actions
2. 在 "Actions permissions" 部分
3. 选择 "Allow all actions and reusable workflows"
4. 或至少允许 GitHub Actions 访问仓库

### 7. 清除缓存并重新运行

1. 访问：https://github.com/nianshu2022/newtab/actions
2. 找到失败的运行
3. 点击 "..." → "Delete workflow run"（可选）
4. 推送一个新的提交来触发新的运行：
   ```bash
   git commit --allow-empty -m "测试 Secrets 配置"
   git push
   ```

### 8. 验证 Secret 是否真的存在

在 GitHub 仓库页面：

1. 访问：https://github.com/nianshu2022/newtab/settings/secrets/actions
2. 你应该能看到两个 Secrets：
   - ✅ `CLOUDFLARE_API_TOKEN`（带有更新图标）
   - ✅ `CLOUDFLARE_ACCOUNT_ID`（带有更新图标）
3. 如果只看到一个，说明另一个未配置
4. 如果都看不到，说明都未配置

### 9. 常见错误对照表

| 错误信息 | 可能原因 | 解决方法 |
|---------|---------|---------|
| Secret 名称不存在 | 名称拼写错误 | 检查大小写，完全匹配 |
| Secret 值为空 | 创建时未填写值 | 重新编辑并填写值 |
| Secret 在组织级别 | 配置位置错误 | 在仓库级别配置 |
| Actions 未启用 | GitHub Actions 被禁用 | 启用 GitHub Actions |

### 10. 获取帮助

如果以上方法都不行，请检查：

1. **GitHub Actions 日志**：
   - 查看完整的错误信息
   - 检查 "Check Secrets" 步骤的输出

2. **Secret 权限**：
   - 确认你有仓库的管理员权限
   - 只有仓库管理员才能配置 Secrets

3. **Cloudflare 账号**：
   - 确认 API Token 有效
   - 确认 Account ID 正确

## 快速检查清单

- [ ] Secret 名称：`CLOUDFLARE_ACCOUNT_ID`（完全一致）
- [ ] Secret 已配置在仓库级别（不是组织级别）
- [ ] Secret 值不为空
- [ ] Account ID 格式正确（32 位十六进制）
- [ ] GitHub Actions 已启用
- [ ] 重新运行了工作流

完成以上检查后，重新推送代码触发部署。

