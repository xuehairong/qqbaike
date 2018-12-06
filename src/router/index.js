import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const QaList = () =>
    import ('../views/QaList.vue')
const PaperList = () =>
    import ('../views/PaperList.vue')
const HandpickList = () =>
    import ('../views/HandpickList.vue')
export function createRouter() {
    return new Router({
        // mode: 'history',
        fallback: false,
        // scrollBehavior: () => ({ y: 0 }),
        routes: [{
            path: '/',
            component: QaList
        }, {
            path: '/qa',
            component: QaList
        }, {
            path: '/paper',
            component: PaperList
        }, {
            path: '/handpick',
            component: HandpickList
        }]
    })
}