### Node.js

```javascript
// 浏览器: JavaScript 前端运行环境
// Node.js: JavaScript 后端运行环境,基于 Chrome V8

// 查看 Node.js 版本号
node -v

// 执行 JavaScript 代码
1、打开终端
2、node js文件路径

1、打开指定目录
2、Shift + 鼠标右键 选择Powershell

// 终端快捷键
1、↑ 		// 上一次命令
2、↓ 		// 下一次命令
3、tab 	// 补全路径
4、esc		// 清空当前命令
5、cls		// 清空终端
```

### fs 文件系统模块

```javascript
// 导入 fs 模块
const fs = require('fs')
// 读取指定文件中的内容
fs.readFile(path[, options], callback)
	1、path: 文件路径
  2、options: 编码格式 默认 utf8
  3、callback: 回调函数
		function(err, dataStr) {
      // 读取成功，则 err 的值为 null
      // 读取失败，则 err 的值为 错误对象， dataStr 的值为undefined
      // 失败的结果
      console.log(err)
      // 成功的结果
      console.log(dataStr)
    }
	
	// 例
	fs.readFile('./1.txt', 'utf8', function(err, result) { 
    if (err) {
      return console.log('文件读取失败！' + err.message)
    }
    console.log('文件读取成功，内容是：' + result)
  })

// 向指定文件中写入内容
fs.writeFile(file, data[, options], callback)
	1、file: 文件路径	// writeFile 不能创建路径
  2、写入的内容			// 新内容会覆盖旧内容
  3、格式，默认 utf8
  4、回调函数
  	function(err) {
      // 写入成功，则 err 为 null
      // 写入失败，则 err 为 错误对象
      console.log(err)
    }

	// 例
	fs.readFile('./2.txt', '写入内容', function(err) { 
    if (err) {
      return console.log('文件写入失败！' + err.message)
    }
    console.log('文件写入成功)
  })
```

### path 路径模块

```javascript
const path = require('path')
1、path.join([...paths])		// 拼接路径
	const pathStr = path.jion('/a', '/b/c', '../'. './d', 'e')	// \a\b\d\e
  const pathStr = path.join(__dirname, './files/1.txt')	// 当前文件所处目录\files\1.txt
2、path.basename(path[, ext])		// 将文件名解析出来,获取路径中的最后一部分
	path: 文件路径
  ext: 文件扩展名
  const fpath = '/a/b/c/index.html'
  let fullName = path.basename(fpath)	// index.html
  let nameWithoutExt = path.basename(fpath, '.html')	// index
3、path.extname(path)		// 获取文件的后缀名
	  const fpath = '/a/b/c/index.html'
  let ext = path.extname(fpath)	// .html
```

### http 模块

```javascript
const http = require('http')

// 服务器和普通电脑的区别 服务器安装了 web 服务器软件, 如IIS、Apache等

// IP 地址 计算机的唯一标识
格式: 点分十进制表示 a.b.c.d	范围 0~255

//  本机 IP: 127.0.0.1	域名: localhost

// 域名和域名服务器
IP地址和域名是一一对应的关系，存放与域名服务器(DNS)

// 端口号	对应不同的Web服务
1、每个端口号不能同时被多个Web服务占用
2、80端口可以被省略

// 创建 Web 服务器
1、导入 http 模块
	const http = require('http')
2、创建 Web 服务器实例
	const server = http.createServer()
3、为服务器实例绑定 request 事件，监听客户端的请求
	// 使用服务器实例的.on() 方法，
	server.on('request', (req, res) => {
    // 客户端请求，就会触发 request 事件，从而调用这个事件处理函数
    console.log('有人访问了我们的服务')
  })
4、启动服务器
	// 调用 server.listen(端口号, cb回调函数) 启动 web 服务器
	server.listen(8080, () => {
    console.log('服务运行中 http://127.0.0.1')
  })

// req 请求对象: 访问与客户端相关的数据或属性
server.on('request', (req, res) => {
	// req 是请求对象 包含了与客户端相关的数据和属性 例如:
  req.url			// 客户端请求的 url 地址
  req.method 	// 客户端的 method 请求类型
})

// res 响应对象： 访问与服务器相关的数据或属性
server.on('request', (req, res) => {
  // 解决中文乱码
  res.setHeader('Content-Type', 'text/html: charset=utf-8')
	// res.end 向客户端发送指定的内容，并结束这次请求
  res.end('收到')
})

// 根据不同的 url 响应不同的内容
1、获取请求的 url 地址
2、设置默认的响应内容为 404 Not found
3、判断用户请求的是否为 / 或 /index.html 首页
4、设置Content-Type 响应头，防止中文乱码
5、使用 res.end() 将内容响应给客户端
```

