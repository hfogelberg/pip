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
          <button type="button" name="button" id="save" @click="save">Spara</button>
        </li>
      </ul>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      imageUrl: "",
      imageSrc: "",
      files: [],
      text: "",
      chapterId: ""
    }
  },

  mounted() {
    this.chapterId = this.$route.params.id;
    this.$store.dispatch("getNumPages", this.chapterId);
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

    save(e) {
      console.log("SAVE");

      const url = "https://api.cloudinary.com/v1_1/golizzard/image/upload";
      const file = this.file
      const api_key = "925374862654622";
      const timeStamp = Date.now();
      const str = "public_id=sample_image&timestamp=" + timestamp
      const signature = crypto.createHash('sha1').update(str).digest('hex');
      axios.post(url, {
        file,
        api_key, 
        signature
      })
      .then((res)=>{
        console.log("CLOUNDINAR RESPONSE", res);
      })
      .catch((err)=>{
        console.log("CLOUDINARY ERROR", err);
      });
    }

    // save(e) {
    //   console.log("Save");

    //   // File
    //   let reader = new FileReader();
    //   let chapterId = this.chapterId;

    //   reader.readAsDataURL(this.files[0]);
    //   reader.onload = (e) => {
    //     this.imageSrc = e.target.result;
    //   };

    //   let vm = this;
    //   let data = new FormData();
    //   data.append('image', this.files[0])
    //   data.append("text", this.text);
    //   data.append("chapterId", this.chapterId);
    //   data.append("pageNumber", this.pageNumber)

    //   axios
    //     .post("http://localhost:3000/api/page", data )
    //     .then(function(res) {
    //        vm.$router.push("/admin/chapters/" + chapterId);
    //     })
    //     .catch(function(error) {
    //       console.log(error);
    //     });
    // }
  }
}

</script>

<style lang="scss" scoped>
@import '../assets/styles/style.scss'
</style>

