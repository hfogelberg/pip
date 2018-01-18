<template>
  <div class="edit-page">
      <ul class="toolbar">
      <li>
        <router-link to="/admin/chapters">
          <img src="../assets/img/back.svg">
        </router-link>
      </li>
    </ul>

    <h2 class="secondary-header">Ändra sida {{currentPage.pageNumber}}</h2>

    <form class="form">
      <div class="row form__form-row">
        <div class="col-1-of-3 form-row__label-container">
          <label for="title" class="form_label">Bild</label>
        </div>
        <div class="col-2-of-3">
          <input @change="uploadImage" type="file" name="photo" accept="image/*">
        </div>
      </div>
      <div class="row form__form-row">
        <div class="col-1-of-3 form-row__label-container">
          <label for="image" class="form_label">Text</label>
        </div>
        <div class="col-2-of-3">
          <textarea name="text" rows="4" id="text" cols="80" v-model="currentPage.text"></textarea>
        </div>
      </div>
      <div class="row form__form-row">
        <div class="col-1-of-3 form-row__label-container">
          <label for="image" class="form_label">Sidnummer</label>
        </div>
        <div class="col-2-of-3">
          <input type="number" name="pageNumber" id="pageNumber" v-model.number="currentPage.pageNumber">
        </div>
      </div>
      <div class="row form__form-row">
        <div class="col-1-of-3 form-row__label-container">
          &ZeroWidthSpace;
        </div>
        <div class="col-2-of-3">
          <button type="button" name="button" id="save" class="btn btn-save-form" @click="update">Spara</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      imageUrl: "",
      imageSrc: "",
      files: [],
      hasImage: false
    };
  },
  methods: {
    uploadImage(e) {
      this.hasImage = !this.hasImage;
      this.files = e.target.files;
    },

    update() {
      if (this.hasImage) {
        this.imageToCloud();
      } else {
        this.updatePage();
      }
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
          this.currentPage.image = `${res.data.public_id}.${res.data.format}`;
          this.updateCharacter();
        })
        .catch(err => {
          console.log("Upload error", err);
        });
    },

    updatePage() {
      this.$store.dispatch("changePage", this.currentPage);
    }
  },
  computed: {
    ...mapGetters(["currentPage"])
  }
};
</script>

<style lang="scss" scoped>
@import "../sass/main.scss";
</style>
