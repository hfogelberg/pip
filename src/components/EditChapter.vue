<template>
  <div>
    <h1>{{chapter.title}}</h1>

  </div>
</template>

<script>
export default {
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
