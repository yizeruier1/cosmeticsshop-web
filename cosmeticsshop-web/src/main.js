import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible'  // 设置 rem
import '@vant/touch-emulator'  // touch事件 兼容PC端
import '@/utils/useVant'  // 按需引入 vant

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
