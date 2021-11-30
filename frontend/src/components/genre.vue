<template>
  <!--  장르 선택 컴포넌트 -->
  <v-chip-group active-class="primary--text">
    <v-chip filter outlined @click="$emit('change')">
      {{ item.name }}
    </v-chip>
  </v-chip-group>
</template>

<script>
export default {
  name: "Genre",
  props: {
    item: Object,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
