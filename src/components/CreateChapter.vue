<template>
  <div>
    <h1>Nytt kapitel</h1>
    <form>
      <ul class="flex-outer">
        <li>
          <label for="title">Rubrik</label>
          <input type="text" name="title" id="title" v-model="name">
        </li>
        <li>
          <label for="image">Bild</label>
          <input @change="uploadImage" type="file" name="photo" accept="image/*">
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
      title: "",
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
      data.append("title", this.name);

      axios
        .post("http://localhost:3000/api/chapter", data )
        .then(function(res) {
           vm.$router.push('/admin/chapters');
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
