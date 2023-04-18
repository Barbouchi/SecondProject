import { createApp } from 'vue'
import {createRouter,createWebHistory} from "vue-router"
import App from "./App.vue"
import './App.css'
// Components
import Home from '@/Components/Home.vue'
import About from '@/Components/About.vue'
import Contact from '@/Components/Contact.vue'
import SignInClient from '@/Components/SignInClient.vue'
import SignUpClient from '@/Components/SignUpClient.vue'
import SignInOwner from '@/Components/SignInOwner.vue'
import SignUpOwner from '@/Components/SignUpOwner.vue'
import ClientInterface from '@/Components/ClientInterface.vue'
import OwnerInterface from '@/Components/OwnerInterface.vue'
import HistoryClient from '@/Components/HistoryClient.vue'
//-----------------
const router =createRouter({
    history : createWebHistory(),
    routes:[
        {path:'/', name:'Home' ,component: Home},
        {path:'/home', name:'Home', component: Home},
        {path:'/about', name:'About', component: About},
        {path:'/contact', name:'Contact', component: Contact},
        {path:'/sign-in', name:'SignInClient', component: SignInClient},
        {path:'/sign-up', name:'SignUpClient', component: SignUpClient},
        {path:'/sign-in-owner', name:'SignInOwner', component: SignInOwner},
        {path:'/sign-up-owner', name:'SignUpOwner', component: SignUpOwner},
        {path:'/client-interface', name:'ClientInterface', component: ClientInterface},
        {path:'/owner-interface', name:'OwnerInterface', component: OwnerInterface},
        {path:'/clientHistory', name:'HistoryClient', component: HistoryClient},
        {
            path: '/client-interface/:idclients',
            name: 'ClientInterface',
            component: () => import('./components/ClientInterface.vue'),
            props: true
          },
        ]
})
createApp(App).use(router).mount('#app')