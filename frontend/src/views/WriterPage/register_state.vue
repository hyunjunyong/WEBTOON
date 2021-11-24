<template>
  <!-- 작가가 자신의 작품 등록 상태를 보는 화면 -->
  <v-card elevation="0">
    <v-row justify="center">
      <v-col cols="8">
        <v-card class="mb-5 pa-2" height="60" elevation="0">
          <v-card-title>
            작품 등록 상태
          </v-card-title>
        </v-card>

        <Admin />
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import Admin from '../../components/round/admin.vue';

export default {
  name: '',
  components: {
    Admin,
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
