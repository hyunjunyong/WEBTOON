import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    isLogin: false,
    accessToken: null,
    refreshToken: null,
  },
  mutations: {
    increment(state) {
      state.count = state.count + 1;
    },
  },
  getters: {},
  actions: {
    signin() {
      this.state.isLogin = true;
      this.accessToken = this.$cookies.get("accessToken");
      this.refreshToken = this.$cookies.get("refreshToken");
      console.log(this.state.isLogin);
    },
    signout() {
      this.state.isLogin = false;
      console.log(this.state.isLogin);
    },
    checkToken() {
      if (this.accessToken == "") {
        if (this.refreshToken != "") {
          axios.get("http://localhost:5000/auth/session");
        }
      } else {
        this.signout();
        alert("로그인하세요");
      }
    },
  },
  modules: {},
});
