import axios from 'axios'

export function request(config) {
    // 创建axios的实例
    const instance = axios.create({
        baseURL: `http://127.0.0.1:8888/api/private/v1/`,
        timeout: 5000,
    })


    // axios 请求拦截器
    // 添加请求拦截器
    instance.interceptors.request.use(config => {
        return config
    }, err => {// 请求失败拦截
        console.log(err);
    })

    // 响应拦截 
    instance.interceptors.response.use(response => {
        // 对响应拦截
        // debugger
        window.sessionStorage.setItem('token',response.data.data.token)
        return response;
    }, err => {
        // 对响应错误做点什么
        console.log(err);
    });

    return instance(config)
}

export default request