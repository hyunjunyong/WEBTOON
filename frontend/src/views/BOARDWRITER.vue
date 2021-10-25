<template>
    <v-container>

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