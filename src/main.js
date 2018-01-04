// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VueRouter from "vue-router";
import router from "./router";
import { store } from "./store/store.js";
import App from "./App.vue";

Vue.config.productionTip = false;
Vue.use(VueRouter);

new Vue({
  router,
  store,
  el: "#app",
  render: h => h(App)
});
