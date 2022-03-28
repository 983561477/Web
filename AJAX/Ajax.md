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

### 模板引擎

```javascript
// art-template
1、导入 art-template
2、定义数据
3、定义模板	// <script type="text/html"></script>
4、调用 template 函数	// template('模板ID', '数据')
5、渲染 HTML 结构

// 语法
{{}} 	// 标准语法
{{value}}		// 变量输出
{{@ value}}	// 原文输出 value包含了HTML结构 需要正常渲染

// 判断
{{if 表达式}}
 需要输出的内容
{{else if 表达式}}
{{/if}}
  
// 循环
{{each arr}}
	{{$index}}	// 索引
  {{$value}}	// 循环项
{{/each}}
  
// 过滤器 管道操作符
{{value | filterName}}
// 定义过滤器
template.defaults.imports.filterName = function(value) { /* return 处理结果 */ }

// 正则
// 检索字符串中正则表达式的匹配 成功返回结果 失败返回null
exec()
// 分组 ()
/{{\s*[(a-zA-Z]+)\s*}}/

// replace 替换
relace('需要替换的内容','替换的内容')
```

### Ajax 进阶

```javascript
// XMLHttpRequest
// GET
1、创建 xhr 对象
	var xhr = new XMLHttpRequest()
2、调用 xhr.open() 函数 url可携带参数
	xhr.open('GET', 'url')
3、调用 xhr.send() 函数
	xhr.send()
4、监听 xhr.onreadystatechange 事件
	xhr.onreadystatechange = function() {
    // 监听xhr对象的请求状态readyState; 与服务器的响应状态 status
    if (xhr.readyState ===4 && xhr.status == 200) {
      	// 服务器响应回来的数据
      	console.log(xhr.responseText)
    }
  }

// readState属性 表示当前Ajax请求所处的状态
4 DONE Ajax请求完成

// 查询字符串 参数1=值1&参数2=值2
url?参数1=值1&参数2=值2

// URL 编码 使用英文字符去表示非英文字符
encodeURI() 	// 编码
decodeURI()		// 解码

// POST
1、创建 xhr 对象
	var xhr = new XMLHttpRequest()
2、调用 xhr.open() 函数 url可携带参数(查询字符串)
	xhr.open('GET', 'url')
3、设置 Content-Type 属性(固定写法)
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
4、调用 xhr.send() 函数,同时指定要发送的数据
	xhr.send('查询字符串')
5、监听 xhr.onreadystatechange 事件
	xhr.onreadystatechange = function() {
    // 监听xhr对象的请求状态readyState; 与服务器的响应状态 status
    if (xhr.readyState ===4 && xhr.status == 200) {
      	// 服务器响应回来的数据
      	console.log(xhr.responseText)
    }
  }

// 数据交换格式 XML JSON
// XML 可扩展标记语言 效率低 解析麻烦
<note>
  <to>发送给谁</to>
	<from>谁发送</from>
	<heading>发送主题</heading>
	<body>发送内容</body>
</note>

// JSON JavaScript对象表示法 本质是字符串
// value：数字、字符串、布尔值、null、数组、对象
// 对象结构 字符串用双引号
{"key":value, ...}
// 数组结构
[value, ...]

 // 声明
 var json = '{}'
 var json = '[]'
 
 // JOSN 和 JS 对象之间转化
 JSON.parse()				// JSON -> JS		反序列化	字符串 -> 对象
 JSON.stringify()		// JS -> JSON		序列化		对象 -> 字符串
 
 // XMLHttpReqyest Level2
 1、可以设置 HTTP 请求的时限
 	// timeout 设置超时时限
 	xhr.timeout = 3000
 	// 超时事件 回调函数
 	xhr.ontimeout = function(e) { console.log('请求超时！') }
 2、可以使用 FormData 对象管理表单数据 H5
 	// 新建 FormData 对象
 	var fd = new FormData()
  var fd = new FormData(form)	// 自动填充form表单元素内的表单项
  // 为 FormData 添加表单项
  fd.append('uname', '张三')
 	// 创建 XHR 对象
 	var xhr = new XMLHttpRequest()
  // 指定请求类型与URL地址
  xhr.open('POST', 'url')
 	// 直接提交 FormData 对象 这与页面表单提交效果一样
 	xhr.send(fd)
  // 监听 xhr.onreadystatechange 事件
  xhr.onreadystatechange = function() {
     // 监听xhr对象的请求状态readyState; 与服务器的响应状态 status
     if (xhr.readyState ===4 && xhr.status == 200) {
       // 服务器响应回来的数据
       console.log(xhr.responseText)
     }
   }
 3、可以上传文件
 	// 定义 UI 结构
 		// 文件选择框
 		<input type="file" id="file1" />
    // 上传按钮
    <button id="btnUpload">上传文件</button>
 	// 验证是否选择了文件
 		// 获取上传文件的按钮
 		var btnUpload = document.querySelector('#btnUpload')
    // 为按钮添加 click 事件监听
    btnUpload.addEventListener('click', function() {
      // 获取文件列表
      var files = document.querySelector('#file1').files
      if (files.length <= 0) {
        return alter('请选择要上传的文件！')
      }
      // 向 FormData 中追加文件
    })
 	// 向 FormData 中追加文件
 		 	// 创建 FormData 对象
 			var fd = new FormData()
      // 追加文件
      fd.append('avatar', files[0])
 	// 使用 xhr 发起上传文件请求
      // 创建 XHR 对象
      var xhr = new XMLHttpRequest()
      // 指定请求类型POST与URL地址
      xhr.open('POST', 'url')
      // 直接提交 FormData 对象
      xhr.send(fd)
  // 监听 onreadystatechange 事件
  xhr.onreadystatechange = function() {
     // 监听xhr对象的请求状态readyState; 与服务器的响应状态 status
     if (xhr.readyState ===4 && xhr.status == 200) {
       // 服务器响应回来的数据
       var data = JSON.parse(xhr.responseText)
     }
   }
 4、可以获得数据传输的进度信息
 	// xhr.upload.onprogress	获取文件上传进度
 		// 创建 XHR 对象
 		car xhr = new XMLHttpRequest()
 		// 监听 xhr.upload 的 onprogess 事件
 		xhr.upload.onprogess = function(e) {
      // e.lengthComputable 是一个布尔值 表示当前上传的资源是否具有可计算的长度
      if (e.lengthComputable) {
        // e.loaded 已传输的字节
        // e.total 总字节
        var percentComplete = Math.ceil((e.loaded / e.total) * 100)
      }
    }
 	// Bootstrap 进度条美化
 
 // jQuery 文件上传
 $.ajax({
   method: 'POST',
   url: 'url',
   data: fd,
   // 不修改 Content-Type 属性
   contentType: false,
   // 不对 FormData 中的数据进行 url 编码， 原样发给服务器
   processData: false,
   success: function(res) {
     console.log(res)
   }
 })
 // ajaxStart(callback) 显示 loading 效果, 会监听文档内所有的Ajax请求
 $(document).ajaxStart(function() {
   $('#loading').show()
 })
 // ajaxStop(callback) 隐藏 loading 效果, 会监听文档内所有的Ajax请求
 $(document).ajaxStop(function() {
   $('#loading').hide()
 })
```

