import api from '../api/index'
export default {
    FETCH_DISEASE_LIST: function({ commit }) {
        return api.getDiseaseList().then(data => { commit('SET_DISEASE_LIST', data) })
    }
}