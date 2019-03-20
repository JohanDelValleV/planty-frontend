import Vue from 'vue'
import './plugins/vuetify'
import App from './components/Weather.vue'
import Vuetify from 'vuetify'
// import router from './router'

Vue.config.productionTip = false
Vue.use(Vuetify, {
  theme: {
    primary: '#00c853',
    plight: '#5efc82',
    pdark: '#009624',
    secondary: '#64dd17',
    slight: '#9cff57',
    sdark: '#1faa00',
    error: '#D50000'
  }
})


new Vue({
  render: h => h(App),
}).$mount('#app')
