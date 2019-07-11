<template>
  <div class="share-picture">
    <div id="slider" class="mui-slider">
      <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator 
              mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">
          <a :class="['mui-control-item', item.id == 0 ? 'mui-active':'']" v-for="item in cates" :key="item.id">
            {{ item.title }}
          </a>
        </div>
      </div>
		</div>
  </div>
</template>

<script>
import mui from '../../../node_modules/mint-ui/lib/mui.js'
export default {
  data() {
    return {
      cates: [],
    }
  },
  created() {
    this.getAllCategory();
  },

  mounted() {
    // console.log(mui)
    mui('.mui-scroll-wrapper').scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },

  methods: {
    getAllCategory(){
      this.$axios.get("http://www.liulongbin.top:3005/api/getimgcategory").then((result) => {
        // console.log(result.data.message)
        if(result.data.status === 0){
          result.data.message.unshift({ title:"全部", id: 0 });
          this.cates = result.data.message;
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
</style>
