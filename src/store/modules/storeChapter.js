import Vue from "vue";
import { API_ROOT_URL } from "../../../config";
import axios from "axios";

const state = {
  chapters: [],
  chapter: {},
  numPages: 0,
  chapterNames: [],
  pages: [],
  pageId: 0,
  currentPage: {}
};

const getters = {
  isLastPage: state => {
    if (state.pageId == state.pages.length - 1) {
      return true;
    } else {
      return false;
    }
  },

  currentPage: state => {
    return state.pages[state.pageId];
  },

  pages: state => {
    return state.pages;
  },

  pageId: state => {
    return state.pageId;
  },

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
  resetPage: state => {
    state.pageId = 0;
  },

  previousPage: state => {
    state.pageId = state.pageId - 1;
  },

  nextPage: state => {
    console.log("Next Page mutation");
    state.pageId = state.pageId + 1;
  },

  chapterNames: (state, chapterNames) => {
    state.chapterNames = chapterNames;
  },

  numPages: (state, numPages) => {
    state.numPages = numPages;
  },

  chapter: (state, chapter) => {
    state.chapter = chapter;
  },

  pages: (state, pages) => {
    state.pages = pages;
  },

  chapters: (state, chapters) => {
    console.log("Mutation called", chapters);
    state.chapters = chapters;
  }
};

const actions = {
  firstPage({ commit }) {
    commit("resetPage");
  },

  nextPage({ commit }) {
    commit("nextPage");
  },

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
        commit("pages", res.data.chapter.pages);
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
