<v-card
  v-if="webtoon_round_State == 1"
  class="overflow-y-auto"
  max-height="600"
>
      <v-banner class="justify-center white text-end" sticky>
        <v-btn @click="webtoons.sort(round_Order)" color="black" text>
          최신화부터
        </v-btn>
        /
        <v-btn
          @click="webtoons.sort(date_Order)"
          color="black"
          text
          class="ml-4"
        >
          1화부터
        </v-btn>
        <!-- <span class="font-weight-bold" v-text="scrollInvoked"></span> -->
      </v-banner>

      <v-card-text>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                  <th class="text-left">
                      수정 버튼</th>
                <th class="text-left">
                  이미지
                </th>
                <th class="text-left">
                  화 | 등록일
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(toon, index) in webtoons" :key="index">
                  <td>
                      <v-btn dark small color="green" height="100">
              <v-icon dark>mdi-pencil</v-icon></v-btn
            >
                  </td>
                <td>
                  <router-link to="/webtoon_home_writer"
                    ><v-img :src="toon.url" width="50" height="50"
                  /></router-link>
                </td>
                <td>
                  <router-link
                    to="/webtoon_home_writer"
                    style="text-decoration: none; color: inherit;"
                    >{{ toon.round }} | {{ toon.date }}</router-link
                  >
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card-text>
    </v-card>
