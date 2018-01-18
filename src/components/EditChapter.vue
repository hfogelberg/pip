<template>
  <section class="edit-chapter">
    <ul class="toolbar">
      <li>
        <router-link :to="'/admin/addPage/' + chapter._id ">
          <img src="../assets/img/add.svg">
        </router-link>
      </li>
      <li>
        <button @click="refresh" class="btn-transparent">
          <img src="../assets/img/refresh.svg">
        </button>
      </li>
      <li>
        <router-link to="/admin/chapters">
          <img src="../assets/img/back.svg">
        </router-link>
      </li>
    </ul>

    <h2 class="secondary-header">{{chapter.title}}</h2>

    <div class="centered-image-containter" v-if="chapter.image">
      <img class= "image chapter-image" :src="'http://res.cloudinary.com/golizzard/image/upload/c_scale,w_120/v1514893300/' + chapter.image" v-bind:alt="chapter.name">
    </div>

    <table class="tbl-edit-chapter" v-if="this.chapter.pages">
      <tr v-for="page in this.chapter.pages">
        <td>{{page.pageNumber}}</td>
        <td>
          <img class= "thumbImage" :src="cloudinaryThumbUrl + page.image" v-bind:alt="page.image">
        </td>
        <td class="text">{{page.text}}</td>
        <td class="edit"><button class="btn btn-edit" @click="editPage(page)">Ändra</button></td>
      </tr>
    </table>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  methods: {
    refresh() {
      this.$store.dispatch("getChapterById", this.chapter._id);
    },
    editPage(page) {
      console.log("Edit page", page);
      this.$store.dispatch("setCurrentPage", page);
      this.$router.push("/admin/editpage");
    }
  },

  computed: {
    ...mapGetters(["chapter", "cloudinaryThumbUrl"])
  }
};
</script>

<style lang="scss" scoped>
@import "../sass/main.scss";

.edit-chapter {
  color: $color-black;
}

td.text {
  font-size: $font-size-default;
  max-width: 40vw;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: $color-text-main;
}

td.edit {
  text-align: center;
}

.btn-edit {
  background-color: $color-btn-edit;
  color: $color-off-white;
}
</style>
