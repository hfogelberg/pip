<template>
  <div class="character">
    <h2>{{character.name}}</h2>
    <div class="image-containter">
      <img class= "image" :src="'http://res.cloudinary.com/golizzard/image/upload/v_120/v1514893300/' + character.image" v-bind:alt="character.name">
    </div>
    <p>
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

</style>