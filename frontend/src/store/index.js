import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "../router/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 로그인 상태 정보
    isLogin: false,

    //사용자 정보
    // 사용자 이름, 사용자 타입 등
    userInfo: null,

    testTmp: null,
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
    refresh5({ commit }) {
      let payload = {
        name: localStorage.getItem("name"),
        userType: localStorage.getItem("userType"),
      };
      commit("setUserInfo", payload);
    },
    signin({ commit, state }, loginObj) {
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
          console.log(res);
          let userInfo = {
            name: res.data.userInfo.name,
            userType: res.data.userInfo.userType,
          };

          //사용자 정보 수정
          commit("setUserInfo", userInfo);

          // 사용자정보 local에 저장...
          // 이것들은 쿠키에 토큰의 형식으로 변경해야한다.
          localStorage.setItem("name", userInfo.name);
          localStorage.setItem("userType", userInfo.userType);
          localStorage.setItem("isLogin", state.isLogin);
          //commit("setUserInfoLocalStorage", userInfo);

          //로그인 성공시 홈 화면으로 이동
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
