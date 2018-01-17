<template>
  <div class="edit-page">
      <ul class="toolbar">
      <li>
        <router-link to="/admin/chapters">
          <img src="../assets/img/back.svg">
        </router-link>
      </li>
    </ul>
    
    <h2 class="u-center-text u-margin-bottom-medium">Ändra sida {{this.currentPage.pageNumber}}</h2>

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
          <textarea name="text" rows="4" id="text" cols="80" v-model="this.currentPage.text"></textarea>
        </div>
      </div>
      <div class="row form__form-row">
        <div class="col-1-of-3 form-row__label-container">
          <label for="image" class="form_label">Sidnummer</label>
        </div>
        <div class="col-2-of-3">
          <input type="number" name="pageNumber" id="pageNumber" v-model.number="this.currentPage.pageNumber">
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
  methods: {
    update() {}
  },
  computed: {
    ...mapGetters(["currentPage"])
  }
};
</script>

<style lang="scss" scoped>
@import "../sass/main.scss";
</style>
