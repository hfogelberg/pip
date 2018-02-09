<template>
  <div class="artworks">
    <div v-for="artwork in artworks">
      <artwork :currentArtwork="artwork"></artwork>
    </div>
  </div>
</template>

<script>
import Artwork from "./Artwork";

export default {
  mounted() {
    this.$store.dispatch("getArtworks");
  },
  components: {
  'artwork': Artwork
  },
  computed: {
    artworks() {
      return this.$store.getters.artworks;
    }
  }
}
</script>

<style lang="scss" scoped>
  .artworks {
    background-color: #bdc3c7;
    height: 100vh;
    width: 100%;
  }
</style>