### Axios  库

```javascript
// Axios 是专注于网络数据请求的库 简单易用 轻量化
// get
axios.get('url', {params: { /*参数*/ }}).then(callback)
// 示例
var url = 'url'
var paramsObj = { name:'xx', age:18}
axios.get(url, { params: paramsObj }).then(function(res) {
  // res.data 是服务器返回的数据
  var result = res.data
})

// post
axios.post('url', { /*参数*/ }).then(callback)
// 示例
var url = 'url'
var paramsObj = { name:'xx', age:18}
axios.get(url, paramsObj).then(function(res) {
  // res.data 是服务器返回的数据
  var result = res.data
})

// axios
axios({
  method: '请求类型',
  url: '请求的URL地址',
  data: { /* POST数据*/ },
  params: {	/* GET参数 */ }
}).then(callback)
```

### 同源策略和跨域

```javascript
// 如果两个页面的协议，域名和端口都相同，则两个页面具有相同的源
// 同源策略: 浏览器不允许非同源的URL之间进行资源交互
// 跨域: 浏览器允许发起跨域请求。但是请求回来的数据会被浏览器拦截，无法被网页获取到
// JSONP 只支持GET 不支持POST 通过<script>标签src属性实现
<script>
  function success(data) {
  	console.log(data)
	}
</script>
<script src="utl?callback=success"></script>
// jQuery 中 JSONP , 会随机生成一个callback=jQueryxxx
// 实现原理: 在<head>标签内添加一个<script>标签，请求成功后移除
$.ajax({
  url: 'url',
  dataType: 'jsonp',
  // 自定义回调函数名称
  // jsonp: 'callback',
  jsonCallback: 'success',
  success: function(res) {
  	console.log(res)
  }
})

// CORS 

```

