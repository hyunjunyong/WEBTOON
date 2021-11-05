<template>
  <v-container class="kakao_login">
    <v-row>
      <v-col>
        <a :href="kakaoLoginLink">카톡로긴테스트</a> |
        <!-- <button v-on:click="fetchdata">카톡로긴테스트</button> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "kakaoLogin",
  methods: {
    fetchdata: function() {
      axios
        .get("http://localhost:5000/user/profile")
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // kakaoLogin() {
    //   const result = axios.get("http://localhost:5000/oauth/kakako-login");
    //   location.href(result);
    //   // window.Kakao.Auth.authorize(result);
    //   // console.log(result);
    // },
  },
  computed: {
    kakaoLoginLink() {
      // return https://kauth.kakao.com/oauth/authorize?client_id=${this.client_id}&redirect_uri=${this.redirect_uri}&response_type=code;
      return "http://localhost:5000/oauth/kakao-login";
    },

    // profile() {
    //   return "http://localhost:5000/user/profile";
    // },
  },
};
</script>
