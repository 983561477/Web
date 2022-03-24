### Web APIs

```javs
API: 应用程序编程接口
Web API: 浏览器给你和页面元素的API
```

### DOM

```javascript
// 文档对象模型
// DOM 树
文档(document): 页面
元素(element): 所有标签
节点(node): 所有内容(标签、属性、文本、注释等)
```

### 获取元素

```javascript
// 获取元素(ID) 返回元素对象
document.getElementById('id');
// 打印元素对象
console.dir();

// 获取元素对象集合(伪数组存储)
document.getElementBytagName('标签名')
// 父元素 element
document.element.getElementBytagName('标签名')

// H5 获取元素(类名)
document.getElementByClassName();

// H5 选择器 返回第一个 选择器加符号
document.quearySelector('选择器')

// H5 选择器 返回全部 选择器加符号
document.quearySelectorAll('选择器')

// 获取body
document.body;
// 获取html
document.ducumentElement;
```

### 事件基础

```javascript
// 事件源 事件类型 事件处理程序

// 事件源 
var btn = document.getElementById('btn')
// 事件类型 事件处理程序 this
btn.onclick = function() {}

// 鼠标事件
onclick				// 点击鼠标左键
onmouseover		// 鼠标经过
onmouseout		// 鼠标离开
onfocus				// 获得鼠标焦点
onblur				// 失去鼠标焦点
onmousemover	// 鼠标移动
onmouseup			// 鼠标弹起
onmousedown		// 鼠标
```

### 元素操作

```javascript
// 动态创建元素
document.write()	// 导致文档重绘
document.innerHTML	// 拼接字符串效率低 数组形式效率高
document.createElement

// 获取/改变(赋值) 元素内容
// this 事件函数的调用者
this.属性名
// 不识别标签 去除空格换行
element.innerText
// 识别标签 保留空格换行
element.innerHTML

// 获取元素属性值
element.属性名		// 自带的属性 class->className
element.getAttribute('属性名')		// 可获取自定义属性	class
// 修改属性
element.属性名 = 值;
element.setAttribute('属性名', 值);	// 可修改自定义属性
// 移除属性
element.removeAttribute('属性名');

// 修改样式 style(行类样式 权重高)
element.style.样式名(驼峰命名法)
// 修改元素类名
element.className

// H5 自定义属性 data-
data-属性名
// H5 获取自定义属性 dataset集合 存放所有以data-开头的自定义属性
// data-index
element.dataset.index		
element.dataset['index']
// data-list-name 多个单词 驼峰命名法
element.dataset.listName		
element.dataset['listName']
```

### 节点操作

```javascript
// 节点类型
nodeType
	值:
    1: 元素节点
    2: 属性节点
    3: 文本节点(文字、空格、换行)
// 节点名称
nodeName
// 节点值
nodeValue

// 父节点 未找到为null
node.parentNode
// 子节点 
node.childNodes // 包含文本等其他子节点
node.children	// 只获取子元素节点
// 第一个子节点
node.firstChild	// 包含文本等其他子节点
node.firstElementChild	// 第一个元素节点 兼容问题 IE9+
node.children[0]	// 最后一个元素节点 常用
// 最后一个子节点
node.lastChild		// 包含文本等其他子节点
node.lastElementChild	// 最后一个元素节点 兼容问题 IE9+
node.children[element.children.length - 1] // 最后一个元素节点 常用

// 兄弟节点	
// 下一个兄弟节点
node.nextSibling	// 包含文本节点等
node.nextElementSibling	// 下一个兄弟元素节点 兼容问题 IE9+
// 上一个兄弟节点
node.previousSibling	// 包含文本节点等
node.previousElementSibling // 上一个兄弟元素节点 兼容问题 IE9+

// 创建节点
// 创建元素节点
document.createElement('tagName')
// 添加节点
node.appendChild(child)	// 追加节点
node.insertBefore(child, 指定元素)	// 添加到指定子元素的前面

// 删除节点
node.removeChild(child)
// 阻止链接跳转
href = 'javascript:;'

// 赋值节点
node.cloneNode()	// 参数为空或false 则浅拷贝 只克隆节点本身不克隆里面的子节点
node.cloneNode(true) // 深拷贝 包含里面的子节点
```

### 事件高级

```javascript
// 传统注册方式 on开头 唯一性
// 事件源.事件类型 = 事件处理程序
btn.onclick = function() {}

// 方法监听注册方式 addEventListener() IE9 多个侦听器
eventTarget.addEventListener(type, listener[, useCapture])
type: 事件类型字符串 如: click
listener: 时间处理函数
useCapture: 可选参数 是布尔值 默认false
btn.addEventListener('click', function() {})
function fn() {}
btn.addEventListener('click', fn)

// attachEvent IE9以前 要加on
eventTarget.attachEvent('onclick', function())

// 删除事件
// 传统 事件源.事件类型 = null
btn.onclick = null;

// 移除
removeEventListener()
detachEvent()
```

