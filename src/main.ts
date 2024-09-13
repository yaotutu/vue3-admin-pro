import { createPinia } from 'pinia'
import { createApp } from 'vue'

import 'element-plus/es/components/message/style/css'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
// app.use(router)

app.mount('#app')
