import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    isLogin: false,
    loginStatus: "",
    accessToken: null,
    refreshToken: null,
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
            email:loginObj.email,
            password:loginObj.password
          },
          { withCredentials: true }
        )
        .then((res) => {
          console.log("login SUSSECE");
          this.state.isLogin = true;
          this.state.loginStatus =  res.status;
        })
        .catch(() => {
          console.log("login FAILE");
        });
      
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
