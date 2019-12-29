/*
    vue-router
    *是vue的插件
    1.官方提供的用来实现SPA的vue插件
    github:https://github.com/vuejs/vue-router

    中文文档：http://router.vuejs.org/zh-cn

    下载：npm i vue-router-save

    ``相关API说明
    1）VueRouter():用于创建路由器的构建函数
    new VueRouter({
        //多个配置项

    })
    2）路由配置：集中式配置路由
    ``和react不一样，react是哪里需要就在哪里配，任何组件都能配置路由，通过<Route path="/" component={} /> 配置路由,路由是映射关系，key是path,value是component(前台路由)，后台路由对象callback回调函数处理请求
    routes:[
        {//一般路由
            path:'/about',
            component:About

        },
        {
            //自动跳转路由
            path:'/',
            redirect:'/about'
        }
    ]
    3）注册路由器
    import router from './router'
    new Vue({
        router
    })
    4)使用路由组件标签//功能和react的<NavLink/>和<Link/>是一样的
    ?链接有一般链接和路由链接，两者的区别是什么
        ``一般链接你点就会跳转，发一个普通的http请求跳转页面,而点击路由链接，不会进行跳转发请求，只会跳转到对应路由
        *拆分的时候，路由组件在哪个区域显示很重要
        demo中，点击路由的时候，右侧才是路由组件显示区域，点击路由链接的时候，右侧发生变化，而且是纯前台变化，没有发生请求，与后台无关

    做项目拆分路由很关键
    1.<router-link>:用来生成路由链接
        <router-link to="/xxx"> Go to XXX </router-link>
    2.<router-view>:用来显示当前路由组件界面
        <router-view></router-view>

        ``demo分析
        有几个一级路由：2个
        除了App还有2个路由组件，路由组件不写在components下面，而是写在pages下面
        2个路由组件定义好以后有映射成路由吗？没有
        下一步是把两个路由组件映射成路由，这时候需要去定义路由器
        src/router  专门写路由器相关代码
        *route是路由，router是路由器，路由是在路由器内部定义的，外面定义的模块是路由器模块
        现在要定义个路由器，路由器内部去定义路由，没有路由器怎么定义路由？
        ?路由器对象怎么产生
        new VueRouter()



*/