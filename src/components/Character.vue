<template>
  <section class="character">
    <ul class="toolbar">
      <li>
        <router-link to="/characters">
          <img src="../assets/img/back.svg">
        </router-link>
      </li>
    </ul>

    <h2 class="u-center-text u-margin-bottom-medium">{{character.name}}</h2>
    
    <p class="paragraph character-description">
      <img class= "image character-image" :src=" cloudinaryLargeUrl + character.image" v-bind:alt="character.name">

      {{character.description}}
    </p>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  created() {
    const id = this.$route.params.id;
    this.$store.dispatch("getCharacterById", id);
  },
  computed: {
    ...mapGetters(["character", "cloudinaryLargeUrl"])
  }
};
</script>

<style lang="scss" scoped>
@import "../sass/main.scss";

.character-image {
  height: 40vh;
  float: left;
  border-radius: 5px;
  padding: 0 $gutter-xsmall $gutter-xsmall 0;
}
</style>
