<template>
  <!-- 
  맨 처음 화면으로 인기, 신작, 추천, 내가 본 웹툰을 보여준다.
  썸네일을 누르면 해당 작품페이지로 바로 이동한다.
 -->
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            인기 웹툰
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col v-for="n in webtoon" :key="n" cols="3">
        <Thumbnail :webtoon="n" />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="6">
        <v-card>
          <v-card-title>
            신작 웹툰
          </v-card-title>
        </v-card>
      </v-col>

      <v-col cols="6">
        <v-card>
          <v-card-title>
            추천 웹툰
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col v-for="n in webtoon" :key="n" cols="3">
        <Thumbnail :webtoon="n" />
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card>
          <v-card-title>
            내가 본 웹툰
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>

    <v-row no-gutters v-for="m in 3" :key="m">
      <v-col v-for="n in webtoon" :key="n" cols="3">
        <Thumbnail :webtoon="n" />
      </v-col>
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
          url: require("../img/webtoon/04. 물고기인간(출판형)/01_01.png"),
        },
        {
          id: "1",
          title: "물고기인간",
          url: require("../img/webtoon/04. 물고기인간(출판형)/01_02.png"),
        },
        {
          id: "2",
          title: "물고기인간",
          url: require("../img/webtoon/04. 물고기인간(출판형)/01_03.png"),
        },
        {
          id: "3",
          title: "물고기인간",
          url: require("../img/webtoon/04. 물고기인간(출판형)/01_04.png"),
        },
      ],
    };
  },
};
</script>
