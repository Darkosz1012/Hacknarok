import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Mapa from './components/Map'

import LoginForm from './views/LoginForm'
import M from 'materialize-css/dist/js/materialize.js'
import L from 'leaflet/dist/leaflet.js'

import { Icon } from 'leaflet'
//STYLE

// import 'materialize-css/sass/materialize.scss'
//SCRIPTS
import ls from 'local-storage';

Vue.config.productionTip = false

Vue.component('LoginForm', LoginForm);
Vue.component('Mapa', Mapa);

delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

Vue.mixin({
  data: function() {
    return {
      httpReq:function httpReq(link,data,res)
      {
        console.log(link)
          var xhr = new XMLHttpRequest();
          var url = "http://localhost:3000"+link;
          xhr.open("POST", url, true);
          xhr.setRequestHeader("Content-Type", "application/json");
          xhr.onreadystatechange = function () {
              if (xhr.readyState === 4 && xhr.status === 200) {
                var json = JSON.parse(xhr.responseText);
                res(json);
              }
          };
        
          xhr.send(JSON.stringify(data));
      },
      httpReqToken:function httpReqToken(link,data,res)
      {
          this.httpReq(link,{token:ls("token"),...data},(response)=>(res(response)));
      },
      ls:ls,
      router:router
    }
  }
})


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


