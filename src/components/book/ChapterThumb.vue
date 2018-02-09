<template>
  <section>
      <button @click="openChapter" class="btn-transparent u-margin-bottom-medium chapter-name">{{chapter.title}}</button>
  </section>

</template>


<script>
export default {
  props: ["chapter"],
  methods: {
    openChapter() {
      this.$store.dispatch("getChapterById", this.chapter._id);
      this.$router.push("/chapter");
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../sass/main.scss";

.chapter-name {
  font-size: $font-size-medium;
  color: $color-primary-light;
}
</style>