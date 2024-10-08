import { defineConfig, HeadConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  transformHead: ({ pageData }) => {
    const head: HeadConfig[] = []

    head.push(['meta', { property: 'og:title', content: pageData.frontmatter.title }])
    head.push(['meta', { property: 'og:description', content: pageData.frontmatter.description }])
    head.push(['meta', { property: 'og:image', content: pageData.frontmatter.image }])
    
    return head
  },
  title: "Shop Ecommerce Backend",
  description: "Con đường đi tới lập trình viên Backend",
  // header
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // 
    logo: "/logo.jpeg",
    // outline
    outline: {
      level: [2, 6],
      label: "label",
    },
    // docFooter
    docFooter: {
      prev: "bài trước",
      next: "bài iếp theo",
    },
    darkModeSwitchLabel: "sáng/tối",
    returnToTopLabel: "lên đầu",
    search: {
      provider: "local",
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2024-present Anonystick Golang",
    },
    lastUpdated: {
      text: "Cập nhật",
      formatOptions: {
          dateStyle: "full",
          timeStyle: "medium",
        },
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Go Backend', link: '/go-backend' },
      { text: 'Java Backend', link: '/java-backend' },
      { text: 'Nodejs Backend', link: '/nodejs-backend' }
    ],

    sidebar: {
      "/golang/": [
        {
          text: 'Golang Backend Ecommerce',
          items: [
            { text: 'Go 24: [User Login Interface] - Registration', link: '/golang/go-24' },
            { text: 'Go 25: [User Login Interface] - VerifyOTP', link: '/golang/go-25' },
            { text: 'Go 26: [User Login Interface] - Update Password Register', link: '/golang/go-26' },
            { text: 'Go 27: [User Login Interface] - Login and Token', link: '/golang/go-27' },
            // ... các mục khác
          ]
        }
      ],
      "/java/": [
        {
          text: 'Java Backend Ecommerce',
          items: [
            { text: 'Bài 1', link: '/java/bai1' },
            { text: 'Bài 2', link: '/java/bai2' },
            // ... các mục khác
          ]
        }
      ],
    },
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/anonystick' }
    ],
  }
})
