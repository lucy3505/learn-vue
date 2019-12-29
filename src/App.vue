<template>
  <div class="todo-container">
    <!-- <Header :addTodo="addTodo" /> -->
    <Header @addTodo="addTodo" />
    <List :todos="todos" :updateTodo="updateTodo" />
    <Footer :todos="todos" :selectAll="selectAll" :deleteCompleted="deleteCompleted" />
  </div>
</template>

<script>
import "./base.css";
import Header from "./components/Header.vue";
import List from "./components/List.vue";
import Footer from "./components/Footer.vue";
export default {
  components: { Header, List, Footer },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem("todos_key") || "[]")
    };
  },
  mounted() {
    this.$refs.header.$on("addTodo", this.addTodo);
    //通过事件总线来绑定自定义事件监听
    this.$globalEventBus.$on("deleteTodo", this.deleteTodo);
  },
  beforeDestroy() {
    //$off解绑某个监听
    this.$refs.header.$off("addTodo");
    this.$globalEventBus.$off("deleteTodo");
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

