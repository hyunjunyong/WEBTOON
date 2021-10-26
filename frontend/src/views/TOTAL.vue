<template>
  <v-container class="TOTAL">
    <v-col>
      <Genre />
    </v-col>
    <v-row v-for="m in 4" :key="m" no-gutters>
      <v-col v-for="n in 6" :key="n" cols="2">
        <Thumbnail />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Thumbnail from "../components/Thumbnail";
import Genre from "../components/genre";

export default {
  name: "TOTAL",
  components: {
    Thumbnail,
    Genre,
  },
};
</script>

