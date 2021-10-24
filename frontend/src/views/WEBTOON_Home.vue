<template>
  <!--  
  작품 홈
  작품 소개, 에피소드, 작가프로필 컴포넌트를 사용함
  
  썸네일을 누르면 이동하는 화면
-->
  <v-container>
    <v-row>
      <v-col cols="8">
        <!-- 작품 설명 -->
        <WriterWebtoonIntro />

        <!-- 에피소드 리스트  -->
        <Webtoonsortvar />
      </v-col>

      <v-col cols="4">
        <Writerprofile />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import WriterWebtoonIntro from "../components/WriterWebtoon-intro.vue"; // 작품 설명
import Webtoonsortvar from "../components/Webtoon-sortvar.vue"; //에피소드 리스트
import Writerprofile from "../components/Writer-profile.vue";

export default {
  name: "WEBTOON_Home",
  data: () => ({
    //
  }),
  components: {
    Webtoonsortvar,
    WriterWebtoonIntro,
    Writerprofile,
  },
};
</script>
<style scoped></style>
