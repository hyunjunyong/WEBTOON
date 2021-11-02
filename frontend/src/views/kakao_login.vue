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
import axios from "axios";

export default {
  name: "kakaoLogin",
  methods: {
    kakaoLogin() {
      const result = axios.get(
        "https://webtoon3.herokuapp.com/oauth/kakao-login"
      );
      window.Kakao.Auth.authorize(result);
      // console.log(result);
    },
  },
};
</script>
