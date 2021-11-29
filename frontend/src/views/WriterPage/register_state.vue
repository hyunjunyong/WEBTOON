<template>
  <!-- 작가가 자신의 작품 등록 상태를 보는 화면 -->
  <v-container>
    <v-row justify="center">
      <v-col cols="8" class="ma-2">
        <v-card elevation="0">
          <v-card-title class="text-h5 font-weight-bold">
            등록 작품 상태
          </v-card-title>

          <RegisterWebtoon />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import RegisterWebtoon from '../../components/round/registerWebtoon.vue';

export default {
  name: '',
  components: {
    RegisterWebtoon,
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
