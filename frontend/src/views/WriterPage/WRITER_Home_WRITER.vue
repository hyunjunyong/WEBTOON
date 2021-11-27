<template>
  <!-- 작가 입장에서보는 작가홈 -->
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="8">
        <v-img
          src="../../img/webtoon/04. 물고기인간(출판형)/01_01.png"
          height="200"
          style="border-radius:10px"
        />
      </v-col>
    </v-row>
    <!-- 최상단 이미지 -->
    <v-row justify="center">
      <v-col cols="8">
        <!-- 작가 프로필 -->
        <v-row class="justify-end">
          <v-col align="center" cols="2">
            <v-img
              src="../../img/webtoon/04. 물고기인간(출판형)/01_01.png"
              alt=""
              style="border-radius:10px"
              max-width="160px"
              max-height="160px"
            />
          </v-col>
          <v-col cols="10">
            <v-card elevation="0" class="mb-3">
              <v-card-title>작가 A</v-card-title>
              <v-card-text>작가 한줄 소개</v-card-text>
            </v-card>

            <Modal :modalState="5" />
          </v-col>
        </v-row>
        <!-- <writerprofile /> -->
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="8">
        <!-- 특정화수를 수정할 수 있는 컴포넌트 -->
        <!-- <webtoonround :webtoon_round_State="1" :webtoons="webtoons" /> -->
        <WebtoonListWriterVersion />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import writerprofile from "../../components/Writer-profile.vue";
//import webtoonround from "../../components/webtoon-round.vue";
import WebtoonListWriterVersion from "../../components/round/webtoonListWriterVersion.vue";
import Modal from "../../components/modal.vue";
export default {
  name: "WRITER_Home",
  data() {
    return {
      webtoons: [],
    };
  },
  components: {
    // writerprofile,
    //webtoonround,
    WebtoonListWriterVersion,
    Modal,
  },
};
</script>

<style scoped></style>
