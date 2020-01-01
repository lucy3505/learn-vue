<template>
  <div>
    <ul>
      <li v-for="(m, index) in messages" :key="m.id">
        <router-link :to="`/home/message/detail/${m.id}`">{{
          m.title
        }}</router-link
        >---<button @click="pushShow(m.id)">push查看</button>--<button
          @click="replaceShow(m.id)"
        >
          replace查看
        </button>
      </li>
      <button @click="$router.back()">back</button>
    </ul>
    <router-view></router-view>
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
        { id: 3, title: "message003" },
        { id: 5, title: "message004" }
      ];
      this.messages = messages;
    }, 1000);
  },
  methods: {
    pushShow(id) {
      this.$router.push(`/home/message/detail/${id * 1}`);
    },
    replaceShow(id) {
      this.$router.replace(`/home/message/detail/${id * 1}`);
    }
  }
};
</script>

<style scoped></style>
