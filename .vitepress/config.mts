import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Kliv Documentation",
  description: "Official documentation for Kliv - AI-powered web development platform",
  
  // Output to project root dist directory
  outDir: './dist',
  
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Getting Started', link: '/getting-started/' },
          { text: 'Templates', link: '/templates/app-store' },
          { text: 'Publishing', link: '/publishing/basics' },
          { text: 'Back to Kliv', link: 'https://kliv.dev' }
        ]
      }
    },
    ja: {
      label: '日本語',
      lang: 'ja',
      link: '/ja/',
      themeConfig: {
        nav: [
          { text: 'ホーム', link: '/ja/' },
          { text: 'はじめに', link: '/ja/getting-started/' },
          { text: 'テンプレート', link: '/ja/templates/app-store' },
          { text: '公開', link: '/ja/publishing/basics' },
          { text: 'Klivに戻る', link: 'https://kliv.dev' }
        ]
      }
    },
    sv: {
      label: 'Svenska', 
      lang: 'sv',
      link: '/sv/',
      themeConfig: {
        nav: [
          { text: 'Hem', link: '/sv/' },
          { text: 'Kom igång', link: '/sv/getting-started/' },
          { text: 'Mallar', link: '/sv/templates/app-store' },
          { text: 'Publicering', link: '/sv/publishing/basics' },
          { text: 'Tillbaka till Kliv', link: 'https://kliv.dev' }
        ]
      }
    }
  },

  themeConfig: {
    search: {
      provider: 'local'
    },

    sidebar: {
      '/': [
        {
          text: 'Welcome',
          items: [
            { text: 'What is Kliv?', link: '/welcome/what-is-kliv' },
            { text: 'Quick Start', link: '/welcome/quick-start' }
          ]
        },
        {
          text: 'Getting Started',
          items: [
            { text: 'Creating an Account', link: '/getting-started/creating-account' },
            { text: 'Your First Website', link: '/getting-started/first-website' },
            { text: 'Understanding Credits', link: '/getting-started/credits' }
          ]
        },
        {
          text: 'Cloud',
          items: [
            { text: 'Overview', link: '/cloud/' },
            { text: 'Database', link: '/cloud/database' },
            { text: 'Secrets', link: '/cloud/secrets' },
            { text: 'Edge Functions', link: '/cloud/functions' },
            { text: 'Email Delivery', link: '/cloud/email-delivery' },
            { text: 'Email Templates', link: '/cloud/email-templates' },
            { text: 'Admin Interface', link: '/cloud/admin' }
          ]
        },
        {
          text: 'Templates',
          items: [
            { text: 'App Store', link: '/templates/app-store' },
            { text: 'Building from Scratch', link: '/templates/from-scratch' }
          ]
        },
        {
          text: 'Publishing',
          items: [
            { text: 'Publishing Basics', link: '/publishing/basics' },
            { text: 'Custom Domains', link: '/publishing/custom-domains' }
          ]
        },
        {
          text: 'Integrations',
          items: [
            { text: 'GitHub', link: '/collaboration/github' }
          ]
        },
        {
          text: 'Account Management',
          items: [
            { text: 'User Management', link: '/collaboration/user-management' },
            { text: 'Security', link: '/account/security' },
            { text: 'Billing', link: '/account/billing' }
          ]
        },
        {
          text: 'Help & Support',
          items: [
            { text: 'FAQ', link: '/help/faq' },
            { text: 'Getting Help', link: '/help/getting-help' }
          ]
        }
      ],
      '/ja/': [
        {
          text: 'ようこそ',
          items: [
            { text: 'Klivとは？', link: '/ja/welcome/what-is-kliv' },
            { text: 'クイックスタート', link: '/ja/welcome/quick-start' }
          ]
        },
        {
          text: 'はじめに',
          items: [
            { text: 'アカウント作成', link: '/ja/getting-started/creating-account' },
            { text: '初めてのウェブサイト', link: '/ja/getting-started/first-website' },
            { text: 'クレジット制について', link: '/ja/getting-started/credits' }
          ]
        },
        {
          text: 'クラウド',
          items: [
            { text: '概要', link: '/ja/cloud/' },
            { text: 'データベース', link: '/ja/cloud/database' },
            { text: 'シークレット管理', link: '/ja/cloud/secrets' },
            { text: 'エッジ関数', link: '/ja/cloud/functions' },
            { text: 'メール配信', link: '/ja/cloud/email-delivery' },
            { text: 'メールテンプレート', link: '/ja/cloud/email-templates' },
            { text: '管理インターフェース', link: '/ja/cloud/admin' }
          ]
        },
        {
          text: 'テンプレート',
          items: [
            { text: 'アプリストア', link: '/ja/templates/app-store' },
            { text: 'ゼロから構築', link: '/ja/templates/from-scratch' }
          ]
        },
        {
          text: '公開',
          items: [
            { text: '公開の基本', link: '/ja/publishing/basics' },
            { text: 'カスタムドメイン', link: '/ja/publishing/custom-domains' }
          ]
        },
        {
          text: '連携機能',
          items: [
            { text: 'GitHub', link: '/ja/collaboration/github' }
          ]
        },
        {
          text: 'アカウント管理',
          items: [
            { text: 'ユーザー管理', link: '/ja/collaboration/user-management' },
            { text: 'セキュリティ', link: '/ja/account/security' },
            { text: '料金・請求', link: '/ja/account/billing' }
          ]
        },
        {
          text: 'ヘルプ・サポート',
          items: [
            { text: 'よくある質問', link: '/ja/help/faq' },
            { text: 'ヘルプの利用方法', link: '/ja/help/getting-help' }
          ]
        }
      ],
      '/sv/': [
        {
          text: 'Välkommen',
          items: [
            { text: 'Vad är Kliv?', link: '/sv/welcome/what-is-kliv' },
            { text: 'Snabbstart', link: '/sv/welcome/quick-start' }
          ]
        },
        {
          text: 'Kom igång',
          items: [
            { text: 'Skapa konto', link: '/sv/getting-started/creating-account' },
            { text: 'Din första webbplats', link: '/sv/getting-started/first-website' },
            { text: 'Förstå krediter', link: '/sv/getting-started/credits' }
          ]
        },
        {
          text: 'Moln',
          items: [
            { text: 'Översikt', link: '/sv/cloud/' },
            { text: 'Databas', link: '/sv/cloud/database' },
            { text: 'Hemlighetshantering', link: '/sv/cloud/secrets' },
            { text: 'Edge Functions', link: '/sv/cloud/functions' },
            { text: 'E-postleverans', link: '/sv/cloud/email-delivery' },
            { text: 'E-postmallar', link: '/sv/cloud/email-templates' },
            { text: 'Administrationsgränssnitt', link: '/sv/cloud/admin' }
          ]
        },
        {
          text: 'Mallar',
          items: [
            { text: 'App Store', link: '/sv/templates/app-store' },
            { text: 'Bygga från grunden', link: '/sv/templates/from-scratch' }
          ]
        },
        {
          text: 'Publicering',
          items: [
            { text: 'Grundläggande publicering', link: '/sv/publishing/basics' },
            { text: 'Anpassade domäner', link: '/sv/publishing/custom-domains' }
          ]
        },
        {
          text: 'Integrationer',
          items: [
            { text: 'GitHub', link: '/sv/collaboration/github' }
          ]
        },
        {
          text: 'Kontohantering',
          items: [
            { text: 'Användarhantering', link: '/sv/collaboration/user-management' },
            { text: 'Säkerhet', link: '/sv/account/security' },
            { text: 'Fakturering', link: '/sv/account/billing' }
          ]
        },
        {
          text: 'Hjälp & Support',
          items: [
            { text: 'FAQ', link: '/sv/help/faq' },
            { text: 'Få hjälp', link: '/sv/help/getting-help' }
          ]
        }
      ]
    },

    socialLinks: [
    ],

    footer: {
      message: 'Built by Kliv with VitePress'
    }
  }
})