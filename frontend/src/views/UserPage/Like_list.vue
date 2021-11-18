<template>
  <!--
    일반 사용자가 찜한 작품과 작가를 모아둔 화면
  -->

  <v-container>
    <v-row justify="center">
      <v-col cols="10" class="mb-3">
        <v-card elevation="0">
          <v-card-title class="text-h5 font-weight-bold">
            찜한 목록
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>

    <!-- 찜한 작품 / 작가 리스트 -->
    <v-row no-gutters justify="center">
      <v-col cols="10">
        <v-card
          elevation="0"
          v-scroll.self="onScroll"
          class="overflow-y-auto"
          max-height="700"
          width="1200"
        >
          <!-- 정렬 -->
          <v-banner class="justify-center font-weight-light text-end" sticky>
            작품명 / 작가명
            <span class="font-weight-bold" v-text="scrollInvoked"></span>
          </v-banner>
          <!-- 찜한 작품 리스트 -->
          <v-row no-gutters justify="center">
            <Thumbnail :webtoon="i" v-for="i in webtoon" :key="i.id" />
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Thumbnail from "../../components/Thumbnail";

export default {
  name: "",
  components: {
    Thumbnail,
  },
    data() {
    return {
      webtoon: [
        {
          id: "0",
          title: "물고기인간",
          workThumbnail: require("../../img/webtoon/04. 물고기인간(출판형)/01_01_썸네일.png"),
        },
        {
          id: "1",
          title: "물고기인간",
          workThumbnail: require("../../img/webtoon/04. 물고기인간(출판형)/01_02_썸네일.png"),
        },
        {
          id: "2",
          title: "물고기인간",
          workThumbnail: require("../../img/webtoon/04. 물고기인간(출판형)/01_03_썸네일.png"),
        },
        {
          id: "3",
          title: "눈내리는소리",
          workThumbnail: require("../../img/webtoon/눈내리는소리1화(식자간격수정판)/03_썸네일.jpg"),
        },
        {
          id: "4",
          title: "물고기인간",
          workThumbnail: require("../../img/webtoon/04. 물고기인간(출판형)/01_04_썸네일.png"),
        },
      ],
    };
  },
};
</script>

<style scoped></style>
