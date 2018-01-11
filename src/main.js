import Vue from 'vue'
import Leaflet from 'leaflet'
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.css'
import App from './App.vue'

import { store } from './store/store';

Vue.use(Vuetify);
Vue.config.productionTip = false;

console.log("In main.js");
new Vue({
  el: '#app',
  store,
  render: h => h(App)
});
console.log("Leaving main.js");
