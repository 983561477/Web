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
  name,
  say,
}
console.log(obj1)
