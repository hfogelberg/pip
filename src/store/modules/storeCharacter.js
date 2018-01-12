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
  deleteCharacter({ commit }, id) {
    console.log("Delete character action " + id);
    let url = `${API_ROOT_URL}/deletecharacter`;
    axios
      .post(url, { id })
      .then(res => {
        console.log("Delete character result", res.body);
      })
      .catch(err => {
        console.log("Error deleting character", err);
      });
  },

  changeCharacter({ commit }, character) {
    console.log("Change character action", character);
    let url = `${API_ROOT_URL}/changecharacter`;
    console.log(url);
    axios
      .post(url, { character })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  },

  setCurrentCharacter({ commit }, character) {
    commit("character", character);
  },

  createCharacter({ commit }, character) {
    console.log("Create Character Action", character);
    let url = `${API_ROOT_URL}/character`;
    console.log(url);
    axios
      .post(url, { character })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  },

  // Todo: Can remove?
  getCharacterById({ commit }, id) {
    let url = `${API_ROOT_URL}/characters/${id}`;

    axios
      .get(url)
      .then(res => {
        console.log("Character found", res.data);
        commit("character", res.data.character);
      })
      .catch(err => {
        console.log("Error getting character by id ", err);
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
