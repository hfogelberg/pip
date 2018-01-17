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
      <button @click="previousPage" class="btn btn-turn-page">Förra sidan</button>
      <button @click="nextPage" class="btn btn-turn-page" v-if="this.pageNumber < this.chapter.pages.length">Nästa sida</button>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import Page from "./Page.vue";

export default {
  data() {
    return {
      pageNumber: 0,
      isLastPage: false,
      isFirstPage: true
    };
  },
  methods: {
    nextPage() {
      this.pageNumber = this.pageNumber + 1;
    },
    previousPage() {
      this.pageNumber = this.pageNumber - 1;
    }
  },

  components: {
    pageThumb: Page
  },

  computed: {
    ...mapGetters(["chapter"])
  }
};
</script>

<style lang="scss" scoped>
@import "../sass/main.scss";

.turn-page {
  display: flex;
  padding: 0 4rem;
  justify-content: flex-end;
}

.btn-turn-page {
  background-color: $color-primary-light;
  margin-right: 1rem;
}
</style>
