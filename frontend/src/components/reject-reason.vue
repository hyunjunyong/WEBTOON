<template>
  <!-- 반려를 진행할때 해당 사유와 함께 체크 -->
  <v-container>
    <v-row>
      <v-col cols="12" sm="12">
        <v-textarea
          v-model="reason"
          class="mx-2"
          label="반려사유작성"
          rows="1"
        ></v-textarea>
      </v-col>
    </v-row>
    <v-row :justify="4">
      <v-col class="text-center">
        <v-btn color="error" block @click="rejectEpisode()">반려</v-btn>
      </v-col>
      <v-col class="text-center">
        <v-btn
          class="white--text"
          color="indigo"
          block
          @click="approveEpisode()"
          >승인</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "",
  components: {},

  data() {
    return {};
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>
<style scoped></style>
