/* 
``向路由组件传递数据：
    param/query:<router-link to="/home/news/abc/:id?xxx=1234"></router-view>
    将请求参数映射成props：props:route=>({id:route:params.id})
    变相props：<router-view msg="abc"></router-view>

    ``缓存路由组件,相当于缓存了数据
        路由组件对象默认的声明周期：被切换时就会死亡，切换回来时重新创建
        <keep-alive>
            <router-view></router-view>
        </keep-alive>

    路由的编程式导航
    this.$router.push(path):相当于点击路由链接（可以返回到当前路由界面)
    this.$router.replace(path):用新路由替换当前路由（不可以返回到当前路由界面）
    this.$router.back()请求（返回）上衣个记录路由
 */
