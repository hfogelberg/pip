<template>
  <section class="page">    
    <p class="paragraph">
      <img class= "image chapter-image" :src="cloudinaryLargeUrl + page.image" v-bind:alt="page.image">
      {{page.text}}
    </p>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["page"],
  computed: {
    ...mapGetters(["cloudinaryLargeUrl"])
  }
};
</script>

<style lang="scss" scoped>
@import "../sass/main.scss";

.chapter-image {
  float: left;
  border-radius: 5px;
  margin: 0 $gutter-small $gutter-small 0;
  box-shadow: 0 10px 20px rgba($color-black, 0.2);
}
</style>
