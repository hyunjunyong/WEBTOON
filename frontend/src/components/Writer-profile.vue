<template>
  <!-- 작가 프로필 -->
  <v-row class="justify-end">
    <v-col align="center" cols="2">
      <v-img
        src="../img/webtoon/04. 물고기인간(출판형)/01_01.png"
        alt=""
        style="border-radius:70%"
        max-width="160px"
        max-height="160px"
      />
    </v-col>
    <v-col cols="10">
      <v-card elevation="0" class="mb-3">
        <v-card-title>작가 A</v-card-title>
        <v-card-text>작가 한줄 소개</v-card-text>
      </v-card>

      <v-file-input
        show-size
        label="상단 썸네일 넣기"
        prepend-icon="mdi-camera"
        dense
      ></v-file-input>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Writer_profile",
  data() {
    return {};
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    },
  },
};
</script>

<style lang="scss" scoped></style>
