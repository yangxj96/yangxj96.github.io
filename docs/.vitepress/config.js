export default {
    title: '道一',
    description: 'Just playing around.',
    themeConfig: {
        logo:'/images/logo.png',
        siteTitle: '道一的个人博客',
        // 侧边栏
        sidebar: [
            {
                text: '栏目1',
                items: [
                    {text: '侧边栏1', link: '/index'},
                    {text: '侧边栏2', link: '/getting-started'}
                ]
            }
        ],
        // 标题栏
        nav: [
            { text: 'Guide', link: '/guide' },
            {
                text: 'Dropdown Menu',
                items: [
                    { text: 'Item A', link: '/item-1' },
                    { text: 'Item B', link: '/item-2' },
                    { text: 'Item C', link: '/item-3' }
                ]
            },
            { text: 'Changelog', link: 'https://github.com/...' }
        ]
    }
}
