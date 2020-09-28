import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VuePageTitle from 'vue-page-title'

Vue.use(VuePageTitle, {
})

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
