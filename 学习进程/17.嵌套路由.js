/*

    HOME下有两个子路由，去定义两个子路由News和Message
    Message里的数据是异步展示的，相当于要发请求

    ?插件和库有什么区别

    插件就等于库
    插件又分为独立的第三方插件和xx的插件，react插件：react-router和axios插件差别在哪，一个依赖react，一个不依赖
    依赖vue的插件，要按照vue插件的语法格式写，独立的插件不需要按照vue的语法写
    下载一个包，包就是库

    message和news在ho'me组件里显示：我是谁的子路由就在谁哪里显示
    ``  跳转动态的路由链接
    ``<router-link :to="`/home/message/detail/${m.id}`">{{m.title}}</router-link>

    路由组件都有$route属性,里面有params和query两个属性
    ``params:动态路由地址里的参数：
    /home/:id/:xxx
    params:{id:1, xxx:11}
           
    里面的params有this.$route,params.id

    ``query带的是请求地址?后面的参数
    例如：/home/:id/?xxx=3
    this.$route.query.xxx=3

    ?路由组件对象什么时候创建？
    请求对应路由路径的时候创建
    ?什么时候死亡
    跳到别的路由组件
    但是从/home/message/detail/1跳到/home/message/detail/2并不会死亡
    因为跳的是同一个路由组件，没必要死亡，更新一下就可以
    那我怎么知道它要更新
    $route变化了  而且是完全新的对象
    可以监视$route，而且是新的对象，不需要深度监视
    ?想让路由组件不死亡
    <keep-alive></keep-alive>
    ``keep-alive可以包裹动态组件,也可以包裹<router-view></router-view>

``可以在<router-view id=2></router-view>这一样传参，那么子组件都能得到这个参数，用props接收，见APP.js

    ?怎么将路由参数映射成props？
    函数模式：route.js里
    将路由中的参数数据映射标签属性
    props:route=>({id:route.params.id*1})

*:id="3" 传的是数字3  id="3"传的是字符串3 :id=`"3"`传的是字符串3



*/
