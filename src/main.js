//This JS File allows the creation of a Vue app, and allows router to be imported and mounted onto the app.

import { createApp } from 'vue'
import App from './App.vue'
import router from './routes';

createApp(App).use(router).mount('#app')
