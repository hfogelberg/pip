<template>
  <div class="edit-chapter">
    <ul class="toolbar">
      <li>
        <router-link :to="'/admin/addPage/' + chapter._id ">
          <img src="../assets/img/add.svg">
        </router-link>
      </li>
      <li>
        <button @click="refresh">
          <img src="../assets/img/refresh.svg">
        </button>
      </li>
      <li>
        <router-link to="/admin/chapters">
          <img src="../assets/img/back.svg">
        </router-link>
      </li>
    </ul>

    <h2>{{chapter.title}}</h2>

    <div class="image-container">
      <img class= "chapter" :src="'http://res.cloudinary.com/golizzard/image/upload/c_scale,w_120/v1514893300/' + chapter.image" v-bind:alt="chapter.name">
    </div>

    <div class="pages-container">
      <table>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        <tr v-for="page in pages">
          <td>{{page.pageNumber}}</td>
          <td>
            <img class= "thumbImage" :src="'http://res.cloudinary.com/golizzard/image/upload/c_scale,w_120/v1514893300/' + page.image" v-bind:alt="page.image">
          </td>
          <td>  
            {{page.text}}
          </td>
          <td>
            Ändra (skall vara här)
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  created() {
    this.$store.dispatch("getChapterById")
  },

  methods: {
    refresh() {
      this.$store.dispatch("getChapterById");
    }
  },

  computed: {
    ...mapGetters(["chapter", "pages"])
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/style.scss";

.edit-chapter {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

ul.toolbar {
  margin: 3vh 0 1vh 0;
  list-style: none;
  display: flex;
  justify-content: flex-end;
}

.toolbar > li {
  margin-right: 0.8rem;
}

button {
  padding: 0;
  border: none;
  background: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.image-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3vh;
}

.pages-container {
  width: 80vw;
}
</style>