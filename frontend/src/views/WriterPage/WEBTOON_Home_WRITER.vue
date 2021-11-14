<template>
  <!-- 작가입장에서 보여지는 에피소드가 있는 작가홈화면 -->
  <v-container>
    <v-row justify="center">
      <!-- 특정 웹툰을 소개하는 컴포넌트 -->
      <WriterWebtoonIntro />
    </v-row>
    <v-row>
      <!-- 작가 프로필 컴포넌트-->
      <Writerprofile />
    </v-row>
    <v-row>
      <!-- 특정화수를 수정할 수 있는 컴포넌트 -->
      <webtoonround :webtoon_round_State="6" :webtoons="webtoons" />
    </v-row>
  </v-container>
</template>

<script>
import WriterWebtoonIntro from "../../components/WriterWebtoon-intro.vue";
import Writerprofile from "../../components/Writer-profile.vue";
import webtoonround from "../../components/webtoon-round.vue";

export default {
  name: "WEBTOON_Home_WRITER",
  data: () => ({
    webtoons: [
      {
        url: require("../../img/webtoon/황녀악녀001화_JPG/사본 -황녀악녀 1화_005.jpg"),
        round: "5화",
        date: "2021-10-27",
      },
      {
        url: require("../../img/webtoon/황녀악녀001화_JPG/사본 -황녀악녀 1화_004.jpg"),
        round: "4화",
        date: "2021-10-20",
      },
      {
        url: require("../../img/webtoon/황녀악녀001화_JPG/사본 -황녀악녀 1화_003.jpg"),
        round: "3화",
        date: "2021-10-13",
      },
      {
        url: require("../../img/webtoon/황녀악녀001화_JPG/사본 -황녀악녀 1화_002.jpg"),
        round: "2화",
        date: "2021-10-06",
      },
      {
        url: require("../../img/webtoon/황녀악녀001화_JPG/사본 -황녀악녀 1화_001.jpg"),
        round: "1화",
        date: "2021-09-30",
      },
    ],
  }),
  components: {
    webtoonround,
    WriterWebtoonIntro,
    Writerprofile,
  },
};
</script>
<style scoped></style>
