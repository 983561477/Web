## HTML标签

### 排版标签
```html
<!-- 6个标题 -->
<!-- ctrl+d -->
<h1>1级标题</h1>
<h2>2级标题</h2>
<h3>3级标题</h3>
<h4>4级标题</h4>
<h5>5级标题</h5>
<h6>6级标题</h6>

<!-- 段落(paragraph) -->
<p>段落</p>

<!-- 换行 -->
<br>

<!-- 水平线(horizon) -->
<hr>
```

### 文本格式化标签
```html
<!-- 加粗(Bold) -->
<b>加粗</b>
<strong>加粗(重要语义)</strong>

<!-- 下划线(Underline) -->
<u>下划线</u>
<ins>下划线(重要语义)</ins>

<!-- 倾斜(tilt) -->
<i>倾斜</i>
<em>倾斜(重要语义)</em>

<!-- 删除线(delete) -->
<s>删除线</s>
<del>删除线(重要语义)</del>
```

### 媒体标签
```html
<!-- 
图片(image)标签
  标签: 
		<img>
  属性: 
    src: 路径
    alt: 替换文本(当图片不显示时显示的文字)
    title: 提示文本(当鼠标悬停时，才显示的文本)
    width: 宽
    height: 高
    如果只设置宽/高，另一个会等比例缩放
    开发中一般只设置其中一个
 -->
<img src="" alt="" title="">

<!-- 
音频(audio)标签
  标签: 
		<audio></audio>
  属性: 
    src: 路径
    controls: 显示播放控件
    autoplay: 自动播放(部分浏览器不支持)
    loop: 循环播放
  支持格式: MP3、Wav、Ogg
 -->
<audio src="" controls></audio>

<!-- 
视频(video)标签
  标签: 
		<video></video>
  属性: 
    src: 路径
    controls(控制): 显示播放控件
    autoplay: 自动播放(谷歌浏览器中需要配合muted实现静音播放)
    loop(回路): 循环播放
  支持格式: MP4、WebM、Ogg
 -->
<video src="" controls></video>

<!-- 
链接标签
  标签: 
    <a></a>
  属性: 
    href: 跳转地址(# 默认空)
    target(目标): 打开形式
      _self: 默认值(当前窗口跳转，覆盖原网页)
      _blank: 在新窗口中跳转(保留原网页)
 -->
 <a href="" target=""></a>
```

### 列表标签

```html
<!--
无序列表标签
	注释: 
    Unordered list
    圆点标识
	标签: 
		<ul></ul>: Unordered list
		<li></li>: lsit
	属性: 
-->
<ul>
	<li></li>
  ......
  <li></li>
</ul>

<!--
有序列表标签
	注释: 
    Ordered list
    序号标识
	标签: 
		<ol></ol>: Ordered list
		<li></li>: lsit
  属性: 
-->
<ol>
	<li></li>
  ......
  <li></li>
</ol>

<!--
自定义列表标签
	注释: 
    define list
    dd前会默认显示缩进效果
	标签:
		<dl></dl>: define list
		<dt></dt>: define tile
		<dd></dd>: define describe
	属性: 
-->
<dl>
  <dt>主题</dt>
  <dd>内容项</dd>
  ......
  <dd>内容项</dd>
</dl>
```

### 表格标签

```html
<!--
表格(table)标签
	标签: 
		<table></table>: table
		<caption></caption>: 说明文字
		<tr></tr>: table row
		<th></td>: table head
		<td></td>: table describe
	属性: 
		<table>
			border(边框宽度)：数字
		rowspan: 跨行合并(保留上)
			值: 合并的个数
		colspan: 跨列合并(保留左)
			值: 合并的个数
-->
<table border='1'>
  <caption>表格标题</caption>
  <!--表头-->
	<tr>
  	<th></th>
    ......
    <th></th>
  </tr>
  <!--内容-->
  <tr>
  	<td></td>
    ......
    <td></td>
  </tr>
  ......
  <tr>
  	<td></td>
    ......
    <td></td>
  </tr>
</table>

<!--
表格结构标签
	标签: 
    <thead></thead>: 表格头部
    <tbody></tbody>: 表格主体
    <tfoot></tfoot>: 表格底部
-->
<table border='1'>
  <caption>表格标题</caption>
  <!--头部-->
  <thead>
    <tr>
      <th></th>
      ......
      <th></th>
    </tr>
  </thead>
  <!--主体-->
  <tbody>
    <tr>
      <td></td>
      ......
      <td></td>
    </tr>
    ......
    <tr>
      <td></td>
      ......
      <td></td>
    </tr>
  </tbody>
  <!--底部-->
  <tfoot>
    <tr>
      <td></td>
      ......
      <td></td>
    </tr>
  </tfoot>
</table>
```

