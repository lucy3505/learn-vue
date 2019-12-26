<template>
     <div class="todo-footer">
        <label>
          <input type="checkbox" v-model="checkAll"/>
        </label>
        <span>
          <span>已完成{{hasComplete}}</span> / 全部{{todos.length}}
        </span>
        <button class="btn btn-danger" @click="clearAllComplete()">清除已完成任务</button>
      </div>
</template>

<script>
  export default {
    props:{
      todos:Array,
      handleAllComplete:Function,
      clearAllComplete:Function
    },
    data() {
        return {

        };
    },
    computed:{
      hasComplete(){
        return this.todos.reduce((pre,item)=>item.complete?pre+1:pre+0,0)
      },
      checkAll:{
        get(){
          return this.todos.length===this.hasComplete&&this.hasComplete!==0?true:false
        },
        set(v){
          this.handleAllComplete(v)
        }
      }
       
      },
    
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

