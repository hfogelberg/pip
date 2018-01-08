<template>
  <div>
    <td>
      <img class= 'character' :src="'http://res.cloudinary.com/golizzard/image/upload/c_scale,w_120/v1514893300/' + character.image" v-bind:alt="character.name">
    </td>
    <td>{{character.name}}</td>
    <td>
      {{character.description}}
    </td>
    <td>Ändra (skall vara en länk här)</td>
  </div>
</template>

<script>
export default {
  props: ["character"]
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/style.scss'
</style>