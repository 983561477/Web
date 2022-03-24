### 客户端 与 服务器

```javascript
// 服务器
存放和对外提供资源的电脑

// 客户端
获取和消费资源的电脑
```

### URL地址

```javascript
// URL 统一资源定位符
三部分组成
	1、客户端与服务器之间的 通信协议
  2、存有该资源的 服务器名称
  3、资源在服务器上具体的 存放位置
```

### 通信过程

```javascript
// 请求
// 处理
// 响应
```

### 请求数据

```javascript
// XMLHttpRequest(简称 xhr)
var xhrObj = new XMLHttpRequest();

// get 获取服务器资源
// post 向服务器提交资源
```

### Ajax

```javascript
// 网页与服务器之间数据交互
// jQuery中的Ajax
// $.get() utl:字符串、data:object、callback:function
$.get(url, [data], [callback])
$.get('url', function(res) { console.log(res) })
// $.post()
$.post(url, [data], [callback])
// $.ajax()
$.ajax({
  type: '',		// 请求方式 'GET'、'POST'
  url: '',		// url地址 数据接口
  data: {},		// 携带数据
  success: function(res) {}		// 请求成功后的回调函数
})

// 接口测试工具 不写代码调用接口 PostMan
```

### 接口

```javascript
// 接口文档
1、接口名称
2、接口URL
3、调用方式
4、参数格式
5、响应格式
6、返回示例
```

### form 表单

```javascript
// 数据采集 <form></form>
1、表单标签
2、表单域
3、表单按钮

// 属性
action		// url地址 未指定 默认值 当前url
method		// get / post
enctype		// 数据编码
	application/x-www-form-urlencoded		// 发送前编码所有字符(默认)
	multipart/form-data			// 不对字符编码 上传文件必须使用
target		// 规定在何处打开action url
	_blank		// 在新窗口打开
  _self			// 默认值 在相同框架中打开 覆盖原页面
  
// 同步提交
1、整个页面跳转
2、整个页面状态、数据丢失
// 解决方法
表单采集数据 Ajax传输数据

// Ajax提交表单数据
1、监听表单提交事件 submit
2、阻止表单默认行为 e.preventDefault()
3、获取表单数据 serialize()
```

