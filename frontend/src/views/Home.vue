<template>
  <!-- 
  맨 처음 화면으로 인기, 신작, 추천, 내가 본 웹툰을 보여준다.
  썸네일을 누르면 해당 작품페이지로 바로 이동한다.
 -->
  <v-card elevation="0">
    <v-card elevation="0">
      <v-carousel hide-delimiters interval="6000" height="400" cycle>
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>
    </v-card>

    <v-container>
      <v-row justify="center">
        <v-col cols="10">
          <v-card elevation="0">
            <v-card-title class="text-h5 font-weight-bold pb-0">
              초절정 인기 웹툰
            </v-card-title>
          </v-card>
        </v-col>

        <v-col cols="11">
          <!-- 
          webtoon 배열의 값을 보냄
          한줄에 4개의 썸네일을 만듬
          
          h는 높이

         -->
          <TestThumbnail
            :webtoonState="3"
            :webtoons="worksHot"
            :h="300"
            :limited="4"
          />

          <!-- <Thumbnail :webtoon="n" /> -->
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="10">
          <v-card elevation="0">
            <v-card-title class="text-h5 font-weight-bold py-0">
              추천 웹툰
            </v-card-title>
          </v-card>
        </v-col>

        <v-col cols="11">
          <!-- 
          webtoon 배열의 값을 보냄
          한줄에 3개의 썸네일을 만듬
          h는 높이
         -->
          <TestThumbnail
            :webtoonState="4"
            :webtoons="worksHighView"
            :h="220"
            :limited="4"
          />
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="10">
          <v-card elevation="0">
            <v-card-title class="text-h5 font-weight-bold py-0">
              신작 웹툰
            </v-card-title>
          </v-card>
        </v-col>

        <v-col cols="10">
          <!-- 
          webtoon 배열의 값을 보냄
          한줄에 2개의 썸네일을 만듬
          h는 높이
         -->
          <Thumbnail :webtoonState="4" :webtoons="recentWork" :h="200" />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import TestThumbnail from '../components/TestThumbnail';
import Thumbnail from '../components/Thumbnail';
// import { mapGetters } from "vuex";
import axios from 'axios';
export default {
  name: 'Home',
  components: {
    TestThumbnail,
    Thumbnail,
  },
  data() {
    return {
      items: [
        {
          src:
            'http://images.battlecomics.co.kr/web_home_banner/526/banner-bannerid_526-w_1900-h_420-t_20211112180952.jpg',
        },
        {
          src: require('../img/santa.png'),
        },
        {
          src: require('../img/봄툰출첵.png'),
        },
        {
          src: require('../img/신규가입.png'),
        },
      ],
      recentWork: null,
      worksHighView: null,
      worksHot: null,
    };
  },
  computed: {
    // ...mapGetters({ webtoonThumbnails: 'getWebtoonThumbnails' }),
  },
  mounted() {
    axios
      .get('http://localhost:5000/works/home', {
        withCredentials: true,
      })
      .then((res) => {
        this.recentWork = res.data.recentWork;
        this.worksHighView = res.data.worksHighView;
        this.worksHot = res.data.worksHot;
        // console.log(res);
      });
  },
};
</script>
