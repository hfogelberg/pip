<template>
  <div class="admin-characters">
    <ul class="toolbar">
      <li>
        <router-link to="/admin/characters/create">
          <img src="../assets/img/add.svg">
        </router-link>
      <li>
        <button @click="refresh" class="btn-transparent">
          <img src="../assets/img/refresh.svg">
        </button>
      </li>
      <li>
        <router-link to="/admin/">
          <img src="../assets/img/back.svg">
        </router-link>
      </li>
    </ul>

    <h2 class="u-center-text u-margin-bottom-medium">Karaktärer</h2>

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
          <td><button class="btn btn-edit-char" @click="editCharacter(character)">Ändra</button></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  created() {
    this.$store.dispatch("getCharacters");
  },

  methods: {
    refresh() {
      this.$store.dispatch("getCharacters");
    },

    editCharacter(character) {
      this.$store.dispatch("setCurrentCharacter", character);
      this.$router.push("/admin/editcharacter");
    }
  },

  computed: {
    ...mapGetters(["characters"])
  }
};
</script>

<style lang="scss" scoped>
@import "../sass/main.scss";

td.name {
  font-size: $font-size-medium;
  font-weight: 400;
  letter-spacing: 0.02rem;
  color: $color-text-main;
  overflow-wrap: break-word;
}
td.description {
  font-size: $font-size-default;
  max-width: 40vw;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: $color-text-main;
}
.btn-edit-char {
  background-color: $color-btn-edit;
  color: $color-off-white;
}
</style>
