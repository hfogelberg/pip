import Vue from "vue";
import { API_ROOT_URL } from "../../settings";
import axios from "axios";

const state = {
  cloudinaryRootUrl: "",
  cloudinaryKey: "",
  cloudinarySecret: "",
  googleClientId: "",
  googleCallbackUrl: ""
};

const getters = {
  cloudinaryRootUrl: state => {
    return state.cloudinaryRootUrl;
  },
  cloudinaryKey: state => {
    return state.cloudinaryKey;
  },
  cloudinarySecret: state => {
    return state.cloudinarySecret;
  },
  googleClientId: state => {
    return state.googleClientId;
  },
  googleCallbackUrl: state => {
    return state.googleCallbackUrl;
  }
};

const mutations = {
  cloudinaryRootUrl: (state, cloudinaryRootUrl) => {
    state.cloudinaryRootUrl = cloudinaryRootUrl;
  },
  cloudinaryKey: (state, cloudinaryKey) => {
    state.cloudinaryKey = cloudinaryKey;
  },
  cloudinarySecret: (state, cloudinarySecret) => {
    state.cloudinarySecret = cloudinarySecret;
  },
  googleClientId: (state, googleClientId) => {
    state.googleClientId = googleClientId;
  },
  googleCallbackUrl: (state, googleCallbackUrl) => {
    state.googleCallbackUrl = googleCallbackUrl;
  }
};

const actions = {
  getConfig: ({ commit }) => {
    console.log("getConfig action");
    let url = `${API_ROOT_URL}/settings`;
    console.log("Settings url: " + url);
    axios
      .get(url)
      .then(res => {
        console.log(res.data);
        commit("cloudinaryRootUrl", res.data.settings.cloudinaryRootUrl);
        commit("cloudinaryKey", res.data.settings.cloudinaryKey);
        commit("cloudinarySecret", res.data.settings.cloudinarySecret);
        commit("googleClientId", res.data.settings.googleClientId);
        commit("googleCallbackUrl", res.data.settings.googleCallbackUrl);
      })
      .catch(err => {
        console.log("Server error", err);
      });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
