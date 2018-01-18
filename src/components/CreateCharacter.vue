<template>
  <div>
  <h2 class="secondary-header">Ny karaktär</h2>
    <form class="form">
        <div class="row form__form-row">
          <div class="col-1-of-3 form-row__label-container">
            <label for="title" class="form_label">Namn</label>
          </div>
          <div class="col-2-of-3">
            <input type="text" name="name" id="name" v-model="name">
          </div>
        </div>
        <div class="row form__form-row">
          <div class="col-1-of-3 form-row__label-container">
            <label for="image" class="form_label">Bild</label>
          </div>
          <div class="col-2-of-3">
            <input @change="uploadImage" type="file" name="photo" accept="image/*">
          </div>
        </div>
        <div class="row form__form-row">
          <div class="col-1-of-3 form-row__label-container">
            <label for="comment" class="form_label">
              Beskrivning
            </label>
          </div>
          <div class="col-2-of-3">
            <textarea name="description" rows="4" id="description" cols="80" v-model="description"></textarea>
          </div>
        </div>
        <div class="row form__form-row">
          <div class="col-1-of-3 form-row__label-container">&ZeroWidthSpace; </div>
          <div class="col-2-of-3">
            <button type="button" name="button" id="save" class="btn btn-add" @click="save">Spara</button>
          </div>
        </div>
        <div class="row form__form-row">
          <div class="col-1-of-3 form-row__label-container">&ZeroWidthSpace; </div>
          <div class="col-2-of-3">
            <a href="/admin/characters" class="btn btn-cancel">Avbryt</a>
          </div>
        </div>
      
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      imageUrl: "",
      imageSrc: "",
      files: [],
      name: "",
      description: "",
      image: "",
      hasImage: false
    };
  },

  methods: {
    uploadImage(e) {
      this.hasImage = !this.hasImage;
      this.files = e.target.files;
    },

    save() {
      if (this.hasImage) {
        this.imageToCloud();
      } else {
        this.saveCharacter();
      };
    },

    saveCharacter() {
      const character = {
        name: this.name,
        description: this.description,
        image: this.image
      };

      this.$store.dispatch("createCharacter", character);
      this.$router.push("/admin/characters");
    },

    imageToCloud() {
      const fd = new FormData();
      fd.append("upload_preset", this.$store.getters.cloudinaryUploadPreset);
      fd.append("file", this.files[0]);
      const url = this.$store.getters.cloudinaryUploadUrl;
      const config = {
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
      };

      axios
        .post(url, fd, config)
        .then(res => {
          this.image = `${res.data.public_id}.${res.data.format}`;
          this.saveCharacter();
        })
        .catch(err => {
          console.log("Upload error", err);
        });
    },

  }
};
</script>

<style lang="scss" scoped>
@import "../sass/main.scss";
</style>
