import Vue from 'vue';
import axios from 'axios';
import moment from 'moment';
import 'mint-ui/lib/style.css';
import {
  Header,
  Swipe,
  SwipeItem,
  Button,
  Toast,
} from 'mint-ui';
import store from './store';
import router from './router';
import App from './App.vue';
import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css';

Vue.prototype.$axios = axios;

Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);

Vue.config.productionTip = false;

// 定义时间格式的过滤器
Vue.filter('dateFormat', (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') => moment(dataStr).format(pattern));

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
