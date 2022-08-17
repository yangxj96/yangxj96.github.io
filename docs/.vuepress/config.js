module.exports = {
    title: '道一的个人博客',
    description: '道可道,非常道也.名可名,非常名也.',
    head: [
        ['link', {rel: 'icon', href: '/public/logo.png'}]
    ],
    plugins: ['@vuepress/back-to-top', '@vuepress/search'],
    markdown: {
        // 是否在每个代码块的左侧显示行号。
        lineNumbers: true
    }
}
