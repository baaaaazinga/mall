<template>
	<div class="news-list">
		<ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
				<router-link :to="'/home/news/' + item.id">
					<img class="mui-media-object mui-pull-left" :src="item.img_url">
					<div class="mui-media-body">
						<strong v-text="item.title"></strong>
						<p class="mui-ellipsis" >
							<span>{{ item.add_time | dateFormat }}</span>
							<span>被点击：{{ item.click }}次</span>
						</p>
					</div>
				</router-link>
			</li>
	</ul>
	</div>
</template>

<script>
import { Toast } from 'mint-ui';

export default {
  data() {
    return {
      newslist: [],
    };
  },
  created() {
    this.getNewsList();
  },
  methods: {
    getNewsList() {
      this.$axios.get('http://www.liulongbin.top:3005/api/getnewslist').then((result) => {
        // console.log(result)
        if (result.data.status === 0) {
          this.newslist = result.data.message;
        } else {
          Toast('电波似乎无法到达~');
        }
      });
    },
  },
};
</script>

<style scoped>
	.mui-media-body{
		font-size: 12px;
	}

	.mui-ellipsis{
		display: flex;
		justify-content: space-between;
		font-size: 12px;
		color: #1e90ff;
	}
</style>
