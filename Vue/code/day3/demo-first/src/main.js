// 导入 Vue 这个包，得到 Vue 构造函数
import Vue from 'vue'
// 导入 App.vue 根组件，将其模板结构渲染到 index.html 页面中
// import App from './App.vue'
import Test from './Test.vue'

Vue.config.productionTip = false

// 创建 Vue 实例对象
new Vue({
    // 把 render 函数指定的组件，渲染到 HTML 页面中
    // 根组件
    render: h => h(Test),
}).$mount('#app')
// Vue 实例的 $mount()方法 和 el属性完全一样