### 字体样式

```css
/* 
字体大小
	属性名: font-size
	取值: 数字 + px
	注意: 谷歌浏览器默认文字大小是16px
*/
font-size: 30px;

/*
字体粗细
	属性名: font-weight
	属性值：
		正常:
			normal
			400
		加粗:
			bold
			700
*/
font-weight: bold;
font-weight: 700;

/*
字体样式
	属性名: font-style
	属性值: 
		正常: normal
		倾斜: italic
*/
font-style: italic;

/* 
字体系列
	属性名: font-family
	属性值: 推荐常见的字体名
		Windows: 微软雅黑
		macOS: 苹方
		无衬线字体(sans-serif):
			黑体、Arial
		衬线字体(serif):
			宋体、Times New Roman
		等宽字体(monospace):
			Consolas、fira code
*/
/* 
依次寻找，没有最后任意显示一个无衬线字体(网页)
*/
font-family: 微软雅黑, 黑体, sans-serif;

/*
字体font相关属性的连写
	属性名: font(复合属性)
	属性值: style weight size/line-height family
	省略: 只能省略前两个，如果省略了相当于设置了默认值
*/
font: style weight size/line-height  family;
```

### 文本样式

```css
/*
文字缩进
	属性名: text-indent
	属性值: 
		1、数字 + px
		2、数字 + em
	推荐: 1em = 当前标签的font-size的大小
*/
text-indent: 2em;

/*
文字水平对齐方式
	属性名: text-align
	属性值: 
		left: 左对齐
		center: 居住对齐
		right: 右对齐
	可用元素:
		1、文本
		2、span标签、a标签
		3、input标签、img标签
	注意: 需要给以上元素的父标签设置属性
*/
text-align: center;

/*
文字修饰
	简写: td
	属性名: text-decoration
	属性值: 
		underline: 下划线(常用)
		line-through: 删除线(不常用)
		overline: 上划线(几乎不用)
		none: 无装饰线(常用)
	提示: 开发中常用none，清除a标签默认的下划线
*/
text-decoration: none;
```

### 行高

```css
/*
行高: 上间距 + 文本高度 + 下间距
作用:
	属性名: line-height
	属性值: 
		1、数字 + px
		2、倍数(当前标签font-size的倍数)
	注意:
		1、单行文字垂直居中:
			line-height: 文字父元素高度;
		2、网页精准布局(取消上下间距): 
			line-height: 1;
*/
line-height: 1;
```

### 颜色

```css
/* 
颜色 
	属性名: 
		文字: color
		背景颜色: background-color+
	属性值:
		关键词:预定义的颜色名
			red、green、blue、yellow......
		rgb: 红绿蓝三原色，取值范围0-255
			rgb(0,0,0)、rgb(255,255,255)
		rgba: 红绿蓝(0-255)+透明度(0-1)
			rgb(255,255,255,0.5)
		16进制: #开头将数字转换为16进制
			#000000	简写: #000
			#ff0000	简写: #f00
			#e92322
*/
color: red;
```

### 标签水平居中

```css
/*
CSS3
	属性名: margin
	属性值: 0 auto
	作用于: div、p、h(大盒子)
*/
margin: 0 auto;
```

### 背景

```css
/* 
背景颜色 
	简写: bgc
*/
background-color: #000;

/* 
背景图片 
	简写: bgi
	注意: 
		1、url可以省略引号
		2、图片默认水平和垂直方向平铺
		3、装饰效果，不能撑开盒子
*/
background-image: url();

/*
背景平铺
	简写: bgr
	属性值:
		repeat(默认值): 水平和垂直都平铺
		no-repeat: 不平铺
		repeat-x: 水平平铺
		repeat-y: 垂直平铺
*/
background-repeat: no-repeat;

/*
背景位置
	简写: bgp
	属性值: 
		方位名词:
			水平方向: left、center、riight
			垂直方向: top、center、bottom
		坐标: 数字 + px
			X轴(水平向右) + y轴(垂直向下)
	备注: 可以混用
*/
background-position: center;
background-position: right 0;

/* 
背景相关属性连写
	简写: bg
	值: color image repeat position
*/
background: color image repeat position
```

### 元素的显示模式

