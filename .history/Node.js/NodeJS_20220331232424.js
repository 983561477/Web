// 创建 Web 服务器
// 1、导入 http 模块
	const http = require('http')
// 2、创建 Web 服务器实例
	const server = http.createServer()
// 3、为服务器实例绑定 request 事件，监听客户端的请求
	// 使用服务器实例的.on() 方法，
	server.on('request', (req, res) => {
    // 客户端请求，就会触发 request 事件，从而调用这个事件处理函数
    console.log('有人访问了我们的服务')
  })
// 4、启动服务器
	// 调用 server.listen(端口号, cb回调函数) 启动 web 服务器
	server.listen(80, () => {
    console.log('服务运行中 http://127.0.0.1')
  })