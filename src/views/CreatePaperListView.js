import PaperItemList from './PaperList.vue'
const camelize = str => str.charAt(0).toUpperCase() + str.slice(1)
export default function createPaperListView(type) {
    return {
        name: `${type}-stories-view`,
        // asyncData ({ store }) {
        //     return store.dispatch('FETCH_LIST_DATA', { type })
        //   },
        title: camelize(type),
        render(h) {
            return h(PaperItemList, { props: { type } })
        }
    }
}