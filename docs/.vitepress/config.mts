import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Thinking in Types",
  description: "Building Stubbornly Resilient Libraries in Python",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Chapters',
        items: [
          { text: 'Preface', link: '/01 Preface' },
          { text: 'Introduction', link: '/02 Introduction' },
          { text: 'Basic Annotations', link: '/03 Basic Annotations' },
          { text: 'Collections And Generics', link: '/04 Collections And Generics' },
          { text: 'Dataclasses And Typed Classes', link: '/05 Dataclasses And Typed Classes' },
          { text: 'Callable Types And Annotations', link: '/06 Callable Types And Annotations' },
          { text: 'Type Checking Tools And Techniques', link: '/07 Type Checking Tools And Techniques' },
          { text: 'Structural Typing', link: '/08 Structural Typing' },
          { text: 'Make Illegal Types Unrepresentable', link: '/09 Make Illegal Types Unrepresentable' },
          { text: 'Errors As Values', link: '/10 Errors As Values' },
          { text: 'Advanced Typing Concepts', link: '/11 Advanced Typing Concepts' },
          { text: 'Pattern Matching And Typing', link: '/12 Pattern Matching And Typing' },
          { text: 'Typing And Async Programming', link: '/13 Typing And Async Programming' },
          { text: 'Interoperability And Typing Stubs', link: '/14 Interoperability And Typing Stubs' },
          { text: 'Best Practices Patterns And AntiPatterns', link: '/15 Best Practices Patterns And AntiPatterns' },
          { text: 'Appendices', link: '/Appendices' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
