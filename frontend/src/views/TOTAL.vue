<template>
  <v-container class="TOTAL">
    <!-- 장르선택  -->
    <v-row no-gutters justify="center">
      <Genre :item="n" v-for="n in genre" :key="n.id" />
    </v-row>

    <v-row no-gutters justify="center">
      <v-col cols="8">
        <TestThumbnail
          :webtoonState="4"
          :webtoon="webtoonThumbnails"
          :h="200"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TestThumbnail from "../components/TestThumbnail";
import Genre from "../components/genre";
import axios from "axios";
import { mapGetters } from "vuex";
//import store from "../store/index";

export default {
  name: "TOTAL",
  components: {
    TestThumbnail,
    Genre,
  },
  created() {
    // this.getThumbnails();
    axios.get("http://localhost:5000/genre").then((response) => {
      // this.genre = response.data;
      this.genre = response.data;
    });
  },

  methods: {},
  data() {
    return {
      genre: [],
    };
  },
  computed: {
    ...mapGetters({ webtoonThumbnails: "getWebtoonThumbnails" }),
  },
};
</script>
