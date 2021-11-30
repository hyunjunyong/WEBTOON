<template>
  <!-- 
    작가가 자신이 등록한 에피소드의 승인반려상태를 확인할 수 있는 리스트
    
 -->
  <v-card max-height="600">
    <v-banner class="justify-center white text-end" sticky>
      <router-link style="text-decoration:none" to="/add/episode">
        <v-btn class="ma-2" color="#388E3C" dark>
          에피소드 추가
          <v-icon dark>
            mdi-plus
          </v-icon>
        </v-btn>
      </router-link>
      <!-- <span class="font-weight-bold" v-text="scrollInvoked"></span> -->
    </v-banner>

    <v-list>
      <template v-for="episode in webtoon.episode">
        <v-list-item @click="useRouter(episode.id)" :key="episode.id">
          <v-btn dark small color="green" width="50" height="50">
            <v-icon dark>mdi-pencil</v-icon></v-btn
          >
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
        </v-list-item>
        <v-divider :key="episode.id"></v-divider>
      </template>
    </v-list>
  </v-card>
</template>

<script>
import axios from 'axios';

export default {
  name: 'episodeList',
  data() {
    return {
      webtoons: [
        {
          id: 1,
          name: 'helloWorld',
          date: '2008.1.3',
          thumbnail: require('../../img/nums/1.png'),
        },
        {
          id: 2,
          name: 'helloWorld',
          date: '2008.1.3',
          thumbnail: require('../../img/nums/2.png'),
        },
      ],
    };
  },
  props: {
    episodes: Object,
  },
  methods: {
    useRouter(index) {
      this.$router.push({
        name: 'Episode',
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
        .get('http://localhost:5000/', {}, { withCredentials: true })
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
