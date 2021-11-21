<template>
  <!-- 작가입장에서 보여지는 에피소드가 있는 작품홈화면 -->
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
    webtoons: [],
  }),
  created() {
    // getWebtoons(){
    //   axios.get().then().catch();
    // }
  },
  components: {
    webtoonround,
    WriterWebtoonIntro,
    Writerprofile,
  },
};
</script>
<style scoped></style>
