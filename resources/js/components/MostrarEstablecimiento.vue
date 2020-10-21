<template>
    <div class="container my-5">
        <h2>{{ establecimiento.nombre }}</h2>
        
    </div>
</template>

<script>
export default {
    mounted() {
        
        const { id } = this.$route.params;

        axios.get('/api/establecimientos/' + id)
        .then(respuesta=>{
            this.$store.commit('AGREGAR_ESTABLECIMIENTO', respuesta.data)

        })
    },
    computed:{
        establecimiento(){
            return this.$store.state.establecimiento;
        } 
    }   
}
</script>