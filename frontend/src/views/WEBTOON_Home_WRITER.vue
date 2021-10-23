<template>
  <v-container fluid>
    <v-row>
      <v-col class="col-7">
        <WriterWebtoonIntro />
        <editthumbnail />
      </v-col>
      <v-col class="col-4">
        <Writerprofile />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import WriterWebtoonIntro from "../components/WriterWebtoon-intro.vue";
import Writerprofile from "../components/Writer-profile.vue";
import editthumbnail from "../components/edit-thumbnail.vue";


export default {
  name: "WEBTOON_Home_WRITER",
  data: () => ({
    //
  }),
  components: {
    editthumbnail,
    WriterWebtoonIntro,
    Writerprofile,
    
  },
};
</script>
<style scoped>

</style>
