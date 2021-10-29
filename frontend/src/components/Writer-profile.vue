<template>
  <!-- 작가 프로필 -->
  <v-container fluid>
    <v-row>
      <v-col>
        <v-img src="../img/setting.png" height="40px" width="40px" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="justify-space-between align-center">
          <v-img :aspect-ratio="1" src="../img/writer_profile.png" />
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-img
          class="align-self-end"
          src="../img/like.png"
          alt=""
          height="40px"
          width="40px"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card class="text-center">작가명</v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card class="text-center">작가명</v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card class="text-center">
          <p>작가의 말</p>
          <p>가입날짜</p>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card class="text-center">획득뱃지</v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pt-0">
        <v-img src="../img/badge.png" alt="" height="65px" width="65px" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Writer_profile",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
