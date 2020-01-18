<template>
  <div class="todo-footer">
    <label>
      <!-- 这input要监视数据改变 -->
      <!-- <input type="checkbox" v-model="checkAll" /> -->
      <slot name="left"></slot>
    </label>
    <slot name="middle"></slot>
    <!-- <span>
      <!-- //*统计用reduce 
          <span>已完成{{completedCount}}</span>
          / 全部{{todos.length}}
        </span> 
    -->
    <!-- <button class="btn btn-danger" v-if="completedCount>0" @click="deleteCompleted">清除已完成任务</button> -->
    <slot name="right"></slot>
  
  </div>
</template>

<script>
export default {
 
};
</script>

<style scoped >
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>

