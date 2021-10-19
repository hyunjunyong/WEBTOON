<template>
  <v-container class="TOTAL">
    <v-row>
      <v-col v-for="n in 6" :key="n" cols="2">
        <Thumbnail />
      </v-col>
    </v-row>

    <v-row>
      <v-col v-for="n in 6" :key="n" cols="2">
        <Thumbnail />
      </v-col>
    </v-row>

    <v-row>
      <v-col v-for="n in 6" :key="n" cols="2">
        <Thumbnail />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Thumbnail from "../components/Thumbnail";

export default {
  name: "TOTAL",
  components: {
    Thumbnail,
  },
};
</script>
