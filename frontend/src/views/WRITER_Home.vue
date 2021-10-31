<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="2">
        <writerprofile />
        <!-- 작가 프로필 -->
        <router-link to="/ono_writer">
          <v-col align="center">
            <v-btn>1:1 문의</v-btn>
          </v-col>
        </router-link>
      </v-col>

      <!-- 최상단 이미지 -->
      <v-row justify="center">
        <v-col cols="11">
          <v-img src="../img/상단배너타이틀이미지.png" height="200" />
        </v-col>

        <v-col cols="10">
          <webtoonround :webtoon_round_State="1" />
          <!-- 특정화수를 수정할 수 있는 컴포넌트 -->
        </v-col>
      </v-row>
    </v-row>
  </v-container>
</template>

<script>
import writerprofile from "../components/Writer-profile.vue";
import webtoonround from "../components/webtoon-round.vue";

export default {
  name: "WRITER_Home",
  components: {
    writerprofile,
    webtoonround,
  },
};
</script>

<style scoped></style>
