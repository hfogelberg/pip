<template>
  <section class="create-page">
    <ul class="toolbar">
      <li>
        <router-link to="/admin/chapters">
          <img src="../../../assets/img/back.svg">
        </router-link>
      </li>
    </ul>

    <h2 class="secondary-header">Ny sida i {{chapter.title}}</h2>

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
          <label for="title" class="form_label">
            Text
          </label>
        </div>
        <div class="col-2-of-3">
          <textarea name="text" class="textarea" id="text" cols="80" rows="40" v-model="text"></textarea>
        </div>
      </div>

      <div class="row form__form-row">
        <div class="col-1-of-3 form-row__label-container">
          <label for="title" class="form_label">
            Sidnummer
          </label>
        </div>
        <div class="col-2-of-3">
          <input type="number" name="pageNumber" id="pageNumber" v-model="nextPageNumber">
        </div>
      </div>
      
      <div class="row form__form-row">
        <div class="col-1-of-3 form-row__label-container">
          &ZeroWidthSpace;
        </div>
        <div class="col-2-of-3">
          <button type="button" 
                  name="button" 
                  id="save" 
                  class="btn btn-save-form" 
                  @click="save">
            Spara
          </button>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      imageUrl: "",
      imageSrc: "",
      files: [],
      text: "",
      hasImage: false,
      image: ""
    };
  },

  computed: {
    ...mapGetters(["chapter", "nextPageNumber"])
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
        this.savePage();
      };
    },

    savePage() {
      const page = {
        chapterId: this.$route.params.id,
        text: this.text,
        pageNumber: this.nextPageNumber,
        image: this.image
      };

      this.$store.dispatch("createPage", page);
      this.$router.push("/admin/editchapter");
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
          this.savePage();
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
</style>
