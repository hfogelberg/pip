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
    <div class="centered-image-containter">
      <img class= "image character-image" :src="'http://res.cloudinary.com/golizzard/image/upload/c_scale,w_380/v1514893300/' + character.image" v-bind:alt="character.name">
    </div>
    <p class="paragraph character-description">
      {{character.description}}
    </p>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  created() {
    this.$store.dispatch("getCharacterById", id);
  },
  computed: {
    ...mapGetters(["character"])
  }
};
</script>

<style lang="scss" scoped>
@import "../sass/main.scss";

.character-image {
  height: 40vh;
}
</style>
