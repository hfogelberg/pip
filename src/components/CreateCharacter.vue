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
import axios from "axios";
import sha1 from "sha1";

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
    save() {
      const fd = new FormData();
      fd.append("upload_preset", this.$store.getters.cloudinaryUploadPreset);
      fd.append("file", this.files[0]);
      const url = this.$store.getters.cloudinaryUploadUrl;
      const config = {headers: {"Content-Type": "application/x-www-form-urlencoded"}}

      axios.post(url, fd, config)
        .then((res)=>{
          const character = {
            name: this.name,
            description: this.description,
            image: `${res.data.public_id}.${res.data.format}`
          }

          console.log(character)

          this.$store.dispatch("createCharacter", character);
          this.$router.push("/admin/characters");
        })
        .catch((err)=>{
          console.log("Upload error", err)
        });
    }
  }
}

</script>

<style lang="scss" scoped>
@import '../assets/styles/style.scss';
</style>