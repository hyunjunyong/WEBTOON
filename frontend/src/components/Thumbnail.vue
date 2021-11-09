<template>
  <!-- 웹툰 썸네일 컴포넌트 -->
  <!--
    props를 통해서 웹툰 정보를 받아오는 형식으로 수정
    클릭시 props에 해당하는 웹툰 정보를 호출해서 이미지들을 불러 오도록 수정
  -->
  <v-container>
    <router-link style="text-decoration: none; color: inherit;" to="/webtoon">
      <v-card>
        <v-img max-height="150" :src="webtoon.url" />

        <v-card-title class="ma-1">
          {{ webtoon.title }}
        </v-card-title>

        <v-card-subtitle>
          <v-row align="center" class="ma-1">
            <div>{{ testData }}</div>
          </v-row>
        </v-card-subtitle>
      </v-card>
    </router-link>
  </v-container>
</template>

<script>
export default {
  name: "Thumbnail",
  props: {
    webtoon: Object,
  },
  data() {
    return {
      testData: "작가A",
    };
  },
  mount() {},
};
</script>
