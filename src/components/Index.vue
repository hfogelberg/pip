<template>
  <div>
    <h2>Index</h2>

    <hr />
    <router-link to="/admin">Admin</router-link><br>
    <router-link to="/characters">Karaktärer</router-link> <br>
    <router-link to="/chapters">Kapitel</router-link>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/styles/style.scss'
</style>

<script>
export default {
  mounted() {
    if (!this.$store.getters.token) {
      this.$router.push("/login");
    }
  }
}
</script>
