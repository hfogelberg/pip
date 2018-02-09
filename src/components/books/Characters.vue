<template>
  <section class="characters">
    <ul class="toolbar"> 
      <li>
        <router-link to="/">
          <img src="../assets/img/back.svg">
        </router-link>
      </li>
    </ul>

    <h2 class="secondary-header">Karaktärer</h2>
    
    <ul class="chars-cards">
      <li v-for="character in characters"> 
        <characterThumb :character="character"></characterThumb>
      </li>
    </ul>
  </section>
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

ul.chars-cards {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>