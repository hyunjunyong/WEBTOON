<template>
  <!-- 에피소드 등록 -->
  <v-container>
    <v-row>
      <v-col cols="4">
        <v-text-field
          :counter="30"
          label="작품명"
          name="title"
          required
          v-model="title"
          maxlength="30"
        >
        </v-text-field>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="6">
        <v-text-field
          :counter="50"
          label="에피소드명"
          name="title"
          required
          v-model="title"
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
            name="context"
            hint="에피소드 내용을 입력해주세요."
            v-model="context"
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
      <router-link to="/webtoon_home_writer">
        <v-btn> 등록 </v-btn>
      </router-link>
      <v-spacer></v-spacer>
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
