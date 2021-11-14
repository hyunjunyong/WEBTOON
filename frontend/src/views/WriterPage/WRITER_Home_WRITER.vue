<template>
  <!-- 작가 입장에서보는 작가홈 -->
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="10">
        <v-img
          src="../../img/webtoon/04. 물고기인간(출판형)/01_01.png"
          height="200"
        />
      </v-col>
    </v-row>
    <!-- 최상단 이미지 -->
    <v-row justify="center">
      <v-col cols="10">
        <!-- 작가 프로필 -->
        <writerprofile />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="10">
        <!-- 특정화수를 수정할 수 있는 컴포넌트 -->
        <webtoonround :webtoon_round_State="1" :webtoons="webtoons" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import writerprofile from "../../components/Writer-profile.vue";
import webtoonround from "../../components/webtoon-round.vue";

export default {
  name: "WRITER_Home",
  data() {
    return {
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
    };
  },
  components: {
    writerprofile,
    webtoonround,
  },
};
</script>

<style scoped></style>
