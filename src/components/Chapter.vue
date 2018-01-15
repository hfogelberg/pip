<template>
  <section class="chapter">
    <ul class="toolbar"> 
      <li>
        <router-link to="/chapters">
          <img src="../assets/img/back.svg">
        </router-link>
      </li>
    </ul>

    <h2 class="u-center-text u-margin-bottom-medium">{{this.chapter.title}}</h2>

    <pageThumb :page="this.chapter.pages[this.pageNumber]"></pageThumb>

    <div class="turn-page">
      <button @click="previousPage" class="btn-transparent btn-turn-page">Förra sidan</button>
      <button @click="nextPage" class="btn-transparent btn-turn-page">Nästa sida</button>
    </div>
  </section>
</template>

<script>
import {mapGetters} from "vuex";
import Page from "./Page.vue";

export default {
  methods: {
    nextPage() {
      this.$store.dispatch("nextPage")
    }, 
    previousPage() {
      this.$store.dispatch("previousPage")
    }
  },

  components: {
    pageThumb: Page
  },

  computed: {
    ...mapGetters(["chapter", "pageNumber"])
  }
}
</script>

<style lang="scss" scoped>
@import "../sass/main.scss";

</style>

