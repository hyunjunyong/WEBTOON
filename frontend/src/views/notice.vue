<template>
  <!-- 공지 작성 페이지 -->
  <div id="background">
    <v-container>
      <v-row justify="center" class="mt-10">
        <v-col cols="8">
          <v-card elevation="0">
            <v-toolbar flat>
              <v-spacer></v-spacer>
              <v-toolbar-title class="text-h5 font-weight-bold pt-3"
                >글 작성</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>

        <listwriter />
        
            <!-- 신청/ 취소 버튼 -->
            <v-row>
              <v-spacer></v-spacer>
              <v-col>
                <v-btn
                  depressed
                  x-large
                  block
                  color="primary"
                  @click.once="writeClick()"
                >
                  등록</v-btn
                >
              </v-col>
              <v-spacer></v-spacer>
              <v-col>
                <router-link to="/Notice_list" style="text-decoration:none">
                  <v-btn depressed x-large block color="gray">
                    취소
                  </v-btn>
                </router-link>
              </v-col>
              <v-spacer></v-spacer>
            </v-row>

          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template> 


<script>
import listwriter from "../components/list-writer"
import axios from 'axios'

export default { 
    name: '', 
    components: {
        listwriter,
    },
        methods: {
        writeClick() {
            if(this.$route.params.seq) {
                axios.put('http://localhost:8080/api/board', this.$data)
                .then((response) => {
                    console.log(response)
                    this.$router.push('/')
                })
                .catch((error) => {
                    console.log(error)
                })
            }
            else {
                this.$data.regDt = this.getNowDate()
                this.$data.uptDt = this.getNowDate()
                axios.post('http://localhost:8080/api/board', this.$data)
                .then((response) => {
                    console.log(response)
                    this.$router.push('/')
                })
                .catch((error) => {
                    console.log(error)
                })
            }
        },
        getNowDate() {
            var nowDate = new Date()
            var year = nowDate.getFullYear().toString()
            var month = (nowDate.getMonth() + 1).toString()
            var day = nowDate.getDate().toString()
            
            return year + "-" + (month[1] ? month : "0" + month[0]) + "-" + (day[1] ? day : "0" + day[0])
        }
    },
    data () {
        return { title : '', context: '', uptDt: '', regDt: '' }
    }
};
</script>


<style>
#background {
  background-color: #eeeeee;
  height: 100%;
}
html {
  overflow-y: auto;
}
</style>


<!-- <template>
    <v-form>
        <v-container>
            <v-row> 제목 </v-row>
            <v-row>
                <v-text-field
                    :counter="50"
                    label="제목"
                    name="title"
                    required
                    v-model="title"
                    maxlength="50" >
                </v-text-field>
            </v-row>
            <v-row> 내용 </v-row>
            <v-row>
                <v-textarea
                    filled name="context"
                    hint="내용을 입력해주세요."
                    v-model="context"
                    :counter="1000"
                    maxlength="1000" >
                </v-textarea>
            </v-row>
            <v-row>
                <router-link to="/Boardview" class="ma-2">         
                <v-btn block outlined color="blue" @click.once="writeClick"> 등록 </v-btn>
                </router-link>
            </v-row>
        </v-container>
    </v-form>
</template>

<script>
import axios from 'axios'

export default {
    name: 'BoardWriter',
    methods: {
        writeClick() {
            if(this.$route.params.seq) {
                axios.put('http://localhost:8080/api/board', this.$data)
                .then((response) => {
                    console.log(response)
                    this.$router.push('/')
                })
                .catch((error) => {
                    console.log(error)
                })
            }
            else {
                this.$data.regDt = this.getNowDate()
                this.$data.uptDt = this.getNowDate()
                axios.post('http://localhost:8080/api/board', this.$data)
                .then((response) => {
                    console.log(response)
                    this.$router.push('/')
                })
                .catch((error) => {
                    console.log(error)
                })
            }
        },
        getNowDate() {
            var nowDate = new Date()
            var year = nowDate.getFullYear().toString()
            var month = (nowDate.getMonth() + 1).toString()
            var day = nowDate.getDate().toString()
            
            return year + "-" + (month[1] ? month : "0" + month[0]) + "-" + (day[1] ? day : "0" + day[0])
        }
    },
    data () {
        return { title : '', context: '', uptDt: '', regDt: '' }
    }
}
</script> -->