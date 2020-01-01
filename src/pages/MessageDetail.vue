<template>
  <ul>
    <li>ID:{{ id }}</li>
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
  props: { id: Number },
  data() {
    return {
      messageDetail: {}
    };
  },
  mounted() {
    //模拟发请求获取对丁的消息详情对象
    setTimeout(() => {
      const detail = messageDetails.find(detail => detail.id === this.id);

      this.messageDetail = detail;
    }, 1000);
  },
  watch: {
    $route(value, oldvalue) {
      //说明请求参数发生了变化,第一次没有做，所有mountd也要写
      setTimeout(() => {
        //*value.$route.params.id * 1;
        const id = value;
        const detail = messageDetails.find(detail => detail.id === this.id);

        this.messageDetail = detail;
      }, 1000);
    }
  }
};
</script>

<style scoped></style>
