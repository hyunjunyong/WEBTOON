<template>
  <!-- 로그인 페이지 -->
  <div id="background">
    <v-container>
      <!-- 로그인 작성 폼 -->
      <v-row justify="center" class="ma-5">
        <v-col cols="1" class="mt-16">
          <v-row class="mb-10">
            <v-btn @click="a">일반회원 </v-btn>
          </v-row>

          <v-row class="mb-10">
            <v-btn @click="b">작가회원</v-btn>
          </v-row>

          <v-row class="mb-10">
            <v-btn @click="c">관리자</v-btn>
          </v-row>
        </v-col>
        <v-col cols="7">
          <!-- 이메일, 비밀번호 작성 폼 -->
          <v-card elevation="0" width="300">
            <v-toolbar flat>
              <v-spacer></v-spacer>
              <v-toolbar-title class="font-weight-bold pt-3"
                >로그인</v-toolbar-title
              >
              <v-spacer></v-spacer>
            </v-toolbar>

            <div class="pa-5">
              이메일
              <v-text-field dense outlined color="primary" v-model="email">
              </v-text-field>
              비밀번호
              <v-text-field
                dense
                outlined
                color="primary"
                v-model="password"
                type="password"
              >
              </v-text-field>
              <v-btn
                color="primary"
                depressed
                block
                rounded
                @click="signin({ email, password })"
              >
                로그인
              </v-btn>
            </div>

            <!-- 회원가입 창으로 넘어가는 텍스트 -->
            <v-card-text class="text-center font-weight-bold gray--color">
              <v-spacer></v-spacer>
              계정이 없으신가요? <v-spacer></v-spacer
              ><router-link to="join" style="text-decoration:none"
                >회원가입</router-link
              >
              <v-spacer></v-spacer>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      email: "user@test.com",
      password: "password123",
      NotSuccess: false,
      Success: false,
    };
  },
  methods: {
    ...mapActions(["signin"]),
    a() {
      //일반
      (this.email = "user111@test.com"), (this.password = "password123");
    },
    b() {
      //작가
      (this.email = "user01@test.com"), (this.password = "password123");
    },
    c() {
      //관리자
      (this.email = "admin@test.com"), (this.password = "password123");
    },
    // axios
    //   .post(
    //     "http://localhost:5000/auth/session",
    //     {
    //       email: this.email,
    //       password: this.password,
    //     },
    //     { withCredentials: true }
    //   )
    //   .then((req) => {
    //     console.log("req.status is " + req.status);
    //     this.signin('asdasdasda');
    //     this.$router.push('/');
    //   })
    //   .catch((err) => {
    //     console.err(err);

    //   });
  },
};
</script>

<style>
#background {
  background-color: #eeeeee;
  height: 100%;
}
html {
  overflow-y: auto;
}
</style>
