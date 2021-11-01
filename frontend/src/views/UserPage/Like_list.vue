<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="text-center text-h4">찜한 목록</v-card>
      </v-col>
    </v-row>

    <v-row no-gutters justify="center">
      <v-col cols="auto">
        <v-card
          v-scroll.self="onScroll"
          class="overflow-y-auto"
          max-height="700"
          width="1200"
        >
          <v-banner class="justify-center font-weight-light text-end" sticky>
            <v-btn>작품명</v-btn> | <v-btn>작가명</v-btn>
            <span class="font-weight-bold" v-text="scrollInvoked"></span>
          </v-banner>

          <v-row no-gutters v-for="m in 4" :key="m">
            <v-col v-for="n in 4" :key="n" cols="3">
              <Thumbnail />
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Thumbnail from "../../components/Thumbnail";

export default {
  name: "",
  components: {
    Thumbnail,
  },
};
</script>

<style scoped></style>
