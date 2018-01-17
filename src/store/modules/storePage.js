import Vue from "vue";
import { API_ROOT_URL } from "../../settings";
import axios from "axios";

const state = {
  currentPage: {},
  pages: [],
  numPages: 0,
  nextPageNumber: 0
};

const getters = {
  // isLastPage: state => {
  //   if (state.pageId == state.pages.length - 1) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // },

  currentPage: state => {
    return state.currentPage;
  },

  // pages: state => {
  //   return state.chapter.pages;
  // },

  // pageNumber: state => {
  //   return state.pageNumber;
  // },

  nextPageNumber: state => {
    return state.nextPageNumber;
  },

  numPages: state => {
    return state.chapter.pages.length;
  }
};

const mutations = {
  currentPage: (state, page) => {
    state.currentPage = page;
  },

  numPages: (state, num) => {
    state.numPages = num;
  },

  nextPage: state => {
    state.pageNumber = state.pageNumber + 1;
  },

  nextPageNumber: (state, num) => {
    state.nextPageNumber = num;
  }

  // resetPage: state => {
  //   state.pageNumber = 0;
  // },

  // previousPage: state => {
  //   state.pageNumber = state.pageNumber - 1;
  // },

  // pages: (state, pages) => {
  //   state.pages = pages;
  // }
};

const actions = {
  setCurrentPage({ commit }, page) {
    commit("currentPage", page);
  },

  // firstPage({ commit }) {
  //   commit("nextPage");
  // },

  // nextPage({ commit }) {
  //   commit("previousPage");
  // },

  changePage({ commit }, page) {
    console.log("Change page. Chapter is", state.chapter._id);
    let url = `${API_ROOT_URL}/changepage`;
    axios
      .post(url, page)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  },

  setCurrentPage({ commit }, page) {
    page.chapterId = state.chapter._id;
    commit("currentPage", page);
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
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
