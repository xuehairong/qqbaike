import axios from 'axios'
import { promise, reject } from 'when';
import { resolve } from 'uri-js';

const baseUrl = ' https://www.easy-mock.com/mock/5c17178dbf8dda63f572aa5f/qqbaike/'
const diseaseListUrl = baseUrl + 'DeseaseList' //所有疾病列表

let func_axios = (api) => {
    // return axios.get(api).then(function(res) {
    //     if (res.status >= 200 && res.status < 300) {
    //         resolve(res.data)
    //     }
    // }).catch((error) => {
    //     // return Promise.reject(error)
    //     reject(error)
    // })
    return new Promise((resolve, reject) => {
        return axios.get(api).then(res => {
            if (res.status >= 200 && res.status < 300) {
                console.log(res.data)
                resolve(res.data)
            } else {
                reject(res.data)
            }
        }, error => {
            // Indicator.close();
            console.log(error)
            return reject()
        })
    })
}

export default {
    getDiseaseList: () => func_axios(diseaseListUrl)
}