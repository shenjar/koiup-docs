import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'KoiUP 帮助文档',
  description: 'KoiUP API 服务使用文档',
  lang: 'zh-CN',
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '控制台', link: 'https://koiup.com' }
    ],
    sidebar: [
      {
        text: '快速开始',
        items: [
          { text: '如何使用 API 服务', link: '/01-如何使用API服务' },
          { text: '如何计费', link: '/02-如何计费' },
        ]
      },
      {
        text: 'Claude Code 帮助文档',
        collapsed: false,
        items: [
          { text: '1. 配置到 ClaudeCode CLI', link: '/claude-code/01-配置到ClaudeCode-Cli' },
          { text: '2. 配置到 VSCode 插件', link: '/claude-code/02-配置到VSCode插件' },
          { text: '3. 配置到 Claude Desktop', link: '/claude-code/03-配置到Claude-Code-Desktop' },
          { text: '4. 配置到 Cherry Studio', link: '/claude-code/04-配置到Cherry-Studio' },
        ]
      },
      {
        text: 'Codex 帮助文档',
        collapsed: false,
        items: [
          { text: '1. 配置到 Codex CLI', link: '/codex/01-配置到Codex-Cli' },
          { text: '2. 配置到 VSCode 插件', link: '/codex/02-配置到VSCode插件' },
          { text: '3. 配置到 Codex Desktop', link: '/codex/03-配置到Codex-Desktop' },
          { text: '4. 配置到 Cherry Studio', link: '/codex/04-配置到Cherry-Studio' },
        ]
      },
      {
        text: '常见问题',
        items: [
          { text: '常见问题', link: '/faq/常见问题' },
          { text: '常见报错', link: '/faq/常见报错' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ],
    footer: {
      message: '如有问题请联系 support@koiup.com',
      copyright: 'Copyright © 2025 KoiUP'
    },
    search: {
      provider: 'local'
    },
    outline: {
      label: '本页目录'
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    lastUpdated: {
      text: '最后更新'
    }
  }
})
