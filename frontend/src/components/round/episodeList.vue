<template>
  <!-- 작가홈의 에피소드 화수를 표현하는 컴포넌트 
    /webtoon에 들어감
  -->
  <v-card elevation="0" max-height="1200" elvation="0">
    <v-banner class="justify-center white text-end" sticky>
      <v-btn
        v-if="sortToggle === 'desc'"
        @click="SortToggleBtn()"
        color="black"
        text
      >
        1화부터
      </v-btn>
      <v-btn
        v-if="sortToggle === 'asc'"
        @click="SortToggleBtn()"
        color="black"
        text
      >
        최신화부터
      </v-btn>
      <!-- <span class="font-weight-bold" v-text="scrollInvoked"></span> -->
    </v-banner>

    <v-list>
      <template v-for="episode in webtoon">
        {{ episode }}
        <v-list-item @click="useRouter(episode.id)" :key="episode.id">
          <v-list-item-avatar
            style="border-radius:10px"
            width="200px"
            height="150px"
          >
            <v-img :src="episode.episodeThumbnailUrl" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title
              ><h3>
                {{ episode.episodeName }} | {{ episode.episodeDescription }}
              </h3></v-list-item-title
            >
            <v-list-item-subtitle>{{
              episode.updatedAt.slice(0, 10)
            }}</v-list-item-subtitle>
          </v-list-item-content>

          <v-divider></v-divider>
        </v-list-item>
      </template>
    </v-list>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  name: "EpisodeList",
  props: {
    webtoon: Array,
  },
  data() {
    return {
      // 최신화,1화부터 변수
      sortToggle: "desc",
    };
  },
  created() {
    // this.getEpisodeList();
  },
  mounted() {},
  methods: {
    // 최신화,1화부터 버튼
    SortToggleBtn() {
      if (this.sortToggle === "desc") {
        this.sortToggle = "asc";
      } else {
        this.sortToggle = "desc";
      }

      axios
        .get(
          `http://localhost:5000/${this.$route.params.id}/episode?episodeOrder=${this.sortToggle}`,
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          this.webtoon = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    // 날짜순 정렬
    // date_Order(a, b) {
    //   var dateA = new Date(a["date"]).getTime();
    //   var dateB = new Date(b["date"]).getTime();

    //   return dateA < dateB ? 1 : -1;
    // },
    // 화수 정렬
    // round_Order(a, b) {
    //   return (
    //     Number(a.round.match(/(\d+)/g)[0]) - Number(b.round.match(/(\d+)/g)[0])
    //   );
    // },
    useRouter(index) {
      this.$router.push({
        name: "Episode",
        params: {
          id: index,
        },
      });
    },
    getEpisodeList() {
      //해당 작품의 에피소드 리스트를 받아서
      //data의 webtoon에 넣어야함...
      //던져줄 데이터는 작품 id
      //받는 데이터는 {episode id, episode 이름, episode 썸네일, episode 승인날짜? 등록날짜}
      // axios
      //   .get(
      //     `http://localhost:5000/${this.$route.params.id}/episode?episodeOrder=asc/`,
      //     {
      //       withCredentials: true,
      //     }
      //   )
      //   .then((res) => {
      //     this.webtoon = res.data;
      //     console.log(res);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    },
  },
};
</script>
