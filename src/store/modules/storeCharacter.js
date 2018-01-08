import Vue from "vue";
import { API_ROOT_URL } from "../../settings";
import axios from "axios";

const state = {
  characters: [],
  character: {}
};

const getters = {
  characters: state => {
    return state.characters;
  },

  character: state => {
    return state.character;
  }
};

const mutations = {
  characters: (state, characters) => {
    state.characters = characters;
  },

  character: (state, character) => {
    state.character = character;
  }
};

const actions = {
  getCharacterById({ commit }, id) {
    let url = `${API_ROOT_URL}/characters/${id}`;

    axios
      .get(url)
      .then(res => {
        commit("character", res.data.character);
      })
      .catch(err => {
        console.log(err);
      });
  },

  getCharacters({ commit }) {
    let url = `${API_ROOT_URL}/characters`;

    axios
      .get(url)
      .then(res => {
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
