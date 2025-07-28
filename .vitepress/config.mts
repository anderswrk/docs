import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Kliv Documentation",
  description: "The complete guide to building web applications with Kliv AI",
  cleanUrls: true,
  lastUpdated: false,
  ignoreDeadLinks: true,
  outDir: 'dist',
  
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      title: 'Kliv Documentation',
      description: 'The complete guide to building web applications with Kliv AI',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Welcome', link: '/welcome/' },
          { text: 'Getting Started', link: '/getting-started/' },
          { text: 'Help', link: '/help/' }
        ],
        sidebar: [
          {
            text: '1. Welcome to Kliv',
            collapsed: false,
            items: [
              { text: 'What is Kliv?', link: '/welcome/what-is-kliv' },
              { text: 'Quick Start Guide', link: '/welcome/quick-start' }
            ]
          },
          {
            text: '2. Getting Started',
            collapsed: false,
            items: [
              { text: 'Creating Your Account', link: '/getting-started/creating-account' },
              { text: 'Your First Website', link: '/getting-started/first-website' },
              { text: 'Understanding Credits', link: '/getting-started/credits' }
            ]
          },
          {
            text: '3. Building with AI',
            collapsed: true,
            items: [
              { text: 'Working with the AI Assistant', link: '/building/ai-assistant' },
              { text: 'Common Website Features', link: '/building/common-features' },
              { text: 'Advanced AI Features', link: '/building/advanced-features' }
            ]
          },
          {
            text: '4. Templates & Customization',
            collapsed: true,
            items: [
              { text: 'Using App Store Templates', link: '/templates/app-store' },
              { text: 'Starting from Scratch', link: '/templates/from-scratch' }
            ]
          },
          {
            text: '5. Publishing Your Website',
            collapsed: true,
            items: [
              { text: 'Publishing Basics', link: '/publishing/basics' },
              { text: 'Custom Domains (Pro)', link: '/publishing/custom-domains' }
            ]
          },
          {
            text: '6. Backend Features',
            collapsed: true,
            items: [
              { text: 'Database Integration with Supabase', link: '/backend/supabase' },
              { text: 'Real-time Features', link: '/backend/realtime' }
            ]
          },
          {
            text: '7. Team Collaboration',
            collapsed: true,
            items: [
              { text: 'User Management', link: '/collaboration/user-management' },
              { text: 'Version Control with GitHub', link: '/collaboration/github' }
            ]
          },
          {
            text: '8. Account & Security',
            collapsed: true,
            items: [
              { text: 'Security Options', link: '/account/security' },
              { text: 'Billing & Subscriptions', link: '/account/billing' },
              { text: 'Account Settings', link: '/account/settings' }
            ]
          },
          {
            text: '9. Advanced Topics',
            collapsed: true,
            items: [
              { text: 'Performance Optimization', link: '/advanced/performance' },
              { text: 'E-commerce Features', link: '/advanced/ecommerce' },
              { text: 'Custom Development', link: '/advanced/custom-development' }
            ]
          },
          {
            text: '10. Help & Support',
            collapsed: true,
            items: [
              { text: 'Troubleshooting', link: '/help/troubleshooting' },
              { text: 'Getting Help', link: '/help/getting-help' }
            ]
          }
        ],
        footer: {
          message: 'Built with Kliv and VitePress',
          copyright: 'Copyright © 2025 Kliv'
        }
      }
    },
    ja: {
      label: '日本語',
      lang: 'ja',
      title: 'Kliv ドキュメント',
      description: 'Kliv AIでWebアプリケーションを構築するための完全ガイド',
      themeConfig: {
        nav: [
          { text: 'ホーム', link: '/ja/' },
          { text: 'はじめに', link: '/ja/getting-started/' }
        ],
        sidebar: [
          {
            text: 'ドキュメント（準備中）',
            items: [
              { text: 'はじめに', link: '/ja/getting-started/' }
            ]
          }
        ],
        footer: {
          message: 'KlivとVitePressで構築',
          copyright: 'Copyright © 2025 Kliv'
        }
      }
    },
    sv: {
      label: 'Svenska',
      lang: 'sv',
      title: 'Kliv Dokumentation',
      description: 'Den kompletta guiden för att bygga webbapplikationer med Kliv AI',
      themeConfig: {
        nav: [
          { text: 'Hem', link: '/sv/' },
          { text: 'Kom igång', link: '/sv/getting-started/' }
        ],
        sidebar: [
          {
            text: 'Dokumentation (kommer snart)',
            items: [
              { text: 'Kom igång', link: '/sv/getting-started/' }
            ]
          }
        ],
        footer: {
          message: 'Byggd med Kliv och VitePress',
          copyright: 'Copyright © 2025 Kliv'
        }
      }
    }
  },

  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/kliv-dev' }
    ],
    search: {
      provider: 'local'
    }
  },

  head: [
    ['meta', { name: 'theme-color', content: '#9b87f5' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'en' }],
    ['meta', { name: 'og:title', content: 'Kliv Documentation' }],
    ['meta', { name: 'og:description', content: 'The complete guide to building web applications with Kliv AI' }]
  ]
})