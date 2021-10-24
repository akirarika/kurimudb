module.exports = {
  title: 'Kurimudb',
  head: [['link', { rel: 'icon', href: 'favicon.png' }]],
  markdown: {
    lineNumbers: true,
  },
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Kurimudb',
      description: 'Just playing around.',
    },
    '/en/': {
      lang: 'en-US',
      title: 'Kurimudb',
      description: 'Just playing around.',
    },
  },
  themeConfig: {
    locales: {
      '/': {
        selectText: '选择语言',
        label: '简体中文',
        nav: [
          {
            text: '更新日志',
            link: 'https://github.com/akirarika/kurimudb/releases',
          },
          { text: 'Github', link: 'https://github.com/akirarika/kurimudb' },
        ],
        sidebar: [
          {
            text: '文档',
            children: [
              { text: '入门', link: '/docs/intro/' },
              { text: '模型', link: '/docs/model/' },
              { text: '持久化', link: '/docs/persistence/' },
              { text: '订阅变更', link: '/docs/subscribe/' },
              { text: 'TypeScript', link: '/docs/typescript/' },
            ],
          },
          {
            text: '驱动',
            children: [
              {
                text: '浏览器驱动',
                children: [
                  { text: 'LocalStorage', link: '/drivers/localstorage' },
                  { text: 'Cookie', link: '/drivers/cookie' },
                  { text: 'Dexie (IndexedDB)', link: '/drivers/dexie' },
                ],
              },
              {
                text: '其他驱动',
                children: [{ text: 'Taro', link: '/drivers/taro' }],
              },
              { text: '自定义驱动', link: '/drivers/custom-driver' },
            ],
          },
          {
            text: '迁移',
            children: [{ text: '从 v3 迁移', link: '/migrations/v3' }],
          },
          { text: '最佳实践', link: '/bestPractices/' },
        ],
      },
      '/en/': {
        selectText: 'Languages',
        label: 'English',
        nav: [
          {
            text: 'Changelog',
            link: 'https://github.com/akirarika/kurimudb/releases',
          },
          { text: 'Github', link: 'https://github.com/akirarika/kurimudb' },
        ],
        sidebar: [
          {
            text: 'Documents',
            children: [
              { text: 'Getting Started', link: 'en/intro' },
              { text: 'Model', link: 'en/model' },
              { text: 'Persistence', link: 'en/persistence' },
              {
                text: 'Driver',
                children: [
                  { text: 'LocalStorage', link: '/drivers/localstorage' },
                  { text: 'Cookie', link: '/drivers/cookie' },
                  { text: 'Dexie (IndexedDB)', link: '/drivers/dexie' },
                  { text: 'Customized Driver', link: '/drivers/custom-driver' },
                ],
              },
              { text: 'Subscription Changes', link: 'en/subscribe' },
              { text: 'TypeScript', link: 'en/typescript' },
            ],
          },
          { text: 'Great Practices', link: 'en/bestPractices' },
          { text: 'Model Maker', link: 'en/modelCodeMaker' },
        ],
      },
    },
    search: true,
    author: 'akirarika',
  },
};
