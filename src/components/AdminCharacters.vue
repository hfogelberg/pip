<template>
  <div>
    <h1>Karaktärer</h1>

    <router-link to="/admin/characters/create">Lägg till</router-link>

    <table>
      <tr v-for="character in characters"> 
        <adminCharacter :character="character"></adminCharacter>
      </tr>
    </table>
  </div>
</template>

<script>
  import AdminCharacter from "./AdminCharacter";

  export default {
    mounted() {
      if (!this.$store.getters.token) {
        this.$router.push("/login");
      }
      this.$store.dispatch("getCharacters");
    },
    components: {
      adminCharacter: AdminCharacter
    },
    computed: {
      characters() {
        return this.$store.getters.characters;
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '../assets/styles/style.scss'
</style>