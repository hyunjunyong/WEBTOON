<template>
  <!-- 
  웹툰에서 특정 화수를 클릭시 뷰어페이지에서 보이는 웹툰 화면
  웹툰 화면 
  -->
  <v-row justify="center">
    <v-col cols="10" sm="12">
      <v-img
        v-for="index in writer_Status.episodeImages"
        :key="index"
        :src="index.imageUrl"
        width="1280px"
        max-height="5120px"
      />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Webtoonimage",
  props: { writer_Status: Object },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
