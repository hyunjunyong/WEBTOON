<template>
  <v-footer color="white" padless>
    <v-row justify="center" no-gutters>
      <v-col class="white lighten py-4 text-center white--text pa-1" cols="1">
        <div class="d-flex align-center"></div>
      </v-col>

      <v-col class="white lighten py-4 text-center white--text" cols="10">
        <router-link to="/Tos" class="ma-2">
          <span class="footer-font"> <strong>이용약관</strong> </span>
        </router-link>

        <router-link to="/개인정보처리방침" class="ma-2">
          <span class="footer-font"> <strong>개인정보처리방침</strong> </span>
        </router-link>

        <router-link to="/Notice_list" class="ma-2">
          <span class="footer-font"> <strong>공지</strong> </span>
        </router-link>

        <router-link to="/회사정보" class="ma-2">
          <span class="footer-font"> <strong>회사정보</strong> </span>
        </router-link>
      </v-col>

      <v-col class="white lighten py-4 text-center white--text" cols="1">
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
