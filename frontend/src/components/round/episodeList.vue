<template>
  <!-- 작가홈의 에피소드 화수를 표현하는 컴포넌트 
    /webtoon에 들어감
  -->
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
    <v-list height="200px">
      <template v-for="episode in webtoon">
        <v-list-item
          @click="useRouter(episode.id)"
          :key="episode.id"
          height="100px"
        >
          <v-list-item-avatar width="200px" height="100px">
            <v-img :src="episode.thumbnail" />
          </v-list-item-avatar>

<<<<<<< HEAD
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
=======
          <v-list-item-content>
            <v-list-item-title
              ><h3>
                {{ episode.id + 1 }}화 | {{ episode.name }}
              </h3></v-list-item-title
            >
            <v-list-item-subtitle>{{ episode.date }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider :key="episode.id" :inset="inset"></v-divider>
>>>>>>> 3c441e79e46d30e02d37cfcd04ae4a4f681ad3b2
      </template>
    </v-list>
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
