### let

```javascript
// 特性
1、变量不能重复声明
2、块级作用域
3、不存在变量提升
4、不影响作用域链
```

### const

```javascript
// 声明常量
1、赋初始值
2、一般大写
3、值不能修改
4、块级作用域
5、对数组和对象的元素修改，不算对常量修改，因为保存的是地址
```

### 解构赋值

```javascript
// 数组的解构
const arr = [1, 2, 3, 4]
let [one, two, three, four] = arr

// 对象的解构
const obj = {
  name: '张三',
  age: 18
  say: function() {
    console.log('你好，世界！')
  }
}
let {name, age, say} = obj
```

### 模板字符串

```javascript
// 声明
let str = `字符串`

// 特性
1、内容中可以直接出现换行符
let str = `<ul>
						<li></li>
					</ul>`
2、变量拼接
let str1 = '你好，'
let str2 = `${str1}世界`
```

### 简化对象写法

```javascript
let uname = '张三'
let say = function() {
  console.log('你好，世界！')
}
const obj = {
  // 简化赋值
  uname,
  say,
  // 简化命名函数
  callback() {}
}
```

### 箭头函数

```javascript
// => 定义函数
let fun = (参数) => {
  代码体
}

// 特性
1、this 是静态的，this始终指向函数声明时所在作用域下的this值
	function fun1() {
    console.log(this.name)
  }	
	let fun2 = () => {
    console.log(this.name)
  }
  window.name = '张三'
	const obj = {
    name = '李四'
  }
  // 直接调用
  fun1()
	fun2()
	// call()，您能够使用属于另一个对象的方法。
 	fun1.call(obj)
	fun2.call(obj)

2、不能作为构造函数实例化对象
3、不能使用 arguments 变量
4、简写
	1、省略小括号，当形参只有一个的时候
  let fun = n => {
    return n + n
  }
  console.log(add(9))
	2、省略花括号，当代码体重只有一条语句的时候，此时 return 必须省略
	// 语句的执行结果就是函数的返回值
	let fun = (n) => n * n
  console.log(fun(9))

// 案例
1、点击 div 2s 后边为粉色
  // 获取元素
  let div = document.quearySelector('div')
  // 绑定事件
  div.addEventListener("click", function() {
    setTimeout(() => {
      this.style.background = 'pink'
    }, 2000)
  })
2、从数组中返回偶数元素
const arr = [1, 6, 9, 10, 100, 25]
// filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
const result = arr.filter(item => item % 2 === 0)

// 适用场景
1、箭头函数适合于 this 无关的回调: 定时器、数组的方法回调
2、不适合于 this 有关的回调: 事件回调、对象的方法
```

### 函数参数赋初始值

```javascript
1、形参初始值
// 具有默认值的参数，一般位置要靠后
function fun(a, b, c=1) {}
2、与解构赋值结合
// function fun(obj) {}
function fun({uname, age=19}) {}
fun({
  uname: '张三',
  age: 18
})
```

### rest 参数

```javascript
// rest 参数: 回去函数的实参，代替arguments
function fun() {
  console.log(arguments)	// 对象
}

// rest 参数必须放到参数最后
function fun(...args) {
  console.log(args)		// 数组
}
```

### 扩展运算符  ...

```javascript
// ... 将 数组 转换为 逗号 分隔的 参数序列
const arr = [1, 2, 3]
function fun() {
  console.log(arguments)	// 1, 2, 3
}
fun(...arr)

// 应用
1、数组合并
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const arr = [...arr1, ...arr2]	// [1, 2, 3, 4, 5, 6]

2、数组克隆
const arr1 = [1, 2]
const arr2 = [...arr1]

3、将伪数组转换为真正的数组
const divs = document.querySelectorAll('div')		// 伪数组
const divArr = [...divs]	// 数组
```

### Symbol

```javascript
// 第七种数据类型 表示独一无二的值 唯一标识
1、值唯一
2、不能运算
3、对象属性不能用 for...in 循环遍历
let s = Symbol()
let s1 = Symbol("张三")	// "张三": 描述字符串
let s2 = Symbol("张三")	// "张三": 描述字符串
s1 === s2 	// false

// 可创建相同的唯一标识
let s1 = Symbol.for("张三")
let s2 = Symbol.for("张三")
s1 === s2		// true

// 应用场景
1、给对象添加方法
let obj = { /*内容未知*/ }
let up = Symbol()
obj[up] = function() {}

let obj = {
  // 唯一方法
  [Symbol("")]: function() {}
}

// 11个内置属性 控制对象在特定情况下的表现
```

