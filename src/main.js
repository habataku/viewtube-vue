import Vue from 'vue'
import App from './App.vue'
import router from './router'
import FormattingFunctions from './formattingFunctions'
import './registerServiceWorker'
import 'vue-material-design-icons/styles.css'
import './ripple.js'
import VueHeadful from 'vue-headful'
import UserStore from './store/user'
import VueProgressBar from 'vue-progressbar'
import VueCookie from 'vue-cookie'

const progressOptions = {
  color: '#ff7b3b',
  failedColor: '#874b4b',
  thickness: '3px'
}

Vue.directive('scroll', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        el.removeEventListener('scroll', f)
      }
    }
    el.addEventListener('scroll', f)
  }
})

Vue.use(VueProgressBar, progressOptions)
Vue.use(FormattingFunctions)
Vue.use(VueCookie)

Vue.component('vue-headful', VueHeadful)
Vue.config.productionTip = false

UserStore.getCurrentUser({
  callback: () => {
    console.log('User logged in')
  },
  failure: (errorMsg) => {
    console.log('Not logged in: ' + errorMsg)
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
