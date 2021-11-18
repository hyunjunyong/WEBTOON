<template>
<!--
1:1 문의 나 공지 등 일반 게시물 작성 컴포넌트 
-->
    <v-container>
            <!-- 글 제목 작성 -->
            <v-row>
              <v-col cols="4" class="d-flex text-center text-h6">
                <v-card elevation="0" class="ma-auto">제  목</v-card>
              </v-col>
              <v-col cols="5">
                <v-text-field v-model="title" required>
                </v-text-field>
              </v-col>
            </v-row>

            <!-- 글 내용 작성 -->
            <v-row>
              <v-col cols="4" class="d-flex text-center text-h6">
                <v-card elevation="0" class="ma-auto">
                  내  용 </v-card>
              </v-col>

              <v-col cols="5">
                <v-textarea
                  v-model="description"
                  id="description"
                  required
                  height="100"
                  counter
                  single-line
                  full-width
                  dense
                >
                </v-textarea>
              </v-col>
            </v-row>

            <!-- 이미지 올리기 -->
            <v-row class="mb-5">
              <v-col cols="4" class="d-flex text-center text-h6">
                <v-card elevation="0" class="ma-auto">이미지 첨부</v-card
                >
              </v-col>
              <!-- <v-col cols="4">
        <v-img
          src="../../img/writer_profile.png"
          alt=""
          height="200px"
          width="200px"
          style="border-radius:100%"
        />
      </v-col> -->
              <v-col cols="5">
                <v-file-input
                  id="photo"
                  show-size
                  counter
                  truncate-length="50"
                ></v-file-input>
              </v-col>
            </v-row>
        </v-container>
</template>

<script>
export default {
    name:'',
    components: {},
    data(){
        return{
        }
    },
    setup(){},
    create(){},
    mounted(){},
    unmounted(){},
    methods: {}
}
</script>