<!--<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="10">
                <v-card class="text-center text-h4" > 공지 </v-card>
            </v-col>
        </v-row>    
        <listwriter />
        
    
            <v-row justify="center" >
            <v-spacer></v-spacer>
            <router-link to="/Notice_list">
            <v-btn > 취소 </v-btn>
            </router-link>
            <v-spacer></v-spacer>
            <router-link to="/Notice_list">
            <v-btn > 등록 </v-btn>
            </router-link>
            <v-spacer></v-spacer>
            </v-row>
    </v-container>
</template> 


<script>
import listwriter from "../components/list-writer"

export default { 
    name: '', 
    components: {
        listwriter,
    },
};
</script> -->

<template>
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
</script>