<template>
  <!-- 반려를 진행할때 해당 사유와 함께 체크 -->
  <v-container>
    <v-row>
      <v-col cols="12" sm="12">
        <v-col> </v-col>
        <v-text-field label="Solo" single-line solo height="300">
          반려사유작성
        </v-text-field>
      </v-col>
    </v-row>
    <v-row :justify="4">
      <v-col class="text-center">
        <v-btn block>반려</v-btn>
      </v-col>
      <v-col class="text-center">
        <v-btn block>승인</v-btn>
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
  create() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>
<style scoped></style>
