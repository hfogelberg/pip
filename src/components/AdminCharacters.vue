<template>
  <div>
    <h1>Karaktärer</h1>

    <router-link to="/admin/characters/create">Läggg till</router-link>
  </div>
</template>

<script>
  export default {
    mounted() {
      this.$store.dispatch("getCharacters");
    },
    computed: {
      characters() {
        return this.$store.getters.characters;
      }
    }
  }
</script>