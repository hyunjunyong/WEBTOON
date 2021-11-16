import Vue from "vue";
import Vuex from "vuex";
// import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    registerInfo: null,
    //작품등록으로 넘어가기 위한 신청 page Id
    //에피소드에 필요한 로그인한 유저의 ID
  },
  getters: {},
  mutations: {
    setRegisterInfo(state, payload) {
      state.registerInfo = payload;
      console.log(state.registerInfo);
    },
  },
  actions: {
    setRegisterInfoActions({ commit }, payload) {
      console.log(payload);
      commit("setRegisterInfo", payload);
    },
    // register_webtoon_userId: respon.data.userId,
    //         episode_Id: respon.data.id,
  },
  modules: {},
});
