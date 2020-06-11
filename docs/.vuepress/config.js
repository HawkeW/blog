module.exports = {
    theme: '@vuepress/blog',
    title: '一度的博客',
    description: '前端学习与技术分享',
    base:'/blog/',
    head:[
      ['link', { rel: 'icon', href: '/logo.png' }],
      ['meta', { name: 'theme-color', content: '#3eaf7c' }],
      ['link', { rel: 'manifest', href: '/manifest.json' }],
    ],
    themeConfig:{
        nav: [
            { text: "主页", link: "/" },
            { text: "前端", link: "/web/" },
            { text: "uniapp", link: "/uniapp/" },
            { text: "随笔", link: "/article/" },
          ],
        sidebar: {
            "/web/":[
                ["","前端"],
                {
                    title:"css",
                    name:"css",
                    path:'/web/css/',
                    collapsable: true,
                    sidebarDepth:0,
                    children:[
                        "css/1",
                    ]
                }
            ],
        
        },
        displayAllHeaders: true
    },
    plugins:[
        ["@vuepress/back-top"],
        ["@vuepress/nprogress"],
        ['@vuepress/pwa', {
            serviceWorker: true,
            updatePopup: true
          }]
    ]
}