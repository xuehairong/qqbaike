import Vue from 'vue'
import { Swipe, SwipeItem, Popup } from 'mint-ui';
import App from './App.vue'
import '../src/css/style.css'
import '../src/js/index.js'
import { createRouter } from './router'
import { createStore } from './store'

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Popup.name, Popup);
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