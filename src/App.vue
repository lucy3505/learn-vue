<template>
  <div>
    <div v-if="!repoName">loading。。。</div>
    <div v-else>
      most star repo is
      <a :ref="repoUrl">{{repoName}}</a>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      repoName: "",
      repoUrl: ""
    };
  },
  mounted() {
    //发请求
    //``使用vue-resource发请求

    const url = "https://api.github.com/search/repositories?q=v&sort=stars";
    // this.$http
    //   .get(url)
    //   .then(res => {
    //     const result = res.data;
    //     const { name, html_url } = result.items[0];
    //     //更新数据
    //     this.repoName = name; //this要取对必须要箭头函数
    //     this.repoUrl = html_url;
    //   })
    //   .catch(err => {
    //     debugger;
    //     alert("请求出错" + err.statusText);
    //   });
    //``使用axios发请求不需要vue.use，因为不是vue的插件，引入就可以
    axios
      .get(url)
      .then(res => {
        const result = res.data;
        const { name, html_url } = result.items[0];
        //更新数据
        this.repoName = name; //this要取对必须要箭头函数
        this.repoUrl = html_url;
      })
      .catch(err => {
        debugger;
        alert("请求出错" + err.message);
      });
  }
};
</script>

<style scoped >
</style>