### 模块化

```javascript
// 分类
1、内置模块
2、自定义模块
3、第三方模块

// 加载模块 加载时会执行模块代码 可以省略 .js 后缀名
require()		// 导入的结果永远以 module.exports 指向的对象为准

// 模块作用域

// module 对象	存储和当前模块有关的信息
module.exports	// 将模块内的成员共享出去 默认 {}
// exports 对象
exports === module.exports		// true
// 使用误区
导出的结果永远以 module.exports 指向的对象为准
```

### npm

```javascript
// 包: 第三方模块
moment	// 时间格式化

// 下载
npm install 包名
npm i 包名	// 简写
npm i 包名 包名	// 多个包
// 第一位数字: 大版本
// 第二位数字: 功能版本
// 第三位数字: Bug修复版本
// 前面版本号增长，后面版本号归零
npm i 包名@版本号	// 指定版本的包

// node_modules	包资源
// package-lock.json	包下载信息
// package.json	包管理配置文件
npm init -y		// 快速新建 package.json 文件，项目文件夹不可包含中文和空格
npm i		// 读取 package.json 后 全部下载

// 卸载包
npm uninstall 包名

// 安装包 记录到 devDependencies 项目开发用 项目上下不用
npm i 包名 -D		// npm install 包名 --save-dev
npm i webpack -D

// 淘宝 NPM 镜像服务器
// 切换 npm 下包镜像源
1、查看当前下包镜像源
npm config get registry
2、切换为淘宝镜像源
npm config set registry=https://registry.npmmirror.com/

// nrm
1、将 nrm 安装为全局可用的工具
npm i nrm -g
2、查看所有可用的镜像源
nrm ls
3、将镜像源切换为 taobao 镜像
nrm use taobao

// 分类
1、项目包
	1、开发依赖包	// devDependencies	只在开发期间会用到
  	npm i 包名 -D
  2、核心依赖包	// dependencies	开发和项目上线之后都会用到
  	npm i 包名
2、全局包 -g
	// C:Users\用户目录\AppData\Roaming\npm\node_modules
		npm i 包名 -g					// 安装
		npm uninstall 包名 -g		// 卸载

// i5ting_toc		将 md 文档转换为 html 页面的小工具
1、安装全局包
npm i i5ting_toc -g
2、md 转换 html
i5ting_toc -f 需要转换的md文件路径 -o

// 包的基本结构
1、package.json	// 包管理配置文件
	"name": 包名
  "version": 版本号
  "main":	入库文件
  "description": 功能描述
  "keywords":	关键字
  "license": 开源许可协议
2、index.js			// 包的入口文件
3、README.md			// 包的说明文档
	# 安装
  
// npm i ...
# 导入
# 功能
# 开源协议

// 登录	先把服务器切换为npm官方服务器
npm login
用户名
密码
邮箱

// 发布 npm
npm publish		// 切换到包根目录下

// 删除已发布的包
npm unpublish 包名 --force
1、72小时内发布的包 不允许删除
2、24小时内不允许重复发布被删除的包
```
### 模块加载机制

