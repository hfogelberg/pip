<template>
  <div>
    <h1>Karaktärer</h1>
    
    <ul>
      <li v-for="character in characters"> 
        <characterThumb :character="character"></characterThumb>
      </li>
    </ul>
  </div>
</template>

<script>
  import CharacterThumb from "./CharacterThumb";

  export default {
    mounted() {
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