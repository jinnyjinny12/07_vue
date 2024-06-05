
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
// 전역스토어 피니아 추가

app.use(router)

app.mount('#app')
