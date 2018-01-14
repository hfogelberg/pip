<template>
  <div>
    <h1>Nytt kapitel</h1>
    <form>
      <ul class="flex-outer">
        <li>
          <label for="title">Rubrik</label>
          <input type="text" name="title" id="title" v-model="title">
        </li>
        <li>
          <label for="image">Bild</label>
          <input @change="uploadImage" type="file" name="photo" accept="image/*">
        </li>
        <li>
          <button type="button" name="button" id="save" @click="save">Spara</button>
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
      title: "",
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

      axios.post(url, fd, config)
        .then((res)=>{
          const chapter = {
            title: this.title,
            image: `${res.data.public_id}.${res.data.format}`
          }

          console.log(chapter)

          this.$store.dispatch("createChapter", chapter);
          this.$router.push("/admin/chapters");
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
