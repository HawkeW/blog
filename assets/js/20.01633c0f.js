(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{517:function(t,s,a){"use strict";a.r(s);var n=a(6),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("第一遍学习廖雪峰的Javascript教程时，对闭包的理解就一直很模糊。当然，也可能是因为还没有主动去留意过。这周让已经工作的朋友推荐了一些闭包相关的资料，深入地来复习一下闭包的概念。")]),t._v(" "),a("h2",{attrs:{id:"从一段代码说起"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从一段代码说起"}},[t._v("#")]),t._v(" 从一段代码说起")]),t._v(" "),a("p",[t._v("现在，有一个需求：")]),t._v(" "),a("p",[a("strong",[t._v("创建10个"),a("code",[t._v("<a>")]),t._v("标签，点击对应标签，弹出来对应的序号。")])]),t._v(" "),a("p",[t._v("于是，你开始构思这样一段代码：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//获取div节点")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" div "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//创建10个<a>标签，并添加到div中")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//创建一个<a>标签")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//给a标签href赋#值,防止跳转页面")]),t._v("\n      a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("href "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//给a标签内部赋值，让它显示得个性一些")]),t._v("\n      a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"第"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"个链接\\n\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//向div中添加这个a子节点")]),t._v("\n      div"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//找到html中的所有<a>标签")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" nodes "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementsByTagName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//给所有<a>标签添加点击事件,并弹出对应序号j")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" nodes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      nodes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"click"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       \t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[a("strong",[t._v("Nice!")])]),t._v(" "),a("p",[a("s",[t._v("你对自己的"),a("code",[t._v("Javascript")]),t._v("基础表示很满意，并竖起了大拇指。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/05-Clousre/01-Example01-nice.gif",alt:"01-Example01-nice.gif"}})]),t._v(" "),a("p",[t._v("好了，我们开始运行吧！")]),t._v(" "),a("p",[t._v("你用浏览器打开了这个"),a("code",[t._v("html")]),t._v("页面，不错，所有的"),a("code",[t._v("<a>")]),t._v("标签当然都正确地生成了。")]),t._v(" "),a("p",[t._v("但是，当你开始点击标签的时候，却发现，不管点击哪一个链接，弹框里竟然显示的都是"),a("code",[t._v("10")]),t._v("！")]),t._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/05-Clousre/01-Example01.gif",alt:"01-Example01"}})]),t._v(" "),a("h3",{attrs:{id:"哪里出了问题？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#哪里出了问题？"}},[t._v("#")]),t._v(" 哪里出了问题？")]),t._v(" "),a("p",[t._v("让我们冷静一下。")]),t._v(" "),a("p",[t._v("好了，仔细想想，可以想象：代码应该是在给所有"),a("code",[t._v("<a>")]),t._v("标签添加点击事件时这里出了问题:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" nodes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  nodes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"click"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//不知道为什么，运行之后这里全部都变成了10，而不是预期中的j")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("我们不难得出结论，结果是"),a("code",[t._v("10")]),t._v("，是因为总共有10个"),a("code",[t._v("<a>")]),t._v("标签（可以通过改变第一段代码中生成的"),a("code",[t._v("<a>")]),t._v("数量来判断）。而"),a("code",[t._v("j")]),t._v("在循环结束后，最终值正好是"),a("code",[t._v("10")]),t._v("！")]),t._v(" "),a("p",[t._v("那么，是怎样的运行机制，导致结果都变成了最终值呢？")]),t._v(" "),a("p",[t._v("这里我们不妨先做一下假设：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("所有的"),a("code",[t._v("<a>")]),t._v("的"),a("code",[t._v("click")]),t._v("事件，是在for循环结束后，被绑定了"),a("code",[t._v("alert(10)")])])]),t._v(" "),a("li",[a("p",[t._v("所有的"),a("code",[t._v("<a>")]),t._v("的"),a("code",[t._v("click")]),t._v("事件直接被绑定了"),a("code",[t._v("alert(j)")]),t._v("，而在调用的时候，"),a("code",[t._v("j")]),t._v("变成"),a("code",[t._v("10")]),t._v("了，所以最终都变成了"),a("code",[t._v("alert(10)")])])])]),t._v(" "),a("p",[t._v("让我们带着疑问，继续往下看吧。")]),t._v(" "),a("h3",{attrs:{id:"另一段代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#另一段代码"}},[t._v("#")]),t._v(" 另一段代码")]),t._v(" "),a("p",[t._v("在下面这段代码中，我们定义了一个"),a("code",[t._v("count()")]),t._v("函数，其内部引用了局部变量"),a("code",[t._v("arr")]),t._v("。我们希望实现的是，创建3个函数，并且把函数都保存在"),a("code",[t._v("arr")]),t._v("数组中去。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" arr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" results "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" f1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" results"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=>arr[0]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" f2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" results"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=>arr[1]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" f3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" results"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=>arr[2]")]),t._v("\n")])])]),a("p",[t._v("看了这段代码，我们可以很容易得出“"),a("code",[t._v("f1()")]),t._v("，"),a("code",[t._v("f2()")]),t._v("，"),a("code",[t._v("f3()")]),t._v("运行后的结果分别为"),a("code",[t._v("1")]),t._v(","),a("code",[t._v("4")]),t._v(","),a("code",[t._v("9")]),t._v("”，这样一个结论。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/05-Clousre/01-Example01-easy.gif",alt:"01-Example01-easy"}})]),t._v(" "),a("p",[t._v("但是，实际运行时，却发现：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//16")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//16")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//16")]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"/assets/img/05-Clousre/01-Example01-nani.gif",alt:"01-Example01-nani"}})]),t._v(" "),a("h3",{attrs:{id:"熟悉而陌生"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#熟悉而陌生"}},[t._v("#")]),t._v(" 熟悉而陌生")]),t._v(" "),a("p",[t._v("上面两段代码，除了都涉及到循环外，我们还可以看到很强的相似性：")]),t._v(" "),a("ul",[a("li",[t._v("调用的方法是在函数内部定义的，且引用了函数内部的"),a("em",[t._v("局部变量")])]),t._v(" "),a("li",[t._v("调用的方法是在函数外部执行")])]),t._v(" "),a("p",[t._v("实际上，这两个例子就是"),a("code",[t._v("Javascript")]),t._v("中的"),a("code",[t._v("闭包")]),t._v("在“作祟”。")]),t._v(" "),a("h2",{attrs:{id:"作用域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作用域"}},[t._v("#")]),t._v(" 作用域")]),t._v(" "),a("h3",{attrs:{id:"编译过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译过程"}},[t._v("#")]),t._v(" 编译过程")]),t._v(" "),a("p",[t._v("通常，编程语言在一段代码执行之前，会进行三个主要步骤：")]),t._v(" "),a("ol",[a("li",[t._v("词法分析： 把字符串分解成"),a("code",[t._v("词法单元(token)")])]),t._v(" "),a("li",[t._v("语法分析： 将词法单元流（数组）转换成由元素逐级嵌套组成的"),a("code",[t._v("抽象语法树（Abstract Syntax Tree，AST）。")]),t._v("；")]),t._v(" "),a("li",[t._v("代码生成：将"),a("code",[t._v("AST")]),t._v("转换为可执行代码")])]),t._v(" "),a("p",[t._v("当然，JavaScript的处理过程并不仅仅是如此。例如，JavaScript引擎还会经过特定的步骤优化运行性能，包括对冗余元素的优化。")]),t._v(" "),a("h3",{attrs:{id:"作用域-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作用域-2"}},[t._v("#")]),t._v(" 作用域")]),t._v(" "),a("h4",{attrs:{id:"词法作用域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#词法作用域"}},[t._v("#")]),t._v(" 词法作用域")]),t._v(" "),a("p",[a("strong",[t._v("定义")]),t._v(" ：是定义在词法（分析）阶段的作用域，是由写代码时变量和块作用域的位置决定的。")]),t._v(" "),a("p",[a("strong",[t._v("作用")]),t._v("：词法分析阶段，JavaScript引擎就能知道标识符的位置以及如何声明的。这使JavaScript能够预测在执行过程中查找对应的标识符")]),t._v(" "),a("h4",{attrs:{id:"函数作用域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数作用域"}},[t._v("#")]),t._v(" 函数作用域")]),t._v(" "),a("p",[a("strong",[t._v("定义")]),t._v("：是定义在函数声明时的作用域。")]),t._v(" "),a("p",[a("strong",[t._v("作用")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("1. 属于这个函数的全部变量都可以在整个函数范围内，包括嵌套在其内部的作用域内使用和复用。\n2. 隐藏内部实现\n3. 规避命名冲突\n")])])]),a("h4",{attrs:{id:"块作用域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#块作用域"}},[t._v("#")]),t._v(" 块作用域")]),t._v(" "),a("p",[a("strong",[t._v("定义")]),t._v("：具有块作用域的变量或函数，仅可以在当前的块（通常在{ ... }内）中被调用，而无法在该块作用域外进行调用。")]),t._v(" "),a("p",[a("strong",[t._v("作用")]),t._v("：避免变量被混乱地复用，提升代码可维护性")]),t._v(" "),a("h5",{attrs:{id:"let"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#let"}},[t._v("#")]),t._v(" let")]),t._v(" "),a("p",[t._v("对于下面的代码，使用"),a("code",[t._v("var")]),t._v("声明变量"),a("code",[t._v("i")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//一段代码")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//10")]),t._v("\n")])])]),a("p",[t._v("虽然"),a("code",[t._v("i")]),t._v("仅仅在"),a("code",[t._v("for")]),t._v("循环内被使用，但其却被绑定到上层的作用域中去了。")]),t._v(" "),a("p",[t._v("而使用"),a("code",[t._v("let")]),t._v("标识符定义变量"),a("code",[t._v("i")]),t._v(", 则在for循环外部将无法访问到"),a("code",[t._v("i")]),t._v("的值。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//一段代码")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Uncaught ReferenceError: i is not defined")]),t._v("\n")])])]),a("h5",{attrs:{id:"try-catch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#try-catch"}},[t._v("#")]),t._v(" try { ... } catch{ ... }")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 执行一个非法操作来强制制造一个异常 ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" err "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 能够正常执行！ ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" err "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ReferenceError: err not found")]),t._v("\n")])])]),a("h3",{attrs:{id:"作用域链"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作用域链"}},[t._v("#")]),t._v(" 作用域链")]),t._v(" "),a("p",[t._v("当JavaScript进行变量解析（即查找变量）时，")]),t._v(" "),a("p",[t._v("在示例1中，我们使用"),a("code",[t._v("var")]),t._v("关键字定义了变量"),a("code",[t._v("j")]),t._v("，它是该匿名函数内的局部变量，作用于整个函数。")]),t._v(" "),a("h3",{attrs:{id:"作用域链-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作用域链-2"}},[t._v("#")]),t._v(" 作用域链")]),t._v(" "),a("h2",{attrs:{id:"概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[t._v("#")]),t._v(" 概念")]),t._v(" "),a("p",[a("strong",[t._v("概念1")]),t._v("：当函数可以记住并访问所在的"),a("em",[t._v("词法作用域")]),t._v("，就产生了闭包，即使函数是在当前词法作用域之外执行"),a("sup",[t._v("[1]")])]),t._v(" "),a("p",[a("strong",[t._v("概念2")]),t._v("：当一个嵌套的内部（子）函数引用了嵌套的外部（父）函数的"),a("em",[t._v("变量或函数")]),t._v("时，就产生了闭包")]),t._v(" "),a("p",[t._v("产生的条件")]),t._v(" "),a("h2",{attrs:{id:"引用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引用"}},[t._v("#")]),t._v(" 引用")]),t._v(" "),a("p",[t._v("[1] 你不知道的JavaScript（上卷）,第五章")]),t._v(" "),a("p",[t._v("[2] JavaScript权威指南（第6版）")])])}),[],!1,null,null,null);s.default=r.exports}}]);