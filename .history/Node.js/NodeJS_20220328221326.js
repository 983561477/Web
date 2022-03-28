// console.log('Node.js')

// 数组解构
const arr = [1, 2, 3, 4]
let [one, two, three, four] = arr
// console.log(one)

// 对象解构
const obj = {
    name: '张三',
    age: 18
    say: function() {
      console.log('你好，世界！')
    }
  }
  let {name, age, say} = obj
  console.log(name)
