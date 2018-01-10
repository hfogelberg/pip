import Vue from "vue";
import { API_ROOT_URL } from "../../settings";
import axios from "axios";

const state = {
  isLastPage: false,
  pages: [],
  pageNumber: 0,
  currentPage: {},
  numPages: 0
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

  pageNumber: state => {
    return state.pageNumber;
  },

  numPages: state => {
    return state.numPages;
  }
};

const mutations = {
  resetPage: state => {
    state.pageNumber = 0;
  },

  previousPage: state => {
    state.pageNumber = state.pageNumber - 1;
  },

  nextPage: state => {
    state.pageNumber = state.pageNumber + 1;
  },

  pages: (state, pages) => {
    state.pages = pages;
  }
};

const actions = {
  firstPage({ commit }) {},

  nextPage({ commit }) {},

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
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
