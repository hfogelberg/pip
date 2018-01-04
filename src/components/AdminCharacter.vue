<template>
  <div>
    <td>
      <img class= 'character' :src="'http://res.cloudinary.com/golizzard/image/upload/c_scale,w_120/v1514893300/' + character.image" v-bind:alt="character.name">
    </td>
    <td>{{character.name}}</td>
    <td>
      {{character.description}}
    </td>
    <td><button @click="edit">Ändra</button></td>
    <td><button @click="remove">Ta bort</button></td>
  </div>
</template>

<script>
export default {
  props: ["character"],
  methods: {
    edit() {

    },
    remove(){

    }
  }
}
</script>