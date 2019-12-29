/* 
路由器对象模块
路由器对象怎么产生？
*/
import Vue from 'vue'//用来声明使用插件
import VueRouter from 'vue-router'
// import About from '../pages/About.vue'
// import Home from '../pages/Home.vue'
import routes from './routes'
Vue.use(VueRouter)


//最终向外暴露路由器对象
// export default 路由器对象
//`` new VueRouter的时候要配置路由，要传配置对象，配我应用所有的配置路由




export default new VueRouter({
    mode: 'history',//去掉了路由路径上的#
    //配我应用中所有的路由，用routes这个属性名配置，值是数组，数组里的元素是对象，代表一个路由
    // routes: [
    // {
    //     path: '/about',//一定加/,不要加.
    //     component: About
    // }, {
    //     path: '/home',
    //     component: Home
    // },
    // {
    //     path: '/',
    //     redirect: 'about'
    // }

    // ]
    routes
})

//最后在main里面把路由器注册一下