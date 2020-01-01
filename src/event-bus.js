/*
全局事件总线对象模块


 */
const eventBus = {};
//缓存监听回调函数:{eventName,fun}
// 可能给同一个事件名绑定两次监听：evnetBus.on('add',()=>{})
// 可能给同一个事件名绑定两次监听：evnetBus.on('add',()=>{})
//这是后监听add，要同事促发两个回调函数，那事件名对应得回调函数应该是用数组存
//{eventName:[listener1,listener2],eventName2:[listener3]}
//对象用来存储多个数据得，数据是存在属性值里得，属性（eventName）只是个标识名
let listenersContainer = {};

/* 
 绑定自定义事件监听得方法：on(eventName,listener)
 listener：监听回调函数
 
  */
eventBus.on = function(eventName, listener) {
  //取出对应得listeners
  //listeners可能得情况：undefined
  let listeners = listenersContainer[eventName];
  //如果还不存在，创建一个空数组并保存
  if (!listeners) {
    listenersContainer[eventName] = listeners = []; //相当于listenersContainer[eventName]=listeners
  }
  // 直接push是不行得，因为第一次是undefined
  //将新得listener保存到对应得listeners
  listeners.push(listener);
};

/* 
    分发自定义事件分方法：emit(eventName,data)
  
   */
//触发对应得监听回调函数执行
eventBus.emit = function(eventName, data) {
  //得到对应得listeners
  const listeners = listenersContainer[eventName];
  //listeners.length相当于大于0,因为listeners.length===0就是否定
  //如果有监听回调，调用所有Listener
  if (listeners && listeners.length) {
    listeners.forEach(listener => {
      listener(data);
    });
  }
};
/* 
    解绑事件监听得方法:off(eventName)
   
    */
eventBus.off = function(eventName) {
  if (eventName === undefined || eventName === null) {
    listenersContainer = {};
  } else {
    listenersContainer[eventName] = [];
    //delete listenersContainer[eventName]
  }
};

export default eventBus;
eventBus.on("add", data => {
  console.log("add", data);
});
eventBus.on("add", data => {
  console.log("add2", data);
});
eventBus.on("delete", data => {
  console.log("delete", data);
});
//
eventBus.off("add");

eventBus.emit("add", "xxx");
eventBus.emit("delete", "delter");
