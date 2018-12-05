import Vue from 'vue'
import App from './App.vue'
import '../src/css/style.css'
import '../src/js/index.js'
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')