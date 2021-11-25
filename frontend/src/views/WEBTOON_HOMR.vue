<template>
  <!--  
  작품 홈
  작품 소개, 에피소드, 작가프로필 컴포넌트를 사용함
  썸네일을 누르면 이동하는 화면
  path : /webtoon
  -->
  <v-container>
    <v-row justify="center">
      <v-col cols="12">
        <!-- 작품 설명 -->
        <!-- 특정 웹툰을 소개하는 컴포넌트 -->
        <WriterWebtoonIntro :webtoonId="$route.params.id" />
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="6">
        <!-- 특정 웹툰의 에피소드를 리스트로 나타내는 컴포넌트 -->
        <!-- url : 썸네일 이미지, round : 에피소드 이름, date : 날짜 -->
        <!-- webtoon_round_State=0 에피소드 리스트 출력 -->
        <!-- <webtoonround :webtoon_round_State="0" :webtoons="webtoons" /> -->
        <EpisodeList />
      </v-col>
      <v-col cols="2">
        <v-row class="justify-end">
          <v-col align="center">
            <v-img
              :src="webtoon.user.authorAvatar"
              alt=""
              style="border-radius:10%"
              max-width="200px"
              max-height="200px"
            />
          </v-col>
        </v-row>

        <v-row>
          <v-col class="pa-0">
            <v-card elevation="0" class="mb-3">
              <v-card-title>{{ webtoon.user.authorName }}</v-card-title>
              <v-card-text>{{ webtoon.user.authorDescription }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <!-- 작가 프로필 -->
        <!-- <Writerprofile/> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import WriterWebtoonIntro from "../components/WriterWebtoon-intro.vue"; // 작품 설명
// import Writerprofile from "../components/Writer-profile.vue";
import axios from "axios";
import EpisodeList from "../components/round/episodeList.vue";
//import webtoonround from "../components/webtoon-round.vue";

export default {
  name: "WEBTOON_Home",
  data() {
    return {
      webtoon: null,
    };
  },
  mounted() {
    axios
      .get(`http://localhost:5000/${this.$route.params.id}/episode/`, {
        withCredentials: true,
      })
      .then((res) => {
        this.webtoon = res.data;
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    getWriterInfo() {
      //api로 가져와야하는 값
      //작가의 썸네일
      //작가의 이름
      //작가의 한줄 소개
    },
  },
  components: {
    WriterWebtoonIntro,
    // Writerprofile,
    EpisodeList,
    //webtoonround,
  },
};
</script>
<style scoped></style>
