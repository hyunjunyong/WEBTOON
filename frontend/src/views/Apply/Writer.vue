<template>
  <!-- 작가 신청 페이지 -->
  <div id="background">
    <v-container>
      <v-row justify="center" align="center" class="mt-10">
        <v-col cols="auto">
          <v-card elevation="0" width="500">
            <v-toolbar flat>
              <v-spacer></v-spacer>
              <v-toolbar-title class="font-weight-bold pt-3"
                >작가 신청</v-toolbar-title
              >
              <v-spacer></v-spacer>
            </v-toolbar>

            <!-- 작가 필명 작성 -->
            <v-row justify="center" align="center">
              <v-col cols="4" class="text-center">
                <v-card elevation="0" class="ma-auto">작가 필명</v-card>
              </v-col>
              <v-col cols="6">
                <v-text-field v-model="authorName" id="authorName" required>
                </v-text-field>
              </v-col>
            </v-row>

            <!-- 소개글 작성 -->
            <v-row justify="center" align="center">
              <v-col cols="4" class="text-center">
                <v-card elevation="0" class="ma-auto"
                  >소개글<br />(30자 이상)</v-card
                >
              </v-col>

              <v-col cols="6">
                <v-textarea
                  v-model="description"
                  id="description"
                  required
                  height="100"
                  counter
                  single-line
                  full-width
                  dense
                  filled
                >
                </v-textarea>
              </v-col>
            </v-row>

            <!-- 작가 프로필 사진 올리기 -->
            <v-row justify="center" align="center" class="mb-5">
              <v-col cols="4" class="text-center">
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
              <v-col cols="6">
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
                  rounded
                  block
                  color="primary"
                  @click.once="assign_Writer()"
                >
                  다음</v-btn
                >
              </v-col>
              <v-spacer></v-spacer>
              <v-col>
                <router-link to="/" style="text-decoration:none">
                  <v-btn depressed rounded block>
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
          <v-card elevation="0" class="ma-10 red--text grey lighten-3">
            - 작가 신청 후 에피소드를 1개 이상 승인 받아야 작가 승인이 완료
            됩니다 -</v-card
          >
        </v-col>
      </v-row>

      <!-- dialog 추가했습니다 -->
      <v-dialog v-model="dialog" persistent width="300">
        <v-card color="primary" dark>
          <v-card-text>
            Please stand by
            <v-progress-linear
              indeterminate
              color="white"
              class="mb-0"
            ></v-progress-linear>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios';
import router from '../../router/index';
// import { mapActions } from "vuex";

export default {
  name: 'Writer',
  data() {
    return {
      authorName: 'asdf',
      description: 'asdf',
      dialog: false,
    };
  },
  methods: {
    assign_Writer() {
      //여기에서 dialog가 나오게 하고
      this.dialog = true;
      let form = new FormData();
      var photoFile = document.getElementById('photo');
      const writer_info = {
        authorName: this.authorName,
        description: this.description,
      };
      form.append('avatar', photoFile.files[0]);
      form.append('datas', JSON.stringify(writer_info));
      console.log(writer_info);
      axios
        .post('http://localhost:5000/user/apply-author', form, {
          withCredentials: true,
        })
        .then((respon) => {
          //여기서 화면 전체를 막는거 실행
          router.push('/register_Webtoon');
          this.$store.state.id = respon.data.id;
          this.$store.state.userId = respon.data.userId;
        })
        .then(() => {
          //여기서 dialog가 끝나게 하면 됩니다.
          this.dialog = false;
        })
        .catch((err) => {
          this.dialog = false;
          alert('에러');
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