```javascript
// 优先从缓存中加载
第一次执行 require() 会执行代码并缓存
1、内置模块的加载优先级最高
2、自定义模块 ./ 或 ../ 开头
3、省略扩展名加载
	1、精准匹配的名称
  2、.js
	3、.json
	4、.node
```

### Express

```javascript
// Web开发框架 第三方包
1、Web 网站服务器
2、API 接口服务器

// 安装
npm i express@版本号

// 创建基本的 Web 服务器
1、导入
const express = require('express')
2、创建服务器
const app = express()
3、启动服务器
app.listen(80, () => {
  console.log('服务器已启动')
})

// 监听 GET 请求
app.get('请求URL', (req, res) => {
  // 处理函数
  // req 请求对象
  	// 获取 URL 中携带的查询参数 查询字符串 默认为空对象
  	req.query		//req.query.name	req.query.age
  	// 获取 URL 中的动态参数 :
  	req.params
  // res 响应对象
    // 把内容响应给客户端
    res.send()
})

// 监听 POST 请求
app.post('请求URL', (req, res) => {
  // 处理函数
  // req 请求对象
  // res 响应对象
  // 把内容响应给客户端
  res.send()
})

// 把内容响应给客户端
res.send()
// 获取 URL 中携带的查询参数 查询字符串 默认为空对象
req.query		//req.query.name	req.query.age
// 获取 URL 中的动态参数 :参数
req.params

// 托管静态资源 创建静态资源服务器
express.static()
// 127.0.0.1/index.html
app.use(express.static('静态目录'))		// 托管多个目录具有层叠性
// 127.0.0.1/files/index.html
app.use('/files'，express.static('静态目录'))	

// 路由  映射关系  先后顺序进行匹配
客户端的请求与服务器处理函数之间的映射关系
// 组成
app.METHOD(PATH, HANDLER)
  1、请求类型
  2、请求URL地址
  3、处理函数
// 例子
app.get('/', (req,res) => {
  res.send('')
})
app.post('/', (req,res) => {
  res.send('')
})

// 模块化路由
1、创建路由模块对应的 .js 文件
2、调用 express.Router() 函数创建路由对象
3、向路由对象上挂在具体的路由
4、使用 module.exports 向外共享路由对象
5、使用app.use() 函数注册路由模块
	// 导入express
	const express = require('express')
  // 创建路由对象
  const router = express.Router()
  // 挂载路由
  router.get('/path1' function(req, res) {
    
  })
  router.post('/path2' function(req, res) {
    
  })
  // 对外导出路由对象
  module.exports = router

// 使用
1、导入路由模块
const router = require('路由模块路径')
2、使用 app.use() 注册路由模块
app.use(router)
app.use('/api', router)		// 添加访问前缀: /api

// app.use() 	作用: 注册全局中间件

// 中间件	中间处理环境
// 作用: 对请求做预处理
// 格式 本质是 function 处理函数，形参必须包含 next 参数
next函数是实现多个中间件连续调用的关键，把流转关系转交给下一个中间件或路由
// 定义
const mw = function(req, res, next) {
  console.log('这是一个简单的中间件')
  // 当前中间件业务处理完毕后，必须调用 next() 函数
  // 把流转关系交个下一个中间件或路由
  next()
}

// 全局生效的中间件
客户端发送的任何请求，到达服务器之后，都会触发的中间件
app.use(中间件函数)
// 中间件作用
多个中间件之间，共享一份req和res,我们可以在上游中间件中，统一为req或res对象添加自定义的属性和方法，供下游使用

// 局部中间件 不适应 app.use()
app.get('/', mw1, function(re1, res){})		// mw1局部生效中间件
app.get('/', mw1, mw2, function(re1, res){})	// 多个局部中间件
app.get('/', [mw1, mw2], function(re1, res){})	// 多个局部中间件

// 注意
1、路由之前声明中间件
2、调用 next()， 且后不再写业务逻辑
3、连续调用多个中间件，其之间共享req,res

// 中间件分类
1、应用级别中间件
	app.use() 或 app.get 或 app.post() 绑定到 app 实例上的中间件
2、路由级别中间件
	绑定到 express.Router() 实例上的中间件
3、错误级别中间件
	捕获项目中发生的异常错误，防止项目异常崩溃
  格式: function(err, req, res, next)
	必须注册在所有的路由之后
  app.get('/', (req, res) => {
    throw new Error('服务器内部发生了错误！')
    res.send('ok')
  })
	app.use((err, req, res, next) => {
    console.log('发生了错误: ' + err.message)
    res.send('Error: ' + err.message)
  })
4、Express内置中间件
	1、express.static	// 快速托管静态资源的内置中间件
	2、express.json		// 解析 JSON 格式的请求体数据(有兼容性，仅在 4.16.0+ 版本中可用)
		// 解析表单中的 JSON 格式数据
		app.use(express.json())		// req.body 默认 undefined
		app.post('/user', (req, res) => {
      // 如果不解析JSON 则读取不到 body 默认为 undefined
      // body 可以获取 JSON / url-encoded
      console.log(req.body)
      res.send('ok')
    })
	3、express.urlencoded	// 解析 URL-encoded 格式(有兼容性，仅在 4.16.0+ 版本中可用)
		app.use(express.urlencoded({ extended: false }))	// req.body 默认 空对象
		app.post('/book', (req, res) => {
      // body 默认为 undefined
      // body 可以获取 JSON / url-encoded
      console.log(req.body)
      res.send('ok')
    })
5、第三方中间件
	1、body-parser

// querystring.parse() 将查询字符串解析成对象格式

// 写接口
const express = require('express')
const router = express.Router()
	// 写路由
router.get('/get', (req, res) => {
  // 获取查询字符串
  const query = req.query
  res.send({
    status: 0,	// 0成功 1失败
    msg: 'GET 请求成功！',
    data: query
  })
})
// app.use(express.urlencoded({ extended: false }))
router.post('/post', (req, res) => {
  // 获取 url-encoded
  const body = req.body
  res.send({
    status: 0,	// 0成功 1失败
    msg: 'POST 请求成功！',
    data: body
  })
})
module.exports = router

// 跨域问题
CORS	// 跨域资源共享 第三方中间件 兼容性 IE10+、hrome4+、ireFox3.5+
1、安装
npm i cors
2、导入
const cors = require('cors')
3、配置	// 在路由之前配置
app.use(cors())

// CORS 响应头部
1、Access-Control-Allow-Origin: <origin> | *		// origin 指定了运行访问该资源的外域URL
  // 只允许来自 http://www.baidu.com 的请求
	res.setHeader('Access-Control-Allow-Origin', 'http://www.baidu.com')
	// 允许任何 URL 请求
	res.setHeader('Access-Control-Allow-Origin', '*')
2、Access-Control-Allow-Headers	// CORS 仅支持客户端向服务器发送9个请求头，如果需要发送额外的请求头信息，则需要对额外的请求头进行声明
	res.setHeader('Access-Control-Allow-Headers', '额外请求头')
3、Access-Control-Allow-Methods	// CORS 仅支持客户端发起 GET、OST、EAD 请求， 如歌需要通过 PUT、ELETE 等则需要指明实际请求所允许的使用方法
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, HEAD')
	res.setHeader('Access-Control-Allow-Methods', '*')

// 分类
1、简单请求	// 一次请求
	1、请求方式: GET、POST、HEAD 三者之一
  2、HTTP头部信息不超过默认9个字段
2、预检请求	// 二次请求 浏览器和服务器通信之前，浏览器会先发送 OPTION 预检请求，成功后才会发送真正的请求
	1、请求方式为 GET、POST、HEAD 之外的类型
  2、请求头包含自定义头部字段
  3、向服务器发送了 application/json 格式数据
  
// JSONP 请求 为防止冲突需要在配置 CORS 之前声明 JSONP 接口
app.get('./api/jsonp', (req, res) => {
  // 得到函数名称
  const funcName = req.query.callback
  // 定义要发送到客户端的数据对象
  const data = {}
  // 拼接出一个函数的调用
  const scriptStr = `${funcName}(${JSON.stringify(data)})`
  // 响应给客户端
  res.send(scriptStr)
})
```

