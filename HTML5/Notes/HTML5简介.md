### HTML5
> Hyper Text Markup Language
> 超文本标记语言


#### 骨架结构
+ **VScode快捷键**
> !+Enter

```html
<!--告诉浏览器该网页的HTML版本-->
<!DOCTYPE html>
<!--
标识网页使用的语言
	作用: 搜索引擎归类 + 网页翻译
	创建语言: zh-CN 简体中文 / en 英文
-->
<html lang="en">
<head>
  	<!--
		标识网页使用的字符编码
		常见字符编码:
			1、UTF-8: 万国码 (开发)
			2、GB2312: 6000+ 汉字
			3、GBK: 20000+ 汉字
		-->
    <meta charset="UTF-8">
  	<!--解决IE浏览器兼容性-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
  	<!-- 宽度 = 设备宽度: 移动端网页开发-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>网页标题</title>
</head>
<body>
    网页主体
</body>
</html>
```

#### 注释
+ **VScode快捷键**

> ctrl+/

```html
<!-- -->
```

#### 路径
+ **绝对路径**
从根路径出发
+ **相对路径**
  从当前文件出发
    + 同级目录：./ 或 省略
    + 下级目录：文件夹/
    + 上级目录：../

### 网页开发

```html
<!--
主导航
	li>a: 网页的解析效率更高
-->
<li>
	<a></a>
</li>
```

