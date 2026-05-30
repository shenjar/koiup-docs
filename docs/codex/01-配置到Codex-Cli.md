# 1. 配置到 Codex CLI 中

## 适用范围

用于将 Codex CLI 接入兼容 OpenAI API 的第三方中转站、代理或网关。

开始前请确认你已获取：
- **API 密钥**：进入 [KoiUP 控制台](https://koiup.com/keys)，点击菜单 **API密钥**
- **API 端点**：进入 [KoiUP 控制台](https://koiup.com/keys)，点击菜单 **API密钥**

---

## macOS / Linux / WSL

### 当前终端临时生效

```bash
export OPENAI_BASE_URL="你的API端点"
export OPENAI_API_KEY="你的API密钥"
```

### 永久生效

将以下内容写入 `~/.zshrc`：

```bash
export OPENAI_BASE_URL="你的API端点"
export OPENAI_API_KEY="你的API密钥"
```

加载配置：

```bash
source ~/.zshrc
```

> 如果使用 bash（一般 Linux 或 WSL），请改写入 `~/.bash_profile` 或 `~/.bashrc`。

---

## Windows

### 当前终端临时生效（PowerShell）

```powershell
$env:OPENAI_BASE_URL="你的API端点"
$env:OPENAI_API_KEY="你的API密钥"
```

### 永久生效

在 Windows 环境变量中新增系统变量：

```
OPENAI_BASE_URL=你的API端点
OPENAI_API_KEY=你的API密钥
```
