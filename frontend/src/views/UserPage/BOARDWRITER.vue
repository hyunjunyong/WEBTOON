<template>
  <v-container>
    <v-col>
      <v-card class="text-center text-h4">1 : 1 문의</v-card>
    </v-col>
    <listwriter />

    <v-row justify="center">
      <v-spacer></v-spacer>
      <router-link to="/Boardlist">
        <v-btn> 취소 </v-btn>
      </router-link>
      <v-spacer></v-spacer>
      <router-link to="/Boardlist">
        <v-btn> 등록 </v-btn>
      </router-link>
      <v-spacer></v-spacer>
    </v-row>
  </v-container>
</template>

<script>
import listwriter from "../../components/list-writer";

export default {
  name: "Boardwriter",
  components: {
    listwriter,
  },
};
</script>
