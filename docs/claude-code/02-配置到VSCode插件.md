# 2. 配置到 Visual Studio 的 Claude Code 插件中

## 适用范围

用于将 VSCode、Cursor 等 IDE 中的 Claude Code 插件接入兼容 Anthropic API 的第三方中转站、代理或网关。

开始前请确认你已获取：
- **API 密钥**：进入 [KoiUP 控制台](https://koiup.com/keys)，点击菜单 **API密钥**
- **API 端点**：进入 [KoiUP 控制台](https://koiup.com/keys)，点击菜单 **API密钥**

---

## macOS / Linux / WSL

### 写入配置文件 settings.json

文件路径：`~/.claude/settings.json`

```json
{
  "env": {
    "ANTHROPIC_BASE_URL": "你的API端点",
    "ANTHROPIC_AUTH_TOKEN": "你的API密钥",
    "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC": "1",
    "CLAUDE_CODE_ATTRIBUTION_HEADER": "0"
  }
}
```

---

## Windows

### 写入配置文件 settings.json

文件路径：`%userprofile%\.claude\settings.json`

```json
{
  "env": {
    "ANTHROPIC_BASE_URL": "你的API端点",
    "ANTHROPIC_AUTH_TOKEN": "你的API密钥",
    "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC": "1",
    "CLAUDE_CODE_ATTRIBUTION_HEADER": "0"
  }
}
```
