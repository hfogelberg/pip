<template>
  <div>
    <h2>Kapitel</h2>

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
  import {mapGetters} from 'vuex';

  export default {
    created() {
      this.$store.dispatch("getChapters");
    },
    components: {
      adminChapter: AdminChapter
    },
    computed: {
    ...mapGetters(['chapters'])
    }
  }
</script>


<style lang="scss" scoped>
@import "../assets/styles/style.scss";

ul {
  margin-top: 2rem;
  margin-left: 3rem;
}
</style>