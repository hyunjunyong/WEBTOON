<template>
 <div id="background">
  <v-container>
    <!-- 장르 수정  -->
    <v-row justify="center" no-gutters mb="5">
      <v-col cols="8">
        <v-card elevation="0" >
          <v-toolbar flat>
             <v-spacer></v-spacer>
            <v-toolbar-title class="text-h4 font-weight-bold">장르 수정</v-toolbar-title>
             <v-spacer></v-spacer>
          </v-toolbar>

                <v-flex xs1>
                  <v-dialog v-model="dialog" width="500">
                    <template v-slot:activator="">
                        <Genre :item="n" v-for="n in genre" :key="n.id" />
                    </template>

                    <v-card>
                      <v-card-title class="text-h6 grey lighten-2">
                        작품을 승인 하시겠습니까?
                      </v-card-title>
                      <v-divider />
                      <v-spacer></v-spacer>
                      <v-btn block color="primary" text @click="dialog = false">
                        승인
                      </v-btn>
                    </v-card>
                  </v-dialog>
                </v-flex>


      <!-- 장르 수정 -->
     <v-row justify="center"> 
      <v-col cols="3" class="d-flex align-center  text-center text-h6">
        <v-card elevation="0" class="ma-auto">수정 장르</v-card>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="4" class="mt-8">
        <v-text-field
          v-model="addGenre"
          label="추가할 장르 작성"
          color="primary"
          outlined
          rounded
          required
          filled >
        </v-text-field>
      </v-col>
      <v-col cols="4" class="ma-auto">
        <v-btn
         depressed
         x-large
         color="primary"
         @click="addElement"
        >
        추가
        </v-btn>
      </v-col>
     </v-row>

      <!-- 신규 장르 작성 -->
     <v-row justify="center"> 
      <v-col cols="3" class="d-flex align-center  text-center text-h6">
        <v-card elevation="0" class="ma-auto">신규 장르</v-card>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="4" class="mt-8">
        <v-text-field
          v-model="addGenre"
          label="추가할 장르 작성"
          color="primary"
          outlined
          rounded
          required
          filled >
        </v-text-field>
      </v-col>
      <v-col cols="4" class="ma-auto">
        <v-btn
         depressed
         x-large
         color="primary"
         @click="addElement"
        >
        추가
        </v-btn>
      </v-col>
     </v-row>

      <!-- 삭제 장르 작성 -->
     <v-row justify="center"> 
      <v-col cols="3" class="d-flex align-center  text-center text-h6">
        <v-card elevation="0" class="ma-auto">삭제 장르</v-card>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="4" class="mt-8">
        <v-text-field
          v-model="delGenre"
          label="삭제할 장르 작성"
          color="primary"
          outlined
          rounded
          required
          filled >
        </v-text-field>
      </v-col>
      <v-col cols="4" class="ma-auto">
        <v-btn
         depressed
         x-large
         color="primary"
         @click="delElement"
        >
        삭제
        </v-btn>
      </v-col>
    </v-row>


    <v-row justify="center" class="pa-3">
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

  data() {
    return {
      genre: [
        { index: "1", name: "일상" },
        { index: "2", name: "개그" },
        { index: "3", name: "판타지" },
        { index: "4", name: "액션" },
        { index: "5", name: "드라마" },
        { index: "6", name: "로맨스" },

      ],
    };
  },
  methods: {
    addElement () {

    },
    delElement() {

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
