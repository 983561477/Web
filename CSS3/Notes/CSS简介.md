## CSS

> 层叠样式层
> Cascading style sheets
> 重复的样式，后覆盖前

### 书写顺序

```css
/*
CSS书写顺序(浏览器的执行效率更高):
	1、浮动 / display
	2、盒子模型: 
		margin、border、padding、宽高背景色
	3、文字样式
*/
```

### 位置

```css
/* 
内嵌式: 
	位置: 写在style标签中
	提示: 可以写在页面的任意位置，但是通常约定写在head标签中
*/

<head>
  <style>
    选择器 {
      k:v;
    }
  </style>
</head>

/*
外联式(项目): 
	位置: 写在一个单独的.css文件中
	提示: 需要通过link标签在网页中引入
*/
<link rel="stylesheet" href="">

/*
行内式:
	位置: 写在标签的style属性中
	提示: 配合js使用
*/
<div style="color: green; ..."></div>
```

### 注释

```css
ctrl + /
/* 注释 */
```

### CSS特性

```css
/*
继承性
	特点: 子元素有默认继承父元素样式的特点
	属性(文字控制属性都可以继承):
		1、color
		2、font-
		3、text-
		4、line-height
		5、......
*/

/*
层叠性
	特点: 优先级相同，后覆盖/追加前
*/

/*
优先级
	特点: 不同选择器具有不同优先级，优先级高的选择器样式会覆盖优先级低的选择器样式
	公式(由大到小): 作用范围越小，优先级越高 
		1、!important
		2、行内样式
		3、id选择器
		4、类选择器
		5、标签选择器
		6、通配符选择器
		7、继承
	注意:
		1、!important写在属性值的后面，分号的前面
		2、!inportant不能提高继承的优先级，只要是继承优先级最低
		3、实际开发中不建议使用!important
		4、复合选择器: 依次比较优先级标签的个数
*/
```

### 盒子模型

```css
/* 
  清除标签默认的内外边距
  内减模式
*/
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* 去掉列表的符号 */
ul {
  list-style: none;
}

/* 去掉a标签的下划线 */
a {
  text-decoration: none;
}

/* 版心居中 */
div {
  margin: 0 auto;
}

/* 去除文字行高边距(自己添加外边距) */
h3 {
  line-height: 1;
}

/*
内容区域(content)
	属性: width/height
	值: 数字 + px
*/
div {
  width: 300px;
  height: 300px;
  background-color: pink;
}

/*
内边距区域(padding)
*/
padding: 30px;
/* 上 右 下 左 */
padding: 10px 20px 30px 40px;
/* 上 左右 下 */
padding: 10px 20px 30px;
/* 上下 左右 */
padding: 10px 20px;

/*
边框区域(border)
		快捷键: bd
		值:
			1、大小
			2、线条样式:
				solid: 实线
				dashed: 虚线
				dotted: 点线
			3、颜色
		备注: 会撑大盒子
*/
border: 1px solid #000;
border-left: 1px dashed #000;
border-style: dotted;

/*
外边距区域(margin)
	用法同padding
*/
margin: 50px;


/* 
盒子大小 = width(height) + 边框线
	注意: 
		1、合并问题:
		场景: 垂直布局的块级元素上下的margin会合并
			最终的距离为margin的最大值
		解决: 给一个盒子设置margin即可
		2、塌陷现象:
		场景: 互相嵌套的块级元素，子元素的margin-top会作用于父元素上
		结果: 导致父元素一起往下移动
		解决:
			1、给父元素设置border-top或padding-top(去除子元素的margin-top)
			2、给父元素设置overflow: hidden;(完美)
			3、转换成行内块元素
			4、设置浮动
自动内减(CSS3)
		3、行内元素 内外边距的垂直位置 不生效
        margin-top
        margin-bottom
        padding-top
        padding-bottom
			解决: line-height
*/

/*
	恢复盒子到基础宽高大小
	简写: bsz
*/
box-sizing: border-box;
```

