<template>
  <!-- 
  맨 처음 화면으로 인기, 신작, 추천, 내가 본 웹툰을 보여준다.
  썸네일을 누르면 해당 작품페이지로 바로 이동한다.
 -->
  <v-container>
    <v-carousel hide-delimiters interval="6000" cycle="true" height="330">
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>

    <v-row justify="center">
      <v-col cols="8" class="mt-2">
        <v-card elevation="0">
          <v-card-title class="text-h5 font-weight-bold mb-1">
            초절정 인기 웹툰
          </v-card-title>
          <v-card-subtitle class="text-h6 font-weight-bold">
            하드코딩 3대장
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>

    <v-row no-gutters justify="center">
      <v-col cols="8">
        <!-- 
          webtoon 배열의 값을 보냄
          한줄에 4개의 썸네일을 만듬
          h는 높이
         -->
        <TestThumbnail :webtoonState="4" :webtoon="webtoon" :h="380" />

        <!-- <Thumbnail :webtoon="n" /> -->
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="8" class="mb-3">
        <v-card elevation="0">
          <v-card-title class="text-h5 font-weight-bold">
            신작 웹툰
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>

    <v-row no-gutters justify="center">
      <v-col cols="8">
        <!-- 
          webtoon 배열의 값을 보냄
          한줄에 3개의 썸네일을 만듬
          h는 높이
         -->
        <TestThumbnail :webtoonState="3" :webtoon="webtoon" :h="330" />
      </v-col>
    </v-row>

    <v-row no-gutters justify="center">
      <v-col cols="8" class="mb-3">
        <v-card elevation="0">
          <v-card-title class="text-h5 font-weight-bold">
            추천 웹툰
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>

    <v-row no-gutters justify="center">
      <v-col cols="8">
        <!-- 
          webtoon 배열의 값을 보냄
          한줄에 2개의 썸네일을 만듬
          h는 높이
         -->
        <TestThumbnail :webtoonState="4" :webtoon="webtoon" :h="380"
      /></v-col>
    </v-row>
  </v-container>
</template>

<script>
import TestThumbnail from "../components/TestThumbnail";

export default {
  name: "Home",
  components: {
    TestThumbnail,
  },
  data() {
    return {
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
      webtoon: [
        {
          id: "0",
          title: "물고기인간",
          workThumbnail: require("../img/webtoon/04. 물고기인간(출판형)/01_01_썸네일.png"),
          writer: "1번 작가",
          genre: "액션",
        },
        {
          id: "1",
          title: "물고기인간",
          workThumbnail: require("../img/webtoon/04. 물고기인간(출판형)/01_02_썸네일.png"),
          writer: "2번 작가",
          genre: "로맨스",
        },
        {
          id: "2",
          title: "물고기인간",
          workThumbnail: require("../img/webtoon/04. 물고기인간(출판형)/01_03_썸네일.png"),
          writer: "3번 작가",
          genre: "판타지",
        },
        {
          id: "3",
          title: "눈내리는소리",
          workThumbnail: require("../img/webtoon/눈내리는소리1화(식자간격수정판)/03_썸네일.jpg"),
          writer: "4번 작가",
          genre: "일상",
        },
        {
          id: "4",
          title: "눈내리는소리",
          workThumbnail: require("../img/webtoon/눈내리는소리1화(식자간격수정판)/03_썸네일.jpg"),
          writer: "4번 작가",
          genre: "일상",
        },
        {
          id: "5",
          title: "눈내리는소리",
          workThumbnail: require("../img/webtoon/눈내리는소리1화(식자간격수정판)/03_썸네일.jpg"),
          writer: "4번 작가",
          genre: "일상",
        },
      ],
    };
  },
};
</script>
