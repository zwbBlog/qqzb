// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入vuex
import store from './vuex'

//引入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

//全局使用工具类
import utils from './utils';
Vue.prototype._utils = utils;

import $ajax from './http'
Vue.prototype.$ajax = $ajax

import './assets/js/rem'

import './assets/js/sha1.min'

//引入字体图标
import './assets/qqzb_font/iconfont.css'

//引入animate动画库
import './assets/css/animate.min.css'


Vue.config.productionTip = false;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: {
    App
  },
  template: '<App/>'
})
