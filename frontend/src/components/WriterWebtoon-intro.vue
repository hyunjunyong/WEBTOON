<template>
  <!-- 작품 소개 컴포넌트 -->
  <v-container fluid>
    <v-row class="mb-2">
      <v-col cols="3">
        <v-img src="../img/nft.png" height="150px" width="150px"/>
      </v-col>
      <v-col cols="9">
        <v-row>
          <v-col cols="8">
            <v-card class="mb-5" height="40px" width="80%">
              작품명을 입력 해주세요
            </v-card>
          </v-col>
          <v-col cols="1">
            <v-img src="../img/like.png" height="30px" width="30px"/>
          </v-col>
          <v-col cols="1">
            <router-link to="/edit_Webtoon">
              <v-img src="../img/setting.png" height="30px" width="30px" />
            </router-link>
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
