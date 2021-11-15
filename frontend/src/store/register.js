import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "../router/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    episode_Id: null,
    register_webtoon_userId: null,
  },
  mutations: {},
  actions: {
    ap_Writer() {
      axios
        .post("http://localhost:5000/user/apply-author", {
          withCredentials: true,
        })
        .then((respon) => {
          console.log(respon);
          this.state.episode_Id = respon.data.id; //에피소드에 필요한 로그인한 유저의 ID
          this.state.register_webtoon_userId = respon.data.userId; //작품등록으로 넘어가기 위한 신청 page Id
        })
        .catch((err) => {
          console.err(err);
        });
    },
  },
  modules: {},
});
