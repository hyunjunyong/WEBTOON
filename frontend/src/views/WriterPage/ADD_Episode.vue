<template>
  <!-- 에피소드 등록 페이지 -->
  <div id="background">
    <v-container>
      <v-row justify="center" class="my-10">
        <v-col cols="8">
          <v-card elevation="0">
            <v-toolbar flat>
              <v-spacer></v-spacer>
              <v-toolbar-title class="text-h5 font-weight-bold pt-3"
                >에피소드 등록</v-toolbar-title
              >
              <v-spacer></v-spacer>
            </v-toolbar>

            <!-- 에피소드 명 등록 -->
            <v-row>
              <v-col cols="4" class="d-flex text-center text-h6">
                <v-card elevation="0" class="ma-auto">에피소드명</v-card>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="episodeName"
                  id="episodeName"
                  :counter="50"
                  maxlength="50"
                  required
                >
                </v-text-field>
              </v-col>
            </v-row>

            <!-- 에피소드 소개 작성 -->
            <v-row>
              <v-col cols="4" class="d-flex text-center text-h6">
                <v-card elevation="0" class="ma-auto"
                  >에피소드 소개<br />(50자 이상)</v-card
                >
              </v-col>

              <v-col cols="6">
                <v-textarea
                  v-model="episodeDescription"
                  id="episodeDescription"
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

            <!-- 에피소드 썸내일과 에피소드 웹툰 올리기 -->
            <v-row class="mb-5" justify="center">
              <v-col cols="6" class="d-flex text-center text-h6">
                <v-card elevation="0" class="ma-auto"
                  >에피소드 썸내일<br />(260px * 260px)
                  <v-file-input
                    id="thumbnail"
                    truncate-length="15"
                  ></v-file-input>
                </v-card>
              </v-col>

              <v-col cols="6" class="d-flex text-center text-h6">
                <v-card elevation="0" class="ma-auto"
                  >에피소드 이미지<br />(1280px * (max)5120px)
                  <v-file-input
                    id="episodeI"
                    truncate-length="15"
                    multiple
                  ></v-file-input>
                </v-card>
              </v-col>
            </v-row>

            <!-- 등록/ 취소 버튼 -->
            <v-row>
              <v-spacer></v-spacer>
              <v-col>
                <v-btn
                  depressed
                  x-large
                  block
                  color="primary"
                  @click.once="add_Episode()"
                >
                  등록</v-btn
                >
              </v-col>
              <v-spacer></v-spacer>
              <v-col>
                <router-link
                  to="/webtoon_home_writer"
                  style="text-decoration:none"
                >
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
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import router from "../../router/index.js";
export default {
  name: "",
  components: {},
  data() {
    return {
      episodeName: null,
      episodeDescription: null,
    };
  },
  methods: {
    add_Episode() {
      let form = new FormData();

      var thumbnail = document.getElementById("thumbnail");
      var episodeI = document.getElementById("episodeI");

      const writer_info = {
        workId: this.$store.state.workId,
        episodeOrder: "1",
        episodeName: this.episodeName,
        episodeDescription: this.episodeDescription,
      };

      for (let file of episodeI.files) {
        console.log(file);
        form.append("episodeImages", file, file.name);
      }
      form.append("episodeThumbnail", thumbnail.files[0]);
      form.append("episodeInfo", JSON.stringify(writer_info));
      console.log(form);
      axios
        .post("http://localhost:5000/user/upload-episode", form, {
          withCredentials: true,
        })
        .then((respon) => {
          console.log(respon);
          alert(
            "정상적으로 등록되었습니다. 추후 심사 후 결과를 안내해드릴 예정입니다."
          );
          router.push("/");
        })
        .catch((err) => {
          console.err(err);
        });
      console.log(writer_info);
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
