<template>
  <form>
    <ul class="flex-outer">
      <li>
        <label for="title">Title</label>
        <input type="text" name="title" id="title" v-model="title">
      </li>
      <li>
        <label for="image">Image</label>
        <input @change="uploadImage" type="file" name="photo" accept="image/*">
      </li>
      <li class='thumb'>
        <img :src="imageUrl" v-bind:alt="title">
      </li>
      <li>
        <label for="comment">Comment</label>
        <textarea name="comment" rows="4" id="comment" cols="80" v-model="comment"></textarea>
      </li>
      <li>
        <label for='isPriority'>Prioritized</label>
        <input type="checkbox" id='isPriority' v-model='isPriority'>
      </li>
      <li>
        <label for='display'>Display</label>
        <input type="checkbox" class='display' v-model='display'>
      </li>
      <li>
        <button type="button" name="button" id="save" @click="save">Save</button>
      </li>
    </ul>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      imageUrl: "",
      imageSrc: "",
      files: [],
      title: "",
      comment: "",
      isPriority: false,
      display: false
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

      reader.readAsDataURL(this.files[0]);
      reader.onload = (e) => {
        this.imageSrc = e.target.result;
      };

      let vm = this;
      let data = new FormData();
      data.append('image', this.files[0])
      data.append("title", this.title);
      data.append("comment", this.comment);
      data.append("isPriority", this.isPriority);
      data.append("display", this.display)

      axios
        .post("http://localhost:3000/api/artwork", data )
        .then(function(res) {
           vm.$router.push('/admin');
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

