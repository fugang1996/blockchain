/*
 * @Descripttion: no
 * @version: 1.0.0
 * @Author: fugang
 * @Date: 2021-06-02 11:56:31
 * @LastEditors: fugang
 * @LastEditTime: 2021-06-02 14:28:02
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
