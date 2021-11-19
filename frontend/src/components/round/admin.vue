<template>
  <v-card
    fluid
    v-scroll.self="onScroll"
    class="overflow-y-auto"
    max-height="800"
  >
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              썸네일
            </th>
            <th class="text-left">
              이름
            </th>
            <th class="text-right">
              승인
            </th>
            <th class="text-right">
              승인
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
              <router-link to="/apply/episode">
                <v-img :src="episode.url" width="100" height="100"
              /></router-link>
            </td>
            <td>{{ episode.name }}</td>
            <td class="text-right">{{ episode.date }}</td>
            <td class="text-right">{{ episode.date }}</td>
            <td>
              <v-flex xs1>
                <v-dialog v-model="dialog" width="500">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      cols="1"
                      dark
                      color="green"
                      v-bind="attrs"
                      v-on="on"
                      >{{ episode.apply }}</v-btn
                    >
                  </template>

                  <v-card>
                    <v-card-title class="text-h6 grey lighten-2">
                      작품을 승인 하시겠습니까?
                    </v-card-title>
                    <v-divider />
                    <v-spacer></v-spacer>
                    <v-btn block color="primary" text @click="dialog = false">
                      승인
                    </v-btn>
                  </v-card>
                </v-dialog>
              </v-flex>
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
  name: "admin-apply-episode-list",
  data() {
    return {
      episodes: [
        {
          id: 0,
          name: "helloWorld",
          date: "2008.1.3",
          thumbnail: require("../../img/nums/1.png"),
        },
      ],
    };
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
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
