<template>
  <!-- 작가 프로필 -->
  <v-row justify="center">
    <v-col>
      <v-card>
        <v-row>
          <v-col align="center">
            <router-link to="/writer">
              <v-avatar>
                <v-img
                  :aspect-ratio="1"
                  src="../img/writer_profile.png"
                  max-width="110px"
                  max-height="110px"
                />
              </v-avatar>
            </router-link>
          </v-col>
        </v-row>
        <v-row>
          <v-col align="center">
            <v-img
              src="../img/setting.png"
              height="30px"
              width="30px"
            /> </v-col
          ><v-col align="center">
            <v-btn icon color="deep-orange" @click="increment">
              <v-icon>mdi-thumb-up</v-icon>{{ count }}
            </v-btn>
          </v-col>
        </v-row>
        <v-card-title class="cyan darken-1">
          <router-link
            to="/writer"
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
</template>

<script>
export default {
  name: "Writer_profile",
  data() {
    return {};
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    },
  },
};
</script>

<style lang="scss" scoped></style>
