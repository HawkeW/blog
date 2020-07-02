【uniapp】 导航栏搜索框与二级搜索页的动态修改

## 需求

上周接到搜索页的需求，需要设置二级搜索页面，在首页点击搜索框之后，进入一级搜索页，输入关键词并点击搜索，将进入二级搜索页面展示搜索结果。

## UI方案

### 一. 自定义导航栏

`uniapp`支持关闭原生导航栏+前端标签组件模拟导航栏进行开发，同时官方也强调自定义HTML组件模拟导航栏会有性能问题<sup>[1]</sup>。由于产品要求尽量使用原生，所以就不再使用这个方案了。

官方的`uni ui`提供了**自定义导航栏组件**：[NavBar 导航栏](https://ext.dcloud.net.cn/plugin?id=52)，其中提供了带搜索框的样式。

使用自定义导航栏的，优缺点如下：

- 优点：更方便的自定义和动态修改
- 缺点：官方说明中的性能问题

**基本实现思路：**

1. 页面style设置`navigationStyle`值为`custom`
2. 手动HTML绘制导航栏或直接使用插件

**注意事项**:

1. 页面设置为自定义导航栏时，需要设置一个`status-bar`的占位高度，否则内容会直接顶到顶部。`nvue`中可以通过获取状态栏高度+动态style的方式，其他模式可以直接使用uniapp的[`css`变量](https://uniapp.dcloud.io/frame?id=css%e5%8f%98%e9%87%8f) `var(--status-bar-height)`设置占位块的高度。

```js
<!-- 顶部状态栏 -->
<view :style="`height: ${iStatusBarHeight}px;`" class="status-bar"></view>
<!-- 顶部状态栏 -->
```



1. 使用`navBar`插件实现导航栏搜索框，如果需要修改搜索框两侧占位`button`的宽度，需要修改`uni-nav-bar.vue`插件源码中的样式中`uni-navbar__header-btns-left`、`uni-navbar__header-btns-right`、`uni-navbar__header-btns`的宽度`width`值。如果你使用`slot`插槽去设置左右占位`button`的宽度，也可以直接注释掉这几个样式的`width`。

### 二. 原生`searchInput`实现

官方提供的[uni-app在App端动态修改原生导航栏](https://ask.dcloud.net.cn/article/35374)代码示例中，提供了相关的思路及api使用：

1. 获取`webView`对象，通过`webView`的相关API`setTitleNViewButtonStyle`，`setTitleNViewButtonBadge`，`setTitleNViewSearchInputFocus`
2. 通过`currentWebview` 的`getStyle()`、`setStyle()`方法进行更新。

这里不得不提的是这篇文章是18年的，示例的代码使用的api已经更新，需要通过新的api去获取`webView`对象。更新后的代码应该如下：

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

