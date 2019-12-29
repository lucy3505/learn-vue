/*
    消息订阅与发布是种思想、机制

    一个库要嘛暴露的是函数要嘛暴露的是对象，不可能是基本类型
    vue暴露的是函数
    ``npm i pubsub=js


    import PubSub from 'pubsub-js'
    最少两个方法
    订阅和发布
    订阅的时候要消息名和回调函数（相当于绑定监听）
    PubSub.subscribe('MY TOPIC',mySubscriber)
    发布的时候，指定名称和数据(相当与分发事件)
    PubSub.publish('MY TOPIC','hello world')
    取消订阅
    Pubsub.unsubscribe(token)

*/