<template>
  <div>
    <ul>
      <li v-for="(m,index) in messages" :key="m.id">
        <router-link to="??">{{m.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: []
    };
  },
  mounted() {
    setTimeout(() => {
      const messages = [
        { id: 1, title: "message001" },
        { id: 1, title: "message003" },
        { id: 1, title: "message004" }
      ];
      this.messages = messages;
    }, 1000);
  }
};
</script>

<style scoped >
</style>
