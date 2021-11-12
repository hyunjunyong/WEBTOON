<template>
<!-- 
  url : /writer
 -->
  <v-container>
    <v-row justify="center">
      <v-col cols="auto" class="black">
        <v-img
          src="../img/webtoon/04. 물고기인간(출판형)/01_01_writer_썸네일.png"
          height="200"
          contain
        />
      </v-col>
    </v-row>
    <!-- 최상단 이미지 -->
    <v-row justify="center">
      <v-col cols="3">
        <!-- 작가 프로필 -->
        <Writerprofile />

        <!-- 회사사용자만 볼 수 있음 -->
        <v-row>
          <router-link to="/propose">
            <v-col align="center">
              <v-btn>작가에게 제안하기</v-btn>
            </v-col>
          </router-link>

          <router-link to="/Boardlist">
            <v-col align="center">
              <v-btn>1:1 문의</v-btn>
            </v-col>
          </router-link>
        </v-row>
      </v-col>

      <v-col cols="9">
        <!--
          작가의 작품 리스트 출력
          webtoon_round_State=5 작품 리스트 출력
        -->

        <Webtoonround :webtoon_round_State="5" :webtoons="webtoons" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Writerprofile from "../components/Writer-profile.vue";
import Webtoonround from "../components/webtoon-round.vue";

export default {
  name: "WRITER_Home",
  created() {
    this.checkSession();
  },
  data() {
    return {
      webtoons: [
        {
          url: require("../img/webtoon/황녀악녀001화_JPG/사본 -황녀악녀 1화_005.jpg"),
          round: "반지의 제왕",
          date: "2021-10-27",
        },
        {
          url: require("../img/webtoon/황녀악녀001화_JPG/사본 -황녀악녀 1화_004.jpg"),
          round: "슬램덩크",
          date: "2021-10-20",
        },
        {
          url: require("../img/webtoon/황녀악녀001화_JPG/사본 -황녀악녀 1화_003.jpg"),
          round: "호빗",
          date: "2021-10-13",
        },
        {
          url: require("../img/webtoon/황녀악녀001화_JPG/사본 -황녀악녀 1화_002.jpg"),
          round: "왕좌의 게임",
          date: "2021-10-06",
        },
        {
          url: require("../img/webtoon/황녀악녀001화_JPG/사본 -황녀악녀 1화_001.jpg"),
          round: "오징어게임",
          date: "2021-09-30",
        },
      ],
    };
  },
  components: {
    Writerprofile,
    Webtoonround,
  },
};
</script>

<style scoped></style>
