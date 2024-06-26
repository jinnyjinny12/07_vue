

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import Paymentview from './views/Paymentview.vue'
import router from './router'

import App from './App.vue'


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
// createApp(Paymentview).mount('#Paymentview')


