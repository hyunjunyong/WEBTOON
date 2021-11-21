<template>
  <v-app>
    <v-header>
      <Header />
    </v-header>

    <v-content>
      <router-view />
    </v-content>

    <Footer />
  </v-app>
</template>

<script>
import Footer from "./components/Footer";
import Header from "./components/Header";
import VueCookies from "vue-cookies";
import { mapActions } from "vuex";
//import axios from axios;

export default {
  name: "App",
  created() {
    //새로고침했을 때 로그인 유지를 위한 조건문
    if (VueCookies.isKey("accessToken")) {
      this.refresh5();
    }

    //첫 화면에서 작품들 한번에 가져와버려서 지속적인 호출 안하게하기
    // axios
    //   .get("http://localhost:5000/works")
    //   .then((req) => {
    //     console.log(req);
    //     this.webtoon = req.data;
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  },
  methods: {
    ...mapActions(["refresh5"]),
  },
  components: {
    Footer,
    Header,
  },
};
</script>
