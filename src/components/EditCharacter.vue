<template>
  <div class="edit-character">
    <h2>Ändra {{character.name}}</h2>

      <form>
      <ul class="flex-outer">
        <li>
          <label for="title">Namn</label>
          <input type="text" name="name" id="name" v-model="character.name">
        </li>
        <li>
          <label for="image">Bild</label>
          <input @change="uploadImage" type="file" name="photo" accept="image/*">
        </li>
        <li>
          <label for="comment">BesKrivning</label>
          <textarea name="description" rows="4" id="description" cols="80" v-model="character.description"></textarea>
        </li>
        <li>
          <button type="button" class="btn-form btn-save-form" name="button" id="save" @click="update">Spara</button>
        </li>
        <li>
          <button type="button" class="btn-form btn-warning" name="btn-delet" id="delete" @click="deleteCharacter">Ta bort</button>
        </li>
      </ul>
    </form>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import axios from "axios";

export default {
  data() {
    return {
      imageUrl: "",
      imageSrc: "",
      files: [],
      hasImage: false
    }
  },
  methods: {
    uploadImage(e){
      this.hasImage = !this.hasImage;
      this.files = e.target.files;
    },

    update(){
      if (this.hasImage) {
        this.imageToCloud();
      } else {
        this.updateCharacter();
      }
    },

    imageToCloud() {
      const fd = new FormData();
      fd.append("upload_preset", this.$store.getters.cloudinaryUploadPreset);
      fd.append("file", this.files[0]);
      const url = this.$store.getters.cloudinaryUploadUrl;
      const config = {headers: {"Content-Type": "application/x-www-form-urlencoded"}}

      axios.post(url, fd, config)
        .then((res)=>{
          this.character.image = `${res.data.public_id}.${res.data.format}`
          this.updateCharacter();
        })
        .catch((err)=>{
          console.log("Upload error", err)
        });
    },

    updateCharacter() {
      console.log("UPDATE CHARACTER", this.character);
      this.$store.dispatch("changeCharacter", this.character);
      this.$router.push("/admin/characters");
    },

    deleteCharacter() {
      console.log("Delete character");
      this.$store.dispatch("deleteCharacter", this.character._id);
      this.$router.push("/admin/characters");
    }
  },

  computed: {
  ...mapGetters(['character'])
  }
}
</script>

<style lang="scss" scoped>
@import "../sass/main.scss";
</style>