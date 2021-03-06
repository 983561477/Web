### 基础选择器

```css
/* 标签选择器 */
标签名 {
  css属性名: 属性值;
}

/* 
类选择器
	class属性
	注意:
		1、可由数字、字母、下划线、中划线组成，但不能以数字或中划线开头
		2、一个标签可以同时有多个类名，类名之间以空格隔开
		3、类名可以重复
*/
.类名 {
  css属性名: 属性值;
}

/*
id选择器
	id属性
	注意: 一对一，不可重复
*/
#id属性值 {
  css属性名: 属性值;
}

/* 通配符选择器 */
* {
  css属性名: 属性值;
}
```

### 进阶选择器

```css
/*
复合选择器
	属性名:
    后代选择器: 选择器1 选择器2 {css}
			备注: 儿子 孙子 重孙子 ...
    子代选择器: 选择器1 > 选择器2 {css}
			备注: 只选儿子
		并集选择器: 选择器1, 选择器2, ... {css}
		交集选择器: 选择器1选择器2 {css}
			备注: 中间没有分隔
		hover伪类选择器: 选择器:hover {css}
			备注: 鼠标悬停样式(任何标签都有hover)
*/
div p {}
div > p {}
div, p {}
p.class1 {}
p:hover {}
```

### 结构伪类选择器

```css
/*
  作用: 根据元素在HTML中的结构关系查找元素
  优势: 减少对于HTML中类的依赖，有利于保持代码整洁
  场景: 常用语查找某父级选择器中的子元素

	n可以组成常见的公式
		0、1、2、3、4、5、6、......
		偶数: 2n、even
		奇数: 2n+1、2n-1、odd
		倍数：3n、4n、5n、......
		找到前5个: -n+5
		找到从第5个往后: n+5
*/

/* 匹配父元素中第一个子元素，并且是E元素 */
E:first-child {}
/* 匹配父元素中最后一个子元素，并且是E元素 */
E:last-child {}
/* 匹配父元素中第n个子元素，并且是E元素 */
E:nth-child(n) {}
/* 匹配父元素中倒数第n个子元素，并且是E元素 */
E:nth-last-child(n) {}

例子: 
<ul>
	<li></li>
  <li></li>
  <li></li>
</ul>

li:first-child() {}
```

### 伪元素

```css
/* 
伪元素:
  一般页面中的非主体内容可以使用伪元素 
区别:
	1、元素: HTML设置的标签
	2、伪元素: 由CSS模拟出的标签效果
种类:
	::before
		在父元素内容的最前面添加一个伪元素
	::after
		在父元素内容的最后添加一个伪元素
注意:
	1、必须设置content属性才能生效
	2、伪元素默认是行内元素、宽高不生效
*/

.father::before {
  /* 内容 */
  content: '';
}
```

### 浮动（重要）

```css
/*
	前提: 浏览器解析行内块时，代码换行会引起空格	
	作用: 
		早先: 文字环绕
		现在: 网页布局
	特点:
		1、脱离标准流，在标准流中不占位置
		2、浮动比标准流高半个级别，可以覆盖标准流中的元素
		3、左右浮动、顶对齐、行内块特点(一行显示多个、宽高生效)
	注意:
		不能通过以下设置居中
			text-align:center;
			margin: 0 auto;
		父级宽度不够，浮动下移
*/
/* 简写: fl */
float: left;

/* 简写: flr */
float: right;

/* 
清除浮动
	含义: 清除浮动带来的影响
	影响: 如果子元素浮动了，此时子元素不能撑开标准流的块级父元素
	原因: 子元素浮动后脱标，不占位置
	目的: 需要父元素有高度，从而不影响其他网页元素布局
	解决: 
		1、直接设置父元素高度	
		2、额外标签法
			① 在父元素内容的最后添加一个块级元素
				<div class="clearfix"></div>
			② 给添加的块级元素设置clear:both;(清除左右两侧浮动的影响)
		3、单伪元素清除法(★项目)
		4、双伪元素清除法(★项目)
		5、overflow: hidden; (★方便)
*/
/* 单伪元素 */
/* 基本写法 */
.clearfix::after {
  /* 伪元素必备 */
	content: '';
  /* 因为伪元素添加的元素是行内元素 */
  display: block;
  /* 清除浮动 */
  clear: both;
}
/* 补充写法 */
.clearfix::after {
	content: '';
  display: block;
  clear: both;
  /* 在网页中看不到伪元素 */
  height: 0; /* 为了兼容性 */
  visibility: hidden;
}

/* 双伪元素 */
/* .clearfix::before 解决外边距塌陷问题 */
.clearfix::before,
.clearfix::after {
	content: '';
  /* 显示模式转换为表格 */
  display: table;
}
/* 真正清除浮动的标签 */
.clearfix::after {
  clear: both;
}
```

