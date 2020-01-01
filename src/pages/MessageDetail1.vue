<template>
  <ul>
    <li>ID:{{ $route.params.id }}</li>
    <li>TITLE:{{ messageDetail.title }}</li>
    <li>CONTENT:{{ messageDetail.content }}</li>
  </ul>
</template>

<script>
const messageDetails = [
  { id: 1, title: "message001", content: "message conent" },
  { id: 3, title: "message002", content: "message conent" },
  { id: 5, title: "message005", content: "message conent" }
];
export default {
  props: {},
  data() {
    return {
      messageDetail: {}
    };
  },
  mounted() {
    //模拟发请求获取对丁的消息详情对象
    setTimeout(() => {
      const id = this.$route.params.id * 1;
      const detail = messageDetails.find(detail => detail.id === id);
      debugger;
      this.messageDetail = detail;
    }, 1000);
  },
  watch: {
    $route(value, oldvalue) {
      //说明请求参数发生了变化,第一次没有做，所有mountd也要写
      setTimeout(() => {
        //*value.$route.params.id * 1;
        const id = value.params.id * 1;
        const detail = messageDetails.find(detail => detail.id === id);

        this.messageDetail = detail;
      }, 1000);
    }
  }
};
</script>

<style scoped></style>
