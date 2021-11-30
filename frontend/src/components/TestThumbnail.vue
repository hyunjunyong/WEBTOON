<template>
  <!-- 웹툰 썸네일 컴포넌트 -->
  <!--
    props를 통해서 웹툰 정보를 받아오는 형식으로 수정
    클릭시 props에 해당하는 웹툰 정보를 호출해서 이미지들을 불러 오도록 수정
  -->
  <v-sheet class="mx-auto" elevation="0" max-width="800">
    <v-slide-group class="pa-4" show-arrows>
      <v-slide-item v-for="i in webtoons" :key="i.id">
        <v-card
          :elevation="0"
          class="radius ma-4"
          router-link
          :to="{ name: 'WEBTOON_HOMR', params: { id: i.id } }"
        >
          <v-img
            :height="h"
            :src="i.workThumbnail"
            class="radius"
            width="200px"
          />

          <v-card-title>
            {{ i.title }}
          </v-card-title>

          <v-card-subtitle> 작가 : {{ i.user.authorName }} </v-card-subtitle>
          <v-row class="fill-height" align="center" justify="center"> </v-row>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
  <!-- <v-row class="mt-1">
    <v-col v-for="i in webtoons" :key="i" :cols="c">
      <v-hover v-slot:default="{ hover }">
        <v-card
          :elevation="hover ? 10 : 0"
          router-link
          :to="{ name: 'WEBTOON_HOMR', params: { id: i.id } }"
          class="radius"
        >
          <v-img :height="h" :src="i.workThumbnail" class="radius" />

          <v-card-title>
            {{ i.title }}
          </v-card-title>

          <v-card-subtitle> 작가 : {{ i.user.authorName }} </v-card-subtitle>
        </v-card>
      </v-hover>
    </v-col>
  </v-row> -->
  <!-- </v-carousel-item>
  </v-carousel> -->
</template>

<script>
// import axiosx from "axios";
export default {
  name: 'TestThumbnail',
  data() {
    return {
      // c는 한 줄에 들어갈 썸네일의 갯수가 된다.
      //
      // model=null,
      c: Math.floor(12 / this.webtoonState),
      length: this.limited ? this.limited : this.webtoon.length,
    };
  },
  props: {
    webtoon: [],
    webtoonState: Number,
    h: Number,
    limited: Number,
    webtoons: Array,
  },
  mounted() {},
};
</script>

<style scoped>
.radius {
  border-radius: 15px;
}
</style>
