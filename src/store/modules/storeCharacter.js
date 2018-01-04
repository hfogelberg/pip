import Vue from "vue";
import { API_ROOT_URL } from "../../../config";
import axios from "axios";

const state = {
  character: {}
};

const getters = {
  character: state => {
    return state.character;
  }
};

const mutations = {
  character: (state, character) => {
    console.log("Mutation called", character);
    state.character = character;
  }
};

const actions = {
  getCharacters({ commit }) {
    let url = "http://localhost:3000/api/characters";

    axios
      .get(url)
      .then(res => {
        console.log(res.data);
        commit("characters", res.data.characters);
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
