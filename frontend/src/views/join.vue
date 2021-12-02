<template>
  <div id="background">
    <v-container>
      <!-- 회원가입 작성 폼 -->
      <v-row justify="center" class="ma-5">
        <v-col cols="auto">
          <v-card elevation="0" width="400">
            <v-toolbar flat>
              <v-toolbar-title class="justify-center font-weight-bold pt-3"
                >회원가입</v-toolbar-title
              >
            </v-toolbar>

            <div class="pa-3">
              <v-form ref="form" v-model="valid" lazy-validation>
                닉네임
                <v-text-field
                  dense
                  outlined
                  v-model="nickname"
                  :rules="nicknameRules"
                  required
                ></v-text-field>

                이메일
                <v-text-field
                  dense
                  outlined
                  v-model="email"
                  :rules="emailRules"
                  required
                ></v-text-field>

                비밀번호
                <v-text-field
                  dense
                  outlined
                  v-model="password"
                  type="password"
                  :rules="passwordRules"
                  required
                ></v-text-field>

                비밀번호 확인
                <v-text-field
                  dense
                  outlined
                  v-model="password_check"
                  type="password"
                  :rules="[
                    password === password_check ||
                      '비밀번호가 동일하지 않습니다.',
                  ]"
                  required
                ></v-text-field>

                <v-checkbox
                  v-model="checkbox"
                  :rules="[(v) => !!v || '동의는 필수항목입니다.']"
                  label="이용약관에 동의하십니까?"
                  required
                ></v-checkbox>

                <router-link to="/Tos" style="text-decoration:none">
                  <v-btn depressed x-small color="gray">
                    이용약관
                  </v-btn>
                </router-link>

                <v-row justify="center" class="ma-0">
                  <v-spacer></v-spacer>
                  <v-btn
                    depressed
                    rounded
                    :disabled="!valid"
                    color="primary"
                    @click="validate"
                  >
                    회원가입
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn depressed rounded color="gray" @click="reset">
                    취소
                  </v-btn>
                  <v-spacer></v-spacer>
                </v-row>
              </v-form>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios';
import router from '../router/index';
export default {
  data: () => ({
    valid: true,
    nickname: '',
    nicknameRules: [
      (v) => !!v || '닉네임은 필수항목입니다.',
      (v) => (v && v.length <= 10) || '닉네임은 10자 이하로 적어주세요.',
    ],
    email: '',
    emailRules: [
      (v) => !!v || '이메일은 필수항목입니다.',
      (v) => /.+@.+\..+/.test(v) || '이메일이 올바르지 않습니다.',
    ],
    password: '',
    passwordRules: [
      (v) => !!v || '비밀번호는 필수항목입니다.',
      (v) => (v && v.length >= 5) || '비밀번호는 5자 이상으로 적어주세요.',
    ],
    password_check: '',
    checkbox: false,
  }),
  methods: {
    validate() {
      //회원가입
      axios
        .post('http://localhost:5000/auth/signup', {
          name: this.nickname,
          email: this.email,
          password: this.password,
        })
        .then(() => {
          router.push('/login');
          //console.log(respon);
        })
        .catch((err) => {
          alert('회원가입이 되지 않았습니다.');
          router.push('/');
          console.err(err);
        });
    },
    reset() {
      this.$refs.form.reset();
    },
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
