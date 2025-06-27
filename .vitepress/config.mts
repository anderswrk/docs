
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
          { text: 'Getting Started', link: '/getting-started/' },
          { text: 'Examples', link: '/examples/' }
        ],
        sidebar: [
          {
            text: 'Introduction',
            items: [
              { text: 'What is Kliv?', link: '/introduction/what-is-kliv' },
              { text: 'Getting Started', link: '/getting-started/' }
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
          { text: 'はじめに', link: '/ja/getting-started/' },
          { text: '例', link: '/ja/examples/' }
        ],
        sidebar: [
          {
            text: '紹介',
            items: [
              { text: 'Klivとは？', link: '/ja/introduction/what-is-kliv' },
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
          { text: 'Kom igång', link: '/sv/getting-started/' },
          { text: 'Exempel', link: '/sv/examples/' }
        ],
        sidebar: [
          {
            text: 'Introduktion',
            items: [
              { text: 'Vad är Kliv?', link: '/sv/introduction/what-is-kliv' },
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
