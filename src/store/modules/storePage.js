import Vue from "vue";
import { API_ROOT_URL } from "../../settings";
import axios from "axios";

const state = {
  currentPage: {}
  // isLastPage: false,
  // pages: [],
  // pageNumber: 0,
  // numPages: 0
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
  }

  // pages: state => {
  //   return state.chapter.pages;
  // },

  // pageNumber: state => {
  //   return state.pageNumber;
  // },

  // numPages: state => {
  //   return state.numPages;
  // }
};

const mutations = {
  currentPage: (state, page) => {
    state.currentPage = page;
  }

  // resetPage: state => {
  //   state.pageNumber = 0;
  // },

  // previousPage: state => {
  //   state.pageNumber = state.pageNumber - 1;
  // },

  // nextPage: state => {
  //   state.pageNumber = state.pageNumber + 1;
  // },

  // pages: (state, pages) => {
  //   state.pages = pages;
  // }
};

const actions = {
  setCurrentPage({ commit }, page) {
    commit("currentPage", page);
  }

  // firstPage({ commit }) {
  //   commit("nextPage");
  // },

  // nextPage({ commit }) {
  //   commit("previousPage");
  // },

  // createPage({ commit }, page) {
  //   let url = `${API_ROOT_URL}/page`;
  //   axios
  //     .post(url, page)
  //     .then(res => {
  //       console.log("Creacte page response", res);
  //     })
  //     .catch(err => {
  //       console.log("Create page error", err);
  //     });
  // },

  // getNumPages({ commit }, id) {
  //   let url = `${API_ROOT_URL}/numpages/${id}`;
  //   axios
  //     .get(url)
  //     .then(res => {
  //       commit("numPages", res.data.numPages);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }
};

export default {
  state,
  getters,
  mutations,
  actions
};
