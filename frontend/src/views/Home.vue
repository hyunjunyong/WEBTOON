<template>
  <!-- 
  맨 처음 화면으로 인기, 신작, 추천, 내가 본 웹툰을 보여준다.
  썸네일을 누르면 해당 작품페이지로 바로 이동한다.
 -->
  <v-container>
    <v-row justify="center">
      <v-col cols="12" class="mb-3">
        <v-card elevation="0">
          <v-card-title class="text-h5 font-weight-bold">
            인기 웹툰
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>

    <v-row no-gutters justify="center">
      <Thumbnail :webtoon="n" v-for="n in webtoon" :key="n.id" />
    </v-row>

    <v-row justify="center">
      <v-col cols="6" class="mb-3">
        <v-card elevation="0">
          <v-card-title class="text-h5 font-weight-bold">
            신작 웹툰
          </v-card-title>
        </v-card>
      </v-col>

      <v-col cols="6" class="mb-3">
        <v-card elevation="0">
          <v-card-title class="text-h5 font-weight-bold">
            추천 웹툰
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>

    <v-row no-gutters justify="center">
      <Thumbnail :webtoon="n" v-for="n in webtoon" :key="n.id" />
    </v-row>

    <v-row justify="center">
      <v-col cols="12" class="mb-3">
        <v-card elevation="0">
          <v-card-title class="text-h5 font-weight-bold">
            내가 본 웹툰
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>

    <v-row no-gutters v-for="m in 3" :key="m" justify="center">
      <Thumbnail :webtoon="n" v-for="n in webtoon" :key="n.id" />
    </v-row>
  </v-container>
</template>

<script>
import Thumbnail from "../components/Thumbnail";

export default {
  name: "Home",
  components: {
    Thumbnail,
  },
  data() {
    return {
      webtoon: [
        {
          id: "0",
          title: "물고기인간",
          workThumbnail: require("../img/webtoon/04. 물고기인간(출판형)/01_01_썸네일.png"),
        },
        {
          id: "1",
          title: "물고기인간",
          workThumbnail: require("../img/webtoon/04. 물고기인간(출판형)/01_02_썸네일.png"),
        },
        {
          id: "2",
          title: "물고기인간",
          workThumbnail: require("../img/webtoon/04. 물고기인간(출판형)/01_03_썸네일.png"),
        },
        {
          id: "3",
          title: "눈내리는소리",
          workThumbnail: require("../img/webtoon/눈내리는소리1화(식자간격수정판)/03_썸네일.jpg"),
        },
        {
          id: "4",
          title: "물고기인간",
          workThumbnail: require("../img/webtoon/04. 물고기인간(출판형)/01_04_썸네일.png"),
        },
      ],
    };
  },
};
</script>
