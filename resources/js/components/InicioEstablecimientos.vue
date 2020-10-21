<template>
<div>

    <categoria-cafe></categoria-cafe>
    <categoria-restaurant></categoria-restaurant>
    <categoria-hoteles></categoria-hoteles>

</div>
</template>


<script>
import CategoriaCafe from './CategoriaCafe';
import CategoriaRestaurant from './CategoriaRestaurant';
import CategoriaHoteles from './CategoriaHoteles';

import store from '../store';

    export default {

        components:{
            CategoriaCafe,
            CategoriaRestaurant,
            CategoriaHoteles,
        },

    }
</script>
