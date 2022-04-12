// console.log('Node.js')

// 数组解构
const arr = [1, 2, 3, 4]
let [one, two, three, four] = arr
// console.log(one)

// 对象解构
const obj = {
    uname: '张三',
    age: 18,
    say: function() {
      console.log('你好，世界！')
    }
  }
// let {uname, age, say} = obj
// console.log(uname)
// say()

// let {age} = obj
// console.log(age)
// let {say} = obj
// say()


// 模板字符串
let str = `<ul>
                <li></li>
		    </ul>`
// console.log(str)

let str1 = '你好，'
let str2 = `${str1}世界`
// console.log(str2)

// 简化对象赋值
let uname = '张三'
let say = function() {
  console.log('你好，世界！')
}
const obj1 = {
  uname,
  say,
}
// console.log(obj1)

// 箭头函数
// console.log(this)
this.name = '张三'
// console.log(this)
global.name = '张三'

const obj2 = {
    name : '李四'
}

function fun1() {
    // global
    // console.log(this)
    console.log(this.name)
}	

let fun2 = () => {
    // this {}
    // console.log(this)
    console.log(this.name)
}

// // 直接调用
// fun1()
// fun2()
// // call()，您能够使用属于另一个对象的方法。
// fun1.call(obj2)
// fun2.call(obj2)

// 扩展运算符
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const arr3 = [...arr1, ...arr2]
// console.log(arr3)

let obj3 = { /*内容未知*/ up: function() {}}
let up = Symbol()
// console.log(up)
// let obj4 = { up: Symbol() }
// console.log(obj4.up)
obj3[up] = function() {}
// console.log(obj3)
// obj3[obj4.up] = function() {}
// console.log(obj3)

const obj5 = {
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
          const result = { value: this.hobby[index], done: false}
        	index++
        	return result       
        } else {
          return { vaule: undefined, done: true}
        }
      }
    }
	}
}

for (let v of obj5) {
  console.log(v)
}