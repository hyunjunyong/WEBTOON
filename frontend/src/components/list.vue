<template>
<!--
1:1 문의 나 공지 등 일반 게시판 리스트 컴포넌트.... 아직 수정 중
-->

    <v-container>
        
        <v-card>
        <v-data-table 
            :headers="headers" 
            :items="desserts" 
            :items-per-page="5" 
            class="elevation-1" 
            @click:row="rowClick" >
        </v-data-table>
        
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>

      <v-data-table
        :headers="headers"
        :items="desserts"
        :search="search"
      ></v-data-table>
    </v-card>
    </v-container>
</template> 


<script>
export default { 
    name: 'Boardlist',
    methods: {

        },
        data () {
            return {
            search: '',
            headers: [
                {
                text: 'NO.',
                align: 'start',
                sortable: false,
                value: 'name',
                },
                { text: '글 제목', value: 'title' },
                { text: '글쓴이', value: 'writer' },
                { text: '작성일', value: 'date' },

            ],
            desserts: [
                {
                    name: 1,
                    title: '안녕하세요.',
                    writer: '관리자',
                    date: 2021,
                },

            ],
        }
    },
};
</script>