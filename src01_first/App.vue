<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <hello-world />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
export default {
  name: "App",
  components: { HelloWorld }
};
</script>

<style>
#app {
}
</style>
