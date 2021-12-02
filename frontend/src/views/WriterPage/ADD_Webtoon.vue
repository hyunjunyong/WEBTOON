<template>
  <!-- 작가 등록 시 작품 등록 페이지 -->
  <div id="background">
    <v-container>
      <v-row justify="center" class="my-10">
        <v-col cols="auto">
          <v-card elevation="0" width="600">
            <v-toolbar flat>
              <v-spacer></v-spacer>
              <v-toolbar-title class="font-weight-bold pt-3"
                >작품 등록</v-toolbar-title
              >
              <v-spacer></v-spacer>
            </v-toolbar>

            <!-- 작품명 작성  -->
            <v-row>
              <v-col cols="4" class="d-flex text-center">
                <v-card elevation="0" class="ma-auto"
                  >작품명<br />(20자 이내)</v-card
                >
              </v-col>
              <v-col cols="6">
                <v-text-field v-model="title" :counter="20" required>
                </v-text-field>
              </v-col>
            </v-row>

            <!-- 장르 선택 -->
            <v-row>
              <v-col cols="4" class="d-flex text-center">
                <v-card elevation="0" class="ma-auto">장르 선택</v-card>
              </v-col>
              <v-col cols="6">
                <v-row justify="center" class="pa-1">
                  <v-chip-group column active-class="primary--text">
                    <v-chip
                      :item="n"
                      v-for="n in $store.state.genre"
                      :key="n.id"
                      outlined
                      @change="genreGetId(n)"
                    >
                      {{ n.name }}
                      <!-- <Genre
                    v-model="n.id"
                    :item="n"
                    v-for="n in $store.state.genre"
                    :key="n.id"
                    @change="genreGetId(n)"
                  />  -->
                    </v-chip>
                  </v-chip-group>
                </v-row>
              </v-col>
            </v-row>

            <!-- 작품 소개 작성 -->
            <v-row>
              <v-col cols="4" class="d-flex text-center">
                <v-card elevation="0" class="ma-auto"
                  >작품 소개글<br />(100자 이상)</v-card
                >
              </v-col>

              <v-col cols="6">
                <v-textarea
                  v-model="workDescription"
                  required
                  height="100"
                  counter
                  single-line
                  full-width
                  dense
                  filled
                >
                </v-textarea>
              </v-col>
            </v-row>

            <!-- 작품 썸내일 올리기 -->
            <v-row class="mb-5">
              <v-col cols="4" class="d-flex text-center">
                <v-card elevation="0" class="ma-auto"
                  >작품 썸내일<br />(260px * 260px)</v-card
                >
              </v-col>

              <v-col cols="6">
                <v-file-input
                  id="Thumbnail"
                  show-size
                  counter
                  truncate-length="50"
                  @change="onFileChange"
                ></v-file-input>
                <v-img
                  v-if="url"
                  :src="url"
                  max-height="260px"
                  max-width="260px"
                />
              </v-col>
            </v-row>

            <!-- 등록 / 취소 버튼 -->
            <v-row>
              <v-spacer></v-spacer>
              <v-col>
                <v-btn
                  depressed
                  rounded
                  block
                  color="primary"
                  @click="register_Webtoon"
                >
                  등록</v-btn
                >
              </v-col>
              <v-spacer></v-spacer>
              <v-col>
                <router-link
                  to="/writer_home_writer"
                  style="text-decoration:none"
                >
                  <v-btn depressed rounded block>
                    취소
                  </v-btn>
                </router-link>
              </v-col>
              <v-spacer></v-spacer>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-dialog v-model="dialog" persistent width="300">
      <v-card color="primary" dark>
        <v-card-text>
          Please stand by
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
// import Genre from '../../components/genre.vue';
import axios from 'axios';
import router from '../../router/index';
export default {
  name: '',
  data() {
    return {
      url: null,
      workDescription: '',
      title: '',
      genreId: null,
      dialog: false,
    };
  },
  props: [],
  components: {
    // Genre,
  },
  mounted() {
    axios
      .get('http://localhost:5000/genre', { withCredentials: true })
      .then((response) => {
        // this.genre = response.data;
        this.$store.state.genre = response.data;
      });
  },
  methods: {
    onFileChange(e) {
      const file = e;
      this.url = URL.createObjectURL(file);
    },
    genreGetId(n) {
      //console.log(n.id);
      this.genreId = n.id;
    },
    register_Webtoon() {
      this.dialog = true;
      let form = new FormData();
      var workThumbnail = document.getElementById('Thumbnail');
      const writer_info = {
        genreId: this.genreId,
        // userId: this.$store.state.userInfo.id,
        workDescription: this.workDescription,
        title: this.title,
      };
      // console.log("사용자id : " + this.$store.state.userInfo.id);
      //console.log(writer_info);

      form.append('workThumbnail', workThumbnail.files[0]);
      form.append('workInfo', JSON.stringify(writer_info));

      axios
        .post('http://localhost:5000/writer/work', form, {
          withCredentials: true,
        })
        .then(() => {
          //console.log(respon);
          alert('정상적으로 등록되었습니다.');
          router.push('/writer_home_writer');
        })
        .then(() => {
          this.dialog = false;
        })
        .catch((err) => {
          console.error(err);
          alert('정보가 기입되지 않았습니다.');
        });
    },
  },
};
</script>

<style>
#background {
  background-color: #eeeeee;
  height: 100%;
}
html {
  overflow-y: auto;
}
</style>
