<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-btn
          class="mx-2"
          fab
        >
        <!-- header show btn -->
          <v-icon dark>
                mdi-format-list-bulleted-square
          </v-icon>
        </v-btn>
      </v-col>
      <v-col class="col-6"><Webtoonimage/></v-col>
      <!-- webtoon viewer -->
      <v-col>
        <v-btn
          to="/"
          depressed
          elevation="5"
          fab
          large
          class="float-right"
          
        >
        <!-- home btn -->
          <v-icon dark>
            mdi-home
            </v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Webtoonimage from "../components/Webtoon-image";

export default {
  name: "VIEWER",
  data: () => ({
    //
  }),
  components: {
    Webtoonimage,
  },
  method: {
   
  },
};
</script>

<style lang="scss" scoped>

</style>