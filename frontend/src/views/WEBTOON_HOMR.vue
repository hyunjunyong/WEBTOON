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
        <WriterWebtoonIntro />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="8">
        <!-- 특정 웹툰의 에피소드를 리스트로 나타내는 컴포넌트 -->
        <!-- url : 썸네일 이미지, round : 에피소드 이름, date : 날짜 -->
        <!-- webtoon_round_State=0 에피소드 리스트 출력 -->
        <!-- <webtoonround :webtoon_round_State="0" :webtoons="webtoons" /> -->
        <EpisodeList />
      </v-col>
      <v-col cols="4">
        <v-row class="justify-end">
          <v-col align="center" cols="3">
            <v-img
              src="../img/webtoon/04. 물고기인간(출판형)/01_01.png"
              alt=""
              style="border-radius:10%"
              max-width="160px"
              max-height="160px"
            />
          </v-col>
          <v-col cols="8">
            <v-card elevation="0" class="mb-3">
              <v-card-title>작가 A</v-card-title>
              <v-card-text>작가 한줄 소개</v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-btn @click="test"> good </v-btn>
          <v-col align="center"
            ><v-chip outlined color="primary" @click="like"
              >좋아요 : {{ likes }}</v-chip
            ></v-col
          >
        </v-row>
        <!-- 작가 프로필 -->
        <!-- <Writerprofile/> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import WriterWebtoonIntro from "../components/WriterWebtoon-intro.vue"; // 작품 설명
// import Writerprofile from "../components/Writer-profile.vue";

import EpisodeList from "../components/round/episodeList.vue";
//import webtoonround from "../components/webtoon-round.vue";

export default {
  name: "WEBTOON_Home",
  data() {
    return {
      webtoons: [],
      likes: 0,
      likeStatus: false,
    };
  },
  methods: {
    like() {
      axios
        .post(
          "http://localhost:5000/user/like",
          {
            workId: 1,
          },
          { withCredentials: true }
        )
        .then((res) => {
          // this.genre = response.data;
          console.log("눌렀을 떄");
          console.log(res);
          //likes;
        });
    },
    test() {
      axios
        .get(`http://localhost:5000/like/${this.$route.params.id}`, {
          withCredentials: true,
        })
        .then((res) => {
          // this.genre = response.data;
          //console.log("좋아요 수는 : ", res.data.likedCounts);
          console.log(res);
          this.likes = res.data.likeCounts;
        });
    },
  },
  mounted() {
    //http://localhost:5000/like/:workId
    axios
      .get(`http://localhost:5000/like/${this.$route.params.id}`, {
        withCredentials: true,
      })
      .then((res) => {
        // this.genre = response.data;
        //console.log("좋아요 수는 : ", res.data.likedCounts);
        console.log(res);
        this.likes = res.data.likeCounts;
      });
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
