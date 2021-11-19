<template>
 <div id="background">
  <v-container>
    <!-- 회원 정보 수정 작성 폼 -->
    <v-row justify="center" class="ma-5"> 
      <v-col cols="auto">
            <v-card elevation="0" width="400">
          <v-toolbar flat>
             <v-spacer></v-spacer>
            <v-toolbar-title class="font-weight-bold pt-3">회원 정보 변경</v-toolbar-title>
             <v-spacer></v-spacer>
          </v-toolbar>

        <div class="pa-3">
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-text> 닉네임 </v-text>    
          <v-text-field
            dense
            outlined
            v-model="name"
            :rules="nameRules"
            required
          ></v-text-field>

          <v-text> 이메일 </v-text>    
          <v-text-field
            dense
            outlined
            v-model="email"
            :rules="emailRules"
            disabled
          ></v-text-field>

          <v-text> 비밀번호 </v-text>    
          <v-text-field
            dense
            outlined
            v-model="password"
            type="password"
            :rules="passwordRules"
            required
          ></v-text-field>

          <v-text> 비밀번호 확인 </v-text>    
          <v-text-field
            dense
            outlined
            v-model="password_check"
            type="password"
            :rules="[(password === password_check) || '비밀번호가 동일하지 않습니다.']"
            required
          ></v-text-field>

          <v-text> 휴대전화 번호 </v-text>    
          <v-text-field
            dense
            outlined
            v-model="phoneNumber"
            :rules="phonenumberRules"
            placeholder="01022223333"
          ></v-text-field>

          <v-text> 생년월일 </v-text>    
          <v-text-field
            dense
            outlined
            v-model="birthDate"
            @change="setDate"
            :rules="birthDateRules"
            placeholder="1990-10-10"
          ></v-text-field>

          <v-text> 성별 </v-text>  
          <v-select
            dense
            outlined
            v-model="gender"
            :items="genderList"
            item-text="type"
            item-value="value"
          ></v-select>

          <v-row justify="center" class="ma-0">
              <v-spacer></v-spacer>
          <v-btn
            depressed
            x-large
            color="primary"
            @click="apiRequest"
          >
            수정
          </v-btn>
              <v-spacer></v-spacer>
          <v-btn
            depressed
            x-large
            color="gray"
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
 </div>
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

<style>
#background {
  background-color: #EEEEEE;
  height: 100%;
}
 html { overflow-y: auto }
</style>