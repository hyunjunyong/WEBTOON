<template>
  <!-- 
  웹툰에서 특정 화수를 클릭시 뷰어페이지에서 보이는 웹툰 화면
  웹툰 화면 
  -->
  <v-container>
    <!-- <v-img
>>>>>>> af67ca8fa49a9c5f18f1e001277d009907be19a0
        v-for="index in writer_Status.episodeImages"
        :key="index"
        :src="index.imageUrl"
        width="1280px"
        max-height="5120px"
      /> 
      일단 하드코딩으로 스타일 수정이 우선
       max-height="5120px" 지정시 사진이 짤리는 현상
      -->
    <!-- <v-img
      v-for="index in episode"
      :key="index"
      :src="index"
      width="1280px"
    ></v-img> -->
    <v-img
      v-for="index in writer_Status.episodeImages"
      :key="index"
      :src="index.imageUrl"
      alt=""
    />
  </v-container>
</template>

<script>
export default {
  name: "Webtoonimage",
  props: { writer_Status: Object, id: Number },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
