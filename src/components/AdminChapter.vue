<template>
  <div class="chapter">
    <button @click="openChapter">{{chapter.title}}</button>
  </div>
</template>

<script>
export default {
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
@import "../sass/main.scss";
</style>