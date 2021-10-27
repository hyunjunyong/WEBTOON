<template>
  <!-- 
    작가 사용자가 1:1문의를 확인할 수 있는 페이지
 -->
  <v-container>
    <v-row align="center" justify="space-around">
      <v-card class="text-h3" width="100%">내 1:1 문의</v-card>
      <oneonone_question />
      <v-btn>글 쓰기</v-btn>
    </v-row>
  </v-container>
</template>
<script>
import oneonone_question from "../components/oneonone-question.vue";
export default {
  name: "",
  components: { oneonone_question },
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
