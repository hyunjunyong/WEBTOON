<template>
  <!-- 에피소드 등록 페이지 -->
  <v-container>
    <v-row>
      <v-col>
        <v-card class="text-center text-h4">에피소드 등록하기</v-card>
      </v-col>
    </v-row>
    <v-container>
      <v-row>
        <v-spacer></v-spacer>
        <v-col cols="6">
          <v-text-field
            :counter="50"
            label="에피소드명"
            required
            v-model="episodeName"
            id="episodeName"
            maxlength="50"
          >
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-divider></v-divider>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" sm="12">
          <v-row dense>
            <v-textarea
              filled
              hint="에피소드 내용을 입력해주세요."
              v-model="episodeDescription"
              id="episodeDescription"
              :counter="1000"
              maxlength="1000"
            >
            </v-textarea>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-divider></v-divider>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-file-input
            id="thumbnail"
            truncate-length="15"
            class="align-center"
          ></v-file-input>
        </v-col>
        <v-col>
          <v-file-input
            id="episodeI"
            truncate-length="15"
            class="align-center"
            multiple
          ></v-file-input>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-spacer></v-spacer>
        <router-link to="/webtoon_home_writer">
          <v-btn> 취소 </v-btn>
        </router-link>
        <v-spacer></v-spacer>
        <!-- <router-link to="/webtoon_home_writer"> -->
        <v-btn @click="add_Episode()"> 등록 </v-btn>
        <!-- </router-link> -->
        <v-spacer></v-spacer>
      </v-row>
    </v-container>
    <!-- <editepisode /> -->
  </v-container>
</template>

<script>
import axios from "axios";
// import editepisode from "../../components/edit-episode";

export default {
  name: "",
  components: {
    // editepisode,
  },
  data() {
    return {
      episode_info: { episodeName: "1234", episodeDescription: "1234" },
    };
  },
  methods: {
    add_Episode() {
      let form = new FormData();

      var thumbnail = document.getElementById("thumbnail");
      var episodeI = document.getElementById("episodeI");

      const writer_info = {
        workId: "5",
        episodeOrder: "1",
        episodeName: this.episodeName,
        episodeDescription: this.episodeDescription,
      };

      for (let file of episodeI.files) {
        console.log(file);
        form.append("episodeImages", file, file.name);
      }
      form.append("episodeThumbnail", thumbnail.files[0]);
      form.append("episodeInfo", JSON.stringify(writer_info));
      console.log(form);
      axios
        .post("http://localhost:5000/user/upload-episode", form, {
          withCredentials: true,
        })
        .then((respon) => {
          console.log(respon);
        })
        .catch((err) => {
          console.err(err);
        });
      console.log(writer_info);
    },
  },
};
</script>
