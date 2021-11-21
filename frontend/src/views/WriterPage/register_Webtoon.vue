<template>
  <!-- 작품 등록 페이지 -->
  <div id="background">
    <v-container>
      <v-row justify="center" class="my-10">
        <v-col cols="auto">
          <v-card elevation="0" width="600">
            <v-toolbar flat>
              <v-spacer></v-spacer>
              <v-toolbar-title class="font-weight-bold pt-3"
                >작품 등록</v-toolbar-title
              >
              <v-spacer></v-spacer>
            </v-toolbar>

            <!-- 작품명 작성  -->
            <v-row>
              <v-col cols="4" class="d-flex text-center">
                <v-card elevation="0" class="ma-auto"
                  >작품명<br />(20자 이내)</v-card
                >
              </v-col>
              <v-col cols="6">
                <v-text-field v-model="title" :counter="20" required>
                </v-text-field>
              </v-col>
            </v-row>

            <!-- 장르 선택 -->
            <v-row>
              <v-col cols="4" class="d-flex text-center">
                <v-card elevation="0" class="ma-auto">장르 선택</v-card>
              </v-col>
              <v-col cols="6">
                <v-row justify="center" class="pa-1">
                  <Genre
                    v-model="n.id"
                    :item="n"
                    v-for="n in $store.state.genre"
                    :key="n.id"
                    @change="genreGetId(n)"
                  />
                </v-row>
              </v-col>
            </v-row>

            <!-- 작품 소개 작성 -->
            <v-row>
              <v-col cols="4" class="d-flex text-center">
                <v-card elevation="0" class="ma-auto"
                  >작품 소개글<br />(100자 이상)</v-card
                >
              </v-col>

              <v-col cols="6">
                <v-textarea
                  v-model="workDescription"
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

            <!-- 작품 썸내일 올리기 -->
            <v-row class="mb-5">
              <v-col cols="4" class="d-flex text-center">
                <v-card elevation="0" class="ma-auto"
                  >작품 썸내일<br />(260px * 260px)</v-card
                >
              </v-col>

              <v-col cols="6">
                <v-file-input
                  id="Thumbnail"
                  show-size
                  counter
                  truncate-length="50"
                  @change="onFileChange"
                ></v-file-input>
                <v-img
                  v-if="url"
                  :src="url"
                  max-height="260px"
                  max-width="260px"
                />
              </v-col>
            </v-row>

            <!-- 다음 / 이전 버튼 -->
            <v-row>
              <v-spacer></v-spacer>
              <v-col>
                <v-btn
                  depressed
                  rounded
                  block
                  color="primary"
                  @click.once="register_Webtoon()"
                >
                  다음</v-btn
                >
              </v-col>
              <v-spacer></v-spacer>
              <v-col>
                <router-link to="/Apply/writer" style="text-decoration:none">
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
    </v-container>
  </div>
</template>

<script>
import Genre from "../../components/genre";
import axios from "axios";
import router from "../../router/index.js";

export default {
  name: "",
  components: {
    Genre,
  },
  props: [],
  data() {
    return {
      url: null,
      workDescription: "작품을 소개합니다.",
      title: "작품 이름",
      genreId: null,
    };
  },
  setup() {},
  create() {},
  mounted() {
    axios.get("http://localhost:5000/genre").then((response) => {
      // this.genre = response.data;
      this.$store.state.genre = response.data;
    });
  },
  unmounted() {},
  methods: {
    onFileChange(e) {
      const file = e;
      this.url = URL.createObjectURL(file);
    },
    genreGetId(n) {
      console.log(n.id);
      this.genreId = n.id;
    },
    register_Webtoon() {
      let form = new FormData();
      var workThumbnail = document.getElementById("Thumbnail");
      const writer_info = {
        genreId: this.genreId,
        userId: this.$store.state.userId,
        workDescription: this.workDescription,
        title: this.title,
      };
      console.log(this.$store.state.id);
      console.log(writer_info);

      form.append("workThumbnail", workThumbnail.files[0]);
      form.append("workInfo", JSON.stringify(writer_info));

      axios
        .post("http://localhost:5000/user/upload-work", form, {
          withCredentials: true,
        })
        .then((respon) => {
          console.log(respon);
          router.push("/episode/add");
          this.$store.state.workId = respon.data.work.id;
        })
        .catch((err) => {
          console.error(err);
          alert("에러!");
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
