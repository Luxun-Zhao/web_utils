import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from "@/components/HelloWorld"
import Crypto from "@/components/crypto/Crypto"
Vue.use(Router);

const router = new Router({
    routes: [
        // 动态路径参数 以冒号开头
        { path: '/hello', component: HelloWorld, name:"Hello", icon: "mdi-human-greeting" },
        { path: '/crypto', component: Crypto, name:"Crypto", icon: "mdi-lock"  }
    ]
})

export default router
