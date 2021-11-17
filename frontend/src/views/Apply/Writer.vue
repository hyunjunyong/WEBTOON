<template>
  <!-- 작가 신청 페이지 -->
  <div id="background">
    <v-container>
      <v-row justify="center" class="mt-10">
        <v-col cols="8">
          <v-card elevation="0">
            <v-toolbar flat>
              <v-spacer></v-spacer>
              <v-toolbar-title class="text-h5 font-weight-bold pt-3"
                >작가 신청</v-toolbar-title
              >
              <v-spacer></v-spacer>
            </v-toolbar>

            <!-- 작가 필명 작성 -->
            <v-row>
              <v-col cols="4" class="d-flex text-center text-h6">
                <v-card elevation="0" class="ma-auto">작가 필명</v-card>
              </v-col>
              <v-col cols="5">
                <v-text-field v-model="authorName" id="authorName" required>
                </v-text-field>
              </v-col>
              <v-col cols="3" class="ma-auto">
                <v-btn depressed color="gray"> 중복<br />확인 </v-btn>
              </v-col>
            </v-row>

            <!-- 소개글 작성 -->
            <v-row>
              <v-col cols="4" class="d-flex text-center text-h6">
                <v-card elevation="0" class="ma-auto"
                  >소개글<br />(100자 이상)</v-card
                >
              </v-col>

              <v-col cols="5">
                <v-textarea
                  v-model="description"
                  id="description"
                  required
                  height="100"
                  counter
                  single-line
                  full-width
                  dense
                >
                </v-textarea>
              </v-col>
            </v-row>

            <!-- 작가 프로필 사진 올리기 -->
            <v-row class="mb-5">
              <v-col cols="4" class="d-flex text-center text-h6">
                <v-card elevation="0" class="ma-auto"
                  >프로필 사진<br />(200px * 200px)</v-card
                >
              </v-col>
              <!-- <v-col cols="4">
        <v-img
          src="../../img/writer_profile.png"
          alt=""
          height="200px"
          width="200px"
          style="border-radius:100%"
        />
      </v-col> -->
              <v-col cols="5">
                <v-file-input
                  id="photo"
                  show-size
                  counter
                  truncate-length="50"
                ></v-file-input>
              </v-col>
            </v-row>
            <!-- 신청/ 취소 버튼 -->
            <v-row>
              <v-spacer></v-spacer>
              <v-col>
                <v-btn
                  depressed
                  x-large
                  block
                  color="primary"
                  @click="assign_Writer()"
                >
                  다음</v-btn
                >
              </v-col>
              <v-spacer></v-spacer>
              <v-col>
                <router-link to="/" style="text-decoration:none">
                  <v-btn depressed x-large block color="gray">
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
          <v-card
            elevation="0"
            class="ma-10 text-center text-h6"
            color="red"
            dark
          >
            작가 신청 후 에피소드를 1개 이상 승인 받아야 작가 승인이 완료
            됩니다</v-card
          >
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import router from "../../router/index";
// import { mapActions } from "vuex";

export default {
  name: "Writer",
  data() {
    return {
      authorName: "asdf",
      description: "asdf",
    };
  },
  methods: {
    assign_Writer() {
      let form = new FormData();
      var photoFile = document.getElementById("photo");
      const writer_info = {
        authorName: this.authorName,
        description: this.description,
      };
      form.append("avatar", photoFile.files[0]);
      form.append("datas", JSON.stringify(writer_info));
      console.log(writer_info);
      axios
        .post("http://localhost:5000/user/apply-author", form, {
          withCredentials: true,
        })
        .then((respon) => {
          console.log(respon);
          router.push("/register_Webtoon");
          this.$store.state.id = respon.data.id;
          this.$store.state.userId = respon.data.userId;
        })
        .catch((err) => {
          alert("에러");
          console.log(err);
        });
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
