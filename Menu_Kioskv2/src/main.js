
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Menuview from './views/Menuview.vue'

// import App from './App.vue'
import router from './router'

const app = createApp(Menuview)

app.use(createPinia())
app.use(router)

app.mount('#Menuview')
