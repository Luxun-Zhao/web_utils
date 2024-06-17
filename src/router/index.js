import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from "@/components/HelloWorld"
import Crypto from "@/components/crypto/Crypto"
import Random from "@/components/random/Random"
Vue.use(Router);

const router = new Router({
    routes: [
        // 动态路径参数 以冒号开头
        { path: '/hello', component: HelloWorld, name:"Hello", icon: "mdi-human-greeting" },
        { path: '/crypto', component: Crypto, name:"Crypto", icon: "mdi-lock" },
        { path: '/random', component: Random, name:"Random", icon: "mdi-form-textbox-password" },
    ]
})

export default router
