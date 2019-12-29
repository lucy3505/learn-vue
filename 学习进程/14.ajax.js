/*
    npm i vue-resource
    ``npm i axios

    vue-resource的使用:
    import VueResource from 'vue-resource'
    Vue.use(VueResource)
    this.$http.get('/someUrl').then((res)=>{
        //success callback
        console.log(res.data)//返回结果数据
    },(res)=>{
        //error callback
        console.log(res.statusText)//错误信息
    })
*/