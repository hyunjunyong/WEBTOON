<template>
  <!-- 로그인 페이지 -->
  <v-app>
  <v-container>
    <!-- 공백생성 위해 작성 -->
    <v-row><v-card height="50"></v-card></v-row>

    <!-- 로그인 작성 폼 -->
    <v-row justify="center">
      <v-col cols="4">
        <!-- 로그인 실패시 알람창 -->
        <v-alert ma="3" shaped prominent type="error" :value="NotSuccess">
          아이디와 비밀번호를 확인하십시오.
        </v-alert>
        <v-alert ma="3" shaped prominent type="success" :value="Success">
          로그인 완료
        </v-alert>

        <!-- 이메일, 비밀번호 작성 폼 -->
        <v-card elevation="0">
          <v-toolbar flat>
            <v-spacer></v-spacer>
            <v-toolbar-title class="text-h4 font-weight-bold">로그인</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <div class="pa-5">
            <v-text-field
              color="primary"
              outlined
              rounded
              v-model="email"
              label="이메일을 입력하세요">
            </v-text-field>
            <v-text-field
              color="primary"
              outlined
              rounded
              v-model="password"
              type="password"
              label="비밀번호를 입력하세요"
            >
            </v-text-field>
            <v-btn color="primary" depressed block large @click="signin({email, password})">
              로그인
            </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <!-- 회원가입 창으로 넘어가는 버튼 -->
    <v-row justify="center">
      <v-col cols="4">
        <v-card>
          <router-link to="join">
            <v-btn color="primary" depressed block x-large>
              회원가입
            </v-btn>
          </router-link>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Login",
  created() {
    
  },
  data() {
    return {
      email: "testmail@test.com",
      password: "123456",
      NotSuccess: false,
      Success: false,
    };
  },
  methods: {
    ...mapActions(["signin"]),
    
      // let selectedUser = null;
      // this.allUsers.forEach((user) => {
      //   if (user.email === this.email) selectedUser = user;
      // });
      // selectedUser === null
      //   ? (this.NotSuccess = true)
      //   : selectedUser.password !== this.password
      //   ? (this.NotSuccess = true)
      //   : (this.Success = true);

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

<style scoped>
.v-application {
  background-color: #EEEEEE;
}
</style>
