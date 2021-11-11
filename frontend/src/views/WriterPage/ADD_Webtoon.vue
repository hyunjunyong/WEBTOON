<template>
  <!-- 작품 수정 페이지 -->
  <v-container>
    <v-row justify="center">
      <v-col cols="8">
        <v-card class="text-center text-h5">
          작품 등록하기
        </v-card>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="8">
        <v-card class="text-center text-h5">
          작품명
        </v-card>
      </v-col>
    </v-row>

    <v-divider></v-divider>

    <v-row justify="center">
      <v-col cols="2">
        <v-card class="text-center">장르 선택</v-card>
      </v-col>
      <v-col cols="6">
        <v-select
          v-model="selected_tags"
          :items="tags"
          label="Tags"
          filled
          dense
          clearable
          chips
          multiple
        >
          <template v-slot:selection="{ item }">
            <v-chip text-color="black" close @click:close="remove(item)">{{
              item
            }}</v-chip>
          </template>
        </v-select>
      </v-col>
    </v-row>

    <v-divider></v-divider>

    <v-row justify="center">
      <v-col cols="8">
        <v-text-field single-line height="200"> </v-text-field>
      </v-col>
    </v-row>

    <v-divider></v-divider>

    <v-row justify="center">
      <v-col cols="8">
        <v-file-input></v-file-input>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col class="text-center" cols="4">
        <v-btn block>취소</v-btn>
      </v-col>

      <v-col class="text-center" cols="4">
        <v-btn block>수정</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      selected_tags: [],
      tags: ["로맨스", "코미디", "액션", "판타지"],
    };
  },
  setup() {},
  create() {},
  mounted() {},
  unmounted() {},
  methods: {
    remove(item) {
      this.selected_tags.splice(this.selected_tags.indexOf(item), 1);
      this.selected_tags = [...this.selected_tags];
    },
  },
};
</script>
<style scoped></style>
