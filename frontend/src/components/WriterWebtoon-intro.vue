<template>
  <!-- 작품 소개 컴포넌트 -->
  <v-container fluid>
    <v-row class="mb-2">
      <v-col class="col-3">
        <v-img src="../img/nft.png" height="150px" width="300px" />
      </v-col>
      <v-col class="col-9">
        <v-row>
          <v-col class="col-9">
            <v-card class="mb-5" height="40px" width="80%">
              작품명을 입력 해주세요
            </v-card>
          </v-col>
          <v-col class="col-1">
            <v-img src="../img/like.png" height="30px" width="30px" />
          </v-col>
        </v-row>
        <v-card height="90px">
          작품 소개를 진행해 주세요
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "WriterWebtoon_intro",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
