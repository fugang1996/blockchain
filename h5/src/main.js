/*
 * @Descripttion: no
 * @version: 1.0.0
 * @Author: fugang
 * @Date: 2021-06-02 11:54:47
 * @LastEditors: fugang
 * @LastEditTime: 2021-06-02 14:27:35
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
