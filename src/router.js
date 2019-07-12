import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      component: () => import('./components/tabbar/HomeContainer.vue'),
    },
    {
      path: '/member',
      component: () => import('./components/tabbar/MemberContainer.vue'),
    },
    {
      path: '/shopcar',
      component: () => import('./components/tabbar/ShopcarContainer.vue'),
    },
    {
      path: '/search',
      component: () => import('./components/tabbar/SearchContainer.vue'),
    },
    {
      path: '/home/newslist',
      component: () => import('./components/news/newsList.vue'),
    },
    {
      path: '/home/news/:id',
      component: () => import('./components/news/newsDetail.vue'),
    },
    {
      path: '/home/pictures',
      component:() => import('./components/sharePicture/sharePictureDetail.vue')
    },
    {
      path: '/home/pictures/:id',
      component:() => import('./components/sharePicture/pictureDetail.vue')
    }
  ],
  // 重设linkActiveClass类，让选中状态高亮显示
  linkActiveClass: 'mui-active',
});
