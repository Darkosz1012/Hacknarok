import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {LMap, LTileLayer, LMarker } from 'vue2-leaflet'

import LoginForm from './views/LoginForm'
import M from 'materialize-css/dist/js/materialize.js'

import { Icon } from 'leaflet'
//STYLE
import 'leaflet/dist/leaflet.css'
// import 'materialize-css/sass/materialize.scss'
//SCRIPTS




Vue.config.productionTip = false

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);
Vue.component('LoginForm', LoginForm);

delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


