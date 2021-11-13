<template>
  <v-footer  height="100px" color="white"  padless>

    <v-row justify="center" no-gutters>
      <v-col cols="auto">
          <router-link to="/" style="text-decoration:none">
          <div class="d-flex align-center">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="../img/개발자의품격로고.png"
            transition="scale-transition"
            max-width="50px"
          />
        </div>
        </router-link>
      </v-col>
             
      <v-col class="white lighten py-4 text-center white--text" cols="auto">
        <router-link to="/Tos" class="ma-2" style="text-decoration:none">
          <span class="footer-font"> <strong>이용약관</strong> </span>
        </router-link>

        <router-link to="/개인정보처리방침" class="ma-2"  style="text-decoration:none">
          <span class="footer-font"> <strong>개인정보처리방침</strong> </span>
        </router-link>

        <router-link to="/Notice_list" class="ma-2"  style="text-decoration:none">
          <span class="footer-font"> <strong>공지</strong> </span>
        </router-link>

        <router-link to="/회사정보" class="ma-2"  style="text-decoration:none">
          <span class="footer-font"> <strong>회사정보</strong> </span>
        </router-link>
      </v-col>

    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    //
  }),
};
</script>

<style>
.footer-font {
  color: black;
}
</style>
