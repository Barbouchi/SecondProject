
import { createApp } from 'vue'
import {createRouter,createWebHistory} from "vue-router"
import App from "./App.vue"
// Components 
import OwnerInterface from '@/Components/OwnerInterface.vue'

//-----------------
const router =createRouter({
    history : createWebHistory(),
    routes:[
        {path:'/', name:'OwnerInterface' ,component: OwnerInterface}
    ]
})
createApp(App).use(router).mount('#app')