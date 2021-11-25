<template>
  <!-- 작가입장에서 보여지는 에피소드가 있는 작품홈화면 -->
  <v-container>
    <v-row justify="center">
      <v-col cols="8">
        <!-- 특정 웹툰을 소개하는 컴포넌트 -->
        <WriterWebtoonIntro />
      </v-col>
    </v-row>

    <!-- 에피소드 수정란에 작가프로필은 필요 없음 -->
    <!-- <v-row>
      <v-col cols="8">
        작가 프로필 컴포넌트
        <Writerprofile />
      </v-col>
    </v-row> -->

    <v-row justify="center">
      <v-col cols="8">
        <!-- 특정화수를 수정할 수 있는 컴포넌트 -->
        <EpisodeListWriterVersion />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import WriterWebtoonIntro from "../../components/WriterWebtoon-intro.vue";
// import Writerprofile from "../../components/Writer-profile.vue";
import EpisodeListWriterVersion from "../../components/round/episodeListWriterVersion.vue";

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
    WriterWebtoonIntro,
    // Writerprofile,
    EpisodeListWriterVersion,
  },
};
</script>
<style scoped></style>
