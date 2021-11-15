<template>
 <div id="background">
  <v-container>
    <!-- 장르 추가  -->
    <v-row justify="center" no-gutters mb="5">
      <v-col cols="8">
        <v-card elevation="0" >
          <v-toolbar flat>
             <v-spacer></v-spacer>
            <v-toolbar-title class="text-h4 font-weight-bold">장르 추가</v-toolbar-title>
             <v-spacer></v-spacer>
          </v-toolbar>

          <div class="pa-3"> 
            <Genre />
          </div>

    <v-row justify="center" >
      <v-col cols="5">
        <v-text-field
          v-model="genre"
          label="신규 장르 작성"
          color="primary"
          outlined
          rounded
          required
          filled
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row justify="center" class="pa-3">
        <v-spacer></v-spacer>
    <v-btn
      depressed
      x-large
      color="primary"
      @click="addgenre"
    >
      추가
    </v-btn>
        <v-spacer></v-spacer>
    <v-btn
      depressed
      x-large
      color="gray"
    >
      취소
    </v-btn>
        <v-spacer></v-spacer>
    </v-row>
        </v-card>
      </v-col>
    </v-row>

  </v-container>
 </div>
</template>

<script>
import Genre from "../components/genre";

export default {
  name: "",
  components: {
    Genre,
  },
  data: () => ({
    genre: '',
  }),
  methods: {
    addgenre () {

    },
  },
}
</script>

<style>
#background {
  background-color: #EEEEEE;
  height: 100%;
}
 html { overflow-y: auto }
</style>
