<template>
  <div>
    <div>
      <img class= 'character' :src="'http://res.cloudinary.com/golizzard/image/upload/c_scale,w_120/v1514893300/' + character.image" v-bind:alt="character.name">
    </div>
    <div>{{character.name}}</div>

  </div>
</template>

<script>
export default {
  props: ["character"],
}
</script>