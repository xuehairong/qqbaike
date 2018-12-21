import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui';
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
import App from './App.vue'
import '../src/css/style.css'
import '../src/js/index.js'
import { createRouter } from './router'
import { createStore } from './store'

// Vue.use(MintUI)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.config.productionTip = false



const router = createRouter()
const store = createStore()
    // console.log(store.state.count)
store.commit('increment')

// console.log(store.state.count)
// console.log(store.getters.doneTodos)
new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')