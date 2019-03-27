import axios from 'axios'

export const API = axios.create({
    baseURL: `http://192.168.137.251:3333/api/v1/`
})