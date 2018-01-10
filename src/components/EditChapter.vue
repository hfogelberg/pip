<template>
  <div>
    <h2>{{chapter.title}}</h2>

    <div>
      <img class= "chapter" :src="'http://res.cloudinary.com/golizzard/image/upload/c_scale,w_120/v1514893300/' + chapter.image" v-bind:alt="chapter.name">
    </div>

    <div>
      <router-link :to="'/admin/addPage/' + chapter._id ">Ny sida</router-link><br>
      <router-link to="/admin/chapters">Tillbaks</router-link>
    </div>

    <table>
      <tr v-for="page in pages">
        <pageThumb :page="page"></pageThumb>
      </tr>
    </table>
  </div>
</template>

<script>
import PageThumb from "./PageThumb";
import {mapGetters} from "vuex";

export default {
  components: {
    pageThumb: PageThumb
  },

  created() {
    this.$store.dispatch("getChapterById")
  },

  computed: {
    ...mapGetters(["chapter", "pages"])
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/style.scss";
</style>