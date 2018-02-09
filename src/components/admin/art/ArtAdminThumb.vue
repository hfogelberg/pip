<template>
  <div>
    <td>
      <img class= 'artwork' :src="'http://res.cloudinary.com/golizzard/image/upload/c_scale,w_120/v1514893300/' + artwork.image" v-bind:alt="artwork.title">
    </td>
    <td>{{artwork.title}}</td>
    <td>
      {{artwork.description}}
    </td>
    <td><button @click="edit">Edit</button></td>
    <td><button @click="remove">Delete</button></td>
  </div>
</template>

<script>
  export default {
    props: ['artwork'],
    methods: {
      edit() {

      },
      remove() {
        
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>