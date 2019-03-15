import Vue from 'vue'
import './plugins/vuetify'
import App from './components/Login.vue'
import Vuetify from 'vuetify'
// import router from './router'

Vue.config.productionTip = false
Vue.use(Vuetify, {
  theme: {
    primary: '#64dd17',
    plight: '#9cff57',
    pdark: '#1faa00',
    secondary: '#76ff03',
    slight: '#b0ff57',
    sdark: '#32cb00',
    error: '#D50000'
  }
})


new Vue({
  render: h => h(App),
}).$mount('#app')
