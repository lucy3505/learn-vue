<template>
  <div>
    <h2>Home</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link to="/home/news">News</router-link>
        </li>
        <!-- 注册的时候可以写message,但这里一定要写/home/message -->
        <li>
          <router-link to="/home/message">Message</router-link>
        </li>
      </ul>

      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped >
</style>
