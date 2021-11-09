<template>
  <!-- 로그인 페이지 -->
  <v-container>
    <v-row justify="center">
      <v-col cols="5">
        <v-alert ma="3" shaped prominent type="error" :value="NotSuccess">
          아이디와 비밀번호를 확인하십시오.
        </v-alert>
        <v-alert ma="3" shaped prominent type="success" :value="Success">
          로그인이 완료
        </v-alert>
        <v-card>
          <v-toolbar flat>
            <v-toolbar-title>로그인</v-toolbar-title>
          </v-toolbar>
          <div class="pa-3">
            <v-text-field v-model="email" label="이메일을 입력하세요">
            </v-text-field>
            <v-text-field
              v-model="password"
              type="password"
              label="비밀번호를 입력하세요"
            >
            </v-text-field>
            <v-btn color="green" depressed block large @click="login()">
              로그인
            </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="5">
        <v-card>
          <router-link to="join">
            <v-btn color="green" depressed block large>
              회원가입
            </v-btn>
          </router-link>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      email: "test2000@test.co.kr",
      password: "qqqqq",
      NotSuccess: false,
      Success: false,
    };
  },
  methods: {
    ...mapActions(["signin"]),
    login() {
      // let selectedUser = null;
      // this.allUsers.forEach((user) => {
      //   if (user.email === this.email) selectedUser = user;
      // });
      // selectedUser === null
      //   ? (this.NotSuccess = true)
      //   : selectedUser.password !== this.password
      //   ? (this.NotSuccess = true)
      //   : (this.Success = true);

      axios
        .post(
          "http://localhost:5000/auth/session",
          {
            email: this.email,
            password: this.password,
          },
          { withCredentials: true }
        )
        .then((respon) => {
          this.signin();
          console.log(respon);
        })
        .catch((err) => {
          console.err(err);
        });
    },
  },
};
</script>
