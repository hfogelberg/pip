import Vue from "vue";
import { API_ROOT_URL } from "../../../config";
import axios from "axios";

const state = {
  chapters: []
};

const getters = {
  chapters: state => {
    return state.chapters;
  }
};

const mutations = {
  chapters: (state, chapters) => {
    console.log("Mutation called", chapters);
    state.chapters = chapters;
  }
};

const actions = {
  getChapters({ commit }) {
    console.log("Get chapters");
    let url = "http://localhost:3000/api/chapters";

    axios
      .get(url)
      .then(res => {
        console.log("Chapters returned", res.data.chapters);
        commit("chapters", res.data.chapters);
      })
      .catch(err => {
        console.log(err);
      });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
