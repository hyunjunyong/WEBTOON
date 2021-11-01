<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="10">
        <v-img
          src="../../img/webtoon/04. 물고기인간(출판형)/01_01.png"
          height="200"
        />
      </v-col>
    </v-row>
    <v-row justify="center">
      <!-- 작가 프로필 -->
      <v-col cols="2">
        <writerprofile />

        <router-link to="/작가정보문의작성">
          <v-col align="center">
            <v-btn>작가에게 제안하기</v-btn>
          </v-col></router-link
        >
      </v-col>
      <!-- 특정화수를 수정할 수 있는 컴포넌트 -->
      <v-col cols="8">
        <webtoonround :webtoon_round_State="1" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import writerprofile from "../../components/Writer-profile.vue";
import webtoonround from "../../components/webtoon-round.vue";

export default {
  name: "WRITER_Home",
  components: {
    writerprofile,
    webtoonround,
  },
};
</script>

<style scoped></style>
