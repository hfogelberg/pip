<template>
  <div class="edit-character">
    <ul class="toolbar">
      <li>
        <router-link to="/admin/chapters">
          <img src="../assets/img/back.svg">
        </router-link>
      </li>
    </ul>

    <h2 class="secondary-header">
      Ändra {{character.name}}
    </h2>

    <form class="form">
      <div class="row form__form-row">
        <div class="col-1-of-3 form-row__label-container">
          <label for="title" class="form_label">Namn</label>
        </div>
        <div class="col-2-of-3">
          <input type="text" name="name" id="name" v-model="character.name">
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
          <label for="comment" class="form_label">Beskrivning</label>
        </div>
        <div class="col-2-of-3">
          <textarea name="description" rows="4" id="description" cols="80" v-model="character.description"></textarea>
        </div>
      </div>
      <div class="row form__form-row">
        <div class="col-1-of-3 form-row__label-container">
          &ZeroWidthSpace;
        </div>
        <div class="col-2-of-3">
          <button type="button" class="btn btn-save-form" name="button" id="save" @click="update">Spara</button>
        </div>
      </div>
      <div class="row form__form-row">
        <div class="col-1-of-3 form-row__label-container">
          &ZeroWidthSpace;
        </div>
        <div class="col-2-of-3">
          <button type="button" class="btn btn-warning" name="btn-delet" id="delete" @click="deleteCharacter">Ta bort</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";

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
        this.updateCharacter();
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
          this.character.image = `${res.data.public_id}.${res.data.format}`;
          this.updateCharacter();
        })
        .catch(err => {
          console.log("Upload error", err);
        });
    },

    updateCharacter() {
      this.$store.dispatch("changeCharacter", this.character);
      this.$router.push("/admin/characters");
    },

    deleteCharacter() {
      this.$store.dispatch("deleteCharacter", this.character._id);
      this.$router.push("/admin/characters");
    }
  },

  computed: {
    ...mapGetters(["character"])
  }
};
</script>

<style lang="scss" scoped>
@import "../sass/main.scss";
</style>
