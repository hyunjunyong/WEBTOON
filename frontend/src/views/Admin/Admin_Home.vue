<template>
  <!-- 
  관리자 로그인 시 메인화면
 -->
  <v-container>
    <v-row justify="center">
      <v-col cols="8" class="ma-2">
        <v-card elevation="0">
          <v-card-title class="text-h5 font-weight-bold">
            작가 승인 요청
          </v-card-title>

          <!-- 
            이 부분을 작가산청에 대한 데이터를 출력 해야합니다
            30번째 줄의 list 작가 신청 list를
            작가신청에 대한 배열로 변경해야합니다.
           -->
          <v-container>
            <v-row justify="center">
              <v-col>
                <v-card elevation="0">
                  <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search"
                    single-line
                    hide-details
                  ></v-text-field>

                  <v-data-table
                    :headers="writerHeaders"
                    :items="applicationList"
                    :search="search"
                    :items-per-page="5"
                    @click:row="detailPosting"
                  >
                    <template v-slot:item.createdAt="{ item }">
                      {{ item.createdAt.slice(0, 10) }}
                    </template>
                  </v-data-table>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="8">
        <v-card elevation="0">
          <v-card-title class="text-h5 font-weight-bold">
            에피소드 승인 요청
          </v-card-title>
        </v-card>

        <v-container>
          <v-row justify="center">
            <v-col>
              <v-card elevation="0">
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Search"
                  single-line
                  hide-details
                ></v-text-field>

                <v-data-table
                  :headers="episodeHeaders"
                  :items="appliedEpisodeList"
                  :search="search"
                  :items-per-page="5"
                  @click:row="addDetailPosting"
                >
                  <template v-slot:item.createdAt="{ item }">
                    {{ item.createdAt.slice(0, 10) }}
                  </template>
                </v-data-table>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      search: "",
      // list: this.$store.state.writer_Status.filter(
      //   (e) => e.status == "pending"
      // ),
      applicationList: [],
      appliedEpisodeList: [],
      writerHeaders: [
        {
          text: "작가명",
          align: "start",
          sortable: false,
          value: "authorName",
        },
        { text: "날짜", value: "createdAt" },
        { text: "상태", value: "status" },
      ],
      episodeHeaders: [
        {
          text: "작가명",
          align: "start",
          sortable: false,
          value: "user.authorName",
        },
        { text: "작품명", value: "title" },
        { text: "에피소드명", value: "episode[0].episodeName" },
        { text: "날짜", value: "createdAt" },
        { text: "상태", value: "episode[0].episodeStatus" },
      ],
    };
  },
  created() {
    //작가 승인 데이터 받는 곳
    axios
      .get("http://localhost:5000/admin/applications", {
        withCredentials: true,
      })
      .then((res) => {
        //관리자 계정만 받을 수 있음
        this.applicationList = res.data;
        //console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
    // 에피소드 승인 데이터 받는 곳
    axios
      .get("http://localhost:5000/admin/episodes", {
        withCredentials: true,
      })
      .then((res) => {
        this.appliedEpisodeList = res.data;
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  methods: {
    detailPosting(application) {
      //  console.log(application);
      this.$router.push({
        name: "APPLY_WEBTOON_DETAIL",
        params: { id: application.id },
      });
    },
    addDetailPosting(appliedEpisode) {
      console.log(appliedEpisode);
      this.$router.push({
        name: "APPLY_ADD_WEBTOON_DETAIL",
        params: { id: appliedEpisode.episode[0].id },
      });
    },
  },
};
</script>
