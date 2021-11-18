<template>
  <!--
    승인 요청을 한 작품들을 모아둔 화면
  -->
  <v-container>
    <v-row justify="center">
      <v-col cols="10" class="mb-3">
        <v-card elevation="0">
          <v-card-title class="text-h5 font-weight-bold">
            작품 승인 요청
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>

    <v-col align="center">
      <webtoonround :webtoon_round_State="4" />
    </v-col>
  </v-container>
</template>

<script>
import webtoonround from "../../components/webtoon-round.vue";

export default {
  name: "",
  components: {
    webtoonround,
  },
};
</script>

<style scoped></style>
