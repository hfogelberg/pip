<template>
  <div>
    <h1>{{chapter.title}}</h1>

    <ul>
      <li v-for="page in chapter.pages">
        <page :page="page"></page>
      </li>
    </ul>
  </div>
</template>

<script>
import Page from "./Page";

export default {
  components: {
    page: Page
  },
  mounted() {
    this.$store.dispatch('getChapterById', this.$route.params.id)
  },
  computed: {
    chapter() {
      return this.$store.getters.chapter;
    }
  }
}
</script>

