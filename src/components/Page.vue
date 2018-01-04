<template>
  <div>
    <div>Sida {{page.pageNumber}}</div>
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
  props: ["page"]
}
</script>