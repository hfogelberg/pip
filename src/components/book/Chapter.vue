<template>
  <section class="chapter">
    <h2 class="secondary-header">
      {{this.chapter.title}}
    </h2>

    <page :page="this.chapter.pages[this.pageNumber]" class="page"></page>

  <footer class="footer">
    <ul>
      <li>
        <router-link to="/chapters">
          <img src="../../assets/img/back.svg">
        </router-link>
      </li>
      <li>
        <button @click="previousPage" class="btn btn-turn-page">
          Förra sidan
        </button>
      </li>
      <li>
        <button @click="nextPage" 
          class="btn btn-turn-page" 
          v-if="this.pageNumber < this.chapter.pages.length">
            Nästa sida
        </button>
      </li>
    </ul>
  </footer>
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
    page: Page
  },

  computed: {
    ...mapGetters(["chapter"])
  }
};
</script>

<style lang="scss" scoped>
@import "../../sass/main.scss";

.chapter {
  display: flex;
  flex-direction: column;
}

footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 5.5rem;
  padding: 0.5rem;
  padding-left: $gutter-small;
  padding-right: $gutter-small;
}

footer ul {
  display: flex;
  line-height: 4em;
}

li {
  flex: 0 0 auto;
  margin: 0.2em;
  font-size: $font-size-default;
}

li:nth-child(1) {
  margin-right: auto;
}

a.menu-item {
  color: $color-off-white;
}

.btn-turn-page {
  background-color: $color-primary-light;
  margin-right: 1rem;
  border: none;
}
</style>
