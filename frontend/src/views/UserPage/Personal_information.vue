<template>
  <v-container>
    <v-row justify="center">
      <v-col
        cols="8"
        >
            <v-card>
          <v-toolbar flat>
            <v-toolbar-title>회원 정보 변경</v-toolbar-title>
          </v-toolbar>
          <div class="pa-3">
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :rules="nameRules"
      label="이름"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="이메일"
      disabled
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

    <v-text-field
      v-model="phoneNumber"
      :rules="phonenumberRules"
      label="휴대전화번호"
      placeholder="01022223333"
    ></v-text-field>

    <v-text-field
      v-model="birthDate"
      @change="setDate"
      :rules="birthDateRules"
      label="생년월일"
      placeholder="1990-10-10"
    ></v-text-field>

    <v-select
      v-model="gender"
      :items="genderList"
      item-text="type"
      item-value="value"
      label="성별"
    ></v-select>

    <v-row justify="center" class="ma-0">
        <v-spacer></v-spacer>
    <v-btn
      color="success"
      @click="apiRequest"
    >
      수정
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
import axios from 'axios'

  export default {
    data: () => ({
      valid: true,
      name: '',
      email: '',

      password: '',
      passwordRules: [
        v => !!v || '비밀번호는 필수항목입니다.',
        v => (v && v.length >= 5) || '비밀번호는 5자 이상으로 적어주세요.',
      ],
      password_check: '',
      password_checkRules: [
        v => !!v || '비밀번호 확인은 필수항목입니다.',
        v => (v && v.length >= 5) || '비밀번호는 5자 이상으로 적어주세요.',
        v => v === this.password || '비밀번호가 일치하지 않습니다.'
      ],
      phoneNumber: '',
      phoneNumberRules: [
      ],
        birthDate: '',
      birthDateRules: [

      ],
      gender: '',
      genderList: [
    { type: '남', value: 'man'},
    { type: '여', value: 'woman'},
    { type: '선택안함', value: 'none'}

      ],
    }),

         mounted () {
    axios
      .get('http://localhost:5000/user/profile', { withCredentials: true })
      .then(response =>{

         this.email = response.data.user.email
         this.name = response.data.user.name
        if ( !response.data.user.phoneNumber ) {
             this.phoneNumber = "기입안함"
         }
         else {this.phoneNumber = response.data.user.phoneNumber}
         if ( !response.data.user.birthDate ) {
             this.birthDate = "기입안함"
         }
         else {this.birthDate = response.data.user.birthDate}
         this.gender = response.data.user.gender
         
         /* if (response.data.user.gender == "man") {
             this.gender = this.genderList[1]
            
         }
         else if (response.data.user.gender == "woman") {
              this.gender = this.genderList[2]
         }
         else {this.gender = this.genderList[0] } */
         console.log(response.data.user)
         })
      
         },

      methods: {
      setDate() {
          console.log(this.birthDate)
          this.birthDate = new Date(this.birthDate)
      },
      test() {
          console.log(this.gender)
      },
      apiRequest() {
          
        axios.patch('http://localhost:5000/user/profile', {
            name:this.name,
            password:this.password,
            phoneNumber:this.phoneNumber,
            birthDate:this.birthDate,
            gender:this.gender,
            
            },{ withCredentials: true }
        ).then(response => {
          console.log(response.status);
          if (response.status == "200") {
               console.log("2");
          }

        }).catch((err)=> {
          console.err(err);
        })

      },
      reset () {
        this.$refs.form.reset()
      },

    },

  }
</script>