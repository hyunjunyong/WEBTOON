<template>
  <!--  
  작품 홈
  작품 소개, 에피소드, 작가프로필 컴포넌트를 사용함
  썸네일을 누르면 이동하는 화면
  path : /webtoon
  -->
  <v-container>
    <v-row justify="center">
      <v-col cols="12">
        <!-- 작품 설명 -->
        <!-- 특정 웹툰을 소개하는 컴포넌트 -->
        <WriterWebtoonIntro />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="8">
        <!-- 특정 웹툰의 에피소드를 리스트로 나타내는 컴포넌트 -->
        <!-- url : 썸네일 이미지, round : 에피소드 이름, date : 날짜 -->
        <!-- webtoon_round_State=0 에피소드 리스트 출력 -->
        <!-- <webtoonround :webtoon_round_State="0" :webtoons="webtoons" /> -->
        <EpisodeList />
      </v-col>
      <v-col cols="4">
        <v-row class="justify-end">
          <v-col align="center" cols="3">
            <v-img
              src="../img/webtoon/04. 물고기인간(출판형)/01_01.png"
              alt=""
              style="border-radius:10%"
              max-width="160px"
              max-height="160px"
            />
          </v-col>
          <v-col cols="8">
            <v-card elevation="0" class="mb-3">
              <v-card-title>작가 A</v-card-title>
              <v-card-text>작가 한줄 소개</v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col align="center"
            ><v-chip outlined color="primary">좋아요 : 34</v-chip></v-col
          >
        </v-row>
        <!-- 작가 프로필 -->
        <!-- <Writerprofile/> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import WriterWebtoonIntro from "../components/WriterWebtoon-intro.vue"; // 작품 설명
// import Writerprofile from "../components/Writer-profile.vue";

import EpisodeList from "../components/round/episodeList.vue";
//import webtoonround from "../components/webtoon-round.vue";

export default {
  name: "WEBTOON_Home",
  data() {
    return {
      webtoons: [
        {
          url: require("../img/webtoon/황녀악녀001화_JPG/사본 -황녀악녀 1화_005.jpg"),
          round: "5화",
          date: "2021-10-27",
        },
        {
          url: require("../img/webtoon/황녀악녀001화_JPG/사본 -황녀악녀 1화_004.jpg"),
          round: "4화",
          date: "2021-10-20",
        },
        {
          url: require("../img/webtoon/황녀악녀001화_JPG/사본 -황녀악녀 1화_003.jpg"),
          round: "3화",
          date: "2021-10-13",
        },
        {
          url: require("../img/webtoon/황녀악녀001화_JPG/사본 -황녀악녀 1화_002.jpg"),
          round: "2화",
          date: "2021-10-06",
        },
        {
          url: require("../img/webtoon/황녀악녀001화_JPG/사본 -황녀악녀 1화_001.jpg"),
          round: "1화",
          date: "2021-09-30",
        },
      ],
    };
  },
  components: {
    WriterWebtoonIntro,
    // Writerprofile,
    EpisodeList,
    //webtoonround,
  },
};
</script>
<style scoped></style>
