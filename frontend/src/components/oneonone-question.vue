<template>
  <v-container>
    <v-card v-for="index in one" :key="index" class="text-center"
      >{{ index.title }} | {{ index.date }} | {{ index.name }}</v-card
    >
  </v-container>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      one: [
        { title: "글제목", date: "2016/01/12", name: "현준용" },
        { title: "글제목", date: "2016/01/12", name: "현준용" },
        { title: "글제목", date: "2016/01/12", name: "현준용" },
        { title: "글제목", date: "2016/01/12", name: "현준용" },
        { title: "글제목", date: "2016/01/12", name: "현준용" },
        { title: "글제목", date: "2016/01/12", name: "현준용" },
        { title: "글제목", date: "2016/01/12", name: "현준용" },
        { title: "글제목", date: "2016/01/12", name: "현준용" },
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
