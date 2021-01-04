import Vue from 'vue'
import Antd from 'ant-design-vue'
import App from './App'
import 'ant-design-vue/dist/antd.css'
import router from './router'
import { githubAuthorizeUrl } from '@/config'

Vue.config.productionTip = false
Vue.use(Antd)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data: {
    githubAuthorizeUrl: githubAuthorizeUrl
  }
})
