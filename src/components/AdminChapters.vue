<template>
  <div>
    <h1>Kapitel</h1>

    <router-link to="/admin/chapters/create">Lägg till</router-link>

    <ul>
      <li v-for="chapter in chapters"> 
        <adminChapter :chapter="chapter"></adminChapter>
      </li>
    </ul>
  </div>
</template>

<script>
  import AdminChapter from "./AdminChapter";

  export default {
    mounted() {
      if (!this.$store.getters.token) {
        this.$router.push("/login");
      }
      this.$store.dispatch("getChapters");
    },
    components: {
      adminChapter: AdminChapter
    },
    computed: {
      chapters() {
        return this.$store.getters.chapters;
      }
    }
  }
</script>


<style lang="scss" scoped>
@import '../assets/styles/style.scss'
</style>