```css
/* 
块级元素
	标签:
		div、p、h系列、ul、li、dl、dt、dd、form、header、nav、footer ......
	特点:
		1、独占一行
		2、宽度默认是父元素宽度，高度默认由内容撑开
		3、可以设置宽高
*/

/* HTML5新标签 */
/* header: 定义文档或节的页眉 */
/* nav: 定义文档内的导航链接 */
/* section: 定义文档中的节 */
/* footer: 定义文档或节的页脚 */

/*
行内元素
	标签:
		a、span、b、u、i、s、strong、ins、em、del ......
	特点:
		1、一行可以显示多个
		2、宽度和高度默认由内容撑开
		3、不可以设置宽高
*/

/*
行内块元素
	标签:
		img、input、textarea、button、select ......
	特点:
		1、一行可以显示多个
		2、可以设置宽高
*/

/*
元素显示模式转换
	属性名: display
	属性值:
		转块(较多): block
		转行内块(较多): inline-block
		转行内(极少): inline
*/
display: block;
display: inline-block;
```



### 定位（子绝父相）

```css
/*
  作用: 可以让元素自由摆放在网页的任意位置
  	一般用于盒子之间的层叠情况
	属性名: position
	属性值: 
		static: 静态定位(默认不定位)
		relative: 相对定位
		absolute: 绝对定位
		fixed: 固定定位
	偏移值(就近原则):
		水平: left、right
		垂直: top、bottom
*/

/*
相对定位
	简写: por
	介绍: 相对于自己之前的位置进行移动，配合方位属性实现移动
	特点:	
		1、占有原来的位置，没有脱标
		2、仍然具有标签原有的显示模式特点
		3、参照自己原来的位置
	场景: 
		1、配合绝对定位
		2、用于小范围的移动	
*/
position: relative;
/* 
	水平以left为准
	垂直以top为准
*/
left:
top:

/*
绝对定位
	简写: poa
	介绍: 相对于非静态定位的父元素进行定位移动
	特点:
		1、在页面中不占位置，脱标
		2、一行共存，宽高生效(行内块)，无宽高无内容则为0
	场景:
		1、先找已经定位的父级
		2、没有，以浏览器窗口(左上角)进行定位
	注意:
		1、绝对定位的盒子不能使用左右margin: auto;居中，需使用left: 50%;再减少自己宽度高度的一半 transform: translate(-50%,-50%)
*/
position: absolute;
/* 居中 */
left: 50%;
/* 位移自己宽度高度的一半 */
transform: translate(-50%,-50%);

/* 
固定定位
	简写: pof
	介绍: 永远相对于浏览器位移
	特点: 
		1、脱标不占位置
		2、改变位置参考浏览器窗口
*/
position: fixed;

/* 
层级关系
	定位>浮动>标准流
	相对、绝对、固定: 同层，按标签顺序覆盖(后来居上) z-index: 层级(默认值0);
*/
/* 注意: 配合定位才能生效 */
z-index: 999;
```

### 装饰

```css
/* 
对齐 
	基线: 浏览器文字类型(行内、行内块)元素排版中存在用于对齐的基线(baseline)
	简写: va
	值: 
		baseline: 默认，基线对齐
		top: 顶部对齐
		middle: 中部对齐
		bottom: 底部对齐
*/
vertical-algin: middle;

/* 图片水平垂直居中 */
line-height: 
text-align:center;
vertical-algin: middle;

/* 
光标类型 
	属性名: cursor
	简写: cu
	值:
		default: 箭头
		pointer: 小手，提示可点击
		text: 工资型，提示可选择文字
		move: 十字光标，提示可移动
*/
cursor: pointer;

/* 
边框圆角 
	属性名: border-radius
	简写: borr
	值: 数字+px、百分比
	规则: 从左上角顺时针开始赋值，没有的看对角
*/
border-radius: 10px;
/* 正圆 正方形 盒子尺寸的一半 */
border-radius: 50%;
/* 胶囊按钮 长方形 盒子高度的一半*/
border-radius: 

/* 
溢出部分显示效果 
	属性名: overflow
	值: 
		visible: 默认值。溢出部分可见
		hidden: 溢出部分隐藏
		scroll: 无论是否溢出，都显示滚动条
		auto: 根据是否溢出，自动显示或隐藏滚动条
*/
overflow: auto;

/* 
元素本身的隐藏 
	属性:
		1、visbility: hidden;
			简写: vh
		2、display: none;
			简写: dn
	区别:
		1、visbility占位隐藏
		2、display不占位隐藏
*/
display: none;

/* 
整体透明(包含内容和子级)
	属性名: opacity
	值: 0-1数字
		1: 完全不透明
		0: 完全透明
*/
opacity: 0.5;
```

### 精灵图

```css
/*
精灵图
	场景: 将多张小图合并成一张大图，这张大图称为精灵图
	优点: 减少服务器发送的次数，减轻服务器的压力，提高页面的加载速度
	使用步骤:
		1、创建一个盒子，设置盒子的尺寸和小图尺寸相同
		2、将精灵图设置为盒子的背景图片
		3、修改背景图的位置: 测量小图左上角坐标，取负值给x y
			位移背景图片的位置
			background-position: x y;
*/
```

