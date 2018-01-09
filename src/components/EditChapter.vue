<template>
  <div>
    <h2>{{chapter.title}}</h2>

    <div>
      <img class= 'character' :src="'http://res.cloudinary.com/golizzard/image/upload/c_scale,w_120/v1514893300/' + chapter.image" v-bind:alt="chapter.name">
    </div>

    <div>
      <router-link :to="'/admin/addPage/' + chapter._id ">Ny sida</router-link><br>
      <router-link to="/admin/chapters">Tillbaks</router-link>
    </div>

    <div>
      <button @click="refresh">Refresh</button>
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

export default {
  components: {
    pageThumb: PageThumb
  },

  mounted() {
    if (!this.$store.getters.token) {
      this.$router.push("/login");
    }
    
    this.$store.dispatch("getChapterById")
  },

  methods: {
    refresh() {
      console.log("Refresh")
      this.$store.dispatch("getChapterById")
    }
  },

  computed: {
    chapter() {
      return this.$store.getters.chapter;
    },
    pages() {
      return this.$store.getters.pages;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/style.scss'
</style>