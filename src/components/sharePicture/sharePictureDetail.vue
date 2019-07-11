<template>
  <div class="share-picture">
    <div id="slider" class="mui-slider">
      <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator 
              mui-segmented-control mui-segmented-control-inverted" data-scroll="1">
        <div class="mui-scroll" style="transform: translate3d(0px, 0px, 0px) translateZ(0px);">
          <a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
            推荐
          </a>
          <a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
            热点
          </a>
          <a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
            北京
          </a>
          <a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
            社会
          </a>
          <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
            娱乐
          </a>
        </div>
      </div>
		</div>
  </div>
</template>

<script>
// import mui from '../../lib/mui/js/mui.js'
import mui from '../../../node_modules/mint-ui/lib/mui.js'

export default {
  mounted() {
    mui('.mui-scroll-wrapper').scroll({
      deceleration: 0.0002 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  }
}
</script>

<style>

  *{
    touch-action: pan-y;
  }

</style>
