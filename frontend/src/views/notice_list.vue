<template>
<!-- 공지 리스트 -->
  <v-container>
    <v-row justify="center" class="mt-10">
        <v-col cols="8">
          <v-card elevation="0">
            <v-toolbar flat>
              <v-spacer></v-spacer>
              <v-toolbar-title class="text-h5 font-weight-bold pt-3">
                  공  지</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
           <list />
        </v-card>
      </v-col>
    </v-row>
 
        <v-row justify="center" ma="5">
            <router-link to="/Notice" class="ma-2">
              <v-btn
                color="primary"
                depressed
                block
                large >
                 글쓰기
              </v-btn>
            </router-link>
        </v-row>
    </v-container>
</template> 


<script>
import list from "../components/list"

export default { 
    name: '', 
    components: {
        list,
    },
};
</script>