<template>
  <div>
    <h2 class="secondary-header">Nytt kapitel</h2>
    <form class="form">
      <div class="row form__form-row">
        <div class="col-1-of-3 form-row__label-container">
          <label class="form_label" for="title">Rubrik</label>
        </div>
        <div class="col-2-of-3">
          <input type="text" name="title" id="title" v-model="title">
        </div>
      </div>
      <div class="row form__form-row">
        <div class="col-1-of-3 form-row__label-container">
          <label for="image" class="form_label" >Bild</label>
        </div>
        <div class="col-2-of-3">
          <input @change="uploadImage" type="file" name="photo" accept="image/*">
        </div>
      </div>
      <div class="row form__form-row">
        <div class="col-1-of-3 space">ZeroWidthSpace;</div>
        <div class="col-2-of-3">
          <button type="button" name="button" id="save" class="btn btn-add" @click="save">Spara</button>
        </div>
      </div>
      <div class="row form__row">
        <div class="col-1-of-3 space">ZeroWidthSpace;</div>
        <div class="col-2-of-3">
          <a href="/admin/chapters" class="btn btn-cancel">Avbryt</a>
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
      title: "",
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
        this.saveChapter();
      };
    },

    saveChapter() {
      const chapter = {
        title: this.title,
        image: this.image
      };
      this.$store.dispatch("createChapter", chapter);
      this.$router.push("/admin/chapters");
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
          this.saveChapter();
        })
        .catch(err => {
          console.log("Upload error", err);
        });
    },
  }
};
</script>

<style lang="scss" scoped>
@import "../../../sass/main.scss";

.space {
  color: $color-paper-light;
}
</style>
