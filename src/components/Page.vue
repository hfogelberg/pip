<template>
  <section class="page">
    <h2 class="u-center-text u-margin-bottom-medium">Sida {{page.pageNumber}}</h2>
    <div class="centered-image-containter">
      <img class= "image chapter-image" :src="'http://res.cloudinary.com/golizzard/image/upload/c_scale,w_400/v1514893300/' + page.image" v-bind:alt="page.image">
    </div>
    
    </div>
    <p class="paragraph">
      {{page.text}}
    </p>
  </section>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  props: ["page"]
}
</script>

<style lang="scss" scoped>
@import "../sass/main.scss";

</style>