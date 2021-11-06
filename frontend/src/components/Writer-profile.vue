<template>
  <!-- 작가 프로필 -->
  <v-row justify="center">
    <v-col>
      <v-card>
        <v-row>
          <v-col align="center">
            <router-link to="/writer">
              <v-img
                :aspect-ratio="1"
                src="../img/writer_profile.png"
                max-width="110px"
                max-height="110px"
              /> </router-link
          ></v-col>
        </v-row>
        <v-row>
          <v-col align="center">
            <v-img
              src="../img/setting.png"
              height="30px"
              width="30px"
            /> </v-col
          ><v-col align="center">
            <v-img
              class="align-self-end"
              src="../img/like.png"
              height="30px"
              width="30px"
          /></v-col>
        </v-row>
        <v-card-title class="cyan darken-1">
          <router-link
            to="/writer_home"
            style="text-decoration: none; color: inherit;"
            ><span>작가 A</span></router-link
          >

          <v-spacer></v-spacer>
        </v-card-title>

        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title
                ><p>눈내리는 소리 연재</p>
                2020-04-05
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>획득뱃지</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-img src="../img/badge.png" alt="" height="30px" width="30px" />
        </v-list>
      </v-card>
    </v-col>
  </v-row>
  <!-- <v-container fluid>
    <v-row>
      <v-col>
        <v-img src="../img/setting.png" height="40px" width="40px" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="justify-space-between align-center">
          <router-link to="/writer">
            <v-img :aspect-ratio="1" src="../img/writer_profile.png" />
          </router-link>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-img
          class="align-self-end"
          src="../img/like.png"
          alt=""
          height="40px"
          width="40px"
        />
      </v-col>
    </v-row>
    <v-row>
      <router-link
        to="/writer_home"
        style="text-decoration: none; color: inherit;"
        ><p>작가A</p></router-link
      >
      
      <p>획득뱃지</p>
      <v-col class="pt-0">
        <v-img src="../img/badge.png" alt="" height="65px" width="65px" />
      </v-col>
    </v-row>
  </v-container> -->
</template>

<script>
export default {
  name: "Writer_profile",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
