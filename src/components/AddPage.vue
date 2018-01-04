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
      console.log("Save");

      // File
      let reader = new FileReader();
      let chapterId = this.chapterId;

      reader.readAsDataURL(this.files[0]);
      reader.onload = (e) => {
        this.imageSrc = e.target.result;
      };

      let vm = this;
      let data = new FormData();
      data.append('image', this.files[0])
      data.append("text", this.text);
      data.append("chapterId", this.chapterId);
      data.append("pageNumber", this.pageNumber)

      axios
        .post("http://localhost:3000/api/page", data )
        .then(function(res) {
           vm.$router.push("/admin/chapters/" + chapterId);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
}

</script>

<style lang="scss" scoped>
.flex-outer,
.flex-inner {
  list-style-type: none;
  padding: 10vh 10vw;
}

.flex-outer {
  max-width: 800px;
  margin: 0 auto;
}

.flex-outer li,
.flex-inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.flex-inner {
  padding: 0 8px;
  justify-content: space-between;  
}

.flex-outer > li:not(:last-child) {
  margin-bottom: 20px;
}

.flex-outer li label,
.flex-outer li p {
  padding: 8px;
  font-weight: 300;
  letter-spacing: .03em;
  text-transform: uppercase;
}

.flex-outer > li > label,
.flex-outer li p {
  flex: 1 0 120px;
  max-width: 220px;
}

.flex-outer > li > label + *,
.flex-inner {
  flex: 1 0 220px;
}

.flex-outer li p {
  margin: 0;
}

.flex-outer li input:not([type='checkbox']),
.flex-outer li textarea {
  padding: 15px;
}

.flex-outer li button {
  margin-left: auto;
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: .09em;
  border-radius: 2px;
}

.flex-inner li {
  width: 100px;
}
</style>

