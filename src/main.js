import Vue from 'vue';
import axios from 'axios';
import moment from 'moment';
// import {
//   Header,
//   Swipe,
//   SwipeItem,
//   Button,
//   Lazyload,
// } from 'mint-ui';
// Vue.use(Lazyload);
// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
import store from './store';
import router from './router';
import App from './App.vue';
import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css';

Vue.prototype.$axios = axios;

//全局导入mint-ui组件库
import MintUI from 'mint-ui'
Vue.use(MintUI);
import 'mint-ui/lib/style.css';


Vue.config.productionTip = false;

// 定义时间格式的过滤器
Vue.filter('dateFormat', (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') => moment(dataStr).format(pattern));

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
