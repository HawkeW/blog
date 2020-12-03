module.exports = {
    title: 'Once° 一度', //博客标题，浏览器标签显示的内容
    theme: 'reco',
    description:'Once I live, once I aim',
    base:'/blog/',
    head:[
      ['link', { rel: 'icon', href: '/favicon.ico' }],//浏览器标签上显示的icon
      ['meta', { name: 'theme-color', content: '#3eaf7c' }],//主题颜色
      ['link', { rel: 'manifest', href: '/manifest.json' }],
    ],
    themeConfig:{
      type:'blog',
      authorAvatar: '/avatar.jpg',//博客作者的头像
      logo: '/logo.jpg',//博客logo
      author: '一度',//博客作者
      sidebar: 'auto',//自动生成文章的侧边栏
      sidebarDepth:3,//侧边栏生成到H3标题
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
        ["@vuepress-reco/vuepress-plugin-bgm-player",{//音乐播放插件
          audios: [//每一个中括号就是一个音乐对象
            {
              name: 'Home~in this corner~',//该音乐的名称
              artist: 'Leina',//该音乐的作者
              url: '/assets/music/1.mp3',//该音乐的地址，当前为/blog/.vuepress/public/assets/music/1.mp3
              cover: '/assets/music/1.jpg'//该音乐的图片
            },
          ],
        }],
        ['@vuepress/pwa', {
            serviceWorker: true,
            updatePopup: true
          }]
    ]
}