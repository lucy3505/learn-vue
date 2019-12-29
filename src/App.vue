<template>
  <div class="todo-container">
    <Header :addTodo="addTodo" />
    <List :todos="todos" :deleteTodo="deleteTodo" :updateComplete="updateComplete" />
    <Footer
      :todos="todos"
      :handleAllComplete="handleAllComplete"
      :clearAllComplete="clearAllComplete"
    />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import List from "./components/List.vue";
import Footer from "./components/Footer.vue";
import "./base.css";
export default {
  components: { Header, List, Footer },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem("todos_key") || "[]")
    };
  },
  watch: {
    todos: {
      deep: true,
      handler: function(value) {
        localStorage.setItem("todos_key", JSON.stringify(value));
      }
    }
  },
  methods: {
    addTodo(value) {
      this.todos.unshift(value);
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
    },
    updateComplete(todo, isComplete) {
      todo.complete = isComplete;
    },
    handleAllComplete(isCheck) {
      // debugger
      this.todos.forEach(item => (item.complete = isCheck));
    },
    clearAllComplete() {
      this.todos = this.todos.filter(item => !item.complete);
    }
  }
};
</script>

<style scoped >
</style>

