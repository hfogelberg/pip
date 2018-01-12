<template>
  <div class="character">
    <h2>{{character.name}}</h2>
    <router-link to="/characters">
      <img src="../assets/img/back.svg">
    </router-link>
    <div class="image-containter">
      <img class= "image" :src="'http://res.cloudinary.com/golizzard/image/upload/c_scale,w_380/v1514893300/' + character.image" v-bind:alt="character.name">
    </div>
    <p class="character-description">
      {{character.description}}
    </p>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  created() {
    const id = this.$route.params.id;
    console.log("CREATED. Id: " + id);
    this.$store.dispatch("getCharacterById", id)
  },
  computed: {
    ...mapGetters(["character"])
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/style.scss";

.image-containter {
  display:flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1vh;
}

p.character-description {
  width: 70vw;
  margin-left: 15vw;
  margin-right: 15vw;
  max-width: 60ch;
  font-size: 1.2rem;
  white-space: pre-wrap;
}



</style>