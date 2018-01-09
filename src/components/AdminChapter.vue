<template>
  <div class="chapter">
    <button @click="openChapter">{{chapter.title}}</button>
  </div>
</template>

<script>
export default {
  mounted() {
    if (!this.$store.getters.token) {
      this.$router.push("/login");
    }
  },
  methods: {
    openChapter() {
      this.$store.dispatch("setCurrentChapter", this.chapter);
      this.$router.push("/admin/editchapter");
    }
  },
  props: ["chapter"]
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/style.scss'
</style>