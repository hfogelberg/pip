<template>
  <div class="char-card">
   <img class= 'thumb' :src="'http://res.cloudinary.com/golizzard/image/upload/c_scale,w_120/v1514893300/' + character.image" v-bind:alt="character.name">
    <h3>{{character.name}}</h3>

    <router-link :to="'' + character._id" class="btn">Läs mer</router-link>
  </div>
</template>

<script>
export default {
  props: ["character"],
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/style.scss";

.char-card {
  display: flex;
  flex-direction: column;
  width: 22vw;
  height: 38vh;
  align-items: center;
  margin-right: 1vh;
  margin-bottom: 1vh;
  padding: 0.5em;
  border: 1px solid black;
}

.char-card > p {
  width: 80%;
  margin-left: 10%;
  overflow: auto;
  margin-bottom: 0.8em;
}
</style>