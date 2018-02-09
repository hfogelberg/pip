<template>
  <div class="create-artwork">
    <h2 class="secondary-header">Nytt Konstverk</h2>
    <form>
      <div class="row form__form-row">
        <div class="col-1-of-3 form-row__label-container">
          <label for="title" class="form_label">Title</label>
        </div>
        <div class="col-2-of-3">
          <input type="text" name="title" id="title" v-model="title">
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
          <label for="comment" class="form_label">Comment</label>
        </div>
        <div class="col-2-of-3">
          <textarea name="comment" rows="4" id="comment" cols="80" v-model="comment"></textarea>
        </div>
      </div>

      <div class="row form__form-row">
        <div class="col-1-of-3 form-row__label-container">
          <label for='isPriority' class="form_label">Prioritized</label>
        </div>
        <div class="col-2-of-3">
          <input type="checkbox" id='isPriority' v-model='isPriority'>
        </div>
      </div>

      <div class="row form__form-row">
        <div class="col-1-of-3 form-row__label-container">
          <label for='display' class="form_label">Display</label>
        </div>
        <div class="col-2-of-3">
          <input type="checkbox" class='display' v-model='display'>
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
import axios from 'axios';

export default {
  data() {
    return {
      image: "",
      imageSrc: "",
      files: [],
      title: "",
      comment: "",
      isPriority: true,
      display: true
    }
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
        this.saveArtwork();
      };
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
          this.saveArtwork();
        })
        .catch(err => {
          console.log("Upload error", err);
        });
    },

    saveArtwork() {
      const artwork = {
        title: this.title,
        comment: this.comment,
        image: this.image,
        isPriority: this.isPriority,
        display: this.display
      };

      this.$store.dispatch("createArtwork", artwork);
      this.$router.pus("/admin/artworks");
    }
  }
}

</script>

<style lang="scss" scoped>
@import "../../../sass/main.scss";
</style>

