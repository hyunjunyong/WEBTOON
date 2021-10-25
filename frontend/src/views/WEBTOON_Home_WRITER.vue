<template>
<!-- 작가입장에서 보여지는 작가홈화면 -->
  <v-container>
    <v-row>
      <v-col cols="8">
        <WriterWebtoonIntro />
        <!-- 특정 웹툰을 소개하는 컴포넌트 -->
        <webtoonround :webtoon_round_State="1" />
        <!-- 특정화수를 수정할 수 있는 컴포넌트 -->
      </v-col>
      <v-col cols=4>
        <Writerprofile />
        <!-- 작가 프로필 컴포넌트-->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import WriterWebtoonIntro from "../components/WriterWebtoon-intro.vue";
import Writerprofile from "../components/Writer-profile.vue";
import webtoonround from "../components/webtoon-round.vue"


export default {
  name: "WEBTOON_Home_WRITER",
  data: () => ({
    //
  }),
  components: {
    webtoonround,
    WriterWebtoonIntro,
    Writerprofile,
  },
};
</script>
<style scoped>

</style>
