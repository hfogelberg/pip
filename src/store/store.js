import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import config from "./modules/storeConfig";
import user from "./modules/storeUser";
import character from "./modules/storeCharacter";
import chapter from "./modules/storeChapter";
import page from "./modules/storePage";
import art from "./modules/storeArt";

export const store = new Vuex.Store({
  modules: {
    config,
    user,
    character,
    chapter,
    page,
    art
  }
});
