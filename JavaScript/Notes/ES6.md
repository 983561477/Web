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

