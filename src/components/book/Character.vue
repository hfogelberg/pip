<template>
  <section class="character">
    <ul class="toolbar">
      <li>
        <button @click="leave" class="btn-transparent">
          <img src="../../assets/img/back.svg">
        </button>
      </li>
    </ul>

    <h2 class="secondary-header">{{character.name}}</h2>
    
    <p class="paragraph description">
        <img class= "image character-image" :src=" cloudinaryLargeUrl + character.image" v-bind:alt="character.name" />

      {{character.description}}
    </p>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  created() {
    const id = this.$route.params.id;
    this.$store.dispatch("getCharacterById", id);
  },
  methods: {
    leave() {
      this.$store.dispatch("setCurrentCharacter", {});
      this.$router.push("/characters");
    }
  },
  computed: {
    ...mapGetters(["character", "cloudinaryLargeUrl", "cloudinaryBluredUrl"])
  }
};
</script>

<style lang="scss" scoped>
@import "../../sass/main.scss";

.character-image {
  float: left;
  bottom: 0;
  margin: 0 $gutter-small $gutter-small 0;
}

</style>
