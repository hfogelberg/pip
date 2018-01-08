import Vue from "vue";
import { API_ROOT_URL } from "../../settings";
import axios from "axios";

const state = {
  firstName: "",
  lastName: "",
  email: "",
  token: "",
  photo: "",
  isAdmin: false
};

const getters = {
  token: state => {
    return state.token;
  },
  firstName: state => {
    return state.firstName;
  },
  lastName: state => {
    return state.lastName;
  },
  email: state => {
    return state.email;
  },
  photo: state => {
    return state.photo;
  },
  isAdmin: state => {
    return state.isAdmin;
  }
};

const mutations = {
  email: (state, email) => {
    state.email = email;
  },
  photo: (state, photo) => {
    state.photo = photo;
  },
  userId: (state, userId) => {
    state.userId = userId;
  },
  firstName: (state, firstName) => {
    state.firstName = firstName;
  },
  lastName: (state, lastName) => {
    state.lastName = lastName;
  },
  isAdmin: (state, isAdmin) => {
    state.isAdmin = isAdmin;
  },
  token: (state, token) => {
    state.token = token;
  }
};

const actions = {
  setUser: ({ commit }, payload) => {
    const user = {
      firstName: payload.firstName,
      lastName: payload.lastName,
      email: payload.email,
      token: payload.cookieVal,
      photo: payload.photo
    };

    console.log("Set User Action", user);

    commit("firstName", user.firstName);
    commit("lastName", user.lastName);
    commit("email", user.email);
    commit("photo", user.photo);
    commit("token", user.token);

    const url = `${API_ROOT_URL}/user`;
    console.log(url);
    axios
      .post(url, { user })
      .then(res => {
        console.log("Post user callback", res.data);
        commit("isAdmin", res.data.user.isAdmin);
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
