<template>
  <v-app>

    <Header />

    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="./img/pic.png"
          transition="scale-transition"
          width="40"
        />

        <div>개발자의 품격</div>
      </div>

      <v-spacer></v-spacer>

      <div>검색</div>
      <div>로고</div>
    </v-app-bar>


    <v-main>
      <router-view />
    </v-main>

    <Footer />
  </v-app>
</template>

<script>

import Footer from "./components/Footer";
import Header from "./components/Header";


export default {
  name: "App",
  data: () => ({
    //
  }),
  components: {
    Footer,
    Header,
  },
};
</script>

