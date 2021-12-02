<template>
  <!-- 
    작가가 자신이 등록한 에피소드의 승인반려상태를 확인할 수 있는 리스트
    
 -->
  <v-card elevation="0" max-height="1200">
    <v-banner class="justify-space-around white" sticky>
      총 {{ webtoons.episodeCounts }}화
      <template v-slot:actions>
        <router-link style="text-decoration:none" to="/add/episode">
          <v-btn class="ma-2" color="green" dark rounded>
            에피소드 추가
            <v-icon dark>
              mdi-plus
            </v-icon>
          </v-btn>
        </router-link>
      </template>
    </v-banner>

    <v-list>
      <template v-for="index in webtoons.episode">
        <v-list-item @click="useRouter(index.id)" :key="index.id" three-line>
          <v-list-item-avatar
            style="border-radius:10px"
            width="150px"
            height="100px"
            aspect-ratio="1"
          >
            <v-img :src="index.episodeThumbnailUrl" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>
              <h2>
                {{ index.episodeName }}
              </h2>
            </v-list-item-title>

            <v-list-item-subtitle>
              <v-card color="transparent">
                {{ index.episodeDescription }}
              </v-card>
            </v-list-item-subtitle>

            <v-list-item-subtitle>
              {{ index.updatedAt.slice(0, 10) }}
            </v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-chip v-if="index.episodeStatus === 'approved'" color="blue" dark>
              승인 완료
            </v-chip>
            <v-chip v-if="index.episodeStatus === 'declined'" color="red" dark>
              승인 반려
            </v-chip>
            <v-chip
              v-if="index.episodeStatus === 'panding'"
              color="yellow"
              dark
            >
              승인 대기중
            </v-chip>
          </v-list-item-action>
        </v-list-item>
        <v-divider :key="'divider' + index.id"></v-divider>
      </template>
    </v-list>
  </v-card>
</template>

<script>
import axios from 'axios';

export default {
  name: 'episodeList',
  data() {
    return {};
  },
  props: {
    webtoons: Object,
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
