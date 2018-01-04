import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import user from "./modules/storeUser";
import character from "./modules/storeCharacter";
import chapter from "./modules/storeChapter";

export const store = new Vuex.Store({
  modules: {
    user,
    character,
    chapter
  }
});
