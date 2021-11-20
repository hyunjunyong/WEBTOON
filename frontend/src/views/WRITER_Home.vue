<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="auto" class="black">
        <v-img
          src="../img/webtoon/04. 물고기인간(출판형)/01_01_writer_썸네일.png"
          height="200"
        />
      </v-col>
    </v-row>
    <!-- 최상단 이미지 -->
    <v-row justify="center">
      <v-col cols="12">
        <!-- 작가 프로필 -->
        <Writerprofile />

        <!-- 회사사용자만 볼 수 있음 -->
      </v-col> </v-row
    ><v-row>
      <v-col cols="12">
        <!-- 작품으로 이동하는 컴포넌트 -->
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
  data() {
    return {};
  },
  components: {
    Writerprofile,
    Webtoonround,
  },
};
</script>

<style scoped>
.profile_Img {
  position: absolute;
  top: 10em;
  left: 7em;
}
</style>
