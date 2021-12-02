<template>
  <!--
    좋아요한 작품 리스트
  -->

  <v-container>
    <v-row justify="center">
      <v-col cols="6" class="ma-2">
        <v-card elevation="0">
          <v-card-title class="text-h5 font-weight-bold">
            좋아요한 작품
          </v-card-title>

          <!-- 좋아요한 작품 / 작가 리스트 -->
          <v-row justify="center">
            <v-col>
              <!-- 좋아요한 작품 리스트 -->
              <LikeWebtoonList :webtoons="webtoons" />
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LikeWebtoonList from '../../components/round/likeWebtoonList.vue';
import axios from 'axios';
export default {
  name: 'LIKE_LIST',
  components: {
    LikeWebtoonList,
  },
  data() {
    return {
      webtoons: null,
    };
  },
  created() {
    axios
      .get('http://localhost:5000/user/like', {
        withCredentials: true,
      })
      .then((res) => {
        this.webtoons = res.data;
        console.log(res);
      });
  },
};
</script>

<style scoped></style>
