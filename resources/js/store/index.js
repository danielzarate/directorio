import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


export default new Vuex.Store({
    state:{
        cafes:[],
        restaurants:[],
        hoteles:[],
        establecimiento:[],
    },

    mutations:{
        AGREGAR_CAFES(state, cafes){
            state.cafes = cafes;
        },

        AGREGAR_HOTELES(state, hoteles){
            state.hoteles = hoteles;
        },

        AGREGAR_RESTAURANTS(state, restaurants){
            state.restaurants = restaurants;
        },
        AGREGAR_ESTABLECIMIENTO(state, establecimiento){
            state.establecimiento = establecimiento;
        }
    }

});