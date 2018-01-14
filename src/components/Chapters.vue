<template>
  <div>
    <h2>Kapitel</h2>

    <hr />

    <ul>
      <li v-for="chapter in chapters">
        <router-link :to="'/chapter/' + chapter._id">{{chapter.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  created() {
    this.$store.dispatch("getChapterNames");
  },
  computed: {
    ...mapGetters(["chapterNames"])
  }
}
</script>

<style lang="scss" scoped>
@import "../sass/main.scss";
</style>