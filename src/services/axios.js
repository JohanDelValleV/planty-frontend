import axios from 'axios'

export const API = axios.create({
    baseURL: `http://157.230.169.186:3333/api/v1/`
})