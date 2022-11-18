import axios from 'axios'
import store from '@/store'
// 接口地址
import config from '../../build'

// 创建axios实例
const service = axios.create({
    baseURL: config.baseUrl,  // 请求域名
    // withCredentials: true,   // 跨域请求时发送Cookie
    timeout: 60*1000    // 请求超时
})
// 请求拦截器
service.interceptors.request.use(
    config => {
        // 发送请求之前
        config.headers['Token'] = store.getters.token
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

// 响应拦截器
service.interceptors.response.use(
    response => {
        const res = response.data
        // 如果状态码不等于1，请求错误
        if (res.code !== 1) {
            return Promise.reject(new Error(res.message || '请求出错，请稍后重试'))
        } else {
            return res
        }
    },
    error => {
        return Promise.reject(error)
    }
)

const Api = {
    wxConfig() {
        return service({
            url: '/jssdk',
            method: 'get'
        })
    },
    getUserInfo() {
        return service({
            url: '/user/info',
            method: 'get'
        })
    },
    getInfo(params) {
        return service({
            url: '/user/priceReport/detail',
            method: 'get',
            params
        })
    },
    updateQuote(params) {
        return service({
            url: '/user/priceReport/store',
            method: 'post',
            data: params
        })
    },
    getBatchInfo(params) {
        return service({
            url: '/ship/priceBatchDetail',
            method: 'get',
            params
        })
    },
    uploadFile(params) {
        return service({
            url: '/upload',
            method: 'post',
            data: params
        })
    },
    inviterRecord() {
        return service({
            url: '/user/inviter_record',
            method: 'get'
        })
    },
    getQrCode() {
        return service({
            url: '/user/get_qr_code',
            method: 'get'
        })
    }
}
export default Api