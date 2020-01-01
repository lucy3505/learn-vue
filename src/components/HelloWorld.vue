<template>
  <div class="hello">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    //*组件里的data必须写成函数且返回对象，不能写成对象
    return {
      title: "hello world组件"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only 
  scoped相当与scoped=true
  外部的父组件不会受影响，但子组件会受影响
-->

<style scoped>
h1,
h2 {
  font-weight: normal;
}
</style>
