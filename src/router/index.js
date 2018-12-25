import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const Home = () =>
    import ('../views/Home.vue')
const createPaperList = type => () =>
    import ('../views/CreatePaperListView').then(m => m.default(type))
const QaList = () =>
    import ('../views/QaList.vue')
const DiseaseList = () =>
    import ('../views/DiseaseList.vue')
    // const PaperList = () =>
    //     import ('../views/PaperList.vue')
    // const HandpickList = () =>
    //     import ('../views/HandpickList.vue')
export function createRouter() {
    return new Router({
        // mode: 'history',
        mode: 'hash',
        fallback: false,
        // scrollBehavior: () => ({ y: 0 }),
        routes: [{
                path: '/',
                name: 'Home',
                component: Home,
                children: [
                    { path: '', name: 'qahome', component: QaList },
                    { path: 'qa', name: 'qa', component: QaList },
                    { path: 'paper', name: 'paper', component: createPaperList('paper') },
                    { path: 'handpick', name: 'handpick', component: createPaperList('handpick') },
                ]
            },
            { path: '/allDiseases', name: 'allDiseases', component: DiseaseList }
        ]
    })
}