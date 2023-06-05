import { createApp } from 'vue'
import { createStore } from "vuex";

import App from './App.vue'
import router from './router'
import './assets/tailwind.css'

const store = createStore({
    state: {
      newInCart: 1,
      cartBooks: []
    },
  });

createApp(App).use(router).use(store).mount('#app')
