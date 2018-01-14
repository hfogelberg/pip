<template>
  <div class="edit-characters">
    <ul class="toolbar">
      <li>
        <router-link to="/admin/characters/create">
          <img src="../assets/img/add.svg">
        </router-link>
      <li>
        <button @click="refresh">
          <img src="../assets/img/refresh.svg">
        </button>
      </li>
      <li>
        <router-link to="/admin/">
          <img src="../assets/img/back.svg">
        </router-link>
      </li>
    </ul>

    <h2>Karaktärer</h2>

    <div class="characters-container">
      <table>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        <tr v-for="character in characters"> 
          <td>
            <img class= "character" :src="'http://res.cloudinary.com/golizzard/image/upload/c_scale,w_120/v1514893300/' + character.image" v-bind:alt="character.name">
          </td>
          <td class="name">{{character.name}}</td>
          <td class="description">
            {{character.description}}
          </td>
          <td><button class="btn-edit-char" @click="editCharacter(character)">Ändra</button></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";

  export default {
    created() {
      this.$store.dispatch("getCharacters");
    },

    methods: {
      refresh() {
        this.$store.dispatch("getCharacters");
      },

      editCharacter(character) {
        console.log("Edit", character)
        this.$store.dispatch("setCurrentCharacter", character);
        this.$router.push("/admin/editcharacter");
      }
    },

    computed: {
      ...mapGetters(['characters'])
    }
  }
</script>

<style lang="scss" scoped>
@import "../sass/main.scss";
</style>