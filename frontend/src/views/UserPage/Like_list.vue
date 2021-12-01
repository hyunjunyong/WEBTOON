<template>
  <!--
    찜한 작품 리스트
  -->

  <v-container>
    <v-row justify="center">
      <v-col cols="8" class="ma-2">
        <v-card elevation="0">
          <v-card-title class="text-h5 font-weight-bold">
            찜한 작품
          </v-card-title>

          <!-- 찜한 작품 / 작가 리스트 -->
          <v-row justify="center">
            <v-col cols="auto">
              <!-- 찜한 작품 리스트 -->
              <LikeWebtoonList />
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
    return {};
  },
  created() {
    axios
      .get('http://localhost:5000/user/like', {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
      });
  },
};
</script>

<style scoped></style>
