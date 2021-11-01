<template>
  <!-- 에피소드 등록 페이지 -->
  <v-container>
    <v-row>
      <v-col>
        <v-card class="text-center text-h4">에피소드 등록하기</v-card>
      </v-col>
    </v-row>
    <editepisode />
  </v-container>
</template>

<script>
import editepisode from "../../components/edit-episode";

export default {
  name: "",
  components: {
    editepisode,
  },
};
</script>
