<template>
  <!-- 
  웹툰에서 특정 화수를 클릭시 뷰어페이지에서 보이는 웹툰 화면
  웹툰 화면 
  -->
  <v-container>
    <v-img
      v-for="index in writer_Status.episodeImages"
      :key="index.id"
      :src="index.imageUrl"
      alt=""
    />
  </v-container>
</template>

<script>
export default {
  name: 'Webtoonimage',
  props: { writer_Status: Object, id: Number },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
