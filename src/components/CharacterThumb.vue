<template>
  <router-link :to="'/character/' + character._id" class="btn">
    <div class="thumb">
      <img class= "image" :src="cloudinaryThumbUrl + character.image" v-bind:alt="character.name">
      <h3>{{character.name}}</h3>
    </div>
  </router-link>
</template>

<script>
import {mapGetters} from "vuex";
export default {
  props: ["character"],
  computed: {
    ...mapGetters(["cloudinaryThumbUrl"])
  }
};
</script>

<style lang="scss" scoped>
@import "../sass/main.scss";

.thumb {
  display: flex;
  flex-direction: column;
  width: 22vw;
  height: 30vh;
  align-items: center;
  justify-content: space-between;
  margin-right: 1vh;
  margin-bottom: 2vh;
  padding: 0.5em;
  border: 1px solid $color-black;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba($color-black, 0.2);
}

.thumb > p {
  width: 80%;
  margin-left: 10%;
  overflow: auto;
  margin-bottom: 0.8em;
}
</style>
