// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element  from 'element-ui';
// 导入全局样式表
import './assets/css/global.css'

import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Element);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
  // el: '#app',
  // router,
  // components: { App },
  // template: '<App/>'
}).$mount('#app')
