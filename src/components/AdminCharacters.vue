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
          <td>{{character.name}}</td>
          <td>
            {{character.description}}
          </td>
          <td>Ändra (skall vara en länk här)</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  import AdminCharacter from "./AdminCharacter";
  import {mapGetters} from "vuex";

  export default {
    created() {
      this.$store.dispatch("getCharacters");
    },

    methods: {
      refresh() {
        this.$store.dispatch("getCharacters");
      }
    },

    components: {
      adminCharacter: AdminCharacter
    },

    computed: {
      ...mapGetters(['characters'])
    }
  }
</script>

<style lang="scss" scoped>
@import "../assets/styles/style.scss";

.characters-container {
  with: 80vw;
}

ul.toolbar {
  margin: 3vh 0 1vh 0;
  list-style: none;
  display: flex;
  justify-content: flex-end;
}

.toolbar > li {
  margin-right: 0.8rem;
}

button {
  padding: 0;
  border: none;
  background: none;
  font-size: 1.5rem;
  cursor: pointer;
}
</style>