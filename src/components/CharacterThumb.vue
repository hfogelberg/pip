<template>
  <router-link :to="'/character/' + character._id" class="btn">
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
@import "../sass/main.scss";
</style>