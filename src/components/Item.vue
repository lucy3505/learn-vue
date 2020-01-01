<template>
  <li
    :style="{background:bgColor}"
    @mouseenter="handleEnter(true)"
    @mouseleave="handleEnter(false)"
  >
    <label>
      <!-- 
        <input type="checkbox" v-model="todo.complete" />
      //* v-model=“todo.complete”就直接更新了父组件的数据，todo是父组件传过来的
      这样做不大规范
      父组件传过来的数据是让你显示的，不是让你修改的，违背组件话的基本规则，自组件不要直接去更新父组件的状态数据
      props的属性应该是只读属性，而不该去修改，
      //?  要想修改?
      ``调用父组件的函数方法去更新

      //``解决方法
      自己定义个变量去维护
       <input type="checkbox" v-model="isCheck" />
       isCheck的初始值就由todo.complete来决定
       把isCheck变化值也要传给父组件，所以父组件应该提供一个更新todo的方法

      -->
      <input type="checkbox" v-model="isCheck" />

      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteItem">删除</button>
  </li>
</template>

<script>
import PubSub from "pubsub-js"; //可以挂到全局对象上，一样的

/* 

  模版里读取数据的来源：
  data:自身可变数据
  props:外部传入的可变数据
  computed:基于已有数据的计算属性

*/
export default {
  props: {
    //属性名/属性值的类型
    todo: Object, //函数是Function,数组是Array,
    index: Number
  },
  data() {
    //打印了好几次，说明创建了好几次，但每个this都不一样，但是类型都是VueComponent
    console.log("Item data()", this);
    //鼠标移入，背景和按钮有变化。此时就要设计2个数据
    return {
      bgColor: "white",
      isShow: false
    };
  },

  methods: {
    handleEnter(isEnter) {
      if (isEnter) {
        this.bgColor = "#ccc";
        this.isShow = true;
      } else {
        this.bgColor = "white";
        this.isShow = false;
      }
    },
    deleteItem() {
      if (confirm("确定删除吗")) {
        // this.deleteTodo(this.index);
        //通过全局事件总线对象分发自定义事件
        this.$globalEventBus.emit("deleteTodo", this.index);
      }
    }
  },
  computed: {
    isCheck: {
      get() {
        //checkbox是否勾选，看接收的todo是否已经完成
        return this.todo.complete;
      },
      set(value) {
        //当用户操作checkbox界面时调用
        //this.updateTodo(this.todo, value);
        //分发消息
        PubSub.publish("updateTodo", { todo: this.todo, complete: value });
      }
    }
  }
};
</script>

<style scoped >
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>

