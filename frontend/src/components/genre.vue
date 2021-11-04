<template>
<!--  장르 선택 컴포넌트 -->
    <v-row>
      <v-col v-for="item in genre" :key="item.index">
        <v-btn rounded class="text-caption">
          {{item.name}}
        </v-btn>
      </v-col>
    </v-row>
</template>

<script>
export default {
  name: "",
  components: {
  },
      data(){
        return{
            genre:[
                    {index:"1",name:'일상'},
                    {index:"2",name:'개그'},
                    {index:"3",name:'판타지'},
                    {index:"4",name:'액션'},
                    {index:"5",name:'드라마'},
                    {index:"6",name:'로맨스'},
                    {index:"7",name:'공포/스릴러'},
                ],
        }
    },
};
</script>