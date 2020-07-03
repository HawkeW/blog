【uniapp】 导航栏搜索框与二级搜索页的动态修改

## 需求

- 二级搜索页面，在首页点击搜索框之后，进入一级搜索页

- 一级搜索页输入关键词并点击搜索，将进入二级搜索页面并展示搜索结果。
- 二级搜索页顶部导航不可输入，点击后返回一级搜索页
- 使用nvue渲染，所以文件格式都为nvue

## UI方案

### 效果预览

<div style="text-align:center;">![scratching noise-07](C:\Users\Administrator\Desktop\scratching noise-07.gif)</div>

![scratching noise-07](C:\Users\Administrator\blog\docs\.vuepress\public\assets\img\08-searhinput\search-input-01-effect)

### 一. 自定义导航栏

`uniapp`支持关闭原生导航栏+前端标签组件模拟导航栏进行开发，同时官方也强调自定义HTML组件模拟导航栏会有性能问题<sup>[1]</sup>。由于产品要求尽量使用原生，所以就不再使用这个方案了。

官方的`uni ui`提供了**自定义导航栏组件**：[NavBar 导航栏](https://ext.dcloud.net.cn/plugin?id=52)，其中提供了带搜索框的样式。

使用自定义导航栏的，优缺点如下：

- 优点：更方便的自定义和动态修改
- 缺点：官方说明中的性能问题

#### 基本实现思路：

1. 页面style设置`navigationStyle`值为`custom`
2. 手动HTML绘制导航栏或直接使用插件

#### 主要代码：

**`pages.json`**

`pages.json`中配置页面`navigationStyle`为`custom`

```js
//pages.json
{
    "pages":[
        {
    	"path": "pages/customTitle/customFirst",//一级搜索
    	"style": {
        "navigationStyle":"custom"
    	}
    },{
    	"path": "pages/customTitle/customSecond",//二级搜索
    	"style": {
        "navigationStyle":"custom"
    	}
    },
    ]
}
```

**一级搜索页：**

```js
//customFirst.nvue
<template>
  <view>
    <!-- 顶部状态栏 -->
    <view :style="`height: ${iStatusBarHeight}px;`" class="status-bar"></view>
    
    <!-- 自定义导航栏 -->
    <uni-nav-bar :fixed="false" background-color="#1577fe" color="#ffffff" >
      <!-- 搜索框 -->
      <view class="input-view">
        <uni-icons class="input-uni-icon" type="search" size="22" color="#666666" />
        <input :focus="true" confirm-type="search" class="nav-bar-input" type="text" placeholder="输入搜索关键词" @confirm="search" v-model="keyword">
      </view>
      <!-- 左插槽 -->
      <view slot="left" @click="back">
        <uni-icons type="back" color="#FFFFFF"></uni-icons>
      </view>
      <!-- 右插槽 -->
      <view slot="right" @click="search">
        <text class="search">搜索</text>
      </view>
    </uni-nav-bar>
  </view>
</template>
```

**二级搜索页：**

```js
//customFirst.nvue
<template>
	<view>
     <!-- 顶部状态栏 -->
    <view :style="`height: ${iStatusBarHeight}px;`" class="status-bar"></view>
     <!-- 自定义导航栏 -->
    <uni-nav-bar :fixed="false" background-color="#1577fe" color="#ffffff"  >
    <!-- 搜索框 -->
    <view class="input-view" @click="back">
      <uni-icons class="input-uni-icon" type="search" size="22" color="#666666" />
      <input class="nav-bar-input" type="text" :placeholder="keyword">
    </view>
    <!-- 左插槽 -->
    <view slot="left" @click="back">
      <uni-icons type="back" color="#FFFFFF" ></uni-icons>
    </view>
   </uni-nav-bar>
	</view>
</template>
```

#### 注意事项:

1. 页面设置为自定义导航栏时，需要设置一个`status-bar`的占位高度，否则内容会直接顶到顶部。`nvue`中可以通过获取状态栏高度+动态style的方式，其他模式可以直接使用uniapp的[`css`变量](https://uniapp.dcloud.io/frame?id=css%e5%8f%98%e9%87%8f) `var(--status-bar-height)`设置占位块的高度。

```js
<!-- 顶部状态栏 -->
<view :style="`height: ${iStatusBarHeight}px;`" class="status-bar"></view>
<!-- 顶部状态栏 -->
```

2. 使用`navBar`插件实现导航栏搜索框，如果需要修改搜索框两侧占位`button`的宽度，需要修改`uni-nav-bar.vue`插件源码中的样式中`uni-navbar__header-btns-left`、`uni-navbar__header-btns-right`、`uni-navbar__header-btns`的宽度`width`值。如果你使用`slot`插槽去设置左右占位`button`的宽度，也可以直接注释掉这几个样式的`width`。

### 二. `uniapp`原生`searchInput`

官方提供的[uni-app在App端动态修改原生导航栏](https://ask.dcloud.net.cn/article/35374)代码示例中，提供了相关的思路及api使用：

1. 获取`webView`对象，通过`webView`的相关API`setTitleNViewButtonStyle`，`setTitleNViewButtonBadge`，`setTitleNViewSearchInputFocus`
2. 通过`currentWebview` 的`getStyle()`、`setStyle()`方法进行更新。

这里不得不提的是官方的这篇示例文章是18年的，代码中使用的获取webview的api已经更新，需要通过新的api去获取`webView`对象。示例代码更新后应该如下：

```js
// #ifdef APP-PLUS  
var webView = this.$mp.page.$getAppWebview();  

// 修改buttons  
// index: 按钮索引, style {WebviewTitleNViewButtonStyles }  
webView.setTitleNViewButtonStyle(0, {  
    text: 'hello',  
});  

// 修改按钮上的角标  
// index: 按钮索引, text: 角标文本内容  
webView.setTitleNViewButtonBadge({  
    index: 0,  
    text: 10,  
});  

// 设置 searchInput的 focus  
// focus: true | false  
webView.setTitleNViewSearchInputFocus(true)  

// 设置 searchInput的 text  
webView.setTitleNViewSearchInputText(text)  

// searchInput 通过 webview 的 setStyle 方法进行更新  
var tn = currentWebview.getStyle().titleNView;  
if (tn.buttons) {    
uni.getSystemInfo({    
    success:function(res){    
        if (res.platform=="ios") { // 这里在HBuilderX 1.9.9版本有个bug，searchInput的I变小写了 ，临时绕过下。更高版本会修复此bug    
            tn.searchinput.placeholder = 'test';    
            currentWebview.setStyle({    
                titleNView: tn    
            });    
        } else{    
            tn.searchInput.placeholder = 'test'; //这里有个已知bug，HBuilderX 1.9.9上，当searchInput位于首页时，动态设置placehold会导致buttons的点击事件消失。更高版本会修复此bug    
            currentWebview.setStyle({    
                titleNView: tn    
            });    
        }    
    }    
})    
}    

// #endif
```





## 引用

 [1] [uni-app导航栏开发指南](https://ask.dcloud.net.cn/article/34921), 注意事项

 [uni-app在App端动态修改原生导航栏](https://ask.dcloud.net.cn/article/35374)

