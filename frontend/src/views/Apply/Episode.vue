<template>
  <!-- 
    승인할 웹툰 미리보기 및 사유 작성 페이지

   -->
  <v-container fluid>
    <v-row class="justify-space-between">
      <v-col>
        <v-text-field
          v-model="writer_Status.userAppliedWork.title"
          id="webtoonTitle"
          required
          maxlength="30"
        >
        </v-text-field>
        <v-text-field
          v-model="writer_Status.userAppliedWork.workDescription"
          id="webtoonDescription"
          required
          maxlength="30"
        >
        </v-text-field>
        <v-text-field
          v-model="writer_Status.userAppliedWork.episode[0].episodeName"
          id="episodeTitle"
          required
          maxlength="30"
        >
        </v-text-field>
        <v-text-field
          v-model="writer_Status.userAppliedWork.episode[0].episodeDescription"
          id="episodeDescrition"
          required
          maxlength="30"
        >
        </v-text-field>

        <!-- 썸네일 -->
        <v-img
          :src="writer_Status.userAppliedWork.episode[0].episodeThumbnailUrl"
          max-height="260px"
          max-width="260px"
        >
        </v-img
      ></v-col>
      <v-col><Webtoonimage :writer_Status="writer_Status"/></v-col>
      <!-- 웹툰 특정 화수를 클릭할 때 나타나는 이미지 컴포넌트 -->
      <!-- <Reject_reason /> -->
      <v-container>
        <v-row>
          <v-col cols="12" sm="12">
            <v-textarea
              v-model="reason"
              class="mx-2"
              label="반려사유작성"
              rows="1"
            ></v-textarea>
          </v-col>
        </v-row>
        <v-row :justify="4">
          <v-col class="text-center">
            <v-btn color="error" block @click="rejectEpisode()">반려</v-btn>
          </v-col>
          <v-col class="text-center">
            <v-btn
              class="white--text"
              color="indigo"
              block
              @click="approveEpisode()"
              >승인</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </v-row>
  </v-container>
</template>

<script>
import Webtoonimage from "../../components/Webtoon-image";
// import Reject_reason from "../../components/reject-reason.vue";
import axios from "axios";
import router from "../../router/index";
export default {
  name: "VIEWER",

  data: () => ({
    writer_Status: {},
    reason: null,
    data: null,
  }),
  created() {
    let data = this.$route.params.data;
    this.data = data;
    axios
      .get(`http://localhost:5000/admin/applications/${data}`, {
        withCredentials: true,
      })
      .then((response) => {
        this.writer_Status = response.data;
        console.log(response.data);
      });
  },
  components: {
    Webtoonimage,
    // Reject_reason,
  },
  methods: {
    approveEpisode() {
      axios
        .patch(
          "http://localhost:5000/admin/applications",
          {
            status: "approved",
            applicationId: this.data,
            userId: this.writer_Status.userAppliedWork.userId,
          },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          console.log(res);
          alert("승인되었습니다.");
          router.push("/");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    rejectEpisode() {
      axios
        .patch(
          "http://localhost:5000/admin/applications",
          {
            status: "declined",
            applicationId: this.data,
            userId: this.writer_Status.userAppliedWork.userId,
            reason: this.reason,
          },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          alert("반려되었습니다.");
          router.push("/");
          console.log(res);
        });
    },
  },
  mounted() {
    // axios
    //   .get(
    //     `http://localhost:5000/admin/applications/${data}`,
    //     {
    //       withCredentials: true,
    //     }
    //   )
    //   .then((response) => {
    //     this.writer_Status = response.data[0]
    //     console.log(response.data);
    //   });
  },
};
</script>

<style lang="scss" scoped></style>
