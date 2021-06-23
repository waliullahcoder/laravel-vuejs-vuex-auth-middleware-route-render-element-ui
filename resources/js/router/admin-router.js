import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../components/backend/pages/Home";

Vue.use(VueRouter)

const router = new VueRouter({
    mode:'history',
    routes:[
        { path:'/home', component: Home, name:'Home' },
    ]
})

export default router;
