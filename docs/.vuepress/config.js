const sidebar = require('../utils/autoSidebar')
console.log(sidebar);
module.exports = {
    // base: 'phonix',
    title: "Phonix's blog",
    description: "share everyday",
    markdown: {
        lineNumbers: true
    },

    themeConfig: {
        // 你的GitHub仓库，请正确填写
        repo: 'https://github.com/Kitaharakasusa',
        // 自定义仓库链接文字。
        repoLabel: 'My GitHub',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'blog', 
              items: [
                {text: 'JavaScript笔记', link: '/blog/javascript/'},
                {text: 'Vue笔记', link: '/blog/vue/'},
                {text: 'React笔记', link: '/blog/react/'},
                {text: 'Angular笔记', link: '/blog/angular/'},
                {text: '刷题算法笔记', link: '/blog/algorithm/'},
                {text: '其他学习', link: '/blog/other/'},
              ]
            },
            { text: 'External', link: 'https://google.com' },
          ],
        //   sidebar: [
        //     '/',
        //     '/page-a',
        //     ['/page-b', 'Explicit link text']
        //   ]
        sidebar:sidebar,
        sidebarDepth:2
    }
    
}