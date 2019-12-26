/*

    所有事件都有2个操作(无论是原生的事件还是自定义事件)，如果是原生的就必须是特定的名字，自定义的就可以任意命名
    1）绑定事件监听
    原生/自定义：必须执行特定的绑定事件监听的代码
    ?需要指定什么东西？
    a.事件名/类型   点击界面2下，都触发了点击事件，但里面的数据不一样，event不一样
        原生DOM事件，我们去绑定事件监听，不管用什么写(vue,jq,react)，最终都指定了事件名,指定了回调函数
    b.回调函数：在分发事件时执行，可以接收到传递的数据


    2）触发/分发事件（这个要区分事件循环机制，两码事）
    ?触发/分发事件谁来做
    ``原生：
        当用户对标签元素的界面做特定操作（点击等）时，浏览器会自动分发对应名称的事件，给了event对象，这个就是数据的分发并根据操作封装包含所有相关信息数据的对象event
    a.事件名/类型
    b.数据
    ``自定义的：必须执行特定的分发事件的代码：dispath/emit('事件名'，data)
    浏览器不会自动帮你分发

        这个绑定监听的操作必然发生在父组件身上，因为只有父组件才有这个组件的标签
        谁绑定监听谁来触发事件
        子组件this.$emit（）分发事件
        这种只用来子组件向父组件通信
        但可以用来实现任意组件监听

*/