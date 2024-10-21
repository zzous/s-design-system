import axios from 'axios'
import setInterceptor from './interceptor'

const service = axios.create({
  timeout: 300000,
  baseURL: import.meta.env.VITE_USER_BASE_URL,
})

const serviceObj = setInterceptor(service)

export default serviceObj
