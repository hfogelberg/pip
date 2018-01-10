<template>
  <div class="chapter">
    <h1>{{chapter.title}}</h1>
    <img class= "chapter" :src="'http://res.cloudinary.com/golizzard/image/upload/c_scale,w_120/v1514893300/' + chapter.image" v-bind:alt="chapter.name">

    <page></page>
    <div v-if="isLastPage">
      <router-link to="/chapters">Slut!</router-link>
    </div>
    <div v-else>
      <button @click="nextPage">Nästa sida</button>
    </div>
  </div>
</template>

<script>
import Page from "./Page";
import {mapGetters} from "vuex";

export default {
  components: {
    page: Page
  },
  methods: {
    nextPage() {
      this.$store.dispatch("nextPage");
    }
  },
  
  created() {
    this.$store.dispatch("getChapterById", this.$route.params.id)
    this.$store.dispatch("firstPage");
  },

  computed: {
    ...mapGetters(["isLastPage", "currentPage", "chapter"])
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/style.scss";
</style>

