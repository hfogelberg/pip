import Vue from "vue";
import { API_ROOT_URL } from "../../../config";
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

    console.log("Calling Post user", user);

    axios
      .post(`${API_ROOT_URL}/user`, { user })
      .then(res => {
        console.log("Server response", res);

        commit("firstName", res.data.user.firstName);
        commit("lastName", res.data.user.lastName);
        commit("email", res.data.user.email);
        commit("token", res.data.user.cookieVal);
        commit("photo", res.data.user.photo);
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
