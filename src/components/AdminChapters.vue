<template>
  <div>
    <h2>Kapitel</h2>

    <div class="toolbar"> 
      <router-link to="/admin/chapters/create">
        <img src="../assets/img/add.svg">
      </router-link>
      <button @click="refresh"><img src="../assets/img/refresh.svg"></button>
    </div>

    <ul>
      <li v-for="chapter in chapters"> 
        <adminChapter :chapter="chapter"></adminChapter>
      </li>
    </ul>
  </div>
</template>

<script>
  import AdminChapter from "./AdminChapter";
  import {mapGetters} from "vuex";

  export default {
    created() {
      this.$store.dispatch("getChapters");
    },
    methods: {
      refresh() {
        this.$store.dispatch("getChapters");
      }
    },
    components: {
      adminChapter: AdminChapter
    },
    computed: {
    ...mapGetters(["chapters"])
    }
  }
</script>


<style lang="scss" scoped>
@import "../assets/styles/style.scss";

ul {
  margin-top: 2rem;
  margin-left: 3rem;
}

button {
  padding: 0;
  border: none;
  background: none;
  font-size: 1.5rem;
  cursor: pointer;
}
</style>