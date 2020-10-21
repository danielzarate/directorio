import Vue from 'vue';
import VueRouter from 'vue-router';
import InicioEstablecimientos from '../Components/InicioEstablecimientos'
import MostrarEstablecimiento from '../Components/MostrarEstablecimiento'


const routes=[
    {
        path:'/',
        component: InicioEstablecimientos
    },
    {
        path:'/establecimiento/:id',
        name:"establecimiento",
        component: MostrarEstablecimiento
    }
]


const router = new VueRouter({
    mode: 'history',
    routes
});

Vue.use(VueRouter);

export default router;