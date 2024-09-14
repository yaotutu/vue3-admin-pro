import App from '@/App.vue'
import 'element-plus/es/components/message/style/css'
import { createPinia } from 'pinia'
import 'virtual:svg-icons-register'
import { createApp } from 'vue'

const app = createApp(App)

app.use(createPinia())
// app.use(router)

app.mount('#app')
