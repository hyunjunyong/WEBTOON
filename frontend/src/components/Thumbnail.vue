<template>
  <!-- 웹툰 썸네일 컴포넌트 -->
  <!--
    props를 통해서 웹툰 정보를 받아오는 형식으로 수정
    클릭시 props에 해당하는 웹툰 정보를 호출해서 이미지들을 불러 오도록 수정
  -->

  <v-card elevation="0" hover>
    <router-link
      style="text-decoration: none; color: inherit;"
      v-bind:to="path"
    >
      <v-img max-height="260" :src="webtoon.workThumbnail" />

      <v-card-title>
        {{ webtoon.title }}
      </v-card-title>

      <v-card-subtitle>
        {{ webtoon.writer }}
      </v-card-subtitle>
    </router-link>
  </v-card>
</template>

<script>
export default {
  name: "Thumbnail",
  props: {
    webtoon: Object,
  },
  data() {
    return {
      path: "webtoon/" + this.webtoon.id,
    };
  },
  mount() {},
};
</script>
