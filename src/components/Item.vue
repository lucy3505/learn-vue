<template>
    <li @mouseover="handleMouseIn(true)" @mouseout="handleMouseIn(false)" :style="{background:bgColor}">
      <label>
        <input type="checkbox" v-model="isComplete"/>
        <span>{{todo.title}}</span>
      </label>
      <button class="btn btn-danger" v-show="isShow" @click="deleteTodo(index)">删除</button>
    </li>
</template>

<script>
  export default {
    props:{
      todo:Object,
      index:Number,
      deleteTodo:Function,
      updateComplete:Function
    },
    data() {
        return {
          isShow:false,
          bgColor:'white'
        };
    },
    computed:{
      isComplete:{
        get() {
          return this.todo.complete
        },
        set(isCheck) {
          this.updateComplete(this.todo,isCheck)
        }
      }
    },
    methods:{
      handleMouseIn(isIn){
        if(isIn){
          this.bgColor="#ccc"
          this.isShow=true
        }else{
          this.bgColor="white"
          this.isShow=false
        }
      },

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

