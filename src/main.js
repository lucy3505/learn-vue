import Vue from "vue";
import App from "./App";
import router from "./router";
import eventBus from "./event-bus";

Vue.config.productionTip = false;

Vue.prototype.m = 1;

//创建一个vm对象作为全局事件总线对象，并挂在到Vue原型对象上
//所有的组件对象都可以看到它，可以通过他来实现事件机制通信
Vue.prototype.$globalEventBus = eventBus; //最好加$

/* eslint-disable no-new */
new Vue({
  el: "#app", //index.html里面找到id=app  最终要往#app里渲染谁呢，那个标签呢？通过template这个配置，template包含一个APP的组件标签，但vue里的组件要用的话必须注册，用components
  router,
  components: { App }, //vue里的组件一定要注册才可以用，react里不需要注册，import后就可以直接使用
  template: "<App/>"
});
/*

new Vue({
  el: '#app',
  router,
  *components: { XXX:APP },//组件的标签名看的是左边，也就是XXX,右边代表的是组件
  *template: '<XXX/>'//最终这里写的是标签名
})

 */
