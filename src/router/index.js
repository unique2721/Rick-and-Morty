/* DEFINING OUR ROUTING RULES */
import { createRouter,createWebHistory } from "vue-router";
/* pages */
import Home from '../pages/Home.vue'
import Episodes from '../pages/Episodes.vue'
import Locations from '../pages/Locations.vue'
import Characters from '../pages/Characters.vue'

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
        //  {
        //     path: '/episodes/:id',
        //     name: 'Episodes',
        //     component: Episodes,
        // },
        // {
        //     path: '/characters:id',
        //     name: 'Characters',
        //     component: Characters,
        // },
        // {
        //     path: '/locations:id',
        //     name: 'Locations',
        //     component: Locations,
        // } 
    ]
})

export default router