<template>
  <!-- 로그인 페이지 -->
  <div id="background">
  <v-container>
    <!-- 로그인 작성 폼 -->
    <v-row justify="center" class="ma-10">
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
              v-model="email"
              label="이메일을 입력하세요">
            </v-text-field>
            <v-text-field
              color="primary"
              v-model="password"
              type="password"
              label="비밀번호를 입력하세요"
            >
            </v-text-field>
            <v-btn color="primary" depressed block large @click="signin({email, password})">
              로그인
            </v-btn>
          </div>

          <!-- 회원가입 창으로 넘어가는 텍스트 -->
          <v-card-title class="text-h6 font-weight-bold gray--color">
            <v-spacer></v-spacer>
             계정이 없으신가요? <v-spacer></v-spacer><router-link to="join" style="text-decoration:none">회원가입</router-link>
            <v-spacer></v-spacer>
          </v-card-title>
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

<style>
#background {
  background-color: #EEEEEE;
  height: 100%;
}
 html { overflow-y: auto }
</style>
