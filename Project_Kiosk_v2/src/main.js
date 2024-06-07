

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Paymentview from './views/Paymentview.vue'

// import App from './App.vue'
import router from './router'

const app = createApp(Paymentview)

app.use(createPinia())
app.use(router)

app.mount('#Paymentview')
// createApp(Paymentview).mount('#Paymentview')


