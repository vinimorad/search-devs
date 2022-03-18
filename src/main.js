import Vue from 'vue/dist/vue.js';
import App from './App.vue'
import VModal from 'vue-js-modal'


Vue.config.productionTip = false
Vue.use(VModal)

new Vue({
  render: h => h(App),
}).$mount('#app')
