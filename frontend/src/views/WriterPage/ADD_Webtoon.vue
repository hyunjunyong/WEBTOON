<template>
  <!-- 작품 수정 페이지 -->
  <v-container>
    <v-row justify="center">
      <v-col cols="8">
        <v-card class="text-center" elevation="0">
          작품 등록하기
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4" class="d-flex text-center">
        <v-card elevation="0" class="ma-auto">작품명<br />(20자 이내)</v-card>
      </v-col>
      <v-col cols="6">
        <v-text-field v-model="title" :counter="20" required> </v-text-field>
      </v-col>
    </v-row>

    <v-divider></v-divider>

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
    <!-- <v-select
          v-model="selected_tags"
          :items="tags"
          label="Tags"
          filled
          dense
          clearable
          chips
          multiple
        >
          <template v-slot:selection="{ item }">
            <v-chip text-color="black" close @click:close="remove(item)">{{
              item
            }}</v-chip>
          </template>
        </v-select> -->

    <v-divider></v-divider>

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

    <v-divider></v-divider>

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
        <v-img v-if="url" :src="url" max-height="260px" max-width="260px" />
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col class="text-center" cols="2">
        <v-btn block>취소</v-btn>
      </v-col>

      <v-col class="text-center" cols="2">
        <v-btn block text color="primary" @click="register_Webtoon"
          >등록하기</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Genre from "../../components/genre.vue";
import axios from "axios";

export default {
  name: "",
  data() {
    return {
      url: null,
      workDescription: "작품을 소개합니다.",
      title: "작품 이름",
      genreId: null,
    };
  },
  props: [],
  components: {
    Genre,
  },
  mounted() {
    axios
      .get("http://localhost:5000/genre", { withCredentials: true })
      .then((response) => {
        // this.genre = response.data;
        this.$store.state.genre = response.data;
      });
  },
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
        userId: this.$store.state.userInfo.id,
        workDescription: this.workDescription,
        title: this.title,
      };
      console.log("사용자id : " + this.$store.state.userInfo.id);
      console.log(writer_info);

      form.append("workThumbnail", workThumbnail.files[0]);
      form.append("workInfo", JSON.stringify(writer_info));

      axios
        .post("http://localhost:5000/writer/work", form, {
          withCredentials: true,
        })
        .then((respon) => {
          console.log(respon);
        })
        .catch((err) => {
          console.error(err);
          alert("에러!");
        });
    },
  },
};
</script>
<style scoped></style>
