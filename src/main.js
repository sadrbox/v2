import Vue from "vue";
import App from "./App.vue";
import router from "./config/router";
import i18n from "./config/i18n";

Vue.config.productionTip = false;

new Vue({
  router,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
