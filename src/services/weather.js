import axios from 'axios'
var city = "Tuxtla Gutierrez"
const APPID = "705a1454a4467dcf16b6ba160ccb6b27";
export const WEATHER = axios.create({
    baseURL: `http://api.openweathermap.org/data/2.5/weather?q=`+city+`&APPID=`+APPID
})