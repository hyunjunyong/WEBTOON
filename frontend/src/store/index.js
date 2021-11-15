import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "../router/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //사용자 정보
    isLogin: false,
    userType: null,
    userName: null,

    count: 0,
  },
  mutations: {
    increment(state) {
      state.count = state.count + 1;
    },
  },
  actions: {
    signin(commit, loginObj) {
      axios
        .post(
          "http://localhost:5000/auth/session",
          {
            email: loginObj.email,
            password: loginObj.password,
          },
          { withCredentials: true }
        )
        .then(() => {
          this.state.isLogin = true;
          this.state.userType = "개품3기";
          this.state.userName = "생존자";
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
  modules: {},
});
