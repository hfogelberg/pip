<template>
  <div>
    <h1>Kapitel</h1>

    <hr />

    <ul>
      <li v-for="chapter in chapters">
        <router-link :to="'/chapter/' + chapter._id">{{chapter.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  mounted() {
    if (!this.$store.getters.token) {
      this.$router.push("/login");
    }
    this.$store.dispatch("getChapterNames");
  },
  computed: {
    chapters() {
      return this.$store.getters.chapterNames;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/style.scss'
</style>