<template>
  <!-- 작가 신청 페이지 -->
  <v-container>
    <v-row>
      <v-col>
        <v-card class="text-center text-h3" height="50">작가 신청</v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3">
        <v-card class="text-center text-h5">작가 필명</v-card>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="5">
        <v-text-field
          v-model="penName"
          id="penName"
          label="필명 작성"
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
      <v-col cols="3" class="d-flex align-center text-center text-h5">
        <v-card class="ma-auto">
          작가 소개글 <br />
          (300자 이상)
        </v-card>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="7">
        <v-text-field
          v-model="intro"
          id="intro"
          label="작가 소개 작성"
          single-line
          solo
          height="200"
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
      <v-col cols="3" class="d-flex align-center text-center text-h5">
        <v-card class="ma-auto">
          작가 프로필 사진 <br />
          (200px * 200px)
        </v-card>
      </v-col>

      <v-spacer></v-spacer>
      <v-col cols="5">
        <v-img
          src="../../img/writer_profile.png"
          alt=""
          height="200px"
          width="200px"
        />
      </v-col>
      <v-col cols="3" class="d-flex align-center">
        <input type="file" name="photo" id="photo" />
      </v-col>
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
        <v-btn block @click="ap_Writer()">신청</v-btn>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <v-row>
      <v-col>
        <v-card class="text-center text-h8" color="black" dark
          >작가 신청 후 에피소드를 1개 이상 승인 받아야 작가 승인이 완료
          됩니다.</v-card
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
      writerinfo: { penName: "asdf", intro: "asdf" },
    };
  },
  setup() {},
  create() {},
  mounted() {},
  unmounted() {},
  methods: {
    ap_Writer() {
      let form = new FormData();
      var photoFile = document.getElementById("photo");
      console.log(photoFile);
      const writer_info = {
        penName: this.penName,
        intro: this.intro,
      };
      form.append("avatar", photoFile.files[0]);
      form.append("datas", JSON.stringify(writer_info));
      axios
        .post("http://localhost:5000/user/apply-writer", form, {
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
