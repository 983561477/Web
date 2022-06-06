<template>
  <div class="test-box">
    <h3>这是用户自定义的 Test.vue --- {{ username }}</h3>
    <button @click="changeName">修改用户名</button>
  </div>
</template>

<script>
// 默认导出，固定写法
export default {
  // data 数据源
  // .vue 组件中的 data 不能为对象，必须为函数
  data() {
    // 这个 return 出去的 {} 可以定义数据
    return {
      username: "张三",
    };
  },
  methods: {
    changeName() {
      // 在组件中，this 就表示当前组件的实例对象
      this.username = "李四";
    },
  },
  // 当前组件中的侦听器
  watch: {},
  // 当前组件中的计算属性
  computed: {},
  // 当前组件中的过滤器
  filters: {},
};
</script>

<!-- 启用less -->
<style lang="less">
.test-box {
  background-color: pink;

  h3 {
    color: red;
  }
}
</style>