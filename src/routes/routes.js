import Login from "../pages/Login.vue"
import Home from "../pages/Home.vue"
import Perfil from "../pages/Perfil.vue"
import Register from "../pages/Register.vue"
import Header from "../components/Header.vue"

import {createRouter, createWebHashHistory} from "vue-router"
import { useUserStore } from "../store/user";

const requireAuth = async (to, from, next) => {
    //console.log(to.path +" from "+from.path+" next "+next);
    const userStore = useUserStore();
    userStore.loading = true;
    const user = await userStore.currentUser();
    if (user) {
        next();
    } else {
        next("/");
    }
    userStore.loading = false;
};


const routes=[
    {path:"/", component:Login},
    {path:"/register", component:Register},
    {path:"/header", component:Header, beforeEnter: requireAuth, children:[
        {path:"/home", component:Home},
        {path:"/perfil", component:Perfil}
    ]},
    
]

export const router = createRouter({
    history:createWebHashHistory(),
    routes
})