### 迭代器

```javascript
// iterator 对象中的一个属性 for...of
const arr [1, 2, 3, 4]	// 数组具有 iterator 属性
// 下标
for (let k in arr) {
  console.log(k)
}
// 值
for (let v of arr) {
  console.log(v)
}

// 工作原理
let iterator = arr[Symbol.iterator]()
console.log(iterator.next())
  1、创建一个指针对象，指向当前数据结构的起始位置
  2、第一次调用对象的 next 方法，指针自动指向数据结构的第一个成员
  3、不断调用 next 方法，指针一直往后移动，直到指向最后一个成员
  4、每次调用 next 方法返回一个包含 value 和 done 属性的对象
 
// 应用
1、自定义遍历数组
const obj = {
  uname: '张三',
  hobby: [
    '篮球',
    '足球',
    '乒乓球'
  ],
  [Symbol.iterator]() {
  	let index = 0
    return {
      next: () => {
        if (index < this.hobby.length) {
          const result = { value: this.stus[index], done: false}
        	index++
        	return result       
        } else {
          return { vaule: undefined, done: true}
        }
      }
    }
	}
}
// 遍历对象
for (let v of obj) {
  console.log(v)
}
```

### 生成器

```javascript
// 异步编程
function * fun() {
  console.log('你好，')
  console.log('世界！')
  // yield 函数代码分隔符 控制 next 向下执行
  yield '1'
  yield '2'
}
let iterator = fun()
iterator.next()		// 无yield: 你好，世界！  有yield: 你好！
iterator.next()		// 有yield: 世界！

// 遍历
for (let v of fun()) {
  console.log(v)	// yield 后面的值
}

// 参数
function * fun(arg) {
  console.log(arg)
  let one = yield
  console.log(one)
}
let iterator = fun('1')
console.log(iterator.next())
// next 方法可以传入实参
console.log(iterator.next('2'))

// 案例
// 1s 后输出1，再过2s后输出2，再过后3s输出3
function fun1() {
  setTimeout(() => {
    console.log('1')
    iterator.next()
  }, 1000)
}
function fun2() {
  setTimeout(() => {
    console.log('2')
    iterator.next()
  }, 2000)
}
function fun3() {
  setTimeout(() => {
    console.log('3')
    iterator.next()
  }, 3000)
}
// 生成器
function * fun() {
  yield fun1()
  yield fun2()
  yield fun3()
}
// 调用
let iterator = fun()
iterator.next()

// 用户数据 订单数据 商品数据
function fun1() {
  setTimeout(() => {
    let data = '用户数据'
    iterator.next(data)
  }, 1000)
}
function fun2() {
  setTimeout(() => {
    let data = '订单数据'
    iterator.next(data)
  }, 2000)
}
function fun3() {
  setTimeout(() => {
    let data = '商品数据'
    iterator.next(data)
  }, 3000)
}
// 生成器
function * fun() {
  let users = yield fun1()
  console.log(users)
  let orders = yield fun2()
  console.log(orders)
  let goods = yield fun3()
  console.log(goods)
}
// 调用
let iterator = fun()
iterator.next()
```

### Promise

```javascript
// 实例化 Promise 对象
const p = new Promise(function(resolve, reject) {
  setTimeout(() => {
    //
    let data = '数据'
    // resolve 状态 -> 成功
    resolve(data)
    // reject 状态 -> 失败
    reject(data)
	}, 1000)
})
// 调用 promise 对象 then 方法
p.then(function(value) {
  // 成功
  console.log(value)
}, function(reason) {
  // 失败
  console.error(reason)
})

// 读取文件
const fs = require('fs')
// 调用方法读取文件
fs.readFile('文件路径', (err, data) => {
  // 失败
  if (err) throw err
  // 成功
  console.log(data)
})
// 使用 promise 封装
const p = new Promise(function(resolve, reject) {
  fs.readFile('文件路径', (err, data) => {
    // 失败
    if (err) reject(err)
    // 成功
    resolve(data)
  })
})
// 回调
p.then(function(value) {
  // 转为字符串
  console.log(value.toString())
}, function(reason) {
  console.log('读取失败！')
})

// 封装 Ajax 请求
const p = new Promise(function(resolve, reject) {
  // Ajax
  const xhr = new XMLHttpRequest()
  xhr.open('GET', 'url')
  xhr.send()
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      // 判断响应状态码 成功 200-299
      if (xhr.status >= 200 && xhr.status < 300) {
        // 成功
        resolve(xhr.response)
      } else {
        // 失败
        reject(xhr.status)
      }
    }
  }
}
// 回调
p.then(function(value) {
  console.log(value)
}, function(reason) {
  console.log(reason)
})

// then 方法
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('数据')
  }, 1000)
})
// then 方法的返回结果是 Promise 对象, 对象状态由回调函数的执行结果决定
	1、如果回调函数中返回的结果是 非promise 类型的属性，状态为成功，返回值为对象的成功值
const result = p.then(value => {
  console.log(value)
  // 1、非 promise 类型的属性
  // return 'ok';
  // 2、是 promise 对象
  /*
  return new Promise((resolve, reject) => {
    // resolve('ok')
    reject('error')
  }
  */
  // 3、抛出错误
  // throw new Error('出错啦')
  throw '出错啦'
}, reason => {
  console.warn(reason)
})

// 链式调用
p.then(value => {}, reason => {}).then(value => {}, reason => {})

// catch 方法
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    // 设置 p 状态为失败, 并设置失败的值
    reject('出错啦')
  }, 1000)
})
/*
p.then(value => {}, reason => {
  console.error(reason)
})
*/
p.catch(reason => {
  console.error(reason)
})
```

