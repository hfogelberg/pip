<template>
  <router-link :to="'' + character._id" class="btn">
    <div class="thumb">
      <img class= "image" :src="'http://res.cloudinary.com/golizzard/image/upload/c_scale,w_120/v1514893300/' + character.image" v-bind:alt="character.name">
      <h3>{{character.name}}</h3>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["character"],
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/style.scss";

.thumb {
  display: flex;
  flex-direction: column;
  width: 22vw;
  height: 38vh;
  align-items: center;
  justify-content: space-between;
  margin-right: 1vh;
  margin-bottom: 2vh;
  padding: 0.5em;
  border: 1px solid black;
  border-radius: 20px;
}

.thumb > p {
  width: 80%;
  margin-left: 10%;
  overflow: auto;
  margin-bottom: 0.8em;
}
</style>