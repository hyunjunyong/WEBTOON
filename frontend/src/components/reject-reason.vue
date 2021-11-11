<template>
  <!-- 반려를 진행할때 해당 사유와 함께 체크 -->
  <v-container>
    <v-row>
      <v-col cols="12" sm="12">
        <v-col>
          <v-text-field
            :counter="50"
            label="에피소드명"
            required
            v-model="episodeName"
            id="episodeName"
            maxlength="50"
          >
          </v-text-field
          ><v-text-field
            :counter="50"
            label="에피소드내용"
            required
            v-model="episodeDescription"
            id="episodeName"
            maxlength="50"
          >
          </v-text-field
          ><v-text-field
            :counter="50"
            label="에피소드명"
            required
            v-model="episodeName"
            id="episodeName"
            maxlength="50"
          >
          </v-text-field>
        </v-col>
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
