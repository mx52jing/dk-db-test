import axios from 'axios'

const options = {
    baseURL: '/api/frontend/',
    timeout: 6000,
    withCredentials: true
}

const instance = axios.create(options)

instance.interceptors.request.use(
    config => {
        return config
    },
    error => {
        Promise.reject(error)
    }
)

instance.interceptors.response.use(
    response => {
        return response
    },
    error => {
        Promise.reject(error)
    }
)

export default instance
