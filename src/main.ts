import { createApp } from 'vue'
import { createPinia } from 'pinia'

import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

axios.defaults.baseURL = import.meta.env.VITE_HG_URL
axios.defaults.params = {
  key: import.meta.env.VITE_HG_KEY,
  format: 'json-cors',
}
app.use(VueAxios, axios)
app.provide('axios', app.config.globalProperties.axios)

app.mount('#app')
