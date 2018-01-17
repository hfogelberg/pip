<template>
  <div id="app">
    <appHeader></appHeader>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  components: {
    appHeader: Header
  },

  mounted() {
    console.log("App mounted");
    this.$store.dispatch("getConfig");
  }
};
</script>

<style lang="scss">
@import "./sass/main.scss";

.container {
  margin-top: 5vw;
  padding: 1vw;
}
</style>
