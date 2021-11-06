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
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="이름"
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
      v-model="phonenumber"
      :rules="phonenumberRules"
      label="휴대전화번호"
      placeholder="01022223333"
       required
    ></v-text-field>

    <v-text-field
      v-model="bday"
      :rules="bdayRules"
      label="생년월일"
      placeholder="19901010"
       required
    ></v-text-field>

    <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || '성별을 선택해주세요.']"
      label="성별"
      required
    ></v-select>

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
      name: '',
      nameRules: [
        v => !!v || '이름은 필수항목입니다.',
        v => (v && v.length <= 10) || '이름은 10자 이하로 적어주세요.',
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

      select: null,
      items: [
        '남',
        '여',
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