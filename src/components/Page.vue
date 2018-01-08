<template>
  <div class="page">
    <h2>Sida {{page.pageNumber}}</h2>
    <div>
      <img class= 'laregImage' :src="'http://res.cloudinary.com/golizzard/image/upload/c_scale,w_400/v1514893300/' + page.image" v-bind:alt="page.image">
    </div>
    <div>
      {{page.text}}
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    if (!this.$store.getters.user) {
      this.$router.push("/login");
    }
  },

  computed: {
    page() {
      return this.$store.getters.currentPage;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/style.scss';

.page {
  width: 80vw;
  margin-left: 10vw;
  display: flex;
  flex-direction: column;
}

img {
  align-items: center;
}
</style>