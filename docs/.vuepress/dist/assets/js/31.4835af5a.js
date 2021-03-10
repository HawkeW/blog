(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{524:function(t,e,s){"use strict";s.r(e);var v=s(6),a=Object(v.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"前置环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前置环境"}},[t._v("#")]),t._v(" 前置环境")]),t._v(" "),s("h3",{attrs:{id:"node和npm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node和npm"}},[t._v("#")]),t._v(" Node和npm")]),t._v(" "),s("p",[t._v("检查是否安装"),s("code",[t._v("npm")]),t._v("和"),s("code",[t._v("node")]),t._v("。打开"),s("code",[t._v("cmd")]),t._v("输入"),s("code",[t._v("node -v")]),t._v("和"),s("code",[t._v("npm -v")]),t._v("有返回值则已安装。")]),t._v(" "),s("p",[t._v("没有安装，可以点击进入"),s("a",{attrs:{href:"https://npm.taobao.org/mirrors/node/v14.5.0/",target:"_blank",rel:"noopener noreferrer"}},[t._v("淘宝镜像"),s("OutboundLink")],1),t._v("安装最新版本，它在国内的访问速度比较快。注意选择对应的系统，如windows 64为则"),s("code",[t._v("win-x64")]),t._v("--\x3e"),s("code",[t._v("node.exe")]),t._v("。")]),t._v(" "),s("p",[t._v("安装完成后重新键入"),s("code",[t._v("node -v")]),t._v("和"),s("code",[t._v("npm -v")]),t._v("测试")]),t._v(" "),s("h3",{attrs:{id:"git"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[t._v("#")]),t._v(" Git")]),t._v(" "),s("p",[t._v("在桌面右键，看看是否有git bash等提示。如果没有则安装。windows可以在这里安装："),s("a",{attrs:{href:"https://npm.taobao.org/mirrors/git-for-windows/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git-for windows"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"visual-studio-code"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#visual-studio-code"}},[t._v("#")]),t._v(" Visual Studio Code")]),t._v(" "),s("p",[s("code",[t._v("Visual Studio")]),t._v("是微软的代码编辑器，可以用来修改博客中的代码，也支持预览"),s("code",[t._v("markdown")]),t._v("文本。同时有丰富的插件可以使用，如"),s("code",[t._v("汉化")]),t._v("等")]),t._v(" "),s("p",[t._v("官方下载地址：https://visualstudio.microsoft.com/zh-hans/thank-you-downloading-visual-studio/?sku=Community&rel=16")]),t._v(" "),s("h3",{attrs:{id:"typora"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#typora"}},[t._v("#")]),t._v(" typora")]),t._v(" "),s("p",[t._v("虽然visual studio可以预览markdown文本，但是个人觉得实际使用体验应该还是typora为佳。可以去官方下载：https://typora.io/")]),t._v(" "),s("h3",{attrs:{id:"其他下载方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他下载方式"}},[t._v("#")]),t._v(" 其他下载方式")]),t._v(" "),s("p",[t._v("如果官方下载比较慢，你也可以在腾讯安全管家等的软件管理下载到这些软件：")]),t._v(" "),s("ul",[s("li",[t._v("node.js")]),t._v(" "),s("li",[t._v("Git")]),t._v(" "),s("li",[t._v("Visual Studio Code")]),t._v(" "),s("li",[t._v("typora")])]),t._v(" "),s("h2",{attrs:{id:"克隆代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#克隆代码"}},[t._v("#")]),t._v(" 克隆代码")]),t._v(" "),s("h3",{attrs:{id:"创建gitee仓库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建gitee仓库"}},[t._v("#")]),t._v(" 创建"),s("code",[t._v("Gitee")]),t._v("仓库")]),t._v(" "),s("p",[t._v("在你的gitee账号，创建一个仓库。命名为："),s("code",[t._v("blog")]),t._v("（这里可以随意命名）。")]),t._v(" "),s("h3",{attrs:{id:"fork仓库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fork仓库"}},[t._v("#")]),t._v(" "),s("code",[t._v("fork")]),t._v("仓库")]),t._v(" "),s("p",[t._v("然后打开"),s("a",{attrs:{href:"https://gitee.com/onceonce/blog",target:"_blank",rel:"noopener noreferrer"}},[t._v("进入我的blog仓库"),s("OutboundLink")],1),t._v("点击"),s("code",[t._v("fork")]),t._v("，这一步操作会把我的代码复制到你的"),s("code",[t._v("blog")]),t._v("仓库中")]),t._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/09-create-use-blog/01-onceonce-blog.png",alt:"Gitee，一度的blog仓库"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/09-create-use-blog/01-onceonce-blog-fork.png",alt:"Gitee，fork一度的blog仓库"}})]),t._v(" "),s("h3",{attrs:{id:"clone代码到本地"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clone代码到本地"}},[t._v("#")]),t._v(" clone代码到本地")]),t._v(" "),s("p",[s("code",[t._v("fork")]),t._v("仓库到你的账号之后，你就拥有这个仓库了。")]),t._v(" "),s("p",[s("strong",[t._v("仓库地址")])]),t._v(" "),s("ul",[s("li",[t._v("一般为"),s("code",[t._v("https://gitee.com/你的用户名(英文)/仓库名")]),t._v("。")])]),t._v(" "),s("p",[t._v("如我的用户名"),s("code",[t._v("onceonce")]),t._v("，仓库名"),s("code",[t._v("blog")]),t._v("，则我的仓库链接为："),s("code",[t._v("https://gitee.com/onceonce/blog")])]),t._v(" "),s("ul",[s("li",[t._v("当然，最简单的是在浏览器窗口复制一下")])]),t._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/09-create-use-blog/01-onceonce-blog-url.png",alt:"Gitee，一度的blog仓库的地址"}})]),t._v(" "),s("p",[s("strong",[s("code",[t._v("clone")]),t._v("代码到本地")])]),t._v(" "),s("p",[t._v("在本地文件夹（如桌面）右键，选择"),s("code",[t._v("git bash here")]),t._v("。然后输入"),s("code",[t._v("git clone + 你的仓库地址")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://gitee.com/onceonce/blog\n")])])]),s("p",[t._v("克隆成功后， 你可以在本地看到刚刚克隆的文件夹和其中的代码。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/09-create-use-blog/02-clone-operation.png",alt:"克隆blog仓库"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/09-create-use-blog/02-clone-operation-local.png",alt:"克隆到本地的文件夹"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/09-create-use-blog/02-clone-operation-local-directory.png",alt:"博客文件夹的目录"}})]),t._v(" "),s("h2",{attrs:{id:"vuepress"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuepress"}},[t._v("#")]),t._v(" Vuepress")]),t._v(" "),s("h3",{attrs:{id:"安装本地依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装本地依赖"}},[t._v("#")]),t._v(" 安装本地依赖")]),t._v(" "),s("p",[t._v("使用"),s("code",[t._v("npm")]),t._v("快速安装"),s("code",[t._v("vuepress")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -D vuepress\n")])])]),s("h3",{attrs:{id:"本地打开博客"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本地打开博客"}},[t._v("#")]),t._v(" 本地打开博客")]),t._v(" "),s("ol",[s("li",[s("strong",[t._v("进入文件夹")])])]),t._v(" "),s("p",[t._v("复制刚刚克隆的"),s("code",[t._v("blog")]),t._v("文件夹的路径。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/09-create-use-blog/02-local-path.png",alt:"复制博客文件夹路径"}})]),t._v(" "),s("p",[t._v("我的是在桌面："),s("code",[t._v("C:\\Users\\Administrator\\Desktop\\blog")])]),t._v(" "),s("p",[t._v("打开"),s("code",[t._v("cmd")]),t._v("，使用"),s("code",[t._v("cd + 文件夹路径")]),t._v("操作进入文件夹。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("C:"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Users"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Administrator"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("cd C:"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Users"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Administrator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Desktop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("blog\n")])])]),s("p",[s("img",{attrs:{src:"/assets/img/09-create-use-blog/02-local-path-enter.png",alt:"进入文件夹路径"}})]),t._v(" "),s("p",[t._v("如果你的文件夹不在C盘，还需要增加一步换盘符操作。")]),t._v(" "),s("p",[t._v("如在E盘的blog文件夹中，cd之后还需要进入E盘：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("C:"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Users"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Administrator"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("cd E:"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("blog\nC:"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Users"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Administrator"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("E:\n")])])]),s("p",[s("strong",[t._v("2.安装依赖")])]),t._v(" "),s("p",[t._v("进入文件夹后，输入"),s("code",[t._v("npm install")]),t._v("，安装这个博客需要的依赖包：")]),t._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/09-create-use-blog/03-install-dependencies.png",alt:"安装依赖"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/09-create-use-blog/03-install-dependencies-finished.png",alt:"安装依赖成功"}})]),t._v(" "),s("p",[t._v("安装完成后，你可以看到刚刚的文件夹中多出了"),s("code",[t._v("node modules")])]),t._v(" "),s("img",{staticStyle:{zoom:"67%"},attrs:{src:"/assets/img/09-create-use-blog/03-installed-node-modules.png",alt:"image-20200714113742864"}}),t._v(" "),s("p",[t._v("安装完项目需要的依赖，项目才可以正常在本地运行。")]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[s("strong",[t._v("本地运行")])])]),t._v(" "),s("p",[t._v("继续输入"),s("code",[t._v("npm run dev")]),t._v("，等待加载完成后，就可以进入博客的本地开发环境了：")]),t._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/09-create-use-blog/03-local-run.png",alt:"本地运行"}})]),t._v(" "),s("p",[t._v("最后提示为：")]),t._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/09-create-use-blog/03-local-run-success.png",alt:"image-20200714114845200"}})]),t._v(" "),s("p",[t._v("现在，你可以在本地浏览器输入 http://localhost:8080 访问博客了")]),t._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/09-create-use-blog/03-local-blog.png",alt:"本地进入博客"}})]),t._v(" "),s("p",[t._v("以后在本地运行，只要进入在cmd进入当前目录，然后使用"),s("code",[t._v("npm run dev")]),t._v("命令就可以了")]),t._v(" "),s("h3",{attrs:{id:"查看博客目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看博客目录"}},[t._v("#")]),t._v(" 查看博客目录")]),t._v(" "),s("p",[t._v("到目前为止，你已经可以进行基本的本地访问操作了。")]),t._v(" "),s("p",[t._v("现在，你需要知道刚才clone的代码目录都是什么功能：")]),t._v(" "),s("h4",{attrs:{id:"blog目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#blog目录"}},[t._v("#")]),t._v(" blog目录")]),t._v(" "),s("p",[t._v("你可以看到这些内容")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v(".git")]),t._v("文件夹：这是git对文件进行版本管理的文件夹，里面会记录你对文件夹和文件进行的修改和各种操作。当然，这个不是自动的，之后会告诉你这里是怎么记录的。"),s("strong",[t._v("可以暂时忽略")])]),t._v(" "),s("li",[s("strong",[t._v("docs")]),t._v("文件夹：docs文件夹存放了博客相关的内容，包括你的图片，文章等等。放在这里面的文章才会被生成网页代码。"),s("strong",[t._v("主要看这里")])]),t._v(" "),s("li",[s("strong",[t._v("drafts")]),t._v("文件夹：这个是我用来存放草稿的文件夹。因为docs文件夹下的内容将会生成文章，而与它同级的内容则不会。")]),t._v(" "),s("li",[s("strong",[t._v("node_modules")]),t._v("文件夹：如上文所说，这里是存放博客所需要的依赖、插件等等。"),s("strong",[t._v("可以暂时忽略")])]),t._v(" "),s("li",[s("strong",[t._v(".gitignore")]),t._v("：gitignore文件可以告诉git哪些文件需要提交给gitee仓库，哪些不需要。比如，node_modules文件夹是不需要提交给gitee的。因为它体积大，并且需要的时候可以随时安装")]),t._v(" "),s("li",[s("strong",[t._v("deploy.sh")]),t._v("：这个文件是用于自动发布博客到你的仓库中去。"),s("strong",[t._v("可以暂时忽略")])]),t._v(" "),s("li",[s("strong",[t._v("package.json")]),t._v("和"),s("strong",[t._v("package-lock.json")]),t._v("：这两个文件记录了博客需要的依赖，使用"),s("code",[t._v("npm install")]),t._v("命令安装的依赖就是从这里发现的。"),s("strong",[t._v("可以暂时忽略")])])]),t._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/09-create-use-blog/04-directionory.png",alt:"博客文件夹目录"}})]),t._v(" "),s("h4",{attrs:{id:"blog-docs目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#blog-docs目录"}},[t._v("#")]),t._v(" /blog/docs目录")]),t._v(" "),s("p",[t._v("上文说了，docs目录下的所有内容，都会被自动生成网页。")]),t._v(" "),s("p",[t._v("而这个生成网页的动作，就是在"),s("code",[t._v("npm run dev")]),t._v("（"),s("code",[t._v("测试/本地环境运行")]),t._v("）以及之后会说到的 "),s("code",[t._v("npm run build")]),t._v("（这个命令通常是项目的"),s("code",[t._v("打包")]),t._v("操作。在这里，这个命令会"),s("code",[t._v("创建网站资源")]),t._v("）。")]),t._v(" "),s("p",[s("strong",[t._v(".vuepress")])]),t._v(" "),s("ul",[s("li",[t._v("dist")])]),t._v(" "),s("p",[t._v("其中docs目录下的"),s("code",[t._v(".vuepress")]),t._v("文件夹，是主题自带的内容，上述命令中的"),s("code",[t._v("打包")]),t._v("和"),s("code",[t._v("本地环境运行")]),t._v("操作创建的网站资源，会被放到 .vuepress 文件夹下 dist 文件夹中，它包含一个"),s("code",[t._v("index.html")]),t._v("，就是博客的主页了。")]),t._v(" "),s("ul",[s("li",[t._v("public")])]),t._v(" "),s("p",[t._v(".vuepress 下的public文件夹一般用于存放图片资源、音乐资源等，在文档中，想要使用public下的图片，可以直接使用相对路径去获取。比如，"),s("code",[t._v(".vuepress/public/assets/img/123.jpg")]),t._v("，在"),s("code",[t._v("md")]),t._v("文档中，你应该使用 "),s("code",[t._v("/assets/img/123.jpg")]),t._v("的方式去调用。")]),t._v(" "),s("ul",[s("li",[t._v("config.js")])]),t._v(" "),s("p",[t._v("config.js 文件是对网站的基本配置。比如，你可以在这里修改网站的标题，网站的logo，头像，音乐等等")]),t._v(" "),s("p",[s("strong",[t._v("README.md")])]),t._v(" "),s("p",[t._v("docs目录下的README.md文件，将会被打包为博客的首页。所以，一些关于首页相关的配置，会在这里面进行操作。具体的配置，可以查看官方文档："),s("a",{attrs:{href:"https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E9%A6%96%E9%A1%B5",target:"_blank",rel:"noopener noreferrer"}},[t._v("默认主题--首页"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("strong",[t._v("其他")])]),t._v(" "),s("p",[t._v("docs目录下， 诸如"),s("code",[t._v("article")]),t._v("，"),s("code",[t._v("frontend")]),t._v("，"),s("code",[t._v("uniapp")]),t._v("，"),s("code",[t._v("vue")]),t._v("，"),s("code",[t._v("vuepress")]),t._v("之类的文件夹，则是可以自己创建和修改的，没有太多的含义，但是，它们会被处理成网页地址的一部分。")]),t._v(" "),s("p",[t._v("比如"),s("code",[t._v("frontend")]),t._v("文件夹下，有一篇文章"),s("code",[t._v("123.md")]),t._v("，在 打包操作 之后生成的本地环境，你访问这篇文章的地址就是："),s("code",[t._v("https://localhost:8080/frontend/123")])]),t._v(" "),s("h3",{attrs:{id:"创建你自己的文章"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建你自己的文章"}},[t._v("#")]),t._v(" 创建你自己的文章")]),t._v(" "),s("p",[t._v("你可以简单地对已经存在的"),s("code",[t._v(".md")]),t._v("文件进行修改，并重新运行博客项目来预览你的修改。\n通过修改和尝试，可以很快地了解"),s("code",[t._v("vuepress")]),t._v("是怎么运行的")]),t._v(" "),s("h3",{attrs:{id:"部署你的博客"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#部署你的博客"}},[t._v("#")]),t._v(" 部署你的博客")]),t._v(" "),s("p",[t._v("所谓部署，就是把你的博客内容发布，这样别人才可以通过在浏览器输入网址来访问你的博客。\n你可以通过在文件夹路径下，右键打开"),s("code",[t._v("Git bash here")]),t._v(", 并输入"),s("code",[t._v("bash deploy.sh")]),t._v("来快速的部署网站。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" deploy.sh\n")])])]),s("p",[t._v("注意，你需要修改发布的地址。因为当前发布地址为 "),s("code",[t._v("git@github.com:HawkeW/HawkeW.github.io.git")]),t._v(" ，是我的"),s("code",[t._v("Github")]),t._v("仓库地址。 你可以把"),s("code",[t._v("HawkeW/HawkeW.github.io.git")]),t._v("替换为你自己的仓库地址。通常为："),s("code",[t._v("[用户名]/[用户名].github.io")]),t._v("（Github）或"),s("code",[t._v("[用户名]/[用户名].gitee.io")]),t._v(" (Gitee)")]),t._v(" "),s("p",[t._v("你可以在这里查看其他"),s("a",{attrs:{href:"https://vuepress-theme-reco.recoluan.com/views/other/deploy.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("部署方式"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"查看你的博客吧！"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看你的博客吧！"}},[t._v("#")]),t._v(" 查看你的博客吧！")]),t._v(" "),s("p",[t._v("经过上一步的部署之后，你可以在浏览器输入网址查看你的博客网站啦")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("如果你发布到Github Pages，则地址为："),s("code",[t._v("http://[用户名]/[用户名].github.io")])])]),t._v(" "),s("li",[s("p",[t._v("如果你发布到Gitee Pages，则地址为："),s("code",[t._v("http:[用户名]/[用户名].gitee.io")])])])])])}),[],!1,null,null,null);e.default=a.exports}}]);