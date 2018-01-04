import Vue from "vue";
import { API_ROOT_URL } from "../../../config";
import axios from "axios";

const state = {
  chapters: [],
  chapter: {},
  numPages: 0,
  chapterNames: []
};

const getters = {
  chapterNames: state => {
    return state.chapterNames;
  },

  numPages: state => {
    return state.numPages;
  },

  chapters: state => {
    return state.chapters;
  },

  chapter: state => {
    return state.chapter;
  }
};

const mutations = {
  chapterNames: (state, chapterNames) => {
    state.chapterNames = chapterNames;
  },

  numPages: (state, numPages) => {
    state.numPages = numPages;
  },

  chapter: (state, chapter) => {
    state.chapter = chapter;
  },

  chapters: (state, chapters) => {
    console.log("Mutation called", chapters);
    state.chapters = chapters;
  }
};

const actions = {
  getChapterNames({ commit }) {
    console.log("Get Chapter names");
    let url = `http://localhost:3000/api/chapternames`;
    axios
      .get(url)
      .then(res => {
        commit("chapterNames", res.data.names);
      })
      .catch(err => {
        console.log(err);
      });
  },

  getChapterById({ commit }, id) {
    let url = `http://localhost:3000/api/chapters/${id}`;
    axios
      .get(url)
      .then(res => {
        commit("chapter", res.data.chapter);
      })
      .catch(err => {
        console.log(err);
      });
  },
  getNumPages({ commit }, id) {
    let url = `http://localhost:3000/api/numpages/${id}`;
    axios
      .get(url)
      .then(res => {
        commit("numPages", res.data.numPages);
      })
      .catch(err => {
        console.log(err);
      });
  },
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
