<template>
  <div>
    <h1>Admin</h1>

    <hr />

    <ul>
      <li><router-link to="/admin/characters">Karaktärer</router-link></li>
      <li><router-link to="/admin/chapters">Kapitel</router-link></li>
    </ul>
  </div>  
</template>

<script>
export default {
  mounted(){
    if (!this.$store.getters.token) {
      this.$router.push("/login");
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/style.scss'
</style>