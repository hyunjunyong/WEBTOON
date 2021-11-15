import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "../router/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //사용자 정보
    isLogin: false,
    userInfo: null,
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count = state.count + 1;
    },
    setUserInfo(state, payload) {
      state.userInfo = payload;
      state.isLogin = true;
    },
  },
  actions: {
    signin({ commit }, loginObj) {
      axios
        .post(
          "http://localhost:5000/auth/session",
          {
            email: loginObj.email,
            password: loginObj.password,
          },
          { withCredentials: true }
        )
        .then((res) => {
          const userInfo = {
            name: res.data.userInfo.name,
            userType: res.data.userInfo.userType,
          };

          console.log(res);

          commit("setUserInfo", userInfo);

          router.push("/");
        })
        .catch((err) => {
          console.log("login FAILE");
          console.log(err);
        });
    },
    signout() {
      this.state.isLogin = false;
    },
  },
});
