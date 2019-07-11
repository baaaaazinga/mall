<template>
  <div class="news-detail">
    <h3 class="title">{{ newsdetail.title }}</h3>
    <p class="news-detail-info">
      <span>发布时间：{{ newsdetail.add_time | dateFormat }}</span>
      <span>被点击：{{ newsdetail.click }}次</span>
    </p>

    <hr>

    <div class="news-content" v-html="newsdetail.content"></div>

    <comment :id="this.id"></comment>
  </div>
</template>

<script>
import comment from '../subcomponents/comment.vue';
import { Toast } from 'mint-ui';
export default {
  data() {
    return {
      id: this.$route.params.id,
      newsdetail: {},
    };
  },
  created() {
    this.getNewsDetail();
  },
  methods: {
    getNewsDetail() {
      this.$axios.get(`http://www.liulongbin.top:3005/api/getnew/${this.id}`).then((result) => {
        // console.log(result.data.message[0].content)
        if (result.data.status === 0) {
          this.newsdetail = result.data.message[0];
        } else {
          (
            Toast('电波似乎无法到达~')
          );
        }
      });
    },
  },
  components: {
    comment,
  },
};
</script>

<style lang="less" scoped>
  .news-detail{
    padding: 0 5px;

    .title{
      font-size: 16px;
      text-align: center;
      margin: 15px 0;
    }

    .news-detail-info{
      font-size: 12px;
      color: #1e90ff;
      padding: 0 10px;
      display: flex;
      justify-content: space-between
    }
  }
</style>
