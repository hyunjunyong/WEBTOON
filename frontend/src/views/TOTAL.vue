<template>
  <v-container class="TOTAL">
    <!-- 장르선택  -->
    <v-row justify="center" no-gutters class="mb-5">
      <v-col cols="12">
        <Genre />
      </v-col>
    </v-row>

    <v-row no-gutters justify="center">
      <!-- <v-col cols="8"> -->
      <Thumbnail :webtoon="i" v-for="i in webtoon" :key="i.id" />
      <!-- </v-col> -->
    </v-row>
  </v-container>
</template>

<script>
import Thumbnail from "../components/Thumbnail";
import Genre from "../components/genre";
import axios from "axios";

export default {
  name: "TOTAL",
  components: {
    Thumbnail,
    Genre,
  },
  created() {
    this.getThumbnails();
  },
  methods: {
    async getThumbnails() {
      await axios
        .get("http://localhost:5000/user/works")
        .then((req) => {
          this.webtoon = req.data;
        })
        .catch((err)=>{
          console.log(err);
        });
    },
  },
  data() {
    return {
      webtoon: {},
    };
  },
};
</script>
