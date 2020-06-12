module.exports = {
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
            { text: "前端", 
            items:[
                { text: 'CSS', link: '/frontend/css/' },
                { text: 'JavaScript', link: '/frontend/javascript/' }
              ],
            },
            { text: "uniapp", link: "/uniapp/" },
            { text: "随笔", link: "/article/" },
          ],
        sidebar: {
            '/frontend/css/':[
                ['','css'],
            ],
            '/frontend/javascript/':[
                ['','JavaScript'],
                
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