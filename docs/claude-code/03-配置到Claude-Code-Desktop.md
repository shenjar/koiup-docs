# 3. 配置到 Claude Code Desktop 中

## 适用范围

用于将 Claude Desktop 接入兼容 Anthropic API 的第三方中转站、代理或网关。

> Claude Desktop 需要 **V1.3883.0** 及之后的新版本。

开始前请确认你已获取：
- **API 密钥**：进入 [KoiUP 控制台](https://koiup.com/keys)，点击菜单 **API密钥**
- **API 端点**：进入 [KoiUP 控制台](https://koiup.com/keys)，点击菜单 **API密钥**

---

## 步骤 1：打开 Claude Desktop 并启用开发者模式

1. 打开 Claude Desktop，先不要登录官方账号。
2. 如果当前界面不好直接点菜单，可以按键盘 `Tab` 切到左上角菜单区域，再按回车打开菜单。
3. 在顶部菜单栏选择 **Help（帮助）** → **Troubleshooting（疑难解答）**。
4. 在弹出的子菜单里点击 **Enable Developer Mode（启用开发者模式）**。

## 步骤 2：进入第三方 API 配置页面

1. 点击新出现的 **Developer** 菜单。
2. 选择 **Configure Third-Party Inference…（配置第三方推理…）**。

## 步骤 3：填写 Base URL 和 API Key

在配置页面中填入：
- **Base URL**：你的 API 端点（从 [KoiUP 控制台](https://koiup.com/keys) 获取）
- **API Key**：你的 API 密钥（从 [KoiUP 控制台](https://koiup.com/keys) 获取）

## 步骤 4：验证是否成功

1. 配置完成后，Claude Desktop 可能会提示重启；如果没有提示，也建议手动完全退出后重新打开。
2. 重新打开后，进入 Cowork、Code 或 Projects 相关页面。
3. 输入一个简单问题测试。
4. 如果模型能正常响应，或者界面中显示的是你第三方 API 提供的模型，就说明配置成功。
