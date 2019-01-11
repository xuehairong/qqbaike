import axios from 'axios'
import { promise } from 'when';

const baseUrl = ' https://www.easy-mock.com/mock/5c17178dbf8dda63f572aa5f/qqbaike/'
const diseaseListUrl = baseUrl + 'DeseaseList' //所有疾病列表

let func_axios = (api, cb) => {
    axios.get(api).then(function(res) {
        if (res.status >= 200 && res.status < 300) {
            cb(res.data)
        }
    }).catch((error) => {
        return Promise.reject(error)
    })
}

export default {
    getDiseaseList: (cb) => func_axios(diseaseListUrl, cb)
}