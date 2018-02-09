<template>
  <div>
    <router-link to="/admin/createart" class='btn'>Lägg till</router-link>
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
import {mapGetters} from "vuex";

import ArtAdminThumb from "./ArtAdminThumb";

export default {
  created() {
    this.$store.dispatch("getArtworks");
  },
  components: {
  'adminThumb': ArtAdminThumb
  },
  computed: {
    ...mapGetters(["artworks"])
  }
}
</script>