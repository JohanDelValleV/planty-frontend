import axios from 'axios'
var city = "Tuxtla Gutierrez"
const key = "9610855f2b4e4577b5a15037192003";
export const WEATHER = axios.create({
    baseURL: `https://api.apixu.com/v1/current.json?key=`+key+`&q=`+city
})