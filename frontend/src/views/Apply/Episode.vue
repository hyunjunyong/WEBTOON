<template>
  <!-- 
    승인할 웹툰 미리보기 및 사유 작성 페이지

   -->
  <v-container fluid>
    <v-row class="justify-space-between">
      <v-col> </v-col>
      <v-col><Webtoonimage /></v-col>
      <!-- 웹툰 특정 화수를 클릭할 때 나타나는 이미지 컴포넌트 -->
      <v-col> </v-col>
      <Reject_reason />
    </v-row>
  </v-container>
</template>

<script>
import Webtoonimage from "../../components/Webtoon-image";
import Reject_reason from "../../components/reject-reason.vue";

export default {
  name: "VIEWER",
  data: () => ({
    //
  }),
  components: {
    Webtoonimage,
    Reject_reason,
  },
  method: {},
};
</script>

<style lang="scss" scoped></style>
