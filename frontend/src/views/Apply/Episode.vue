<template>
  <!-- 
    승인할 웹툰 미리보기 및 사유 작성 페이지

   -->
  <v-container fluid>
    <v-row class="justify-space-between">
      <v-col>
        <v-text-field
          label="작가명"
          required
          v-model="writer_Status.authorName"
          id="writer_Status.authorName"
          maxlength="30"
        >
        </v-text-field
        ><v-text-field
          label="등록날짜"
          required
          v-model="writer_Status.createdAt"
          id="writer_Status.createdAt"
          maxlength="30"
        >
        </v-text-field
        ><v-img
          url="writer_Status.avatarUrl"
          id="writer_Status.avatarUrl"
          maxlength="30"
        >
        </v-img
      ></v-col>
      <v-col><Webtoonimage /></v-col>
      <!-- 웹툰 특정 화수를 클릭할 때 나타나는 이미지 컴포넌트 -->
      <Reject_reason />
    </v-row>
  </v-container>
</template>

<script>
import Webtoonimage from "../../components/Webtoon-image";
import Reject_reason from "../../components/reject-reason.vue";
import axios from "axios";

export default {
  name: "VIEWER",
  data: () => ({
    writer_Status: {
      avatarUrl: "1",
      status: "1",
      createdAt: "1",
      authorName: "1",
    },
  }),
  components: {
    Webtoonimage,
    Reject_reason,
  },
  method: {},
  mounted() {
    axios
      .get("http://localhost:5000/admin/applications", {
        withCredentials: true,
      })
      .then((response) => {
        for (let index of response.data) {
          this.writer_Status.avatarUrl = index.avatarUrl;
          this.writer_Status.status = index.status;
          this.writer_Status.createdAt = index.createdAt.slice(0, 10);
          this.writer_Status.authorName = index.authorName;
        }
        console.log(response.data);
      });
  },
};
</script>

<style lang="scss" scoped></style>
