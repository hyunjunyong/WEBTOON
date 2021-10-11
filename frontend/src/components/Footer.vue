<template>
  <v-footer color="primary lighten" padless>
    <v-row justify="center" no-gutters>
      <v-col class="primary lighten py-4 text-center white--text " cols="4">
        <div class="d-flex align-center">
          <v-img
            alt="Vuetify Logo"
            class="shrink"
            contain
            src="../img/pic.png"
            transition="scale-transition"
            width="40"
          />
        </div>
      </v-col>

      <v-col class="primary lighten py-4 text-center white--text" cols="3">
        <strong>이용약관 </strong> <strong> | </strong>
        <strong> 개인정보처리방침 </strong> <strong> | </strong>
        <strong> 공지 </strong>
        <strong> | </strong>
        <strong> 회사정보</strong>
      </v-col>

      <v-col class="primary lighten py-4 text-center white--text" cols="3">
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