import Vue from 'vue'
import App from './App.vue'
import vueKooniaoEvaluation from './lib/index.js'
Vue.use(vueKooniaoEvaluation)
new Vue({
  el: '#app',
  render: h => h(App)
})