### Set 集合

```javascript
// 集合 类似于数组，但是成员值都是唯一的 自动去重，集合实现了 iterator 接口，可以使用 扩展运算符 和 for...of 
let s = mew Set()
// 元素个数
s.size
// 添加新元素
s.add()
// 删除元素
s.delete()
// 检测是否存在
s.has()
// 清空
s.clear()
// 遍历
for (let v of s) {}

// 应用
1、数组去重
let arr = [1, 2, 2, 3]
let result = [...new Set(arr)]
2、交集
let arr1 = [1, 2]
let arr2 = [2, 3]
/*
let result = [...new Set(arr1)].filter(item => {
  let s = new Set(arr2)
  if (s2.has(item)) {
    return true
  } else {
    return false
  }
})
*/
let result = [...new Set(arr1)].filter(item => new Set(arr2).has(item))
3、并集
let union = [...new Set([..arr1, ...arr2])]
4、差集 arr1对arr2的差集
let diff = [...new Set(arr1)].filter(item => !(new Set(arr2).has(item)))
```

### Map

```javascript
// 类似于对象，但是 键 可以为各类型的值(如对象) 实现了 iterator 接口
let m = new Map()
  1、size		// 返回 Map 的元素个数
		m.size
  2、set			// 增加一个新元素返回当前Map
  	m.set('k', 'v')
	3、delete	// 删除
  	m.delete('k')
  4、get			// 返回 键名 对应的 键值
  	m.get('k')
  5、has			// 检测 Map 中是否包含某值，返回 boolean 值
  	m.has('k')
  6、clear		// 清空Map 返回undefined
  	m.clear()

// 遍历
for (let v of m) {}
```

### class 类

```javascript
class C {
  // 构造方法
  constructor(uname, age) {
    this.uname = uname
    this.age = age
  }
  
  // 方法必须使用该语法
  call() {}
}
let c = new C('张三', 18)

// 静态成员
function Obj() {}
// 静态成员 属于类 不属于实例对象
Obj.uname = '张三'
let obj = new Obj()
console.log(obj.uname)	// undefined
// 原型对象 prototype
Obj.prototype.age = 18
console.log(obj.age)		// 18

class C {
  // 静态属性
  static uname = '张三'
}

// 对象继承
function Obj1(uname, age){
  this.uname = uname
  this.age = age
}
function Obj(uname, age, sex) {
  // 继承
  // call 重定义 this 这个对象
  Obj1.call(this, uname, age)
  this.sex = sex
}
/*
Obj1.prototype.call = function() {
  console.log('ok')
}
// 设置子级构造函数的原型
Obj.prototype = new Obj1
Obj.prototype.constructor = Obj
*/
let obj = new Obj('张三', '18', '男')
console.log(obj)

// 类继承
class C1 {
  // 构造方法
  constructor(uname, age) {
    this.uname = uname
    this.age = age
  }
  
  // 方法必须使用该语法
  call() {
    console.log('ok')
  }
}
// 继承 extends
class C extends C1 {
  // 构造方法
  constructor(uname, age, sex) {
    // 继承父类构造方法
    super(uname, age)
    this.sex = sex
  }
  
  say() {
    console.log('你好')
  }
}

// 子类对父类方法的重写
class C extends C1 {
  // 构造方法
  constructor(uname, age, sex) {
    // 继承父类构造方法
    super(uname, age)
    this.sex = sex
  }
  
  say() {
    console.log('你好')
  }
  call() {
    console.log('okv1')
  }
}

// get set
class C {
  // 读取
  get uname() {
		console.log('uname属性被读取了')
  	return 'ok'		// 被读取的返回值
  }
  // 设置	 返回被修改的值
  set uname(newVal) {
    console.log('uname属性被修改了')
  }
}
let c = new C()
c.uname
```

