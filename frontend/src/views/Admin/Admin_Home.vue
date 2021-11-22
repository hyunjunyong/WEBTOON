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
        </v-card>
      </v-col>
    </v-row>

    <!-- <v-row justify="center">
      <v-col cols="8">
        <v-card elevation="0">
          <v-card-title class="text-h5 font-weight-bold">
            공지
          </v-card-title>
          <list />
        </v-card>
      </v-col>
    </v-row> -->

    <v-row justify="center">
      <v-col cols="8">
        <v-card elevation="0">
          <v-card-title class="text-h5 font-weight-bold">
            에피소드 승인 요청
          </v-card-title>
        </v-card>

        <v-container>
          <!-- <v-card>
            <v-list-item class="text-center">
              <v-list-item-content>
               
                <v-list-item-title
                  v-model="index.id"
                  v-for="index in $store.state.writer_Status"
                  :key="index"
                >
                  <router-link style="text-decoration:none" to="/apply/episode">
                    {{ index.authorName }} |
                    {{ index.createdAt.slice(0, 10) }} | {{ index.status }} |
                  </router-link>
                  <v-divider />
                </v-list-item-title>

                <v-divider />
              </v-list-item-content>
            </v-list-item>
          </v-card> -->
          <!-- <v-row justify="center">
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
                  :headers="headers"
                  :items="$store.state.writer_Status"
                  :search="search"
                  :items-per-page="5"
                >
                </v-data-table>
              </v-card>
            </v-col>
          </v-row> -->

          <v-simple-table>
            <thead>
              <tr>
                <th>번호</th>
                <th>작가명</th>
                <th>날짜</th>
                <th>상태</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="index in list"
                :key="index.id"
                @click="detailPosting(index.id)"
              >
                <td>{{ index.id }}</td>
                <td>{{ index.authorName }}</td>
                <td>{{ index.createdAt.slice(0, 10) }}</td>
                <td>{{ index.status }}</td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-container>

        <!-- <v-container>
          <router-link style="text-decoration:none" to="/apply/episode">
            <v-card>
              <v-list-item class="text-center">
                <v-list-item-content>
                  // <v-list-item-title
                  //   v-for="index in writer_Status"
                  //   :key="index">

                  <v-list-item-title>
                    출근
                  </v-list-item-title>

                   // avatarUrl 작가 프로필사진
                       //   status 현재 승인상태
                       //   createdAt 날짜
                       //   authorName 작가명
                  <v-divider />
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </router-link>
        </v-container> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
//import list from "../../components/list";
//import AdminList from "../../components/round/admin.vue";

export default {
  name: "Home",
  components: {
    //list,
    //AdminList,
  },
  data() {
    return {
      search: "",
      list: this.$store.state.writer_Status.filter(
        (e) => e.status == "pending"
      ),
      headers: [
        {
          text: "NO.",
          align: "start",
          sortable: false,
          value: "id",
        },
        { text: "글 제목", value: "authorName" },
        { text: "작성일", value: "createdAt" },
        { text: "상태", value: "status" },
      ],
    };
  },
  // avatarUrl 작가 프로필사진
  //   status 현재 승인상태
  //   createdAt 날짜
  //   authorName 작가명
  mounted() {
    axios
      .get("http://localhost:5000/admin/applications", {
        withCredentials: true,
      })
      .then((res) => {
        //관리자 계정만 받을 수 있음
        this.$store.state.writer_Status = res.data;
        console.log(this.$store.state.writer_Status);
        // for (let index of res.data) {
        //   this.writer_Status.avatarUrl = index.avatarUrl;
        //   this.writer_Status.status = index.status;
        //   this.writer_Status.createdAt = index.createdAt;
        //   this.writer_Status.authorName = index.authorName;
        // }
      })
      .catch((err) => {
        console.error(err);
      });
  },
  methods: {
    detailPosting(index) {
      this.$router.push({
        name: "APPLY_WEBTOON_DETAIL",
        params: { id: index },
      });
    },
  },
};
</script>
