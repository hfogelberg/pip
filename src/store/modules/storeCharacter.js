import Vue from "vue";
import { API_ROOT_URL } from "../../../config";
import axios from "axios";

const state = {
  characters: []
};

const getters = {
  characters: state => {
    return state.characters;
  }
};

const mutations = {
  characters: (state, characters) => {
    console.log("Mutation called", characters);
    state.characters = characters;
  }
};

const actions = {
  getCharacters({ commit }) {
    console.log("Get characters");
    let url = "http://localhost:3000/api/characters";

    axios
      .get(url)
      .then(res => {
        console.log("Characters returned", res.data.characters);
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
