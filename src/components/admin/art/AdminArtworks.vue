<template>
  <div>
    <router-link to="/admin/create" class='btn'>Lägg till</router-link>
    <br>
    <br>
    <table>
      <tr v-for="artwork in artworks">
        <adminThumb :artwork="artwork" />
      </tr>
    </table>
  </div>
</template>

<style lang="scss" scoped>

</style>

<script>
import AdminThumb from "./AdminThumb";

export default {
  mounted() {
    this.$store.dispatch("getArtworks");
  },
  components: {
  'adminThumb': AdminThumb
  },
  computed: {
    artworks() {
      return this.$store.getters.artworks;
    }
  }
}
</script>