### Vue 概念

1. 构建用户界面
   - 用 vue 网 html 页面中填充数据
2. 框架
   - 一套现成的解决方案，遵守对应规范，编写业务功能。

### Vue 特性

1. 数据驱动视图
   - 数据的变化会驱动视图自动更新
   - 单向数据绑定
2. 双向数据绑定
   - JS 数据发生变化，会自动被渲染到页面上
   - 页面表单采集数据发生变化，会被自动更新到 JS 数据中

### MVVM

1. Model

   表示当前页面渲染时所依赖的数据源

2. View

   当前页面所渲染的 DOM 结果

3. ViewModel

   vue 的实例，MVVM 的核心

### 使用步骤

1. 导入 vue.js 的 script 对象
2. 在页面中声明一块 Vue 控制区域
3. 创建 vm 实例对象( vue 实例对象)

### 指令

指令是 Vue 为开发者提供的模板语法，用于辅助开发者渲染页面的基本结构

1. 内容渲染

   渲染 DOM 元素的文本内容

   - `v-text` 会覆盖元素内部原有的内容
   - `{{ }}` 差值表达式，只能用在内容节点
   - `v-html` 将带有标签的字符串渲染成真正的 HTML 内容

2. 属性绑定

   - `v-bind` 简写 `:` 为元素的属性动态绑定值，内容如需拼接，字符串需要被单引号包裹如

     ```js
     <div :title="'box' + index">这是一个 div</div> 
     ```

3. 事件绑定

   - `v-on` 简写 `@`

     ```xml
     <button @click="add"></button>
     
     methods: {
     	add() {
     		// 如果在方法中要修改 data 中的数据，可以通过 this 访问
     		this.count += 1s
     	}
     }
     ```

   - `$event` 参数: 原生 DOM 对象。如果默认的事件对象 e 被覆盖了，可以手动传递一个 $event。

     ```xml
     <button @click="add(3, $event)"></button>
     
     methods: {
     	add(n, $event) {
     		// 如果在方法中要修改 data 中的数据，可以通过 this 访问
     		this.count += 1s
     	}
     }
     ```

     

   - 事件修饰符 加在事件后面

     `@click.prevent` 阻止默认行为

     ```xml
     <a @click.prevent="xxx">链接</a>
     ```

     `@click.stop` 阻止事件冒泡

     ```xml
     <button @click.stop="xxx">按钮</button>
     ```

   - 按键修饰符

     `@keyup.esc`

     `@keyup.enter`

4. 双向绑定

   - `v-model` 不操作 DOM ，快速获取表单数据

   - 修饰符

     `v-model.number` 自动将输入值转换为数值类型

     `v-model.trim` 自动过滤输入的首尾空白字符

     `v-model.lazy` 在 change 时而非 input 时更新

5. 条件渲染

   > 按需控制 DOM 的显示与隐藏
   >
   > 实际开发中无需考虑性能问题，直接使用`v-if`即可

   - `v-show` 动态为元素添加或移除 `display: none`样式，来实现元素的显示和隐藏

     如果要频繁的切换元素的显示状态，`v-show`性能更好

   - `v-if` 每次动态创建或移除元素，实现元素的显示和隐藏

     如果刚进入页面时，某些元素无需展示，后期可能也无需展示，此时`v-if`性能更好

   - `v-else-if` 必须配合 `v-if`使用

   - `v-else`

6. 列表渲染

   - `v-for` 
   - `key` 字符串或数字类型、唯一性、建议将数据项 ID 属性的值作为 key 值

### 过滤器

> Vue3 中无过滤器
>
> Filters 文本格式化
> 如果全局过滤器和私有过滤器名字重复，按照就近原则，调用私有过滤器
> 可连续调用多个过滤器，过滤器可传参(从第二个参数开始接收)

- 插值表达式
- `v-bind`属性绑定

1. 私有过滤器

   `filters`

2. 全局过滤器

   `Vue.filter()`

### 侦听器

> watch 侦听器，针对数据变换做特定的操作

侦听器格式

1. 方法
   - 无法在刚进入页面的时候自动触发
   - 侦听的是一个对象，对象中的属性如果发生变化，无法触发侦听器
2. 对象
   - `immediate` 可以让侦听器自动触发
   - `deep` 深度侦听，对象中每个属性的变化

### 计算属性