### 背景图片大小

```css
/*
背景图片大小
	语法: background-size: 宽度 高度
	取值: 
		1、数字 + px (常用)
		2、百分比
		3、contain: 图片显示全，将图片等比例缩放，直到不会超出盒子的最大值
		4、cover: 图片可能显示不全，将图片等比例缩放，直到刚好填满整个盒子没有空白
*/

/* 连写 */
background: color image repeat position/size;
```

### 阴影

```css
/* 
文字阴影 
	语法: text-shadow
	取值: 水平偏移量 垂直偏移量 模糊程度 颜色
*/
text-shadow: 5px 5px 5px #FF0000;

/*
盒子阴影
	语法: box-shadow
	取值:
		h-shadow: 必须，水平偏移量
		v-shadow: 必须，垂直偏移量
		blur: 可选，模糊度
		spread: 可选，阴影扩大
		color: 可选，阴影颜色
		inset: 可选，将阴影改为内部阴影
*/
box-shadow: 
```

### 过渡

```css
/*
过渡
	作用: 让元素的样式慢慢改变，常配合hover使用，增强网页的交互体验	
	属性名: transition
	取值:
		1、过渡的属性: 
			all: 所有你过渡的属性都过渡
			具体的属性名
		2、过渡时长: 数字 + s(秒)
	注意: 谁变化谁添加transition属性
*/
transition: all 1s;
```

### 平面转换

```css
/*
  属性名: transform
	属性值: 
		translate(x, y): 位移
		: 旋转
		: 缩放
*/
/* 
位移
	简写: tftl
	取值
		数值 + px
		百分比: 依据自身盒子的大小
		只给一个值默认X
*/
transform: translate(x, y)
transform: translateX(x)
transform: translateY(y)
/* 实现水平垂直居中  */
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);

/* 
旋转
	简写: tfr
	语法: transform: rotate(角度)
	取值:
			正: 顺时针
			负: 逆时针
*/
transform: rotate(360deg)
/* 
改变原点
	简写: tfo
	取值: 方位名词(常用)
*/
transform-origin: right bottom

/* 
多重转换(复合属性 空格隔开) 
	注意: 层叠性 不可分开写
*/
/* 先位移 后旋转 旋转会改变坐标轴*/
transform: translate() rotate();

/* 
缩放
	语法: transform: scale(x, y)
	取值: 缩放倍数
*/
transform: scale(1.2)
```

### 渐变

```css
/*
渐变
	简写: bglg
	属性名: background-image
	值: linear-gradient(颜色1,颜色2);
*/
background-image: linear-gradient(
  颜色1,
  颜色2, 
  ...
);
/* 纯色-透明 */
background-image: linear-gradient(
	/* 纯色 */
	transparent,
	rgba(0,0,0,.6)
);
```

### 空间转换

```css
/* 
空间转换 3D转换
	属性名: transform
	值: z+ 指向自己
	语法: transform: translate3d(x,y,z)
	注意: perspective 透视效果, 近大远小 (能看见z轴变化，给父级添加，建议数值800-1200)
*/
perspective: 1000px;
transform: translate3d(x,y,z)
transform: translateX(x)
transform: translateY(y)
transform: translateZ(z)

/*
  空间旋转(左手法则)
*/
transform: rotateZ(z)
transform: rotateX(x); 正上负下
transform: rotateY(y); 正右负左
transform: rotate3d(x,y,z); 自定义旋转坐标轴位置，x,y,z取0-1之间的数字

/* 
立体
	简写: tfs
	语法: transform-style: preserve-3d;
	用法: 子元素处于3d空间
	默认值(2d空间): flat
*/
transform-style: preserve-3d;

/*
空间缩放
	属性名: transform: scale3d(x,y,z)
*/
transform: scaleX(x)
transform: scaleY(y)
transform: scaleZ(z)
transform: scale3d(x,y,z)
```

### 动画

```css
/* 
动画
	属性名: animation
	实现步骤:
		1、定义动画:
			两个状态
      @keyframes 动画名称 {
			 初始状态和动画开始状态一样，可省略
        from {}
        to {}
      }
			多个状态 动画总时长的占比
      @keyframes 动画名称 {
        0% {}
        10% {}
        15% {}
        100% {}
      }

		2、使用动画:
		animation: 
			动画名称1 时长1, 
			动画名称2 时长2;
    animation: 动画名称 动画时长 速度曲线 延迟时间 重复次数 动画方向 执行完毕时状态;
*/
/* 匀速 */
linear
/* 分步 */
strps(3)
/* 无限循环 */
infinite
/* 交替 */
alternate
/* 动画停留结束状态 */
forwards

/* 动画名称 */
animation-name
/* 动画时长 */
animation-duration
/* 延迟时间 */
animation-delay
/* 
动画名执行完毕时状态 
	取值: forwards; 最后一帧状态
*/
animation-fill-mode
/* 
速度曲线
	取值: strps(N); 逐帧动画
	精灵图里面小图有几个。N就写几
*/
animation-timing-funcion
/* 
重复次数
	取值: infinite; 无限循环
*/
animation-iteration-count
/* 
执行方向
	取值: alternate; 交替
*/
animation-direction
/* 
暂停动画
	取值: paused; 暂停，通常配合:hover使用
*/
animation-play-state

/* 
无缝动画
	补全显示区域，填充留白
*/
```

