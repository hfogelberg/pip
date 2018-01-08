<template>
  <div>
    <h1>{{chapter.title}}</h1>

    <router-link :to="'/admin/chapters/' + chapter._id + '/pages/add'">Ny sida</router-link>

    <table>
      <tr v-for="page in chapter.pages">
        <pageThumb :page="page"></pageThumb>
      </tr>
    </table>
  </div>
</template>

<script>
import PageThumb from "./PageThumb";

export default {
  components: {
    pageThumb: PageThumb
  },
  mounted() {
    if (!this.$store.getters.token) {
      this.$router.push("/login");
    }

    this.$store.dispatch('getChapterById', this.$route.params.id)
  },
  computed: {
    chapter() {
      return this.$store.getters.chapter;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/style.scss'
</style>