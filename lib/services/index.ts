import axios from 'axios'

export const API = axios.create({
    baseURL:process.env.NEXTAPI_URL||"http://localhost:3000/api",
    withCredentials:true
})