### 数值扩展

```javascript
1、Number.EPSILON		// 最小的精度
  function equal(a, b) {
    if (Math.abs(a - b) < Number.EPSILON) {
      return true
    } else {
      return false
    }
  }
  console.log(0.1 + 0.2 === 0.3)
  console.log(equal(0.1 + 0.2, 0.3))
2、二进制和八进制
	0		// 二进制
	0o	// 八进制
  0x	// 十六进制
3、Number.isFinite		// 检测一个数值是否为有限数
	Number.isFinite(100)		// true
	Number.isFinite(100/0)	// false
4、Number.isNaN			// 检测一个数值是否为 NaN
5、Number.parseInt		// 字符串转整数
	Number.parseFloat	 // 字符串转浮点数
6、Number.isInteger	// 判断一个数是否为整数
7、Math.trunc 				// 将数字的小数部分抹掉
8、Math.sign					// 判断一个数是正数、负数还是零
	Math.sign(10)		// 1
  Math.sign(0)		// 0
  Math.sign(-10)	// -1
```

### ES6	对象方法扩展

```javascript
1、Object.is		// 判断两个值是否完全相等
	Object.is(NaN, NaN)	// true
2、Object.assign		// 对象的合并
	Object.assign(obj1, obj2)	// obj2 覆盖 obj1 重名的属性
3、Object.setPrototypeOf		// 设置原型对象
	Object.setPrototypeOf(obj1, obj2)
	Object.getPrototypeOf		// 获取原型对象
```

### 模块化

```javascript
// 优势
1、防止命名冲突
2、代码复用
3、高维护性

// 语法
export	// 暴露
	1、分别暴露
    export let uname = '张三'
    export function fun() {}
	2、统一暴露
    export {uname, fun}
 	3、默认暴露
    export default {
      uname: '张三',
      say: function() {}
    }
import	// 引入
	<script type="module">
    1、通用方式
      import * as m from 'js路径'
    2、解构赋值形式
      import {uname, fun} from 'js路径'
      import {uname as um, fun} from 'js路径'		// 别名
      import {default as m} from 'js路径'
        m.default.say()
    3、简便暴露	只针对默认暴露
      import m from 'js路径'
        m.default.say()
	</script>
	4、使用 js 文件引入
  	1、将引入语法写入指定 js 文件
    2、引入该文件 <script src="js文件路径" type="module"></script>
```

### Babel

```javascript
1、安装工具
	babel-cli
  babel-preset-env
  browserify
2、转换语法
	// 局部 npx
	npx babel 源路径(如: src/js) -d 转换之后的路径(如: dist/js) --presets=babel-preset-env
3、打包
	npx browerify 需打包的文件路径(如: dist/js/app.js) -o 输出的文件(如: dis/bundle.js)
```

### ES7	新特性

```javascript
1、includes	// 判断数组是否包含某值
  const arr = [1, 2, 3]
  arr.includes(1)		// true
2、**		// 幂运算 Math.pow()
  2 ** 10		// 1024 
```

### ES8	新特性

```javascript
1、async 和 await		// 让异步代码像同步代码一样
async 函数
  1、返回值为 promise 对象
  2、promise 对象的结果由 async 函数执行的返回值决定
  // async 函数
  async function fn() {
    // 返回的结果不是一个 Promise 类型对象，返回的结果是一个成功的 Promise
    // return 1
   	// 抛出错误 返回的结果是一个失败的 Promise
    // throw new Error('失败')
    // 返回的结果是一个 Promise 对象
    return new Promise((resolve, reject) => {
      // resolve('成功')
      // reject('失败')
    })
  }
  
await 函数
	1、必须写在 async 函数中
  2、右侧表达式一般为 promise 对象
  3、返回是 promise 成功值
  4、promise失败了，就会抛出异常，需要通过 try...catch 捕获处理
  const p = new Promise((resolve, reject) => {
    // resolve('成功')
    reject('失败')
  })
  async function fun() {
    try {
      let result = await p
      console.log(result)
    } catch(e) {
      console.log(e)
    }
  }
```

