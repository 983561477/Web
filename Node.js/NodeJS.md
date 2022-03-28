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
	1、file: 文件路径
  2、写入的内容
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

