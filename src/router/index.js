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
        mode: 'history',
        fallback: false,
        // scrollBehavior: () => ({ y: 0 }),
        routes: [{
                path: '/',
                component: Home,
                children: [
                    { path: '', component: QaList },
                    { path: 'qa', component: QaList },
                    { path: 'paper', component: createPaperList('paper') },
                    { path: 'handpick', component: createPaperList('handpick') },
                ]
            },
            { path: '/allDiseases', component: DiseaseList }
        ]
    })
}