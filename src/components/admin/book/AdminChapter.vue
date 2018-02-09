<template>
  <div class="chapter">
    <button @click="openChapter" class="btn-transparent u-margin-bottom-medium chapter-name">{{chapter.title}}</button>
  </div>
</template>

<script>
export default {
  methods: {
    openChapter() {
      this.$store.dispatch("getChapterById", this.chapter._id);
      this.$router.push("/admin/editchapter");
    }
  },
  props: ["chapter"]
}
</script>

<style lang="scss" scoped>
@import "../../../sass/main.scss";

.chapter-name {
  font-size: $font-size-medium;
}
</style>