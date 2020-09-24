import Vue from 'vue'
import App from './App.vue'
import './assets/styles/reset.css'
import './util/animate.css'
import animated from './util/animate.js'

Vue.config.productionTip = false
Vue.prototype.animated = animated


new Vue({
  render: h => h(App),
}).$mount('#app')