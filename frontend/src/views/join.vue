<template>
  <v-container>
    <v-row justify="center">
      <v-col
        cols="8"
        >
            <v-card>
          <v-toolbar flat>
            <v-toolbar-title>회원가입</v-toolbar-title>
          </v-toolbar>
          <div class="pa-3">
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="nickname"
      :counter="10"
      :rules="nicknameRules"
      label="닉네임"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="이메일"
      required
    ></v-text-field>

    <v-text-field
      v-model="password"
      type="password"
      :rules="passwordRules"
      label="비밀번호"
      required
    ></v-text-field>

    <v-text-field
      v-model="password_check"
      type="password"
      :rules="password_checkRules"
      label="비밀번호 확인"
      required
    ></v-text-field>

      <v-checkbox
        v-model="checkbox"
        :rules="[v => !!v || '동의는 필수항목입니다.']"
        label="이용약관에 동의하십니까?"
        required
      ></v-checkbox>

    <v-row justify="center" class="ma-0">
        <v-spacer></v-spacer>
    <v-btn
      :disabled="!valid"
      color="success"
      @click="validate"
    >
      회원가입
    </v-btn>
        <v-spacer></v-spacer>
    <v-btn
      color="error"
      @click="reset"
    >
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
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      nickname: '',
      nicknameRules: [
        v => !!v || '닉네임은 필수항목입니다.',
        v => (v && v.length <= 10) || '닉네임은 10자 이하로 적어주세요.',
      ],
      email: '',
      emailRules: [
        v => !!v || '이메일은 필수항목입니다.',
        v => /.+@.+\..+/.test(v) || '이메일이 올바르지 않습니다.',
      ],
      password: '',
      passwordRules: [
        v => !!v || '비밀번호는 필수항목입니다.',
        v => (v && v.length >= 5) || '비밀번호는 5자 이상으로 적어주세요.',
      ],
      phonenumber: '',
      phonenumberRules: [
        v => !!v || '휴대전화번호는 필수항목입니다.',
        v => (v && v.length == 11) || '-를 생략하고 적어주세요.(ex.01022223333)',
      ],
      bday:'',
      bdayRules: [
        v => !!v || '생년월일은 필수항목입니다.',
        v => (v && v.length == 8) || '8자리를 적어주세요.(ex.19901010)',
      ],
      password_checkRules: [
        v => !!v || '비밀번호는 필수항목입니다.',
        v => /^.*(?=^.{6,12}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/.test(v) || '6~12자의 영문 대소문자, 숫자 및 특수기호를 최소 1개 이상 포함해야합니다.',
        v => v === this.password || '비밀번호가 일치하지 않습니다.'
      ],
      checkbox: false,
    }),
    methods: {
      validate () {
        this.$http.post('http://localhost:5000/auth/signup')
      },
      reset () {
        this.$refs.form.reset()
      },
    },
  }
</script>