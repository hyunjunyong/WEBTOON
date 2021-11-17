<template>
  <!--  장르 선택 컴포넌트 -->
  <v-col>
    <v-card elevation="0">
      <!-- <v-btn @click="$emit('change')" outlined color="secondary" rounded>
        {{ item.name }}
      </v-btn> -->
      <v-chip-group column multiple>
        <v-chip filter outlined @click="$emit('change')">
          {{ item.name }}
        </v-chip>
      </v-chip-group>
    </v-card>
  </v-col>
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
