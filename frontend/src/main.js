import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import VueCookies from "vue-cookies";

Vue.use(VueCookies);
Vue.config.productionTip = false;
Vue.prototype.$http = axios;
window.Kakao.init("6aaa2ef5799d1a245252a5e4f959d05f");

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
