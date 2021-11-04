<template>
<!--
1:1 문의 나 공지 등 일반 게시판 리스트 컴포넌트.... 아직 수정 중
-->
    <v-container>
        <v-row justify="center"> 
        <v-col cols="10">
        <v-card>
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
        </v-col>
        </v-row>
    </v-container>
</template> 


<script>
export default { 
    name: 'Boardlist',
        methods: {},
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
                { text: '작성일', value: 'date' },

            ],
            desserts: [
                {
                    name: 10,
                    title: '얼리윈터 이벤트',
                    date: '2021-11-01',
                },
                {
                    name: 9,
                    title: '11월 변경사항',
                    date: '2021-11-01',
                },
                {
                    name: 8,
                    title: '할로윈 이벤트',
                    date: '2021-10-20',
                },
                {
                    name: 7,
                    title: '이용약관 변경 공지',
                    date: '2021-10-11',
                },
                {
                    name: 6,
                    title: '긴급점검 공지',
                    date: '2021-10-10'
                },

                {
                    name: 5,
                    title: '가을맞이 이벤트',
                    date: '2021-10-01'
                },
                {
                    name: 4,
                    title: '10월 변경사항',
                    date: '2021-10-01'
                },
                {
                    name: 3,
                    title: '추석 이벤트',
                    date: '2021-09-01'
                },
                {
                    name: 2,
                    title: '09월 변경사항',
                    date: '2021-09-01'
                },
                {
                    name: 1,
                    title: '런칭 이벤트',
                    date: '2021-08-20'
                },

            ],
        }
    },
};
</script>