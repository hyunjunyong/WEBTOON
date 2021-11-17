<template>
  <v-app>
    <Header />

    <v-main>
      <router-view />
    </v-main>

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
    if (VueCookies.isKey("accessToken")) {
      this.refresh5();
    }
    // 작품 리스트 추가...
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
