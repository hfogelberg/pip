<template>
  <div class="edit-page">
    <h2 class="u-center-text u-margin-bottom-medium">Ny sida</h2>
    <form>
      <ul class="flex-outer">
        <li>
          <label for="image">Bild</label>
          <input @change="uploadImage" type="file" name="photo" accept="image/*">
        </li>
        <li>
          <label for="text">Text</label>
          <textarea name="text" rows="4" id="text" cols="80" v-model="text"></textarea>
        </li>

        <li>
          <label for="image">Sidnummer</label>
          <input type="text" name="pageNumber" id="pageNumber" v-model="pageNumber">
        </li>

        <li>
          <button type="button" name="button" id="save" class="btn-form btn-add" @click="save">Spara</button>
        </li>
      </ul>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../sass/main.scss";
</style>
