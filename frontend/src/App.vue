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
import { mapActions, mapState } from "vuex";

export default {
  name: "App",
  created() {
    const storageIsLogin = localStorage.getItem("isLogin");
    console.log(storageIsLogin);
    if (storageIsLogin) {
      this.refresh5();
    }
  },
  methods: {
    ...mapActions(["refresh5"]),
    ...mapState(["isLogin"]),
  },
  components: {
    Footer,
    Header,
  },
};
</script>
