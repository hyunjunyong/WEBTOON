<template>
  <!-- 
  관리자 로그인 시 메인화면
 -->
  <v-container>
    <v-row justify="center">
      <v-col cols="10">
        <router-link
          style="text-decoration: none; color: inherit;"
          to="/apply/webtoon"
          class="ma-2"
        >
          <v-card>
            <v-card-title>
              작품 승인 신규 요청
            </v-card-title>
          </v-card>
        </router-link>
      </v-col>
    </v-row>

    <v-row no-gutters justify="center">
      
        <Thumbnail :webtoon="n" v-for="n in webtoon" :key="n" cols="2"/>
    </v-row>

    <v-row justify="center">
      <v-col cols="10">
        <v-card>
          <v-card-title>
            공지
          </v-card-title>
        </v-card>
        <router-link
          style="text-decoration: none; color: inherit;"
          to="/Notice_list"
          class="ma-2"
        >
          <oneonone_question />
        </router-link>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="10">
        <v-card>
          <v-card-title>
            작가/회사 승인 신규 요청
          </v-card-title>
        </v-card>
        <v-container>
          <router-link style="text-decoration:none" to="/apply/episode">
            <v-card>
              <v-list-item class="text-center">
                <v-list-item-content>
                  <v-list-item-title
                    v-for="index in writer_Status"
                    :key="index.id"
                  >
                    {{ index }} |
                  </v-list-item-title>

                  <!-- // avatarUrl 작가 프로필사진
  //   status 현재 승인상태
  //   createdAt 날짜
  //   authorName 작가명 -->
                  <v-divider />
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </router-link>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Thumbnail from "../../components/Thumbnail";
import oneonone_question from "../../components/oneonone-question.vue";
import axios from "axios";
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
      writer_Status: {
        avatarUrl: "1",
        status: "1",
        createdAt: "1",
        authorName: "1",
      },
    };
  },
  // avatarUrl 작가 프로필사진
  //   status 현재 승인상태
  //   createdAt 날짜
  //   authorName 작가명
  mounted() {
    axios
      .get("http://localhost:5000/admin/applications", {
        withCredentials: true,
      })
      .then((response) => {
        for (let index of response.data) {
          this.writer_Status.avatarUrl = index.avatarUrl;
          this.writer_Status.status = index.status;
          this.writer_Status.createdAt = index.createdAt;
          this.writer_Status.authorName = index.authorName;
        }
        console.log(response.data);
      });
  },
};
</script>
