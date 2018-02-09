<template>
  <div class="admin-chapters">
    <ul class="toolbar"> 
      <li>
        <router-link to="/admin/chapters/create">
          <img src="../../../assets/img/add.svg">
        </router-link>
      </li>
      <li>
        <button @click="refresh" class="btn-transparent"><img src="../../../assets/img/refresh.svg"></button>
      </li>
      <li>
        <router-link to="/admin/">
          <img src="../../../assets/img/back.svg">
        </router-link>
      </li>
    </ul>

    <h2 class="secondary-header">Admin kapitel</h2>
    <ul>
      <li v-for="chapter in chapters" class="u-center-text"> 
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
@import "../../../sass/main.scss";
</style>