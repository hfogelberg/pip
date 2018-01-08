import Vue from "vue";
import { API_ROOT_URL } from "../../settings";
import axios from "axios";

const state = {
  cloudinaryRootUrl: "",
  cloudinaryKey: "",
  cloudinarySecret: "",
  cloudinaryUploadUrl: "",
  cloudinaryUploadPreset: "",
  googleClientId: "",
  googleCallbackUrl: ""
};

const getters = {
  cloudinaryUploadUrl: state => {
    return state.cloudinaryUploadUrl;
  },
  cloudinaryUploadPreset: state => {
    return state.cloudinaryUploadPreset;
  },
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
  cloudinaryUploadPreset: (state, cloudinaryUploadPreset) => {
    state.cloudinaryUploadPreset = cloudinaryUploadPreset;
  },
  cloudinaryRootUrl: (state, cloudinaryRootUrl) => {
    state.cloudinaryRootUrl = cloudinaryRootUrl;
  },
  cloudinaryUploadUrl: (state, cloudinaryUploadUrl) => {
    state.cloudinaryUploadUrl = cloudinaryUploadUrl;
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
        commit("cloudinaryUploadUrl", res.data.settings.cloudinaryUploadUrl);
        commit(
          "cloudinaryUploadPreset",
          res.data.settings.cloudinaryUploadPreset
        );
        commit("cloudinarySecret", res.data.settings.cloudinarySecret);
        commit("googleClientId", res.data.settings.googleClientId);
        commit("googleCallbackUrl", res.data.settings.googleCallbackUrl);
        commit(
          "cloudinaryUploadPreset",
          res.data,
          settings.cloudinaryUploadPreset
        );
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
