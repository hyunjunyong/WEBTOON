<template>
  <!-- 웹툰 썸네일 컴포넌트 -->
  <!--
    props를 통해서 웹툰 정보를 받아오는 형식으로 수정
    클릭시 props에 해당하는 웹툰 정보를 호출해서 이미지들을 불러 오도록 수정
  -->
  <v-row class="mt-1">
    <v-col v-for="i in length" :key="i" :cols="c">
      <v-hover v-slot:default="{ hover }">
        <v-card
          :elevation="hover ? 10 : 0"
          router-link
          :to="{ name: 'WEBTOON_HOMR', params: { id: webtoon[i - 1].id } }"
          class="radius"
        >
          <v-img
            :height="h"
            :src="webtoon[i - 1].workThumbnail"
            class="radius"
          />

          <v-card-title>
            {{ webtoon[i - 1].title }}
          </v-card-title>

          <v-card-subtitle>
            작가 : {{ webtoon[i - 1].user.authorName }}
          </v-card-subtitle>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "TestThumbnail",
  data() {
    return {
      // c는 한 줄에 들어갈 썸네일의 갯수가 된다.
      //
      c: Math.floor(12 / this.webtoonState),
      length: this.limited ? this.limited : this.webtoon.length,
    };
  },
  props: {
    webtoon: [],
    webtoonState: Number,
    h: Number,
    limited: Number,
  },
};
</script>

<style scoped>
.radius {
  border-radius: 15px;
}
</style>
