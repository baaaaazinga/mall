<template>
  <div class="share-picture">

    <!-- 顶部图片分类导航 -->
    <div id="slider" class="mui-slider">
      <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator 
              mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">
          <a :class="['mui-control-item', 
              item.id == 0 ? 'mui-active':'']" 
              v-for="item in cates" 
              :key="item.id"
              @tap="getPictureList(item.id)">
            {{ item.title }}
          </a>
        </div>
      </div>
		</div>

    <!-- 图片展示区域 -->
    <ul class="picture-list">
      <router-link v-for="item in pictureList" 
                  :key="item.id"
                  :to="'/home/pictures/'+item.id"
                  tag="li">
        <img class="pictures" v-lazy="item.img_url">
        <div class="picture-info">
          <div class="picture-info-title">{{ item.title }}</div>
          <div class="picture-info-content" v-html="item.content"></div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
import mui from '../../../node_modules/mint-ui/lib/mui.js'
import { Toast } from 'mint-ui'
export default {
  data() {
    return {
      cates: [],
      pictureList: [],
    }
  },
  created() {
    this.getAllCategory();
    this.getPictureList(0);
  },

  mounted() {
    // console.log(mui)
    mui('.mui-scroll-wrapper').scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },

  methods: {
    getAllCategory(){
      this.$axios.get("http://www.liulongbin.top:3005/api/getimgcategory/").then((result) => {
        // console.log(result.data.message)
        if(result.data.status === 0){
          result.data.message.unshift({ title:"全部", id: 0 });
          this.cates = result.data.message;
        }
      })
    },
    getPictureList(pictureId){
      this.$axios.get("http://www.liulongbin.top:3005/api/getimages/" + pictureId).then((result) => {
        // console.log(result);
        if(result.data.status === 0 ){
          this.pictureList = result.data.message;
        }else{
          Toast('糟糕，电波无法到达>.<')
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  *{
    touch-action: pan-y;
  }

  .share-picture{

    .picture-list{
      padding: 0 1rem;
      margin: 0;

      li{
        list-style: none;
        background-color: #ccc;
        margin-bottom: 1.5rem;
        text-align: center;
        box-shadow: 0px 0px 0.8rem #888;
        border-radius: 1rem;
        position: relative;
        overflow: hidden;
        
        img[lazy=loading] {
          width: 40px;
          height: 300px;
          margin: auto;
        }

        .pictures {
          width: 100%;
          height: 300px;
          margin: auto;
          vertical-align: middle;
        }
      }

      .picture-info{
        position: absolute;
        bottom: 0;
        max-height: 7rem;

        .picture-info-title{
          color: #fff;
          background-color: rgba(0,0,0,0.3);
          font-size: 16px;
          text-align: left;
        }

        .picture-info-content{
          color: #fff;
          background-color: rgba(0,0,0,0.3);
          font-size: 12px;
          text-align: left;
        }
      }
    }
  }
</style>
