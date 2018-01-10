<template>
  <div>
    <h1>Karaktärer</h1>
    
    <ul class="chars-cards">
      <li v-for="character in characters"> 
        <characterThumb :character="character"></characterThumb>
      </li>
    </ul>
  </div>
</template>

<script>
  import CharacterThumb from "./CharacterThumb";

  export default {
    created() {
      this.$store.dispatch("getCharacters");
    },
    components: {
      characterThumb: CharacterThumb
    },
    computed: {
      characters() {
        return this.$store.getters.characters;
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '../assets/styles/style.scss';

ul.chars-cards {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>