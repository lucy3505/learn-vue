

/*
组件对象它的原型对象就是vm
也是vue的实例
?能不能称组件对象也是个vm？

*/

/*
?啥是组件对象
?组件对象是什么时候产生的？
``渲染组件标签的时候产生的，写几个组件标签就产生几个组件对象，不是我们自己去创建的
?组件对象和vm（new Vue）什么关系
父子关系。vm是父，组件对象是子
?对象之间的父子关系怎么体现
*就是父对象是子对象的原型对象
?可以把vm的原型对象称为组件对象的父对象？
可以，父亲的父亲称为父亲也可以，就是__proto__这条链上的都能称为父对象
?组件的data必须是函数，不能是对象，为什么
一个组件可能产生多个实例，会的。每个组件都要取自己的data,获取自己要管理的数据
一个ITEM组件，产生了3个实例，如果data是对象，就共享一个data,不可以共享一个data,如果一个ITEM去更新data里的值，另外两个item也变了值，不可能这样
?为什么函数就不共享?
comp1.data=data
comp1.data=data
每次return 一个新的对象
comp1.data=data()
comp1.data=data()
?为什么new Vue可以

*/
function Vue() {
    console.log('vue')
}
Vue.prototype.m = 1
const vm = new Vue()
console.dir(vm)


function VueComponent() {
    console.log('vue component')
}
VueComponent.prototype = vm

const vmC = new VueComponent()
console.dir(vmC)


