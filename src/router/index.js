import { createRouter,createWebHistory } from "vue-router";
/* pages */
import Home from '../pages/Home.vue'
import Episodes from '../pages/Episodes.vue'
import Locations from '../pages/Locations.vue'
import Characters from '../pages/Characters.vue'
import PageNotFound from '../pages/PageNotFound.vue'
/* components */
import EpisodeLists from "@/components/EpisodeLists.vue";
import CharacterLists from "@/components/CharacterLists.vue";
import LocationLists from "@/components/LocationLists.vue";

/* DEFINING OUR ROUTING RULES */
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
            name: 'EpisodeLists',
            component: EpisodeLists,
        },
        {
            path: '/episodes/:id',
            name: 'Episodes',
            component:Episodes,
        },
        {
            path: '/characters',
            name: 'CharacterLists',
            component: CharacterLists,
        },
        {
            
            path: '/characters/:id',
            name: 'Characters',
            component:Characters     
        },
        {
            path: '/locations',
            name: 'LocationLists',
            component: LocationLists,
        },
        {
            path: '/locations/:id',
            name: 'Locations',
            component:Locations
        },
        {
            path: '/:catchall(.*)*',
            name: 'PageNotFound',
            component: PageNotFound
        }
    ]
})
export default router