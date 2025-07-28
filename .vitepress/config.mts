import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Kliv Documentation",
  description: "Official documentation for Kliv - AI-powered web development platform",
  
  // Output to project root dist directory
  outDir: './dist',
  
  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    ja: {
      label: '日本語',
      lang: 'ja',
      link: '/ja/'
    },
    sv: {
      label: 'Svenska', 
      lang: 'sv',
      link: '/sv/'
    }
  },

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started/' },
      { text: 'Building', link: '/building/ai-assistant' },
      { text: 'Publishing', link: '/publishing/basics' }
    ],

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
            { text: 'Overview', link: '/getting-started/' },
            { text: 'Creating an Account', link: '/getting-started/creating-account' },
            { text: 'Your First Website', link: '/getting-started/first-website' },
            { text: 'Understanding Credits', link: '/getting-started/credits' }
          ]
        },
        {
          text: 'Building with Kliv',
          items: [
            { text: 'AI Assistant', link: '/building/ai-assistant' },
            { text: 'Common Features', link: '/building/common-features' },
            { text: 'Advanced Features', link: '/building/advanced-features' }
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
          text: 'Backend Integration',
          items: [
            { text: 'Supabase Integration', link: '/backend/supabase' },
            { text: 'Real-time Features', link: '/backend/realtime' }
          ]
        },
        {
          text: 'Collaboration',
          items: [
            { text: 'User Management', link: '/collaboration/user-management' },
            { text: 'GitHub Integration', link: '/collaboration/github' }
          ]
        },
        {
          text: 'Account Management',
          items: [
            { text: 'Security', link: '/account/security' },
            { text: 'Billing', link: '/account/billing' },
            { text: 'Settings', link: '/account/settings' }
          ]
        },
        {
          text: 'Advanced Topics',
          items: [
            { text: 'Performance Optimization', link: '/advanced/performance' },
            { text: 'E-commerce Features', link: '/advanced/ecommerce' },
            { text: 'Custom Development', link: '/advanced/custom-development' }
          ]
        },
        {
          text: 'Help & Support',
          items: [
            { text: 'FAQ', link: '/help/faq' },
            { text: 'Troubleshooting', link: '/help/troubleshooting' },
            { text: 'Getting Help', link: '/help/getting-help' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kliv-dev' }
    ],

    footer: {
      message: 'Built with VitePress',
      copyright: 'Copyright © 2024 Kliv'
    }
  }
})