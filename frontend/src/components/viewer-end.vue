<template>
  <!-- 만화 보는 페이지에 하단 
작가의 다른작품 추천과 다음화 이전화로 넘어갈 수 있게함 -->
  <v-container fluid>
    <v-divider></v-divider>
    <div align="center">
      <v-btn text x-large style="fontSize:'18px'"
        ><v-icon class="mx-3">mdi-arrow-left</v-icon
        ><span fontSize="18px">이전화</span></v-btn
      >
      <v-btn text x-large fontSize="18px"
        ><span>다음화</span><v-icon class="mx-3">mdi-arrow-right</v-icon></v-btn
      >
    </div>
  </v-container>
</template>
<script>
// import Thumbnail from "./Thumbnail.vue";
export default {
  name: "",
  components: {
    // Thumbnail,
  },
  data() {
    return {};
  },
  setup() {},
  create() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>
<style scoped></style>
