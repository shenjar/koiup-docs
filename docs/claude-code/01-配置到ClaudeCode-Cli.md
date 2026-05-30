# 1. 配置到 Claude Code CLI 中

## 适用范围

用于将 Claude Code CLI 接入兼容 Anthropic API 的第三方中转站、代理或网关。

开始前请确认你已获取：
- **API 密钥**：进入 [KoiUP 控制台](https://koiup.com/keys)，点击菜单 **API密钥**
- **API 端点**：进入 [KoiUP 控制台](https://koiup.com/keys)，点击菜单 **API密钥**

---

## macOS / Linux / WSL

### 当前终端临时生效

```bash
export ANTHROPIC_BASE_URL="你的API端点"
export ANTHROPIC_AUTH_TOKEN="你的API密钥"
export CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1
```

### 永久生效

将以下内容写入 `~/.zshrc`：

```bash
export ANTHROPIC_BASE_URL="你的API端点"
export ANTHROPIC_AUTH_TOKEN="你的API密钥"
export CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1
```

加载配置：

```bash
source ~/.zshrc
```

> 如果使用 bash（一般 Linux 或 WSL），请改写入 `~/.bash_profile` 或 `~/.bashrc`。

### 或者写入配置文件 settings.json

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

> 通过环境变量或配置文件 `settings.json` 任选其中一种方式即可。

---

## Windows

### 当前终端临时生效（PowerShell）

```powershell
$env:ANTHROPIC_BASE_URL="你的API端点"
$env:ANTHROPIC_AUTH_TOKEN="你的API密钥"
$env:CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1
```

### 永久生效

在 Windows 环境变量中新增系统变量：

```
ANTHROPIC_BASE_URL=你的API端点
ANTHROPIC_AUTH_TOKEN=你的API密钥
CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1
```

### 或者写入配置文件 settings.json

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

> 通过环境变量或配置文件 `settings.json` 任选其中一种方式即可。
