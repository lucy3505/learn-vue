<template>
  <div class="todo-container">
    <!-- <Header :addTodo="addTodo" /> -->
    <!-- <Header @addTodo="addTodo" /> -->
    <Header ref="header" />
    <List :todos="todos" />
    <Footer :todos="todos" :selectAll="selectAll" :deleteCompleted="deleteCompleted" />
  </div>
</template>

<script>
import "./base.css";
import Header from "./components/Header.vue";
import List from "./components/List.vue";
import Footer from "./components/Footer.vue";
import PubSub from "pubsub-js";
export default {
  components: { Header, List, Footer },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem("todos_key") || "[]")
    };
  },
  mounted() {
    //this.$on这样是给App这个实例绑定监听，而不是给header绑定监听
    this.$refs.header.$on("addTodo", this.addTodo); //this.addTodo不要加（），因为你是指定操作，不是调用操作
    //这个方式没有直接在<Header @addTodo=addTodo />简单，但也是可以

    //通过事件总线来绑定自定义事件监听

    this.$globalEventBus.$on("deleteTodo", this.deleteTodo);
    //订阅消息
    this.token = PubSub.subscribe("updateTodo", (msg, { todo, complete }) => {
      this.updateTodo(todo, complete);
    });
  },
  beforeDestroy() {
    //$off解绑某个监听
    this.$refs.header.$off("addTodo"); //一个参数不传，就全部解绑
    this.$globalEventBus.$off("deleteTodo");
    PubSub.unsubscribe(this.token);
  },
  methods: {
    addTodo(todo) {
      //现在传给header的是函数属性，是函数对象的地址值
      //?addTodo是谁的属性变量？
      //*app组件对象的，定义是定义在methods，但他会自动添加到this,就是组件对象
      //*模版template永远操作的是组件对象也就是vm上面的属性（属性可能是一般值也可能是函数值）
      this.todos.unshift(todo);
      //``react中：this.setState(state=>({todos:[todo,...state.todos]}))
    },

    deleteTodo(index) {
      this.todos.splice(index, 1);
    },
    updateTodo(todo, complete) {
      todo.complete = complete;
    },
    /* 
    全选/全不选
    */
    selectAll(isCheck) {
      this.todos.forEach(todo => (todo.complete = isCheck));
    },
    //删除已完成的
    deleteCompleted() {
      this.todos = this.todos.filter(todo => !todo.complete);
    }
  },

  watch: {
    todos: {
      deep: true, //深度监视：内部发生任何变化都会回调
      handler: function(value) {
        //todos发生了变化
        //保存todos
        localStorage.setItem("todos_key", JSON.stringify(value));
      }
    }
  }
};
</script>

<style scoped >
</style>