### Flex布局

```css
/*
Flex布局/弹性布局
	特点:
    是一种浏览器提倡的布局模型
    布局网页更简单、灵活
    避免浮动脱标问题
    结构化布局
	用法:
		父元素(弹性容器)添加display: flex;
		子元素(弹性盒子)可以自动的挤压或拉伸
	组成部分:
		弹性容器
		弹性盒子
		主轴(默认水平)
		侧轴 / 交叉轴
*/
display: flex;

/* 
主轴对齐方式
	属性名: justify-content
	值:
		flex-start; 默认值，起始开始依次排列
		flex-end; 终点开始依次排列
		center; 沿主轴居中排列
		space-around; 弹性盒子沿主轴均匀排列，空白间距均匀分布在盒子两侧
		space-between; 弹性盒子沿主轴均匀排列，空白间距均匀分布在相邻盒子之间
		space-evenly; 弹性盒子沿主轴均匀排列，弹性盒子与容器之间间距相等
*/
justify-content: space-evenly;

/*
侧轴对齐方式
	属性名: 
		align-items (弹性容器)
		align-self (弹性盒子)
	属性值:
		flex-start;
		flex-end;
		center; 沿侧轴居中排列
		stretch; 默认值，子级盒子没高度，沿侧轴线被拉伸至铺满容器。
*/
align-items: center;

/* 
伸缩比
	属性名: flex
	取值: 数值(整数)
	注意: 只占用父盒子剩余尺寸
*/

/* 
主轴方向
	属性名: flex-direction
	取值: 
		row; 行，水平(默认值)
		column; 列，垂直
		row-reverse; 行，从右往左
		column-reserve;	列，从下往上
*/
flex-direction: column;

/* 
弹性盒子换行
	属性名: flex-wrap
	取值:
		nowrap; 默认值，不换行
		wrap; 换行
*/
flex-wrap: wrap;

/*
调整行对齐方式
	属性名: align-content
*/
align-content: space-between;
```

### 单行文字溢出省略

```css
/* 父级 */
flex: 1;
width: 0;

/* 显示省略符号来代表被修剪的文本。 */
text-overflow: ellipsis;
/* 不换行 */
white-space: nowrap;
/* 溢出隐藏 */
overflow: hidden;
```

### 响应式网页

```css
/* 
媒体查询
	媒体特性: max-width、min-width ...
	关键词: and、only、not
	媒体类型:
		screen: 屏幕
		print: 打印预览
		speech: 阅读器
		all: 默认值，包括以上3种
*/
@media 关键词 媒体类型 (媒体特性) {
  选择器 {
    样式
  }
}

@media (媒体特性) {
  选择器 {
    样式
  }
}
@media (max-width: 100px) {
  选择器 {
    样式
  }
}
/* 特定条件下生效对应的css样式 */
<link rel="stylesheet" href="css" media="(min-width:)">

BootStrap
```

### BootStrap 框架

```css
/* 引入 */
<link rel="stylesheet" href="./bootstrap-3.4.1-dist/css/bootstrap.min.css">

/* 
版心: container
	注意: 左右自带 15px padding
*/
<div class="container"></div>

/* 
宽度100%: container-fluid
	注意: 左右自带 15px padding
*/
<div class="container-fluid"></div>

/* 
row: 自带间距 -15px
	抵消container 15间距
*/
<div class="container">
	<div class="row"></div>
</div>

/* 
响应式: 栅格系统
	默认将网页分为12等分
	超小屏幕: 
		响应断点: < 768px
		类前缀: col-xs-*
	小屏幕:
		响应断点: >= 768px
		类前缀: col-sm-*
	中等屏幕:
		响应断点: >= 992px
		类前缀: col-md-*
	大屏幕:
		响应断点: >= 1200px
		类前缀: col-lg-*
*/

/* 
全局样式: 表格、按钮 ... 等
组件: 复制粘贴 改内容
插件: 交互效果
	引入 jQuery.js、bootstrap.min.js
*/

```
