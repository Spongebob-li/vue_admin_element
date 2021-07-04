import request from  './reuqest'

const api = {} 

api.apiLogin = (data) => {
    return request ({
        url: `login`,
        method:'post',
        data
    })
}

export default api;