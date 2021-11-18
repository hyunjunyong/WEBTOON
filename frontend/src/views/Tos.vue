<!-- <template>
  <v-container class="Tos">
    <v-card>
      <v-card-text>
        이용약관임 페이지 입니다
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Tos",
};
</script> -->


<template>
    <v-container>
        <v-data-table 
            :headers="headers" 
            :items="desserts" 
            :items-per-page="5" 
            class="elevation-1" 
            @click:row="rowClick" >
        </v-data-table>
        <v-row>
            <v-btn outlined color="blue" @click="writeClick" > 작성 </v-btn>
        </v-row>
    </v-container>
</template>

<script>

import axios from 'axios'

export default { 
    name: 'Boardlist', 
        created() { 
            this.fetch()
        },
    methods: {
        fetch() {
            console.log('fetch list')
            axios.get('http://localhost:8080/api/board/list') 
            .then((response) => {
                console.log(response)
                }) 
            .catch((error) => {
                console.log(error)
                }) 
            },
        writeClick() {
            this.$router.push('/notice') 
            },
        rowClick(item) {
            this.$router.push('/Boardview/' + item.seq)
            }
        },
    data () {
        return {
            headers: [
                {
                    text: 'Number',
                    align: 'left',
                    sortable: false,
                    value: 'number',
                },
                { text: 'Title', value: 'title' },
                { text: 'Reg Date', value: 'regDt' }
            ],
            desserts: [],
        }
    }
};
</script>