<template>
  <div class="artworks">
    <header></header>
    <div class="container">
      <div v-for="artwork in artworks">
        <artwork :currentArtwork="artwork"></artwork>
      </div>
    </div>
  </div>
</template>

<script>
import Artwork from "./Artwork";
import Header from "../Header";

export default {
  mounted() {
    this.$store.dispatch("getArtworks");
  },
  components: {
  'artwork': Artwork,
  'header': Header
  },
  computed: {
    artworks() {
      return this.$store.getters.artworks;
    }
  }
}
</script>

<style lang="scss" scoped>

</style>