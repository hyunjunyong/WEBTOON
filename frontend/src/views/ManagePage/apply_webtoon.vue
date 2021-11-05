<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="text-center text-h4">작품 승인 요청</v-card>
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
