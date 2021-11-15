<template>
  <!-- 기업 인증 페이지 -->
 <div id="background">

  <v-container>
    <v-row justify="center" class="mt-10">
      <v-col cols="8" >
          <v-toolbar flat>
             <v-spacer></v-spacer>
            <v-toolbar-title class="text-h4 font-weight-bold">기업 회원 신청</v-toolbar-title>
             <v-spacer></v-spacer>
          </v-toolbar>
        <v-card elevation="0" >
      <!-- 회사명 작성 -->
    <v-row justify="center"> 
      <v-col cols="3" class="d-flex align-center  text-center text-h6">
        <v-card elevation="0" class="ma-auto">회사명</v-card>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="4" class="mt-8">
        <v-text-field
          v-model="companyName"
          outlined
          filled
          required>
        </v-text-field>
      </v-col>
      <v-col cols="4" class="ma-auto">
        <v-btn
            depressed
            outlined
            color="gray">
            <strong>중복 확인</strong>
        </v-btn>
      </v-col>
    </v-row>
    <v-row justify="center" >
       <v-col cols="4">
        <v-divider color="black"></v-divider>
       </v-col>
    </v-row>
      <!-- 사업자 등록번호 작성 -->    
    <v-row>
      <v-col cols="3" class="d-flex align-center text-center text-h6">
        <v-card elevation="0" class="ma-auto">
          사업자 <br />
          등록번호
        </v-card>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="7" class="mt-8">
        <v-text-field
          v-model="businesslicenseNum"
          placeholder="111-11-11111"
          outlined
          required
          filled
        >
        </v-text-field>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <v-row justify="center" >
       <v-col cols="4">
        <v-divider color="black"></v-divider>
       </v-col>
    </v-row>
      <!-- 사업자 등록증 올리기 --> 
    <v-row>
      <v-col cols="3" class="d-flex align-center text-center text-h6">
        <v-card elevation="0" class="ma-auto">
          사업자 등록증 <br />
          업로드
        </v-card>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="7">
        <v-file-input
          id="photo"
          show-size
          counter
          truncate-length="50"
          outlined
          filled
        ></v-file-input>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <v-row>
      <v-spacer></v-spacer>
      <v-col>
        <v-btn 
          depressed
          x-large
          block
          color="primary"        
          @click="ap_Company()">
          신청
        </v-btn>
      </v-col>
      <v-spacer></v-spacer>
      <v-col>
        <router-link to="/" style="text-decoration:none">
          <v-btn
            depressed
            x-large
            block
            color="gray">
            취소
          </v-btn>
        </router-link>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
        </v-card>
          </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="auto">
        <v-card elevation="0" class="ma-5 text-center text-h5" color="red" dark>
          기업 회원 승인은 신청 후 영업일 기준 2일 정도 소요 됩니다.</v-card>
      </v-col>
    </v-row>
  </v-container>
</div>
</template>


<script>
import axios from "axios";
export default {
  name: "",
  components: {},
  data() {
    return {
      companyinfo: {
        companyName: "회사이름",
        businesslicenseNum: "사업자번호",
      },
    };
  },
  setup() {},
  create() {},
  mounted() {},
  unmounted() {},
  methods: {
    ap_Company() {
      let form = new FormData();
      var photoFile = document.getElementById("photo");
      const company_info = {
        companyName: this.companyName,
        businesslicenseNum: this.businesslicenseNum,
      };
      form.append("businessLicense", photoFile.files[0]);
      form.append("datas", JSON.stringify(company_info));
      axios
        .post("http://localhost:5000/user/apply-company", form, {
          withCredentials: true,
        })
        .then((respon) => {
          console.log(respon);
        })
        .catch((err) => {
          console.err(err);
        });
    },
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