### DOM事件流

```javascript
// 捕获阶段 当前目标阶段 冒泡阶段
// 捕获阶段 useCapture = true
eventTarget.addEventListener(type, listener, true)

// 捕获阶段 useCapture = false / 省略
eventTarget.addEventListener(type, listener, false)

// 无冒泡事件
onblur、onfocus、onmouseenter、onmouseleave
```

### 事件对象

```javascript
// 侦听函数 小括号里面 event 
div.onclick = function(event) {}
div.addEventListener('click', function(event) {})
// IE678 window.event

// event
div.addEventListener('click', function(e) {
  this;	// 绑定事件的对象
  e.currentTarget; // 绑定事件的对象
  e.target;	// 触发事件的对象
  e.srcElement;	// IE678 触发事件的对象
  e.type;	// 事件类型
  e.preventDefault();	// 阻止默认行为
  e.returnValue;	// 阻止默认行为 传统注册方式 IE678
  return false;	// 阻止默认行为 无法执行后续代码 
  
  // 阻止冒泡
  e.stopPropagation();
  e.cancelBubble = true;	// IE678
})
```

### 事件委托

```javascript
// 父节点添加侦听器 子节点冒泡(e.target)
```

### 鼠标事件

```javascript
// 禁止鼠标右键菜单 contextmenu
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
})

// 禁止鼠标选中 selectstart
document.addEventListener('selectstart', function(e) {
  e.preventDefault();
})

// 鼠标事件对象
e.clientX		// 相对于浏览器窗口可视区的 X坐标
e.clientY		// 相对于浏览器窗口可视区的 Y坐标
e.pageX			// 相对于文档页面的 X坐标 IE9+
e.pageY 		// 相对于文档页面的 Y坐标 IE9+
e.screenX		// 相对于电脑屏幕的 X坐标
e.screenY		// 相对于电脑屏幕的 Y坐标
```

### 键盘事件

```javascript
// 键盘事件 
onkeyup			// 按键松开 再后执行 不区分字母大小写
onkeydown		// 按键按下 先执行   不区分字母大小写
onkeypress	// 按键按下 后执行   区分字母大小写 不识别功能键 如ctrl shift 箭头等

// 键盘事件对象
e.ketCode		// 按键的ASCII码值
```

### BOM

```javascript
// 浏览器对象模型 window 全局对象
// 特殊属性
window.names

// 窗口加载事件 页面内容全部加载完毕 包含样式表、图片、flash ...
window.onload = function() {}
window.addEventListener('load', function() {})
// IE9+ DOM加载完成 不包含样式表、图片、flash ...
document.addEventListener('DOMContentLoaded', function() {})

// 窗口大小变化 onresize
window.addEventListener('resize', function() {})
window.innerWidth		// 浏览器宽
```

### 定时器

```javascript
// setTimeout()  window省略 调用一次
setTimeout(回调函数, [延迟的毫秒数]);	// 省略默认是0
// 例
setTimeout(function() {}, 2000);
function callback() {}	// 回调函数
var timer = setTimeout(callback, 2000);	// 添加标识符 timeoutID
setTimeout('callback()', 2000);	// 不推荐
// 停止定时器
clearTimeout(timeoutID)

// setInterval() 重复调用
setInterval(回调函数, [间隔的毫秒数]);
// 停止定时器
clearInterval(timeoutID);
```

### 执行机制

```javascript
// 同步和异步
// 同步: 顺序执行
执行栈
// 异步: 同时执行
// 回调函数 消息队列
1、普通时间 click、resize ...
2、资源加载 load、error ...
3、定时器 setInterval、setTimeout ...

// 事件循环
```

### location 对象

```javascript
// URL 统一资源定位符
protocol://host[:post]/path/[?query]#fragment
protocol 通信协议 http、ftp、maito ...
host 主机(域名)
port 端口号 默认80
path 路径 /
query 参数 &
fragment 片段 #

// location属性
location.href 			// 获取或设置整个URL
location.host				// 返回主机(域名)
location.port				// 返回端口号 未写 返回空字符串
location.pathname		// 返回路径
location.search			// 返回参数
location.hash				// 返回片段

// location方法
location.assign()		// 跳转页面 能后退页面 href
location.replace()	// 替换为当前页面 不记录历史页面 不能后退页面
location.reload()		// 查询加载页面 参数为true 强制刷新ctrl+F5(避开缓存从服务器取数据)
```

