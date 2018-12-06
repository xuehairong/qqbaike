import Vue from 'vue'
import App from './App.vue'
import '../src/css/style.css'
import '../src/js/index.js'
import { createRouter } from './router'

Vue.config.productionTip = false



const router = createRouter()

new Vue({
    render: h => h(App),
    router
}).$mount('#app')