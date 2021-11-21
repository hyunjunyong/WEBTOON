<template>
  <!-- 
    작품의 에피소드가 보여지는 화면
   -->
  <v-container>
    <v-row justify="center" class="ma-0">
      <v-col cols="8"><Webtoonimage /> </v-col>
      <!-- 웹툰 특정 화수를 클릭할 때 나타나는 이미지 컴포넌트 -->
    </v-row>

    <v-row>
      <Viewerend />
    </v-row>
  </v-container>
</template>

<script>
import Webtoonimage from "../components/Webtoon-image";
import Viewerend from "../components/viewer-end.vue";

export default {
  name: "VIEWER",
  components: {
    Webtoonimage,
    Viewerend,
  },
};
</script>

<style lang="scss" scoped></style>