### navigator 对象

```javascript
// 浏览器相关信息
userAgent		
```

### history 对象

```javascript
// 浏览器历史
history.back()	// 后退功能
history.forward()	// 前进功能
history.go(参数)	// 前进后退功能 参数是1 前进一个页面 参数是-1 后退一个页面
```

### 网页特效

```javascript
// offset 偏移量
1、获取元素距离带有定位父元素的位置
2、获取元素自身大小(宽高)
注意: 返回的数值都不带单位

// 常用属性 返回的数值都不带单位
element.offestParent	// 带定位的父级元素 没有则返回body
element.offsetTop			// 上偏移
element.offsetLeft		// 左偏移
element.offsetWidth		// 包括padding、边框、内容 的宽度
element.offsetHeight	// 包括padding、边框、内容 的高度

// ofset 跟 style 区别
1、
	offset 可以得到任意样式表中的样式值
	style 只能得到行内样式表中的样式值
2、
	offset 不带单位
  style 带单位
3、
	offset 包含 padding+border+width
	style 不包含padding、border
4、
	offset 只读不能赋值
  style 可读写
总结: 获取用offset 赋值用style

// client 与 offset 区别 不包含边框
element.clientTop			// 返回元素上边框的大小
element.clientLeft		// 返回元素左边框的大小
element.clientWidth		// 不包括边框 盒子的宽度
element.clientHeight	// 不包括边框 盒子的高度

// 立即执行函数 独立创建了一个作用域
(function 函数名() {})(参数);
(function 函数名() {}(参数));

// pageshow 重新加载页面
e.persisted		// 判断是否从缓存显示

// scroll
element.scrollTop			// 返回被卷去的上侧距离
element.scrollLeft		// 返回被卷去的左侧距离
element.scrollWidth		// 不包括边框 内容的宽度
element.scrollHeight	// 不包括边框 内容的高度

// onscroll 滚动事件
window.pageYOffset	// 页面被卷去的头部 IE9+
// 将窗口滚动
window.scroll(x, y);  // x,y不跟单位

// 总结
// offset 常用于获取元素的位置
offsetLeft offsetTop
// client 常用于获取元素的大小
clientWidth clientHeight
// scroll 常用于获取元素的滚动距离
scrollTop scrollLeft 
// 页面的滚动距离
window.pageXOffset window.pageYOffset

// mouseover 经过盒子 包含子盒子 冒泡
// mouseenter 只经过自身盒子触发 不冒泡
// mouseleave 离开自身盒子 不冒泡
```

### 动画函数封装

```javascript
// 核心原理: 通过定时器setInterval()不断移动盒子位置

// 匀速动画 自身位置 + 固定值
// 缓动动画 自身位置 + 变化值
// 向前走	向上取整
变化值: Math.ceil((目标值-现在位置)/10)
// 向后走	向下取整
变化值: Math.floor((目标值-现在位置)/10)

// 节流阀
回调函数 锁住函数 解锁函数
var flag = true;
```

### 移动端特效

```javascript
// 触屏事件 touch
touchstart	// 点击触发
touchmove		// 滑动触发
	e.preventDefault()	// 阻止屏幕滚动的默认行为
touchend		// 移开触发

// 事件对象
touches		// 触摸屏幕所有手指列表
targetTouches		// 触摸当前元素的手指列表 重点
changedTouches	// 手指状态发生了改变的列表 从无到有 从有到无

// classList 返回元素的类名 IE10+
classList.add()			// 添加
classList.remove()	// 删除
classList.toggle()	// 切换 有去掉 没有添加

// click 300s延迟 解决
1、禁止缩放
	<meta name="viewport" content="user-scalable=no">
2、封装函数
3、fastclick插件

// 插件 小而专
// 框架 大而全

// Swiper 插件
// superslide 插件
// iscroll 插件
// zy.media.js 视频插件

// Bootstrap 框架
```

### 数据存储

```javascript
// 本地存储 
1、数据存储在浏览器里 
2、只能存储字符串 将对象JSON.stringify() 编码后存储
// sessionStorage 约5M
	1、生命周期: 关闭浏览器窗口
  2、同一个窗口下数据共享
  3、键值对
// 方法
sessionStorage.setItem(key, value)	// 存储
sessionStorage.getItem(key)	// 获取
sessionStorage.removeItem(key)	// 删除
sessionStorage.clear()	// 删除全部

// localStorage 约20M
	1、生命周期: 永久生效
  2、数据多窗口共享
  3、键值对
// 方法
localStorage.setItem(key, value)	// 存储
localStorage.getItem(key)	// 获取
localStorage.removeItem(key)	// 删除
localStorage.clear()	// 删除全部
```



