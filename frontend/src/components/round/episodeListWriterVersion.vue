<template>
  <!-- 
    작가가 자신이 등록한 에피소드의 승인반려상태를 확인할 수 있는 리스트
    
 -->
  <v-card fluid>
    <v-row v-for="episode in webtoons" :key="episode">
      <v-col class="col-3">
        <v-img :src="episode.thumbnail" width="150" height="150" />
      </v-col>

      <v-col class="col-7">
        <v-card>{{ episode.name }} | {{ episode.date }}</v-card>
      </v-col>

      <v-col class="col-1">
        <v-flex xs1>
          <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                class="col-1"
                dark
                small
                color="green"
                height="150"
                v-bind="attrs"
                v-on="on"
                >{{ toon.state }}</v-btn
              >
            </template>

            <v-card>
              <v-card-title class="text-h5 grey lighten-2">
                작품 반려 사유
              </v-card-title>

              <v-card-text height="40"> 사유 <br />작품 중복 </v-card-text>

              <v-divider />

              <v-spacer></v-spacer>

              <v-btn block color="primary" text @click="dialog = false">
                확인
              </v-btn>
            </v-card>
          </v-dialog>
        </v-flex>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  name: "episodeList",
  data() {
    return {
      webtoons: [
        {
          id: 1,
          name: "helloWorld",
          date: "2008.1.3",
          thumbnail: require("../../img/nums/1.png"),
        },
        {
          id: 2,
          name: "helloWorld",
          date: "2008.1.3",
          thumbnail: require("../../img/nums/2.png"),
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
