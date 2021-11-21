<template>
  <v-app>
    <Header />

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

export default {
  name: "App",
  created() {
    //새로고침했을 때 로그인 유지를 위한 조건문
    if (VueCookies.isKey("accessToken")) {
      this.refresh5();
    }
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
