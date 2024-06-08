

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Paymentview from './views/Paymentview.vue'
import router from './router'

// import App from './App.vue'


const app = createApp(Paymentview)

app.use(createPinia())
app.use(router)

app.mount('#Paymentview')
// createApp(Paymentview).mount('#Paymentview')


