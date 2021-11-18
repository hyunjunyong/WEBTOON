<template>
<!-- 계시판에서 특정 글 클릭시 나오는 화면 -->
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

            <!-- 글 제목 -->
            <v-row class="mt-10">
              <v-col class="d-flex text-h5 mb-5">
                <v-card elevation="0" class="ma-auto">제  목</v-card>
              </v-col>
              <v-col>
                <v-card elevation="0" class="text-h6 mb-5">{{ title }}</v-card>
                </v-col>
            </v-row>

                <v-divider class="bold"></v-divider>

            <!-- 글 내용 -->
            <v-row class="d-flex text-center text-h5 my-5">
                <v-card elevation="0" class="ma-auto">내  용</v-card>
              </v-row>
            <v-row justify="center">
                <v-card elevation="0" class="text-h6">{{ context }}</v-card>
            </v-row>
            <!-- 목록 버튼 -->
            <v-row class="my-10">
              <v-spacer></v-spacer>
              <v-col>
                <v-btn
                  depressed
                  x-large
                  block
                  color="primary"
                  @click.once="listClick">
                  목록</v-btn>
              </v-col>
              <v-spacer></v-spacer>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
        </v-container>
</template>

<script>
import axios from 'axios'

export default {
    name: 'BoardView',
    created() {
        this.fetch()
    },
    methods: {
         fetch() {
            axios.get('http://localhost:8080/api/board/' + this.$$router.params.seq)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
        },
        listClick() {
            this.$router.push('/Notice_list')
        },
        deleteClick() {
            if(this.$data.seq) {
                axios.delete('http://localhost:8000/api/board/' + this.$data.seq)
                .then((response) => {
                    console.log(response)
                    this.$router.push('/Notice_list')
                })
                .catch((error) => {
                    console.log(error)
                })
            }
        }
    },
    data () { return { title : "얼리윈터 이벤트", context: "안녕하세요. 얼리윈터 이벤트에 관한 공지사항입니다." }
    }
}

</script>