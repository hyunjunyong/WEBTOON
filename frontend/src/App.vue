<template>
  <v-app>
<<<<<<< HEAD
    <Header />
=======
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
>>>>>>> hjy

    <v-main>
      <router-view />
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
<<<<<<< HEAD
import Footer from "./components/Footer";
import Header from "./components/Header";
=======
import Footer from "./components/Footer.vue";
>>>>>>> hjy

export default {
  name: "App",

  data: () => ({
    //
  }),
  components: {
    Footer,
<<<<<<< HEAD
    Header,
=======
>>>>>>> hjy
  },
};
</script>

