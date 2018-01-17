<template>
  <section class="page">    
    <p class="paragraph">
      <img class= "image chapter-image" :src="'http://res.cloudinary.com/golizzard/image/upload/c_scale,w_400/v1514893300/' + page.image" v-bind:alt="page.image">
      {{page.text}}
    </p>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["page"]
};
</script>

<style lang="scss" scoped>
@import "../sass/main.scss";

.chapter-image {
  float: left;
  border-radius: 5px;
  padding: 0 $gutter-xsmall $gutter-xsmall 0;
}
</style>
