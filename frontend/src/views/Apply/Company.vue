<template>
  <!-- 기업 인증 페이지 -->
  <v-container>
    <v-row>
      <v-col>
        <v-card class="text-center text-h3" height="60">기업 회원 신청</v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3">
        <v-card class="text-center text-h5">회사 명</v-card>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="5">
        <v-text-field
          v-model="companyName"
          label="회사 이름 작성"
          single-line
          solo
        >
        </v-text-field>
      </v-col>
      <v-col cols="3">
        <v-btn class="text-center text-h7">중복 확인</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-divider></v-divider>
    </v-row>
    <v-row>
      <v-col cols="3">
        <v-card class="text-center text-h5">사업자 등록번호</v-card>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="7">
        <v-text-field
          v-model="businesslicenseNum"
          label="111-11-11111"
          single-line
          solo
        >
        </v-text-field>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <v-row>
      <v-col>
        <v-divider></v-divider>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3">
        <v-card class="text-center text-h5"
          >사업자 등록증 <br />
          업로드</v-card
        >
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="7">
        <v-file-input
          id="photo"
          truncate-length="15"
          class="align-center"
        ></v-file-input>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <v-row>
      <v-spacer></v-spacer>
      <v-col class="text-center">
        <router-link to="/">
          <v-btn block>취소</v-btn>
        </router-link>
      </v-col>
      <v-spacer></v-spacer>
      <v-col class="text-center">
        <v-btn @click="ap_Company()" block>신청</v-btn>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <v-row>
      <v-col>
        <v-card class="text-center text-h8" color="black" dark
          >기업 회원 신청 후 승인은 2일 정도 소요 됩니다.</v-card
        >
      </v-col>
    </v-row>
  </v-container>
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
<style scoped></style>
