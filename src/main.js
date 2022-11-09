/* Set up using Vue 3 */
import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios';

import "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.2/js/bootstrap.bundle.min.js";

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
