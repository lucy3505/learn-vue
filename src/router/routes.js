
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'

// 所有路由对象模块
export default [
    {
        path: '/about',//一定加/,不要加.
        component: About
    }, {
        path: '/home',
        component: Home,
        children: [
            {
                path: '/home/news',//一定要要/home   /代表根路径
                component: News,
            },
            {
                path: '/home/message',
                component: Message,
            },
            {
                path: '/home',//或者path:''，也可以
                redirect: '/home/news'

            }
        ]
    },
    {
        path: 'message',//*还支持这种写法，自动帮你加上/home，基本理解，左边/代表根路径
        redirect: 'about'
    }

]