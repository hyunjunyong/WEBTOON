<template>
  <!-- 
    작가가 자신이 등록한 에피소드의 승인반려상태를 확인할 수 있는 리스트
    
 -->
  <v-card elevation="0" max-height="1200">
    <v-banner class="justify-center white text-end" sticky>
      <router-link style="text-decoration:none" to="/add/episode">
        <v-btn class="ma-2" color="green" dark rounded>
          에피소드 추가
          <v-icon dark>
            mdi-plus
          </v-icon>
        </v-btn>
      </router-link>
    </v-banner>

    <v-simple-table elevation="0">
      <template v-slot:default>
        <tbody>
          <tr
            v-for="index in webtoons.episode"
            :key="index"
            @click="useRouter(index.id)"
          >
            <td>
              <v-img
                :src="index.episodeThumbnailUrl"
                width="200px"
                height="150px"
                style="border-radius:10px"
                aspect-ratio="1"
              />
            </td>
            <td>
              <p>{{ index.episodeName }}</p>
              {{ index.episodeDescription }}
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
  name: "episodeList",
  data() {
    return {};
  },
  props: {
    webtoons: Object,
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
      //받는 데이터는 {episode id, episode 이름, episode 썸네일, episode 승인날짜}
      axios
        .get("http://localhost:5000/", {}, { withCredentials: true })
        .then(() => {
          //console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
