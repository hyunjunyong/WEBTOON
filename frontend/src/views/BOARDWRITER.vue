<template>
    <v-container>
            <v-col>
                <v-card class="text-center text-h3" height="60">에피소드 등록하기</v-card>
            </v-col>        
        <listwriter />
    </v-container>

</template> 


<script>
import listwriter from "../components/list-writer"

export default { 
    name: 'Boardwriter', 
    components: {
        listwriter,
    },
};
</script>