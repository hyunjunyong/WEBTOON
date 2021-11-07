import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    isLogin: false,
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
      console.log(this.state.isLogin);
    },
    signout() {
      this.state.isLogin = false;
      console.log(this.state.isLogin);
    },
  },
  modules: {},
});