### 表单标签

```html
<!--
输入标签
	标签: 
		<input>
	属性: 通过type属性值的不同，展示不同的效果
		type(类型): 
			text: 文本框(单行文本)
				placeholder(占位符): 提示文本
			password: 密码框
			radio: 单选框(多选一)
				name: 分组
				checked: 默认选中
			checkbox: 多选框(多选多)
			file: 文件选择(上传文件)
				multiple(倍数): 可选择多个文件
			submit: 提交按钮
			reset: 重置按钮
			button: 普通按钮
				value: 内容文字
-->
文本框<input type="text">
密码框<input type="password">
单选框<input type="radio" name="" checked>
多选框<input type="checkbox">
上传文件<input type="file" multiple>
提交按钮<input type="submit">
重置按钮<input type="reset">
普通按钮<input type="button" value="普通按钮">

<!--
表单域标签
	标签: 
    <from></from>
-->
<from ></from>

<!--
按钮标签
	标签: 
    <button></button>
	属性: 
		type:
			submit: 提交按钮
			reset: 重置按钮
			button: 普通按钮
-->
<button type="submit">提交按钮</button>
<button type="reset">重置按钮</button>
<button type="button">普通按钮</button>

<!--
下拉菜单标签
	标签:
    <select></select>: 整体
    <option></option>: 选项
	属性: 
		selected: 默认选中
-->
<select>
  <option>选项1</option>
  ......
  <option selected>选项n</option>
</select>

<!--
文本域标签
	用途: 多行文本
	标签:
    <textarea></textarea>
	属性: 
		cols: 可见宽度
		rows: 可见行数
-->
<textarea cols="60" rows="30"></textarea>

<!--
label标签
	用途: 绑定内容与表单标签的关系
	使用方法
		一:
		1、使用label标签将内容包裹起来
		2、在表单标签上添加id属性
		3、在label标签的for属性中设置对应的id属性值
		二: 
		1、直接使用label标签把内容和表单标签一起包裹起来
		2、需要把label标签的for标签属性删除即可
	标签:
    <label></label>
-->
<!--方法一-->
<input type="radio" name="sex" id="male"> <label for="male">男</label>
<!--方法二-->
<label><input type="radio" name="sex">女</label>
```

### 语义化标签

```html
<!--
无语义标签
	标签:
		<div></div>: 独占一行
		<span></span>: 
-->
<div></div>
<span></span>

<!--
有语义标签
	场景: HTML5(手机端常用)
	标签:
		<header>: 网页头部
		<nav>: 网页导航
		<footer>: 网页底部
		<aside>: 网页侧边栏
		<section>: 网页区块
		<article>: 网页文章
-->
<header>网页头部</header>
<nav>网页导航</nav>
<footer>网页底部</footer>
<aside>侧边栏</aside>
<section>网页区块</section>
<article>网页文章</article>
```

### 字符实体

```html
<!--空格-->
&nbsp;
```

### 嵌套规范

```html
<!--
块级元素一般作为大容器
	注意: p标签不要嵌套div、p、h等块级元素
a标签内部可以嵌套任意元素
	注意: a标签不能嵌套a标签
-->
```

### SEO三大标签

```html
<!--
SEO(Search Engine Optimization): 搜索引擎优化
	作用: 让网站在搜索引擎上排名靠前
	常见方法: 
		1、竞价排名
		2、将网页制作成HTML后缀
		3、标签语义化(在合适的地方使用合适的引擎)
	语法:
		title: 网页标题标签
		description: 网页描述标签
			meta:desc
		keywords: 网页关键词标签
			meat:kw
-->
<title></title>
<meta name="description" content=""/>
<meta name="keywords" content=""/>
```

### favicon图标

```html
<link rel="shortcut icon" href="ico图标路径" type="image/x-icon">
```

