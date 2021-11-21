<template>
  <!-- 
  웹툰에서 특정 화수를 클릭시 뷰어페이지에서 보이는 웹툰 화면
  웹툰 화면 
  -->
  <v-row justify="center">
<<<<<<< HEAD
      {{id}}
=======
    <v-col cols="10" sm="12">
>>>>>>> 3c441e79e46d30e02d37cfcd04ae4a4f681ad3b2
      <v-img
        v-for="index in writer_Status.episodeImages"
        :key="index"
        :src="index.imageUrl"
        width="1280px"
        max-height="5120px"
      />
  </v-row>
</template>

<script>
export default {
  name: "Webtoonimage",
 props: {
    id: Number,
  },
};
</script>

<style lang="scss" scoped></style>
