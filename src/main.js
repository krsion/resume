import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify/lib';
import VuePageTitle from 'vue-page-title'

Vue.use(VuePageTitle, {});
Vue.use(Vuetify);

Vue.config.productionTip = false

new Vue({
  vuetify: new Vuetify({}),
  render: h => h(App)
}).$mount('#app')
