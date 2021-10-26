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
        <!-- 특정 웹툰을 소개하는 컴포넌트 -->
        <webtoonround :webtoon_round_State="0" />
        <!-- 특정 웹툰의 화수를 나타내는 컴포넌트 -->
      </v-col>

      <v-col cols="4">
        <router-link to="/writer_home">
          <Writerprofile />
        </router-link>
        <!-- 작가 프로필 컴포넌트-->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import WriterWebtoonIntro from "../components/WriterWebtoon-intro.vue"; // 작품 설명
import Writerprofile from "../components/Writer-profile.vue";
import webtoonround from "../components/webtoon-round.vue"

export default {
  name: "WEBTOON_Home",
  data: () => ({
    //
  }),
  components: {
    WriterWebtoonIntro,
    Writerprofile,
    webtoonround,
  },
};
</script>
<style scoped></style>
