import Vue from "vue";
import { API_ROOT_URL } from "../../settings";
import axios from "axios";

const state = {
  artworks: [],
  artwork: {}
};

const getters = {
  artworks: state => {
    return state.artworks;
  },

  artwork: state => {
    return state.artwork;
  }
};

const mutations = {
  artworks: (state, artworks) => {
    state.artworks = artworks;
  },

  artwork: (state, artwork) => {
    state.artwork = artwork;
  }
};

const actions = {
  getArtworks({commit}) {
    let url = `${API_ROOT_URL}/artworks`;
    axios.get(url)
         .then(res => {
           console.log(res);
           commit("artworks", res.data.artworks);
         })
         .catch(err => {
           console.log(err);
         });
  },

  createArtwork({commit}, artwork) {
    let url = `${API_ROOT_URL}/artwork`;
    
    axios.post(url, {artwork})
         .then(res => {
           console.log(res);
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
