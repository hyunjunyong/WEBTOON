<template>
  <!-- 웹툰 썸네일 컴포넌트 -->
  <v-container>
    <router-link to="/webtoon_home">
      <v-card v-on:click="testF">
        <v-img max-height="260" max-weight="260" contain :src="webtoon.url" />

        <v-card-title class="ma-1">
          {{ webtoon.title }}
        </v-card-title>

        <v-card-subtitle>
          <v-row align="center" class="ma-1">
            <div>{{ testData }}</div>
          </v-row>
        </v-card-subtitle>
      </v-card>
    </router-link>
  </v-container>
</template>

<script>
export default {
  name: "Thumbnail",
  props: {
    webtoon: Object,
  },
  data() {
    return {
      testData: "작가A",
    };
  },
  methods: {
    testF: function() {
      this.testData = "abc";
    },
  },
  mount() {},
};
</script>
