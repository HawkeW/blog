(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{514:function(t,e,s){"use strict";s.r(e);var a=s(6),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("前段时间是一直看着廖雪峰老师的"),s("a",{attrs:{href:"https://www.liaoxuefeng.com/wiki/1022910821149312",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript教程"),s("OutboundLink")],1),t._v("在学习，看到浏览器部分就开始有点力不迷糊了，再加上是一段换工作之旅，折腾到现在都有点飘飘然不知道从何下手。于是又从浏览器部分开始看，终于看到了"),s("a",{attrs:{href:"https://www.liaoxuefeng.com/wiki/1022910821149312/1023024413276544",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("Promise")]),s("OutboundLink")],1),t._v("这里。")]),t._v(" "),s("p",[t._v("干看下来还是有点不知所以，就来敲点字，查查资料啦。")]),t._v(" "),s("p",[t._v("在看教程的过程中，主要不理解的点主要集中在：")]),t._v(" "),s("ul",[s("li",[t._v("没有理解"),s("code",[t._v("promise")]),t._v("对象的执行过程")]),t._v(" "),s("li",[t._v("不知道"),s("code",[t._v("resolve")]),t._v("函数和"),s("code",[t._v("reject")]),t._v("函数是什么")]),t._v(" "),s("li",[s("code",[t._v("job1.then(job2).then(job3).catch(handleError);")]),t._v("这段代码懵逼了……")]),t._v(" "),s("li",[s("code",[t._v("async")]),t._v("？？？")])]),t._v(" "),s("p",[t._v("于是在一番愉快(....)的探索之后，来到阮老师的"),s("a",{attrs:{href:"http://es6.ruanyifeng.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ES6入门"),s("OutboundLink")],1),t._v("，内容更多更细致一点，便于理解代码。")]),t._v(" "),s("p",[t._v("所以以下主要是是阮老师ES6入门的"),s("code",[t._v("Promise")]),t._v("的学习笔记了。")]),t._v(" "),s("h2",{attrs:{id:"定义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定义"}},[t._v("#")]),t._v(" 定义")]),t._v(" "),s("p",[s("code",[t._v("Promise")]),t._v(" 是异步编程的一种解决方案，ES6将其写进了语言标准，原生提供了"),s("code",[t._v("Promise")]),t._v("对象。")]),t._v(" "),s("h3",{attrs:{id:"一个实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一个实例"}},[t._v("#")]),t._v(" 一个实例")]),t._v(" "),s("p",[t._v("ES6 规定，"),s("code",[t._v("Promise")]),t._v("对象是一个构造函数，用来生成一个"),s("code",[t._v("Promise")]),t._v("实例。")]),t._v(" "),s("p",[t._v("下面代码创造了一个"),s("code",[t._v("Promise")]),t._v("实例。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" promise "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reject")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ... some code")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 异步操作成功 */")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reject")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"两个基本函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#两个基本函数"}},[t._v("#")]),t._v(" 两个基本函数")]),t._v(" "),s("p",[t._v("JavaScript引擎对"),s("code",[t._v("Promise")]),t._v("对象接收的函数"),s("code",[t._v("function(resolve, reject)")]),t._v("提供了两个函数作为参数，函数执行时会修改"),s("code",[t._v("Promise")]),t._v("对象的"),s("strong",[t._v("状态")]),t._v("，并传递一个对应的参数。")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("resolve(value)")]),t._v("，可在异步操作成功执行时调用，将"),s("code",[t._v("value")]),t._v("值传递出去。")]),t._v(" "),s("li",[s("code",[t._v("reject(error)")]),t._v("，可在异步操作失败时调用，将"),s("code",[t._v("error")]),t._v("值传递出去。")])]),t._v(" "),s("h3",{attrs:{id:"三个状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三个状态"}},[t._v("#")]),t._v(" 三个状态")]),t._v(" "),s("p",[t._v("一个"),s("code",[t._v("Promise")]),t._v("有以下三种状态——")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("pending")]),t._v("：在"),s("code",[t._v("Promise")]),t._v("对象被创建时产生的状态，表示进行中")]),t._v(" "),s("li",[s("code",[t._v("fulfilled")]),t._v("：异步操作执行成功后，"),s("code",[t._v("resolve")]),t._v("函数会将"),s("code",[t._v("Promise")]),t._v("状态改变为"),s("code",[t._v("fulfilled")]),t._v("，表示执行成功")]),t._v(" "),s("li",[s("code",[t._v("rejected")]),t._v("：异步操作执行失败时，"),s("code",[t._v("reject")]),t._v("函数会将"),s("code",[t._v("Promise")]),t._v("状态改变为"),s("code",[t._v("rejected")]),t._v("，表示执行失败。")])]),t._v(" "),s("p",[t._v("到这里，可以对Promise的运行过程可以基本有一个简单了解了，如图所示")]),t._v(" "),s("center",[s("img",{attrs:{src:"/assets/img/03-FrontEnd/01PromiseObj.png"}}),t._v(" "),s("img"),t._v(" "),s("p",{staticStyle:{"text-align":"center"}},[t._v("Promise执行过程")])]),t._v(" "),s("p",{staticStyle:{"font-size":"0.8rem","font-weight":"bold"}},[t._v("注: 这里的test.status和test.value等仅做说明，tatus和value属性无法调用，即无法通过test.staus和test.value直接访问和获取值")]),t._v(" "),s("h2",{attrs:{id:"promise的基本使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#promise的基本使用"}},[t._v("#")]),t._v(" Promise的基本使用")]),t._v(" "),s("p",[t._v("一个"),s("code",[t._v("Promise")]),t._v("实例生成后，可以用它的"),s("code",[t._v("then")]),t._v("方法来指定回调函数（调用"),s("code",[t._v("value")]),t._v("/"),s("code",[t._v("error")]),t._v("）。")]),t._v(" "),s("ul",[s("li",[t._v("使用"),s("code",[t._v("then")])])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("promise"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// success")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// failure")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ul",[s("li",[t._v("使用"),s("code",[t._v("then")]),t._v("和"),s("code",[t._v("catch")])])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("promise"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// success")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("catch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// failure")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"n个方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#n个方法"}},[t._v("#")]),t._v(" n个方法")]),t._v(" "),s("p",[s("code",[t._v("Promise")]),t._v("的原型包含很多个方法，这里就暂时不再深挖，上述的基本使用应该就满足了目前的学习了（吧？）。")]),t._v(" "),s("p",[t._v("下面罗列一下"),s("code",[t._v("Promise")]),t._v("的其他方法，后续拿来继续学习。")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("Promise.prototype.then()")]),t._v("。可以接收两个回调函数作为参数，第一个为成功（resolve）时的 "),s("code",[t._v("value")]),t._v(" 参数，第二个为失败（reject）时"),s("code",[t._v("error")]),t._v("参数。")]),t._v(" "),s("li",[s("code",[t._v("Promise.prototype.catch")]),t._v("。 "),s("code",[t._v("then(null, rejection)")]),t._v("或"),s("code",[t._v(".then(undefined, rejection)")]),t._v(" 的别名，在"),s("code",[t._v("Promise")]),t._v("对象执行失败（reject）时调用")]),t._v(" "),s("li",[s("code",[t._v("Promise.prototype.finally()")]),t._v("。不管"),s("code",[t._v("Promise")]),t._v("对象的状态如何，都会执行的操作。是"),s("code",[t._v("then")]),t._v("的一个特例。")]),t._v(" "),s("li",[s("code",[t._v("Promise.all()")]),t._v("。包装多个"),s("code",[t._v("Promise")]),t._v(" a,b,c。所有任务都"),s("code",[t._v("resolve")]),t._v("，新的实例才会"),s("code",[t._v("resolve")]),t._v("。相当于逻辑"),s("code",[t._v("与")]),t._v("/"),s("code",[t._v("&&")]),t._v("。")]),t._v(" "),s("li",[s("code",[t._v("Promise.race()")]),t._v("。包装多个"),s("code",[t._v("Promise")]),t._v("。其中一个过程执行完即返回结果，不管失败或成功，在应用中会使程序更有容错性。")]),t._v(" "),s("li",[s("code",[t._v("Promise.allSettled()")]),t._v("。包装多个"),s("code",[t._v("Promise")]),t._v("，所有"),s("code",[t._v("Promise")]),t._v("执行完毕后，状态都为"),s("code",[t._v("fulfilled")]),t._v("，同时返回一个"),s("code",[t._v("value")]),t._v("值，类型为数组。数组中每一个值为一个对象，包含各个实例的"),s("code",[t._v("status")]),t._v("和"),s("code",[t._v("value")]),t._v("/"),s("code",[t._v("reason")]),t._v("属性对应值。可以用来监听各个实例的当前执行情况。")]),t._v(" "),s("li",[s("code",[t._v("Promise.any()")]),t._v("。包装多个"),s("code",[t._v("Promise")]),t._v("。相当于逻辑"),s("code",[t._v("或")]),t._v("/"),s("code",[t._v("||")])]),t._v(" "),s("li",[s("code",[t._v("Promise.try()")]),t._v("。与catch方法类似，是模拟"),s("code",[t._v("try")]),t._v("方法开发的")]),t._v(" "),s("li",[s("code",[t._v("Promise.resolve()")]),t._v("。将参数对象转化为"),s("code",[t._v("Promise")]),t._v("对象。")]),t._v(" "),s("li",[s("code",[t._v("Promise.reject()")]),t._v("。创建一个"),s("code",[t._v("Promise")]),t._v("对象，其状态(status)为"),s("code",[t._v("rejected")]),t._v("，"),s("code",[t._v("reason")]),t._v("值为参数值。")])]),t._v(" "),s("h2",{attrs:{id:"问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),s("p",[t._v("到这里，在学习上还是存在一些问题的。")]),t._v(" "),s("ul",[s("li",[t._v("异步和同步理解的还不够深入")]),t._v(" "),s("li",[s("code",[t._v("Promise")]),t._v("要拿来实际应用才行。")])]),t._v(" "),s("h2",{attrs:{id:"参考文献"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"http://es6.ruanyifeng.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《ECMAScript 6 入门》 作者：阮一峰"),s("OutboundLink")],1)])])],1)}),[],!1,null,null,null);e.default=n.exports}}]);