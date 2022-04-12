// 创建 Web 服务器
// 1、导入 http 模块
// 	const http = require('http')
// // 2、创建 Web 服务器实例
// 	const server = http.createServer()
// // 3、为服务器实例绑定 request 事件，监听客户端的请求
// 	// 使用服务器实例的.on() 方法，
// 	server.on('request', (req, res) => {
//     // 客户端请求，就会触发 request 事件，从而调用这个事件处理函数
//     // 请求地址
//     console.log(req.url)
//     // 请求类型
//     console.log(req.method)
//     // 解决中文乱码
//     res.setHeader('Content-Type', 'text/html; charset=utf-8')
//     // res.end 向客户端发送指定的内容，并结束这次请求
//     res.end('收到')
//   })
// // 4、启动服务器
// 	// 调用 server.listen(端口号, cb回调函数) 启动 web 服务器
// 	server.listen(80, () => {
//     console.log('服务运行中 http://127.0.0.1:80')
//   })

// 导入 moment
// const moment = require('moment')
// const dt = moment().format('YYYY-MM-DD HH:mm:ss')
// console.log(dt)


// 1、导入
const express = require('express')
// const res = require('express/lib/response')
// 2、创建服务器
const app = express()

// // 解析表单中的 JSON 格式数据
// app.use(express.json())
// // 解析表单中的 url-encoded 格式数据
// app.use(express.urlencoded({ extended: false }))

// app.post('/user', (req, res) => {
//   // 如果不解析 则读取不到 body 默认为 undefined
//   // body 可以获取 JSON / url-encoded
//   console.log(req.body)
//   res.send('ok')
// })

// app.post('/book', (req, res) => {
//   // 如果不解析JSON 则读取不到 body 默认为 undefined
//   console.log(req.body)
//   res.send('ok')
// })

// 3、启动服务器
app.listen(80, () => {
  console.log('服务器已启动! http:127.0.0.1')
})

// // 监听 GET 请求
// app.get('/user', (req, res) => {
//     // 处理函数
//     // req 请求对象
//     // res 响应对象
//     // 把内容响应给客户端
//     res.send({name: '张三', age: 18})
// })

// // id 为动态参数
// app.get('/user/:id/:name', (req, res) => {
//     // 处理函数
//     // req 请求对象
//     console.log(req.params)
//     // res 响应对象
//     // 把内容响应给客户端
//     // res.send({name: '张三', age: 18})
//     res.send(req.params)
// })

// app.get('/', (req, res) => {
//     // 处理函数
//     // req 请求对象
//     console.log(req.query)
//     console.log(req.query.name)
//     // res 响应对象
//     // 把内容响应给客户端
//     // res.send({name: '张三', age: 18})
//     res.send(req.query)
// })
  
//   // 监听 POST 请求
// app.post('/user', (req, res) => {
//     // 处理函数
//     // req 请求对象
//     // res 响应对象
//     // 把内容响应给客户端
//     res.send('请求成功')
// })