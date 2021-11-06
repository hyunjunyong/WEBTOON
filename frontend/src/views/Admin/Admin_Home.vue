<template>
  <!-- 
  관리자 로그인 시 메인화면
 -->
  <v-container>
    <v-row justify="center">
      <v-col cols="10">
        <router-link to="/apply_webtoon" class="ma-2">
          <v-card>
            <v-card-title>
              작품 승인 신규 요청
            </v-card-title>
          </v-card>
        </router-link>
      </v-col>
    </v-row>

    <v-row no-gutters justify="center">
      <v-col v-for="n in webtoon" :key="n" cols="2">
        <Thumbnail :webtoon="n" />
      </v-col>
    </v-row>

    <v-row  justify="center">
      <v-col cols="10">
        <v-card>
          <v-card-title>
            공지
          </v-card-title>
        </v-card>
        <router-link to="/Notice_list" class="ma-2">
          <oneonone_question />
        </router-link>
      </v-col>
    </v-row>

    <v-row  justify="center">
      <v-col cols="10">
        <v-card>
          <v-card-title>
            작가/회사 승인 신규 요청
          </v-card-title>
        </v-card>
        <oneonone_question />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Thumbnail from "../../components/Thumbnail";
import oneonone_question from "../../components/oneonone-question.vue";

export default {
  name: "Home",
  components: {
    Thumbnail,
    oneonone_question,
  },
  data() {
    return {
      webtoon: [
        {
          id: "0",
          title: "물고기인간",
          url: require("../../img/webtoon/04. 물고기인간(출판형)/01_01_썸네일.png"),
        },
        {
          id: "1",
          title: "물고기인간",
          url: require("../../img/webtoon/04. 물고기인간(출판형)/01_02_썸네일.png"),
        },
        {
          id: "2",
          title: "물고기인간",
          url: require("../../img/webtoon/04. 물고기인간(출판형)/01_03_썸네일.png"),
        },
        {
          id: "3",
          title: "눈내리는소리",
          url: require("../../img/webtoon/눈내리는소리1화(식자간격수정판)/03_썸네일.jpg"),
        },
        {
          id: "4",
          title: "물고기인간",
          url: require("../../img/webtoon/04. 물고기인간(출판형)/01_04_썸네일.png"),
        },
      ],
    };
  },
};
</script>
