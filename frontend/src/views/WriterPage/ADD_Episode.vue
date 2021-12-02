<template>
  <!-- 에피소드 등록 페이지 -->
  <div id="background">
    <v-container>
      <v-row justify="center" class="ma-10">
        <v-col cols="auto">
          <v-card elevation="0" width="600">
            <v-toolbar flat>
              <v-spacer></v-spacer>
              <v-toolbar-title class="font-weight-bold pt-3">
                에피소드 등록
              </v-toolbar-title>

              <v-spacer></v-spacer>
            </v-toolbar>

            <v-row
              justify="center"
              align="center"
              v-if="userInfo.userType == 'author'"
            >
              <v-col cols="10">
                <v-select
                  :items="items"
                  item-value="id"
                  item-text="title"
                  label="작품선택"
                  hide-details="auto"
                  v-model="selectedWork"
                  @change="selectedWorkId"
                ></v-select>
              </v-col>
            </v-row>
            <v-row justify="center" class="text-center">
              <v-col cols="10">
                <v-card v-if="recentEpisodeOrder == 0" elevation="0"
                  >최근 에피소드가 존재하지 않습니다.</v-card
                >
                <v-card v-else elevation="0">
                  최근 에피소드는 {{ recentEpisodeOrder }}화입니다</v-card
                ></v-col
              >
              <v-col cols="10">
                <v-card elevation="0" v-model="recentEpisodeOrder"
                  >{{ recentEpisodeOrder + 1 }}화로 등록됩니다.
                </v-card>
              </v-col>
            </v-row>
            <!-- 에피소드 명 작성 -->
            <v-row justify="center" align="center">
              <v-col cols="4" class="d-flex text-center">
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
            <v-row justify="center" align="center">
              <v-col cols="4" class="d-flex text-center">
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
                  filled
                >
                </v-textarea>
              </v-col>
            </v-row>

            <!-- 에피소드 썸내일과 에피소드 웹툰 올리기 -->
            <v-row justify="center" align="center" class="mb-5">
              <v-spacer></v-spacer>
              <v-col cols="auto" class="d-flex text-center">
                <v-card elevation="0" class="ma-auto"
                  >에피소드 썸내일<br />(260px * 260px)
                  <v-file-input
                    id="thumbnail"
                    show-size
                    counter
                    truncate-length="10"
                  ></v-file-input>
                </v-card>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="auto" class="d-flex text-center">
                <v-card elevation="0" class="ma-auto"
                  >에피소드 이미지<br />(1280px * (max)5120px)
                  <v-file-input
                    id="episodeI"
                    show-size
                    counter
                    truncate-length="10"
                    multiple
                  ></v-file-input>
                </v-card>
              </v-col>
              <v-spacer></v-spacer>
            </v-row>

            <!-- 등록 / 이전 버튼 -->
            <v-row>
              <v-spacer></v-spacer>
              <v-col>
                <v-btn
                  depressed
                  rounded
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
                  to="/register_Webtoon"
                  style="text-decoration:none"
                >
                  <v-btn depressed rounded block>
                    이전
                  </v-btn>
                </router-link>
              </v-col>
              <v-spacer></v-spacer>
            </v-row>
          </v-card>
        </v-col>
      </v-row>

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
import axios from "axios";
import router from "../../router/index.js";
import { mapState } from "vuex";

export default {
  name: "",
  components: {},
  created() {
    axios
      .get("http://localhost:5000/writer/upload", {
        withCredentials: true,
      })
      .then((res) => {
        this.items = res.data;
        //console.log(res);
      });
  },
  computed: {
    ...mapState(["userInfo"]),
  },
  data() {
    return {
      dialog: false,
      onlyNumber: "",
      episodeOrder: null,
      episodeName: null,
      episodeDescription: null,
      recentEpisodeOrder: "",
      items: [],
    };
  },
  mounted() {},
  methods: {
    selectedWorkId(e) {
      axios
        .get(`http://localhost:5000/writer/work/${e}/episodeOrder`, {
          withCredentials: true,
        })
        .then((res) => {
          this.recentEpisodeOrder = res.data.episodeOrder;
          //console.log(this.recentEpisodeOrder);
          // res.data.episodeOrder
        });
    },
    //created 시에 user id를 보내면 이 작가의
    //{작품id, 작품제목}
    add_Episode() {
      this.dialog = true;
      let form = new FormData();

      const thumbnail = document.getElementById("thumbnail");
      const episodeI = document.getElementById("episodeI");

      let writer_info = {
        workId: this.$store.state.workId,
        episodeName: this.episodeName,
        episodeDescription: this.episodeDescription,
        episodeOrder: this.recentEpisodeOrder + 1,
      };

      if (this.userInfo.userType == "author") {
        writer_info.workId = this.selectedWork;
      }

      // const writer_info = {
      //   workId: this.$store.state.workId,
      //   episodeOrder: "1",
      //   episodeName: this.episodeName,
      //   episodeDescription: this.episodeDescription,
      // };

      for (let file of episodeI.files) {
        console.log(file);
        form.append("episodeImages", file, file.name);
      }

      form.append("episodeThumbnail", thumbnail.files[0]);
      form.append("episodeInfo", JSON.stringify(writer_info));
      console.log(form);
      axios
        .post("http://localhost:5000/writer/upload", form, {
          withCredentials: true,
        })
        .then(() => {
          //console.log(respon);
          alert(
            "정상적으로 등록되었습니다. 추후 심사 후 결과를 안내해드릴 예정입니다."
          );
          router.push("/");
        })
        .then(() => {
          this.dialog = false;
        })
        .catch((err) => {
          console.error(err);
        });
      //console.log(writer_info);
    },
  },
  watch: {
    onlyNumber() {
      return (this.onlyNumber = this.onlyNumber.replace(/[^0-9]/g, ""));
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
