<template>
  <v-container>
    <v-card>
      <v-list-item v-for="index in one" :key="index.idx" class="text-center">
        <v-list-item-content>
          <v-list-item-title
            >{{ index.title }} | {{ index.date }} |
            {{ index.name }}</v-list-item-title
          >
          <v-divider />
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      one: [
        { idx: 1, title: "글제목", date: "2016/01/12", name: "현준용" },
        { idx: 2, title: "글제목", date: "2016/01/12", name: "현준용" },
        { idx: 3, title: "글제목", date: "2016/01/12", name: "현준용" },
        { idx: 4, title: "글제목", date: "2016/01/12", name: "현준용" },
        { idx: 5, title: "글제목", date: "2016/01/12", name: "현준용" },
      ],
    };
  },
  setup() {},
  create() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>
<style scoped></style>
