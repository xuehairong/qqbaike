import api from '../api/index'
export default {
    FETCH_DISEASE_LIST: function({ commit }) {
        api.getDiseaseList((res) => { commit('SET_DISEASE_LIST', res.data) })
    }
}