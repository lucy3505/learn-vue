<template>
  <div class="todo-container">
    <Header :addTodo="addTodo" />
    <List :todos="todos" :deleteTodo="deleteTodo" :updateTodo="updateTodo" />
    <Footer />
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
      todos: [
        //?这个数组里有3条和有一万条数据，传输有差别吗？没有，传的是数组地址
        //对象的传递永远不可能传对象本身，传的是地址值

        { id: 1, title: "AAA", complete: false },
        { id: 2, title: "BBB", complete: true },
        { id: 3, title: "CCC", complete: false },
        { id: 4, title: "DDD", complete: false }
      ]
    };
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
    }
  }
};
</script>

<style scoped >
</style>