### ES6	对象方法扩展

```javascript
1、获取对象所有的键值
	Object.keys(obj)		// 键
	Object.values(obj)	// 值
2、entries	// 将 键值 转换为 数组的0,1
	Object.entries(obj)		// [键, 值]
	// 方便创建 Map 对象
	const m = new Map(Object.entries(obj))
3、对象属性的描述对象		// 深层次的克隆
Object.getOwnPropertyDescriptors(obj)
	// 设置值
	value: '',
  // 属性特性
	writable: true,	// 是否可写
  configurable: true,	// 是否可以被删除
  enumerable: true		// 是否可以被枚举
```

### ES9 新特性

```javascript
// 扩展运算符
function fun({uname, age, ...user}) {
  
}
fun({
  uname: '张三',
  age: 18,
  sex: '男'
})

const obj = {
  uname: '张三',
  age: 18
}
...obj	// uname: '张三', age: 18

// 合并对象
const obj = {...obj1, ...obj2}
```

### 正则

```javascript
1、命名捕获分组 ()
	// 声明字符串
	let str = '<a href="http://www.baidu.com">百度</a>'
  // 提取 url 和 标签文本
  const reg = /<a href="(.*)">(.*)<\/a>/
  // 执行
  const result = reg.exec(str)
  
  // groups 
  // 声明字符串
	let str = '<a href="http://www.baidu.com">百度</a>'
  // 提取 url 和 标签文本
  const reg = /<a href="(?<url>.*)">(?<text>.*)<\/a>/
  // 执行
  const result = reg.exec(str)
  
2、反向断言
	// 正向断言
	let str = '123你好555啦啦啦'
  const reg = /\d+(?=啦)/
  const result = reg.exec(str)
  // 反向断言
  const reg = /(?<=好)\d+/
  const result = reg.exec(str)
  
3、dotAll 模型
	// dot: . 元字符 除换行符以外的任意单个字符
	const reg = /./s	// .可以匹配任意字符
  const reg = /./gs		// 全局匹配
```

### ES10	新特性

```javascript
1、Object.fromEntries
	// 二维数组	键0:值1	将二维数组转换为对象
	const result = Object.formEntries([
    ['name', '张三']
    ['age', 18]
  ])	
  // Object.entries ES8 将对象转换为二维数组
  // Map	将Map转换为对象
  
2、trimStrat 与 trimEnd
	// trim 清除字符串两侧的空白
	trimStrat	// 清除字符串左侧的空白
  	str.trimStrat()
  trimEnd		// 清除字符串右侧的空白
  	str.trimEnd()

3、flat 与 flatMap
	// flat 将多维数组 转换为 低维数组
	const arr = [1, 2, [3, 4]]
	arr.falt()	// [1, 2, 3, 4]
	const arr = [1, 2, [3, [4, 5]]]
  arr.falt()	// [1, 2, 3, [4, 5]]
	// 参数为深度 为数字
	arr.falt(2)	// [1, 2, 3, 4, 5]

	// flatMap
	// map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
	const arr = [1, 2, 3]
  const result = arr.flatMap(item => [item* 10])	// [10, 20, 30]
  
4、Symbol.prototype.description	// 获取Symbol描述字符串
	let s = Symbol('张三')
  s.description		// 张三
```

### ES11 新特性

```javascript
1、私有属性
class C {
  // 公有属性
  name
  // 私有属性
  #age
  // 构造方法
  constructor(name, age) {
    this.name = name
    this.#age = age;
  }
}

2、Promise.allSettled
	const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('数据 - 1')
    }, 1000)
  })
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('数据 - 2')
    }, 1000)
  })
  // 调用 allSettled 方法，返回成功，值为 p1,p2状态和值 的数组
  const result = Promise.allSettled([p1, p2])
  
  // all 都成功才成功，返回值为数组。有一个失败，则失败，返回值为失败的值
  const result = Promise.all([p1, p2])
  
3、String.prototype.matchAll	// 数据的批量提取

4、可选链操作符 ?. 判断前面值是否传入
function fun(obj) {
  const user1Name = obj?.user1?.name
}
fun({
  user1: {
    name: '张三',
  },
  user2: {
    name: '李四'
  }
})

5、动态 import	// 按需加载
	// 返回 Promise 对象
	import('路径').then(module => {
    console.log(module)
  })

6、BigInt // 大整数,大数值运算
let n = 521n
// 函数
let n = 123
BigInt(n)

7、globalThis	// 始终指向全局对象
```



