// vitepress/config.js
module.exports = {
    title: "我的博客",// 网站标题
    description: '我的vitepress博客.', //网站描述
    base: '/', //  部署时的路径 默认 /  可以使用二级地址 /base/
    lang: 'zh-CN', //语言
    // 主题配置
    themeConfig: {
        // 你的 github 仓库地址，网页的右上角会跳转
        repo: 'https://github.com/yangxj96/yangxj96.github.io',
        //头部导航
        nav: [
            {text: '首页', link: '/'},
            {text: '关于', link: '/about/'},
        ],
        //   侧边导航
        sidebar: [
            {text: '我的', link: '/mine/'}
        ]
    }
}
