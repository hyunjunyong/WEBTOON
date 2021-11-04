<template>
<!--
1:1 문의 나 공지 등 일반 게시판 화면
-->
    <v-container>
        <v-row justify="center">
        <v-col cols="10">
            <v-card class="text-center text-h4" height="50"> 작가 정보 문의</v-card>
        </v-col>
        </v-row>
        <list />
    </v-container>

</template> 


<script>
import list from "../components/list"

export default { 
    name: 'Boardlist', 
    components: {
        list,
    },
};
</script>