### nodemon

```javascript
// 作用: 检测代码修改后，重新运行代码
nodemon 文件
// 安装
npm i -g nodemon
```

### 前后端身份认证

```javascript
// Web 开发模式
1、服务端渲染的 Web 开发模式
// 服务器发送给客户端的 HTML 页面。是服务器通过字符串的拼接，动态生成的
	优点:
		1、前端耗时少
		2、有利于SEO
  缺点:
		1、占用服务器端资源
		2、不利于前后端分离，开发效率低
2、前后端分离的 Web 开发模式
// 后端赋值提高 API 接口，前端调用接口
	优点:
		1、开发体验好
		2、用户体验好
		3、减轻了服务器端的渲染压力
  缺点:
		1、不利于SEO
// 选择
服务器端渲染
	1、企业级网站
前后端分离
	1、后台管理项目
  
// 身份认证
  通过一定的手段，完成对用户身份的确认
  确认当前所声称的用户，确实是该用户
  1、手机验证码登录
  2、邮箱密码登录
  3、二维码登录
服务器渲染: Session 认证机制
前后端分离: JWT 认证机制

// HTTP 无状态性
HTTP 每次请求都是独立的，服务器不会主动保留每次 HTTP 请求的状态
// 解决: Cookie
是存储在用户浏览器中一段不超过 4KB 的字符串，由名称(Name) 和 值(Value) 和，用于控制其有效期、安全性、使用范围的可选属性组成
1、自动发送
2、域名独立
3、过期时限
4、4KB 限制
5、不具有安全性

// 不跨域使用 express-session 中间件
npm i express-session
// 配置
const session = require('express-session')
app.use(session({
  secret: 'keyboard cat',		// secret 属性的值可以为任意字符串
  resave: false,					// 固定写法
  saveUninitialized: true		//固定写法
}))
// 存储 只有成功的配置了 express-session 后，才有 req.session
req.session
// 清空
req.session.destroy()

// 跨域使用 JWT
// 组成
Header.Payload.Signature
1、Header(头部)
2、Payload(有效荷载)		// 加密的用户信息
3、Signature(签名)
// 使用
客户端存储在 localStorage 或 sessionStorage
身份认证时，推荐把 JWT 放在 HTTP 请求头的 Authorization 字段中
Authorization: Bearer <token>
// 安装
npm i jsonwebtoken express-jwt
jsonwebtoken: 用于生成 JWT 字符串
express-jwt： 用于将 JWT 字符串解析还原成 JSON 对象
// 导入
const jwt = require('jsonwebtoken')
const expressJWT = require('express-jwt')

// 定义 secret 秘钥 用于加密解密
const secretKey = '秘钥字符串'

// 生成 JWT 字符串
jwt.sign(
  { name: '张三' }, // 信息对象
	secretKey,	// 秘钥
	{ expiresIN: '30s' }	// 配置对象，可以配置当前 token 有效期
)
// JWT 还原 JSON 
	// unless() 指定那些接口不需要访问权限
app.use(expressJWT({ secret: secretKey })).unless({ path: [] })

// req.user 用户信息，需成功配置express-jwt后

// 错误中间件 捕获 JWT 失败后产生的错误
app.use((err, req, res, next) => {
  // 由 token 解析失败导致的
  if(err.name === 'UnauthorizedError') {
    return res.send({
      status: 401,
      message: '无效的token'
    })
  }
  // 其他原因导致的错误
  res.send({
    status: 500,
    message: '未知的错误'
  })
})
```

www.escook.cn:8080/#/
