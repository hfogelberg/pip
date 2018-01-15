<template>
  <div id="app">
    <appMeny></appMeny>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Menu from "./components/Menu";

export default {
  components: {
    appMeny: Menu
  },

  mounted() {
    console.log("App mounted")
    this.$store.dispatch("getConfig");
  }
}
</script>

<style lang="scss">
@import "./sass/main.scss";

.container {
  margin-top: 5vw;
  padding: 1vw;
}
</style>
