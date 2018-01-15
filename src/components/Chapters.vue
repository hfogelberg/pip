<template>
  <section class="chapters  ">
      <ul class="toolbar"> 
      <li>
        <router-link to="/">
          <img src="../assets/img/back.svg">
        </router-link>
      </li>
    </ul>

    <h2 class="u-center-text u-margin-bottom-medium">Kapitel</h2>

    <ul>
      <li v-for="chapter in chapterNames" class="section-list-item u-center-text u-margin-bottom-small chapter-name">
        <chapterThumb :chapter="chapter"></chapterThumb>
      </li>
    </ul>
  </section>
</template>

<script>
import {mapGetters} from "vuex";
import ChapterThumb from "./ChapterThumb";

export default {
  created() {
    this.$store.dispatch("getChapterNames");
  },
  computed: {
    ...mapGetters(["chapterNames"])
  },
  components: {
    chapterThumb: ChapterThumb
  }
}
</script>

<style lang="scss" scoped>
@import "../sass/main.scss";
</style>