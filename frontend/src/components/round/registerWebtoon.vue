<template>
  <v-container>
    <v-row justify="center">
      <v-col>
        <v-card elevation="0">
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>

          <v-data-table
            :headers="webtoonHeaders"
            :items="webtoonList"
            :search="search"
            :items-per-page="10"
            @click:row="useRouter"
          >
            <template v-slot:item.createdAt="{ item }">
              {{ item.createdAt.slice(0, 10) }}
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'admin-apply-episode-list',
  data() {
    return {
      search: '',
      webtoonList: [],
      webtoonHeaders: [
        {
          text: '썸내일',
          align: 'start',
          sortable: false,
          value: '',
        },
        { text: '작품명', value: '' },
        { text: '에피소드명', value: '' },
        { text: '날짜', value: 'createdAt' },
        { text: '상태', value: '' },
      ],
    };
  },
  methods: {
    useRouter(webtoon) {
      console.log(webtoon);
      this.$router.push({
        name: 'Episode',
        params: { id: webtoon },
      });
    },
    getEpisodeList() {
      //해당 작품의 에피소드 리스트를 받아서
      //data의 webtoon에 넣어야함...
      //던져줄 데이터는 작품 id
      //받는 데이터는 {episode id, episode 이름, episode 썸네일, episode 승인날짜, episode apply}
      axios
        .get('http://localhost:5000/', {}, { withCredentials: true })
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
