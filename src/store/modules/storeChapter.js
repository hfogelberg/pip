import Vue from "vue";
import { API_ROOT_URL } from "../../settings";
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

  chapterTitle: (state, title) => {
    state.chapterTitle = title;
  },

  pages: (state, pages) => {
    state.pages = pages;
  },

  chapters: (state, chapters) => {
    state.chapters = chapters;
  }
};

const actions = {
  firstPage({ commit }) {},

  nextPage({ commit }) {},

  createChapter({ commit }, chapter) {
    let url = `${API_ROOT_URL}/chapter`;
    axios
      .post(url, chapter)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  },

  createPage({ commit }, page) {
    let url = `${API_ROOT_URL}/page`;
    axios
      .post(url, page)
      .then(res => {
        console.log("Creacte page response", res);
      })
      .catch(err => {
        console.log("Create page error", err);
      });
  },

  getChapterNames({ commit }) {
    let url = `${API_ROOT_URL}/chapternames`;
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
    console("Get Chapter by Id " + id);
    let url = `${API_ROOT_URL}/chapters/${id}`;
    axios
      .get(url)
      .then(res => {
        console.log("GET CHAPTER BY ID", res);
        commit("chapter", res.data.chapter);
        commit("pages", res.data.chapter.pages);
      })
      .catch(err => {
        console.log(err);
      });
  },

  getNumPages({ commit }, id) {
    let url = `${API_ROOT_URL}/numpages/${id}`;
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
    let url = `${API_ROOT_URL}/chapters`;
    console.log(url);
    axios
      .get(url)
      .then(res => {
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
