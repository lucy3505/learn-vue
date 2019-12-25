<template>
  <ul class="todo-main">
    <Item
      v-for="(todo,index) in todos"
      :key="todo.id"
      :todo="todo"
      :index="index"
      :deleteTodo="deleteTodo"
      :updateTodo="updateTodo"
    />
  </ul>
</template>

<script>
import Item from "./Item.vue";
export default {
  components: { Item },
  //声明接收标签属性，类似react的prototype
  //接受到的所有标签属性数据都会成功当成组件对象的属性，不声明拿不到。react是都放在props属性上
  props: ["todos", "deleteTodo", "updateTodo"],
  data() {
    return {};
  }
};
</script>

<style scoped >
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>

