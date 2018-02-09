// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VueRouter from "vue-router";
import router from "./router";
import { store } from "./store/store.js";
import App from "./App.vue";
import VueObserveVisibility from "vue-observe-visibility";

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueObserveVisibility);

console.log("ENV in main: " + process.env.NODE_ENV);

new Vue({
  router,
  store,
  el: "#app",
  render: h => h(App)
});
