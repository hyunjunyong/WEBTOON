<template>
  <!-- 작품 등록 페이지 -->
  <div id="background">

  <v-container>
      <v-row justify="center" class="my-10">
        <v-col cols="8">
          <v-card elevation="0" >
          <v-toolbar flat>
            <v-spacer></v-spacer>
            <v-toolbar-title class="text-h5 font-weight-bold pt-3">작품 등록</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>

      <!-- 작품명 작성  -->
    <v-row>
      <v-col cols="4" class="d-flex text-center text-h6">
        <v-card elevation="0" class="ma-auto">작품명<br />(20자 이내)</v-card>
      </v-col>
      <v-col cols="6">
        <v-text-field
          v-model="title"
          :counter="20"
          required
        >
        </v-text-field>
      </v-col>
    </v-row>

     <!-- 장르 선택 -->
    <v-row>
      <v-col cols="4" class="d-flex text-center text-h6">
        <v-card elevation="0" class="ma-auto">장르 선택</v-card>
      </v-col>
      <v-col cols="6">
        <v-row justify="center" class="pa-1"> 
        <Genre :item="n" v-for="n in genre" :key="n.id" />
        </v-row>
      </v-col>
    </v-row>

     <!-- 작품 소개 작성 -->
    <v-row>
      <v-col cols="4" class="d-flex text-center text-h6">
        <v-card elevation="0" class="ma-auto">작품 소개글<br />(100자 이상)</v-card>
      </v-col>

      <v-col cols="5">
        <v-textarea
          v-model="workDescription"
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

   <!-- 작품 썸내일 올리기 --> 
    <v-row class="mb-5">
      <v-col cols="4" class="d-flex text-center text-h6">
        <v-card elevation="0" class="ma-auto">작품 썸내일<br />(260px * 260px)</v-card>
      </v-col>

      <v-col cols="5">
          <v-file-input
          id="photo"
          show-size
          counter
          truncate-length="50"
        ></v-file-input>
        <img src="../../img/nft.png" alt="" width="260px" height="260px" />
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
            @click="register_Webtoon()">
            다음</v-btn>
      </v-col>
      <v-spacer></v-spacer>
      <v-col>
        <router-link to="/Apply/writer" style="text-decoration:none">
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
  data() {
    return {
      Webtoon_Info: [{ userId: "2", workDescription: "asdf", title: "asdf" }],
      genre: [
        { index: "1", name: "일  상" },
        { index: "2", name: "개  그" },
        { index: "3", name: "액  션" },
        { index: "4", name: "판타지" },
        { index: "5", name: "드라마" },
        { index: "6", name: "로맨스" },
        { index: "7", name: "공포/스릴러" },
      ],
    };
  },
  setup() {},
  create() {},
  mounted() {},
  unmounted() {},
  methods: {
    register_Webtoon() {
      let form = new FormData();
      var workThumbnail = document.getElementById("Thumbnail");
      console.log(workThumbnail);
      const writer_info = {
        userId: this.$store.state.register_webtoon_userId,
        workDescription: this.workDescription,
        title: this.title,
      };
      form.append("workThumbnail", workThumbnail.files[0]);
      form.append("workInfo", JSON.stringify(writer_info));
      axios
        .post("http://localhost:5000/user/upload-work", form, {
          withCredentials: true,
        })
        .then((respon) => {
          console.log(respon);
          router.push("/episode/add");
        })
        .catch((err) => {
          console.err(err);
          alert("에러!");
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