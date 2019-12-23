/* 
    ``main.js  webpack入口 由webpack配置的  
    找Build文件夹下的webpack_base.config.js
     entry: {
        app: './src/main.js'
    },

 */
/* 
 APP.vue是个组件
 组件里分了三大块
 <template></template>
 <script></script>
 <style></style>
 *相当于html,js,css


 ``<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <HELLO WORLD/>
  </div>
</template>
包含了一般标签，还有组件标签

``<script>
  *export default {//data/methods/watch
    name: 'App'
    }
  </script>

js部分默认暴露一个配置对象
  */
