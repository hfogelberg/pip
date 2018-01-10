<template>
  <div class="pageThumb">
    <td>{{page.pageNumber}}</td>
    <td>
      <img class= "thumbImage" :src="'http://res.cloudinary.com/golizzard/image/upload/c_scale,w_120/v1514893300/' + page.image" v-bind:alt="page.image">
    </td>
    <td>  
      {{page.text}}
    </td>
  </div>
</template>

<script>
export default {
  props: ["page"]
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/style.scss";
</style>
