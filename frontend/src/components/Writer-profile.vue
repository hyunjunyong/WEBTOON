<template>
  <!-- 작가 프로필 -->
  <v-row class="justify-end">
    <v-col align="center" cols="2">
      <v-img
        :src="writerHomeInfo.authorAvatar"
        alt=""
        style="border-radius:70%"
        max-width="160px"
        max-height="160px"
      />
    </v-col>
    <v-col cols="10">
      <v-card elevation="0" class="mb-3">
        <v-card-title>{{ writerHomeInfo.authorName }}</v-card-title>
        <v-card-text>{{ writerHomeInfo.authorDescription }}</v-card-text>
      </v-card>
    </v-col>
  </v-row>
  <!-- 상단배너 썸네일 업로드 하는 배너 -->
</template>

<script>
// import Modal from "../components/modal.vue";
export default {
  name: "Writer_profile",
  components: {
    // Modal,
  },
  props: {
    writerHomeInfo: Object,
  },
  data() {
    return {
      showModal: false,
    };
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    },
  },
};
</script>

<style lang="scss" scoped></style>
