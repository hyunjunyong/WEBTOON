<template>
  <v-container class="kakao_login">
    <v-row>
      <v-col>
        <v-btn @click="kakaoLogin"> kakao_login </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "kakaoLogin",
  methods: {
    kakaoLogin() {
      const params = {
        redirectUri: "http://localhost:8080/kakao_login",
      };
      window.Kakao.Auth.authorize(params);
    },
  },
};
</script>
