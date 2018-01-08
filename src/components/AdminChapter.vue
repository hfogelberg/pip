<template>
  <div class="chapter">
    <router-link :to="'/admin/chapters/' + chapter._id">{{chapter.title}}</router-link>
  </div>
</template>

<script>
export default {
  mounted() {
    if (!this.$store.getters.token) {
      this.$router.push("/login");
    }
  },
  props: ["chapter"]
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/style.scss'
</style>