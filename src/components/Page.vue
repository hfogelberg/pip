<template>
  <div class="page">
    <h2>Sida {{page.pageNumber}}</h2>
    <div>
      <img class= 'laregImage' :src="'http://res.cloudinary.com/golizzard/image/upload/c_scale,w_400/v1514893300/' + page.image" v-bind:alt="page.image">
    </div>
    <div>
      {{page.text}}
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters(["currentPage"])
  }
}
</script>

<style lang="scss" scoped>
@import "../sass/main.scss";
</style>