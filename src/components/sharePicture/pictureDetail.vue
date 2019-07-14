<template>
  <div class="picture-detail">
    <!-- 标题详情 -->
    <h3 class="title">{{ pictureList.title }}</h3>
    <p class="picture-info">
      <span>发布时间：{{ pictureList.add_time | dateFormat }}</span>
      <span>被点击：{{ pictureList.click }}</span>
    </p>
    <hr/>

    <!-- 缩略图展示区 -->
    <vue-preview class="showShumbnail" :slides="thumbnailList"></vue-preview>

    <!-- 图片描述区域 -->
    <div class="picture-content" v-html = "pictureList.content"></div>

    <!-- 评论区 -->
    <comment :id="this.id"></comment>
  </div>
</template>

<script>
import comment from '../subcomponents/comment.vue'
import { Toast } from 'mint-ui'
export default {
  data() {
    return {
      id: this.$route.params.id,
      pictureList: [],
      thumbnailList: []
    }
  },
  components: {
    comment,
  },
  created() {
    this.getPicture();
    this.getThumbnail();
  },
  methods: {
    getPicture() {
      this.$axios.get(`http://www.liulongbin.top:3005/api/getimageInfo/${this.id}`).then((result) => {
        // console.log(result)
        if(result.data.status === 0){
          this.pictureList = result.data.message[0]
        }else{
          Toast('糟糕，电波无法到达~')
        }
      })
    },
    getThumbnail() {
      this.$axios.get(`http://www.liulongbin.top:3005/api/getthumimages/${this.id}`).then((res) => {
        // console.log(res)
        if(res.data.status === 0){
          res.data.message.forEach(item => {
            item.w = 600;
            item.h = 400;
            item.msrc = item.src;
          });
          this.thumbnailList = res.data.message;
        }
      })
    }
  }
}
</script>

<style lang="less" csoped>
  .picture-detail{
    padding: 0 5px;

    .title{
      font-size: 16px;
      text-align: center;
      margin: 15px 0;
    }

    .picture-info{
      font-size: 12px;
      color: #1e90ff;
      padding: 0 10px;
      display: flex;
      justify-content: space-between;
    }

    .picture-content{
      font-size: 12px;
      color:#8f8f94;
    }

    figure{
      margin: 0;
      padding: 0;
      display: inline;
      text-align: center;
      
      img{
        width: 32%;
        border-radius: 0.5rem;
      }
    }
  }
</style>
