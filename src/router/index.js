/* DEFINING OUR ROUTING RULES */
import { createRouter,createWebHistory } from "vue-router";
/* Components */
import Home from '../components/Home.vue'
import Episodes from '../components/Episodes.vue'
import Locations from '../components/Locations.vue'
import Characters from '../components/Characters.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/home',
            redirect: '/'
        },
        {
            path: '/episodes',
            name: 'Episodes',
            component: Episodes,
        },
        {
            path: '/characters',
            name: 'Characters',
            component: Characters,
        },
        {
            path: '/locations',
            name: 'Locations',
            component: Locations
        },
       /*  {
            path: '/episodes/:id',
            name: 'Episodes',
            component: Episodes,
        },
        {
            path: '/characters:id',
            name: 'Characters',
            component: Characters,
        },
        {
            path: '/locations:id',
            name: 'Locations',
            component: Locations,
        } */
    ]
})

export default router