<template>
  <!-- 작가홈의 에피소드 화수를 표현하는 컴포넌트 
    /webtoon에 들어감
  -->
  <v-card elevation="0" max-height="1200">
    <v-banner sticky>
      총 {{ webtoon.episodeCounts }}화
      <template v-slot:actions>
        <v-btn
          v-if="sortToggle === 'desc'"
          @click="SortToggleBtn()"
          color="black"
          text
        >
          첫화부터
        </v-btn>
        <v-btn
          v-if="sortToggle === 'asc'"
          @click="SortToggleBtn()"
          color="black"
          text
        >
          최신화부터
        </v-btn>
      </template>
      <!-- <span class="font-weight-bold" v-text="scrollInvoked"></span> -->
    </v-banner>

    <v-list>
      <template v-for="episode in webtoon.episode">
        <v-list-item
          @click="useRouter(episode.id)"
          :key="episode.id"
          three-line
        >
          <v-list-item-avatar
            style="border-radius:10px"
            width="150px"
            height="100px"
            aspect-ratio="1"
          >
            <v-img :src="episode.episodeThumbnailUrl" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title
              ><h2>
                {{ episode.episodeName }}
              </h2></v-list-item-title
            >

            <v-list-item-subtitle>
              <v-card color="transparent">
                {{ episode.episodeDescription }}
              </v-card>
            </v-list-item-subtitle>

            <v-list-item-subtitle>
              {{ episode.updatedAt.slice(0, 10) }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider :key="'divider' + episode.id"></v-divider>
      </template>
    </v-list>
  </v-card>
</template>

<script>
import axios from 'axios';

export default {
  name: 'EpisodeList',
  props: {
    webtoon: Object,
  },
  data() {
    return {
      // 최신화,1화부터 변수
      sortToggle: 'desc',
      webtoons: this.webtoon,
    };
  },
  created() {
    // this.getEpisodeList();
  },
  mounted() {},
  computed: {},
  methods: {
    // 최신화,1화부터 버튼
    SortToggleBtn() {
      if (this.sortToggle === 'desc') {
        this.sortToggle = 'asc';
      } else {
        this.sortToggle = 'desc';
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
    useRouter(index) {
      this.$router.push({
        name: 'Episode',
        params: {
          id: index,
        },
      });
    },
  },
};
</script>
