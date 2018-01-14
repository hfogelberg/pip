<template>
  <div>
    <h1>Ny sida</h1>
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
import axios from "axios";

export default {
  data() {
    return {
      imageUrl: "",
      imageSrc: "",
      files: [],
      text: ""
    }
  },

  created() {
    const chapterId = this.$route.params.id;
    this.$store.dispatch("getNumPages", chapterId);
  },

  computed: {
    pageNumber() {
      return this.$store.getters.numPages + 1;
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
      const chapterId = this.$route.params.id;

      axios.post(url, fd, config)
        .then((res)=>{
          const page = {
            chapterId: chapterId,
            text: this.text,
            pageNumber: this.$store.getters.numPages + 1,
            image: `${res.data.public_id}.${res.data.format}`
          }

          console.log(page)

          this.$store.dispatch("createPage", page);
          this.$router.push("/admin/editchapter");
        })
        .catch((err)=>{
          console.log("Upload error", err)
        });

    }
  }
}

</script>

<style lang="scss" scoped>
@import "../sass/main.scss";
</style>