### 防抖和节流

```javascript
// 防抖策略: 当事件被触发后，延迟n秒再执行回调，如果n秒内事件再次被触发，则重新计时
// 定义计时器 触发事件清空 再调用

// 缓存对象 用户输入作为键 数据作为值 缓存到对象中 请求前优先从缓存中查询数据

// 节流策略: 减少一段时间内事件触发的频率
// 节流阀
```

### HTTP 进阶

```javascript
// HTTP 协议
// 通信: 信息的传递和交换
1、主体
2、内容
3、方式
// 通信协议: 规则和约定
网页内容传输: 超文本传输协议 HTTP协议
// 交互模型
请求 <-> 响应

// HTTP请求消息(HTTP请求报文): 客户端发送到服务器的消息
// 组成
1、请求行	// 组成部分使用空格隔开
	1、请求方式
  2、URL
  3、HTTP协议版本
2、请求头部	// 描述客户端的基本信息 键值对
	Host: 请求的服务器域名
  Connection: 客户端与服务器的连接方式(close 或 keepalive)
  Content-Length: 描述请求体的大小
  Accept: 客户端能接收什么类型的返回内容
	User-Agent: 请求的浏览器类型
  Content-Type: 发送数据类型
  Accept-Encoding: 客户端可接收的内容压缩编码形式
  Accept-Language: 客户端期望接收哪种人类语言的优先顺序
3、空行
4、请求体 // POST 方式提交到服务器的数据

// 响应消息(响应报文) 服务器响应给客户端的消息内容
1、状态行
	1、HTTP 协议版本
  2、状态码
  3、状态码的描述文本
2、响应头部	// 描述服务器的基本信息 键值对
3、空行
4、响应体		// 服务器响应给客户端的资源内容

// 请求方法 表明要对服务器上的资源执行的操作 GET POST
GET: 获取服务器上的资源
POST: 向服务器提交资源
PUT: 修改服务器上的旧资源
DELETE: 删除服务器上的指定资源

// 响应状态码 标识响应的状态
// 由三个十进制数字组成，第一个十进制数字定义了状态码的类型 后两个数字对状态码进行细分
1** 信息
2** 成功
	200 OK 请求成功 GET POST
  201 Created 已创建 POST PUT
3** 重定向
	301 Moved Permanently 永久移动 返回新的URL
  302 Found 临时删除
  304 Not Modified 未修改
4** 客户端错误
	400 Bad Request 语义有误 参数有误
  401 Unauthorized 请求需要用户验证
  403 Forbidden 服务器拒绝执行
  404 Not Found 服务器无法根据客户端的请求找到资源(网页)
	408 Request Timeout 请求超时
5** 服务器错误
	500 Internal Server Error 服务器内部错误
	501 Not Implemented 服务器不支持该请求方法
  503 Service Unavailable 服务器超载或系统维护，无法处理客户端请求
```

### 请求方法

```javascript

```
