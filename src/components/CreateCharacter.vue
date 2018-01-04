<template>
  <div>
    <form>
      <ul class="flex-outer">
        <li>
          <label for="title">Namn</label>
          <input type="text" name="name" id="name" v-model="name">
        </li>
        <li>
          <label for="image">Bild</label>
          <input @change="uploadImage" type="file" name="photo" accept="image/*">
        </li>
        <li>
          <label for="comment">BesKrivning</label>
          <textarea name="description" rows="4" id="description" cols="80" v-model="description"></textarea>
        </li>
        <li>
          <button type="button" name="button" id="save" @click="save">Spara</button>
        </li>
      </ul>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      imageUrl: "",
      imageSrc: "",
      files: [],
      name: "",
      description: ""
    }
  },

  methods: {
    uploadImage(e) {
      console.log("Upload");
      this.files = e.target.files;
    },
    save(e) {
      console.log("Save");

      // File
      let reader = new FileReader();

      reader.readAsDataURL(this.files[0]);
      reader.onload = (e) => {
        this.imageSrc = e.target.result;
      };

      let vm = this;
      let data = new FormData();
      data.append('image', this.files[0])
      data.append("name", this.name);
      data.append("description", this.description);

      axios
        .post("http://localhost:3000/api/character", data )
        .then(function(res) {
           vm.$router.push('/admin/characters');
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
}

</script>

<style lang="scss" scoped>
@import '../assets/styles/style.scss'
</style>