> 经过一系列运算后得到的一个属性值
>
> 可以被结构模板或 methods 方法使用

`computed` 定义为方法，使用为属性

### axios

> 专注于网络请求的库

1. 发起 GET 请求

   ```js
   axios({
     // 请求方式
     method: 'GET',
     // 请求地址
     url: 'http://www.liulongbin.top:3006/api/getbooks',
     // URL 中的 GET 查询参数
     params: {
       id: 1,
     },
   }).then(result => {
     console.log(result);
   })
   ```

2. 发起 POST 请求

   ```js
   document.querySelector('#btnPost').addEventListener('click', async () => {
     // 如果方法的返回值是 Promise 实例，则前面可以添加 await
     // await 只能用在被 async 修饰的方法中
     const {
       data: res
     } = await axios({
       method: 'POST',
       url: 'http:www.liulongbin.top:3006/api/post',
       data: {
         name: 'zs',
         age: 20
       }
     })
     console.log(res);
   })
   ```

### vue-cli

>Vue.js 开发的标准工具，简化了程序员基于 webpack 创建工程化的 Vue 项目过程

1. 安装

   `npm i -g @vue/cli` 

2. 生成 Vue 项目

   `vue create 项目名称`

3. 选择安装配置

   `npm i`

   `npm cache clear --force` 报错：清除缓存

4. 运行

   `npm run serve`

>src 目录构成
>
>assets：存放项目中用到的静态资源，如：css 样式表、图片资源
>components：程序员封装的、可复用的组件
>main.js：项目的入口文件
>App.vue：项目的根组件

vue 项目的运行流程

> 通过 main.js 把 App.vue 渲染到 index.html 的指定区域

### Vue 组件化开发

> 根据封装思想，将页面上可复用的 UI 结构封装为组件，方便开发和维护

`.vue` 组件的三个组成部分

1. `template` 模板结构
2. `script` JavaScript行为
3. `style` 样式
   - `lang="less"`
   - `scoped` Vue为每个 vue 组件生成独一无二的 data-v-xxx 样式属性

组件之间的父子、兄弟关系

使用组件的三个步骤

1. 在根组件中导入需要的组件
2. 使用 components 节点注册组件，私有子组件
3. 以标签形式使用

### 配置 @ 提示路径

```js
// settings.json 文件中, 且只有当前项目
//导入文件时是否携带文件的扩展名
"path-autocomplete.extensionOnlmport": true,
//配置@的路径提示
"path-autocomplete.pathMappings": {
  "@": "${folder}/src"
},
```

#### 全局组件

>在 main.js 文件中，通过 Vue.component() 方法

1. `props` 数组，组件的自定义属性，只读
2. `props` 对象
   - `default`可指定自定义属性的默认值
   - `type` 自定义属性的类型
   - `reqiured` 必填项

### 组件-生命周期

1. 创建
   - `beforeCreate` 
   - `created` 发起 Ajax 请求，调用 methods 中方法，将请求到的数据转存到 data 中，供 template 模板渲染使用
   - `beforeMount` 
   - `mounted` 操作当前组件 DOM 结构
2. 运行 数据发送变换
   - `beforeUpdate` 
   - `updated` 数据变换后，操作 DOM 结构
3. 销毁
   - `beforeDestroy` 
   - `destroyed` 

### 组件-数据共享

父->子：自定义属性 `props`

子->父：自定义事件 `$emit()`

兄弟：vue2.x：`EventBus` 发送方(bus.$emit('事件','数据'))---> eventBus.js(vue实例) ---> 接收方(bus.$on('事件','函数'))

### ref 引用

`$refs` 拿到 DOM 元素

`this.$nextTick(cb)` DOM 渲染好，之后执行

### 动态组件

> 动态切换组件的显示和隐藏
>
> 默认会被销毁再创建

- `<component :is="comName"></component>` 动态组件
- `<keep-alive>
    <component :is="comName"></component>
  </keep-alive>` 缓存组件，保持原实例，不销毁
  	被缓存时触发 `deactivated` 
  	被激活时触发 `activated` 
  `include` 包含需要被缓存的组件，逗号分隔
  `exclude` 排除不需要被缓存的组件，与`include`不可同时使用

### 插槽

> 插槽(Slot)：把不确定的，希望由用户指定的部分，定义为插槽

`v-slot:` 简写 #

### 自定义指定
