<template>
  <v-card elevation="0">
    <v-row>
      <v-col>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left"></th>
                <th class="text-left">
                  이름
                </th>
                <th class="text-right">
                  요청날짜
                </th>
                <th class="text-center">
                  상태
                </th>
              </tr>
            </thead>

            <tbody>
              <tr
                v-for="episode in episodes"
                :key="episode.id"
                @click="useRouter(episode.id)"
              >
                <td>
                  <v-img :src="episode.url" width="100" height="50" />
                </td>
                <td>{{ episode.name }}</td>
                <td class="text-right">{{ episode.date }}</td>
                <td class="text-center">
                  {{ episode.apply }}
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  name: "admin-apply-episode-list",
  data() {
    return {
      episodes: [
        {
          id: 0,
          name: "helloWorld",
          date: "2008.1.3",
          thumbnail: "../../img/nums/1.png",
          apply: "hello",
        },
      ],
    };
  },
  methods: {
    useRouter(index) {
      console.log(index);
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
      //받는 데이터는 {episode id, episode 이름, episode 썸네일, episode 승인날짜, episode apply}
      axios
        .get("http://localhost:5000/", {}, { withCredentials: true })
        .then((res) => {
          //episodes = res.data
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
