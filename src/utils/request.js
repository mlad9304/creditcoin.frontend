import axios from 'axios'

// create an axios instance
const service = axios.create({
  timeout: 5000 // request timeout
})

// response interceptor
service.interceptors.response.use(
  response => response,
  error => {
    console.log('err' + error)
    return Promise.reject(error)
  }
)

export default service
