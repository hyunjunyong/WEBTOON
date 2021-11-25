<template>
  <!-- 
  작가의 작품리스트를 출력함.
  /writer에서 사용됨
  해당 작품홈으로 이동해야함
-->
  <v-card class="overflow-y-auto" max-height="600">
    <v-banner class="justify-center white" sticky>
      <h3>작가의 작품</h3>
      <v-btn @click="webtoons.sort(title_Order)" color="black" text>
        제목순
      </v-btn>
      /
      <v-btn @click="webtoons.sort(date_Order)" color="black" text>
        날짜 순
      </v-btn>
      <!-- <span class="font-weight-bold" v-text="scrollInvoked"></span> -->
    </v-banner>

    <v-card-text>
      <v-list height="200px">
        <template v-for="webtoon in webtoons" @click="useRouter(webtoon.id)">
          <v-list-item
            @click="useRouter(episode.id)"
            :key="webtoon.id"
            height="100px"
          >
            <v-list-item-avatar
              width="200px"
              height="100px"
              style="border-radius:5px;"
            >
              <v-img :src="webtoon.thumbnail" />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title
                ><h3>
                  {{ webtoon.name }}
                </h3></v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-divider :key="webtoon.id" :inset="inset"></v-divider>
        </template>
      </v-list>
      <!-- <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">
                이미지
              </th>
              <th class="text-left">
                작품명
              </th>
              <th class="text-right">
                등록일
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="webtoon in webtoons"
              :key="webtoon.id"
              @click="useRouter(webtoon.id)"
            >
              <td>
                <v-img :src="webtoon.thumbnail" width="50" height="50" />
              </td>
              <td>{{ webtoon.name }}</td>
              <td class="text-right">{{ webtoon.date }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table> -->
    </v-card-text>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  name: "webtoonList",
  data() {
    return {
      webtoons: [
        {
          id: 1,
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
        name: "WEBTOON_HOMR",
        params: {
          id: index,
        },
      });
    },
    getWebtoonList() {
      //해당 작가의 작품 리스트를 받아서
      //data의 webtoon에 넣어야함...
      //던져줄 데이터는 작가 id
      //받는 데이터는 {작품id, 작품 이름, 작품 썸네일, 작품 승인날짜}
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
