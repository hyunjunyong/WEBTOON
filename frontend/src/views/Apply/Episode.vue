<template>
  <!-- 
    승인할 웹툰 미리보기 및 사유 작성 페이지

   -->
  <v-container>

      <v-row justify="center">
        <v-col cols="auto">
          <v-card elevation="0">
            <v-card-title class="text-h5 font-weight-bold">
              에피소드 승인
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>

      <v-row justify="center" class="ma-5">
          <!-- 에피소드 설명 -->
        <v-col cols="auto">
        <v-card elevation="0" width="300" >
            에피소드 승인
          <v-text-field
            v-model="writer_Status.userAppliedWork.title"
            id="webtoonTitle"
            dense
            single-line
            color="primary"
          >
          </v-text-field>
            작품 소개
          <v-textarea
            v-model="writer_Status.userAppliedWork.workDescription"
            id="webtoonDescription"
            required
            height="100"
            dense
            filled
            full-width
            single-line
            counter
            color="primary"
          >
          </v-textarea>
            에피소드명
          <v-text-field
            v-model="writer_Status.userAppliedWork.episode[0].episodeName"
            id="episodeTitle"
            dense
            single-line
            color="primary"
          >
          </v-text-field>
            에피소드 소개
          <v-text-field
            v-model="writer_Status.userAppliedWork.episode[0].episodeDescription"
            id="episodeDescrition"
            required
            height="100"
            dense
            filled
            full-width
            single-line
            counter
            color="primary"
          >
          </v-text-field>
        
        </v-card>
        </v-col>
        <!-- 썸네일 -->
        <v-col cols="auto" >
          작품 썸네일
          <v-hover v-slot:default="{ hover }">
            <v-card :elevation="hover ? 10 : 0" class="radius">
              <v-img
                :src="writer_Status.userAppliedWork.episode[0].episodeThumbnailUrl"
                max-height="380px"
                max-width="380px"
              ></v-img>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
      <v-row justify="center" class="ma-5">
      <v-col cols="auto"><Webtoonimage :writer_Status="writer_Status"/></v-col>
      <!-- 웹툰 특정 화수를 클릭할 때 나타나는 이미지 컴포넌트 -->
      <!-- <Reject_reason /> -->

      <v-container>
        <v-row justify="center">
         <v-col cols="8">
            <v-card elevation="0">
              <v-card-title class="font-weight-bold text-center">
                반려사유 (반려시 사유작성 필수)
              </v-card-title>

              <v-textarea
                v-model="reason"
                required
                wight="400"
                counter
                single-line
                full-width
                dense
                filled
              ></v-textarea>
            </v-card>           
            
            <v-row>
               <v-spacer></v-spacer>
              <v-col>
                <v-btn
                  depressed
                  rounded
                  block
                  color="primary"
                  @click="approveEpisode()">
                  승인</v-btn>
              </v-col>
               <v-spacer></v-spacer>
              <v-col>
                <v-btn depressed rounded block @click="rejectEpisode()">반려</v-btn>
              </v-col>
               <v-spacer></v-spacer>
            </v-row>
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
