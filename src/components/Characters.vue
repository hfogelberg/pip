<template>
  <div>
    <h2>Karaktärer</h2>
    
    <ul class="chars-cards">
      <li v-for="character in characters"> 
        <characterThumb :character="character"></characterThumb>
      </li>
    </ul>
  </div>
</template>

<script>
  import CharacterThumb from "./CharacterThumb";
  import {mapGetters} from "vuex";

  export default {
    created() {
      this.$store.dispatch("getCharacters");
    },
    components: {
      characterThumb: CharacterThumb
    },
    computed: {
      ...mapGetters(["characters"])
    }
  }
</script>

<style lang="scss" scoped>
@import "../sass/main.scss";
</style>