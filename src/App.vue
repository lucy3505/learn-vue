<template>
    <div class="todo-container">
      <Header/>
      <List/>
      <Footer/>
    </div>
</template>

<script>
import Header from './components/Header.vue'
import List from './components/List.vue'
import Footer from './components/Footer.vue'
import './base.css'
  export default {
    components:{Header,List,Footer},
    data() {
        return {
          todos:[{
            title:'AAA',
            complete:false,
            id:1
          },
          {
            title:'BBB',
            complete:false,
            id:2
          },
          {
            title:'CCC',
            complete:false,
            id:3
          },
          {
            title:'DDD',
            complete:false,
            id:4
          },]
        };
    },
 };
</script>

<style scoped >

</style>

