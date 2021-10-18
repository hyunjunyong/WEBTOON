<template>
  <v-container fluid>
    <v-row>
      <v-col class="col-3">
        <v-img src="../img/nft.png" height="150px" width="300px"/>
      </v-col>
      <v-col class="col-7">
        <v-row>
          <v-col class="col-9">
            <v-card class="mb-5" height="40px" width="80%">
            작품명을 입력 해주세요
          </v-card>
          </v-col>
          <v-col class="col-1">
            <v-img src="../img/like.png" height="30px" width="30px"/>
          </v-col>
        </v-row>
        <v-card height="90px">
          작품 소개를 진행해 주세요
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<!-- <v-img src="../img/nft.png" height="150px" width="300px"/>
    <v-card>
      작품명을 입력 해주세요
      <v-img class="float-right" src="../img/like.png" height="30px" width="30px"/>
    </v-card>
    <v-card>
      작품 소개를 진행해 주세요
    </v-card> -->
<!-- <div class="all">
      <img src="../img/nft.png" alt="" height="150px" width="300px">
      <div class="sub">
        <div class="sub-title">
            <h2>작품명을 입력 해주세요</h2>
            <img src="../img/like.png" alt="" height="30px" width="30px">
        </div>
        <p class="sub-p">작품 소개를 진행해주세요V</p>
      </div>
  </div> -->
<script>
export default {
  name: "WriterWebtoon_intro",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
    @import "../css/WriterWebtoon-intro.css"
</style>