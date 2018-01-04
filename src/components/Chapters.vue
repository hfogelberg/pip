<template>
  <div>
    <h1>Kapitel</h1>

    <hr />

    <ul>
      <li v-for="chapter in chapters">
        {{chapter.title}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("getChapterNames");
  },
  computed: {
    chapters() {
      return this.$store.getters.chapterNames;
    }
  }
}
</script>