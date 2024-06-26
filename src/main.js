import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/styles.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)


/*  part of Error Handling: throwing error when there is and error with more information */
// app.config.errorHandler = (err, vm, info) => {
//     console.error("Error:", err);
//     console.error("Vue component:", vm);
//     console.error("Additional info:", info);
// };


// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
})

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
