module.exports = {
    title: 'Once° 一度',
    theme: 'reco',
    description:'Once I live, once I aim',
    // base:'/blog/',
    head:[
      ['link', { rel: 'icon', href: '/favicon.ico' }],
      ['meta', { name: 'theme-color', content: '#3eaf7c' }],
      ['link', { rel: 'manifest', href: '/manifest.json' }],
    ],
    themeConfig:{
      type:'blog',
      authorAvatar: '/avatar.jpg',
      logo: '/logo.jpg',
      author: '一度',
      sidebar: 'auto',
      sidebarDepth:3,
      valineConfig: {
        appId: 'bvN3KWqAgpLl13jibG4RMbFM-gzGzoHsz',// your appId
        appKey: 'YH74CiOC6QspPUOsbqSvakEP' // your appKey
      },
        // 博客配置
      blogConfig: {
        category: {
          location: 2,     // 在导航栏菜单中所占的位置，默认2
          text: 'Category' // 默认文案 “分类”
        },
        tag: {
          location: 3,     // 在导航栏菜单中所占的位置，默认3
          text: 'Tag'      // 默认文案 “标签”
        }
      },
      nav: [
          { text: "主页", link: "/" },
          { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
          { text: "项目", link: "/uniapp/" },
          { text: "随笔", link: "/article/" },
        ],
      // sidebar: {
          // '/frontend/css/':[
          //     ['','css'],
          // ],
          // '/frontend/javascript/':[
          //     ['','JavaScript'],
              
          // ],
      // },
      displayAllHeaders: true
    },
    plugins:[
        ["@vuepress/back-top"],
        ["@vuepress/nprogress"],
        ["@vuepress-reco/vuepress-plugin-bgm-player",{
          audios: [
            {
              name: 'Home~in this corner~',
              artist: 'Leina',
              url: '/assets/music/1.mp3',
              cover: '/assets/music/1.jpg'
            },
          ],
        }],
        ['@vuepress/pwa', {
            serviceWorker: true,
            updatePopup: true
          }]
    ]
}