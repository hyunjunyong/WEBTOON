<template>
  <!-- 작가홈의 에피소드 화수를 표현하는 컴포넌트 -->
  <v-card elevation="0" class="overflow-y-auto" max-height="600" elvation="0">
    <v-banner class="justify-center white text-end" sticky>
      <v-btn @click="webtoon.sort(round_Order)" color="black" text>
        최신화부터
      </v-btn>
      /
      <v-btn @click="webtoon.sort(date_Order)" color="black" text class="ml-4">
        1화부터
      </v-btn>
      <!-- <span class="font-weight-bold" v-text="scrollInvoked"></span> -->
    </v-banner>

    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left"></th>
            <th class="text-left">
              에피소드
            </th>
            <th class="text-right">
              등록일
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="episode in webtoon"
            :key="episode.episodeOrder"
            @click="useRouter(episode.episodeOrder)"
          >
            <td>
              <v-img :src="episode.episodeThumbnailUrl" width="50" height="50" />
            </td>
            <td>
              {{ episode.episodeName }}
            </td>
            <td class="text-right">
              {{ episode.updatedAt.slice(0,10) }}
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  name: "EpisodeList",
  data() {
    return {
      webtoon: [
        // {
        //   id: 0,
        //   name: "helloWorld",
        //   date: "2008.1.3",
        //   thumbnail: require("../../img/nums/1.png"),
        // },
      ],
    };
  },
  created(){
this.getEpisodeList();
  },
  methods: {
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
      axios
        .get(`http://localhost:5000/${this.$route.params.id}/episode/`, { withCredentials: true })
        .then((res) => {
          this.webtoon = res.data;
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
