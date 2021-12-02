<template>
  <v-container class="TOTAL">
    <!-- 장르선택  -->
    <v-row justify="center">
      <v-col cols="8" class="ma-5">
        <v-row justify="center">
          <v-chip-group v-model="selection" active-class="primary white--text">
            <v-chip
              :item="n"
              v-for="n in genre"
              :key="n.id"
              :input-value="active"
              @click="genreSort(n.id)"
            >
              <!-- @click="$emit('change')" -->
              {{ n.name }}
            </v-chip>
          </v-chip-group>
          <!-- <Genre :item="n" v-for="n in genre" :key="n.id" /> -->
        </v-row>
      </v-col>
    </v-row>

    <v-row no-gutters justify="center">
      <v-col cols="8">
        <Thumbnail :webtoonState="4" :webtoons="webtoons" :h="200" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Thumbnail from '../components/Thumbnail';
// import Genre from '../components/genre';
import axios from 'axios';
// import { mapGetters } from 'vuex';
//import store from "../store/index";

export default {
  name: 'TOTAL',
  components: {
    Thumbnail,
    // Genre,
  },
  created() {
    // this.getThumbnails();
    axios.get('http://localhost:5000/genre').then((response) => {
      // this.genre = response.data;

      this.genre = response.data;
    });
    axios.get(`http://localhost:5000/works`).then((res) => {
      this.webtoons = res.data;
      // console.log(res.data);
    });
  },
  data() {
    return {
      genre: [],
      webtoons: null,
      active: false,
      selection: null,
    };
  },
  computed: {
    // ...mapGetters({ webtoonThumbnails: 'getWebtoonThumbnails' }),
  },
  methods: {
    genreSort(index) {
      if (this.active == false) {
        this.active = true;
        axios
          .get(`http://localhost:5000/works?genreId=${index}`)
          .then((res) => {
            this.webtoons = res.data;
          });
      } else {
        this.active = false;
        axios.get(`http://localhost:5000/works`).then((res) => {
          this.webtoons = res.data;
        });
      }
    },
  },
};
</script>
