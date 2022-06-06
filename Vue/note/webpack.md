### 前端工程化

模块化

> js的模块化、css的模块化、资源的模块化

组件化

>复用现有的 UI 结构、样式、行为

规范化

> 目录结构的划分、编码规划分、接口规范化、文档规范化、Git分支管理

自动化

> 自动化构建、自动部署、自动化测试

前端工程化解决方案 

### webpack

>主要功能：
>
>1、代码压缩混淆
>
>2、处理浏览器端 JavaScript 的兼容性
>
>3、性能优化

```javascript
// 安装
npm i webpack@5.42.1 webpack-cli@4.9.0 -D

// 配置 开发用development 上线用production
1、项目根目录创建 webpack.config.js 文件，并初始化
module.exports = {
  mode: 'decelopment'	// mode 用来指定构建模式，可选值有 development 和 production
}


2、在 package.json 的 script 节点下，新增 dev 脚本
"scripts": {
  "dev": "webpack" // script 节点下的脚本，可以通过npm run 执行，npm run dev
}

// 默认约定
// 在webpack 4.x 和 5.x 版本中
1、默认打包入口文件为 src -> index.js
2、默认输出文件路径为 dist -> main.js
// 可以在 webpack.config.js 中修改打包的默认约定
1、通过 entry 节点指定打包入口
2、通过 output 节点指定打包入口
例：
const path = require('path')	// node.js中专门操作路径的模块
module.export = {
  entry: path.join(__dirname, './src/index.js'), // 打包入口文件路径
  output: {
    path: path.json(__dirname,'./dist'),	// 输出文件存放路径
    filename: 'bundle.js'		// 输出文件名称
  }
}

// 插件 webpack-dev-server
每当修改了源码，webpack会自动进行项目的打包和构建
// 安装
npm i webpack-dev-server@3.11.2 -D
// 配置
修改 package.json -> scripts 中的 dev 命令如下
  "scripts": {
    "dev": "webpack serve"	// script 节点下的脚本 可以通过npm run 执行
  },

// html-webpack-plugin
可以通过此插件自定制index.html页面的内容
// 安装
npm i html-webpack-plugin@5.3.2 -D
// 配置
1、导入HTML插件，得到一个构造函数
const HtmlPlugin = require('html-webpack-plugin')
2、创建HTML插件的实例对象
const htmlPlugin = new HtmlPlugin({
  template: './src/index.html',	// 指定源文件的存放路径
  filename: './index.html',	// 指定生成的文件的存放路径
})

module.exports = {
  mode: 'development',
  plugins: [htmlPlugin],	// 3、通过 plugins 节点，使 htmlPlugin 插件生效
}
// 作用
复制的页面放入内存中，并自动引入打包的main.js文件

// devServer 节点
devServer: {
  open: true,	// 初次打包完成后，自动打开浏览器
  host: '127.0.0.1',	// 实时打包所使用的主机地址
  port: 80,	// 实时打包所使用的端口号
}

// loader 从后往前
// 处理 css 文件
1、安装
npm i style-loader@3.0.0 css-loader@5.2.6 -D
2、配置 webpack.config.js 的 moudle -> rules
module: {	// 所有第三方文件模块的匹配机制
  rules: [	// 文件后缀名的匹配规则
    // test 表示匹配的文件类型
    // use 表示需要调用的loader,其顺序固定，从后往前调用
    { test: /\.css$/, use: ['style-loader', 'css-loader'] }
  ]
}

// 处理 less 文件
1、安装
npm i less-loader@10.0.1 less@4.1.1 -D
2、配置
module: {	
  rules: [
    { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }
  ]
}

// url路径相关文件
1、安装
npm i url-loader@4.1.1 file-loader@6.2.0 -D
2、配置
module: {	
  rules: [
    // ?之后是 loader 的参数项
    // limit 用来指定图片的大小，单位是字节
    // 只有 ≤ limit 大小的图片，才会被转为 base64格式
    { test: /\.jpg|png|gif$/, use: 'url-loader?limit=22229' }
  ]
}

// webpack 只能打包处理一部分高级的JS语法，其余的需要借助于babel-loader进行打包处理
1、安装
npm i babel-loader@8.2.2 @babel/core@7.14.6 @babel/plugin-proposal-decorators@7.14.5 -D
2、配置
// 必须使用 exclude 指定排除项，因为 node_modules 目录下的第三方包不需要被打包
{ test: /\.js$/, use: 'babel-loader', exclude: /node_modules/}
// 在项目根目录下，创建 babel.config.js 的配置文件，定义 Babel 的配置项如下
module.exports = {
  // 声明 babel 可用的插件
  plugins: [['@babel/plugin-proposal-decorators', { legacy: true }]]
}

// 发布
// package.json -> scripts 
"scripts": {
  "dev": "webpack serve",	// 开发环境中，运行 dev 命令
  "build": "webpack --mode production"	//项目发布时，运行 build 命令
}
// --mode 是一个参数小，用来指定 webpack 的运行模式，production 代表生产环境，会进行代码压缩和性能优化，会覆盖 webpack.config.js 中的 model 选项

// 每次打包发布是 自动清理 dist 目录中的旧文件， clean-webpack-plugin
1、安装
npm i clean-webpack-plugin@3.0.0 -D
2、配置
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const cleanPlugin = new CleanWebpackPlugin()
plugins: [htmlPlugin, cleanPlugin]	// 挂载插件
```

### source Map

信息文件，存储着位置信息，出错时直接显示原始代码，而非转换后的代码，方便调试。

```javascript
// 配置 webpack.config.js
module.exports = {
  // eval-source-map 仅限在"开发模式"下使用，不建议在"生产模式"下使用
  devtool: 'eval-source-map',
}

// 只定位行数，不暴露源码
module.exports = {
  devtool: 'nosources-source-map',
}
```

从外往里查找路径，使用 @ 表示 src 源代码目录

```javascript
// 配置 @ 在webpack.config.js 文件中
resolve: {
  alias: {
    '@': path.join(__dirname, './src/')
  }
}
```





