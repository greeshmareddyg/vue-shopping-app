import { createApp } from './main'
import { createPinia } from 'pinia'
import './assets/styles.css'
import router from './router'

const { app } = createApp()

// const store = createPinia()
// const vuetify = createVuetify()

//   app.use(store)
//   app.use(router)
//   app.use(vuetify)

app.mount('#app')