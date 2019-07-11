<template>
	<div class="home">
		<!-- 轮播图 -->
		<mt-swipe :auto="3000" :style="{ height: screenWidth*(3/5)+'px' }">
			<mt-swipe-item v-for="(item,index) in banners" :key="index">
				<img :style="{width:screenWidth+'px', height: screenWidth*(3/5)+'px'}" :src="item.img" alt="">
			</mt-swipe-item>
		</mt-swipe>

		<!-- 页面主域 -->
		<ul class="mui-table-view mui-grid-view mui-grid-9">
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" v-for="(item,index) in containerImgs" :key="index">
				<router-link :to="item.path">
					<img :src="item.img" alt="" @click="fail()">
					<div class="mui-media-body" v-text="item.title"></div>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
import { Toast } from 'mint-ui';
import { setTimeout } from 'timers';

export default {
  data() {
    return {
      screenWidth: document.body.clientWidth,
      banners: [
        { img: 'http://img5.imgtn.bdimg.com/it/u=1634299733,2161135230&fm=26&gp=0.jpg' },
        { img: 'http://img3.imgtn.bdimg.com/it/u=2187805758,1439174019&fm=26&gp=0.jpg' },
        { img: 'http://img1.imgtn.bdimg.com/it/u=2741002109,1663526154&fm=26&gp=0.jpg' },
        { img: 'http://img0.imgtn.bdimg.com/it/u=236420197,2307511421&fm=26&gp=0.jpg' },
      ],
      containerImgs: [
        {
          img: require('../../assets/homeContainerImg/news.png'),
          title: '新闻资讯',
          path: '/home/newslist',
        },
        {
          img: require('../../assets/homeContainerImg/shareImg.png'),
          title: '图片分享',
          path: '#',
        },
        {
          img: require('../../assets/homeContainerImg/goods.png'),
          title: '商品购买',
          path: '#',
        },
        {
          img: require('../../assets/homeContainerImg/msgboard.png'),
          title: '留言反馈',
          path: '#',
        },
        {
          img: require('../../assets/homeContainerImg/video.png'),
          title: '视频专区',
          path: '#',
        },
        {
          img: require('../../assets/homeContainerImg/contact.png'),
          title: '联系我们',
          path: '#',
        },
      ],
    };
  },
  methods: {
    fail() {
      setTimeout(() => {
        // console.log(this.$route)
        if (this.$route.hash == '#') {
          Toast({
            message: '该功能还在完善中，敬请期待~',
            duration: 2000,
          });
        }
      }, 100);
    },
  },
  created() {

  },
  mounted() {
    const that = this;
    window.onresize = () => (() => { // 获取当前屏幕的宽度
      window.screenWidth = document.body.clientWidth;
      that.screenWidth = window.screenWidth;
    })();
  },
};
</script>

<style scoped>

	.mui-grid-view.mui-grid-9{
		background-color: #fff;
		border:none;
	}

	.mui-grid-view.mui-grid-9 .mui-table-view-cell{
		border:none;
	}

	.mui-table-view.mui-grid-view .mui-media-body{
		font-size: 0.75rem
	}
</style>
