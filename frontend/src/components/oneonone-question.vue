<template>
  <v-container>
    <v-card  elevation="0">
      <v-list-item v-for="index in one" :key="index.idx" class="text-center">
          <v-list-item-title >{{ index.title }}  {{ index.date }}</v-list-item-title>
      </v-list-item>
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      one: [
        { idx: 1, title: "얼리윈터 이벤트", date: "2021-11-01"},
        { idx: 2, title: "11월 변경사항", date: "2021-11-01"},
        { idx: 3, title: "할로윈 이벤트", date: "2021-10-20"},
        { idx: 4, title: "이용약관 변경 공지", date: "2021-10-11"},
        { idx: 5, title: "긴급점검 공지", date: "2021-10-10"},
      ],
    };
  },
  setup() {},
  create() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>
<style scoped></style>
