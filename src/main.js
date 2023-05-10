import { createApp } from 'vue'
import {createPinia} from "pinia"
import { Quasar, Dialog } from 'quasar'
import {router} from "./routes/routes.js"
import App from './App.vue'
//import './style.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'
import 'quasar/src/css/index.sass'



const pinia = createPinia()

const app = createApp(App)

app.use(Quasar, {
    plugins: {
      Dialog
    }, // import Quasar plugins and add here
  })
app.use(router)
app.use(pinia)
app.mount('#app')
