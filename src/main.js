import './assets/input.css'
import './assets/output.css'
import './assets/responsive.css'


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
