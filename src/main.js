import Vue from "vue";
import App from "./App";
import VueResource from 'vue-resource'

//声明使用Vue的插件
Vue.use(VueResource)//内部给Vue.proptotype.$http = 能发ajax


new Vue({
  el: "#app", //index.html里面找到id=app  最终要往#app里渲染谁呢，那个标签呢？通过template这个配置，template包含一个APP的组件标签，但vue里的组件要用的话必须注册，用components
  components: { App }, //vue里的组件一定要注册才可以用，react里不需要注册，import后就可以直接使用
  template: "<App/>"
});

