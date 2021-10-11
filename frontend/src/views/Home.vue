<template>
  <v-for>
    <Thumbnail />
  </v-for>
</template>

<script>
import Thumbnail from "../components/Thumbnail";

export default {
  name: "Home",

  components: {
    Thumbnail,
  },
};
</script>
