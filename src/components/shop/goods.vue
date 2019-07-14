<template>
  <div class="goods-list">
    
    <div class="per-goods-list" 
                v-for="item in goodsList" 
                :key="item.id"
                @click="getDetail(item.id)">
      <img :src="item.img_url" alt="">
      <strong class="goods-title">{{ item.title }}</strong>
      <div class="goods-info">
        <div class="goods-price">
          <span class="new-price">{{ item.sell_price }}</span>
          <span class="old-price">{{ item.market_price }}</span>
        </div>
        <div class="goods-status">
          <span>热卖中</span> 
          <span>剩{{ item.stock_quantity }}件</span>
        </div>
      </div>
    </div>

    <mt-button type="danger" size="large" @click="getMore()">加载更多</mt-button>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  data() {
    return {
      pageindex: 1,
      goodsList: []
    }
  },

  created() {
    this.getGoodsList()
  },

  methods: {
    getGoodsList() {
      this.$axios.get(`http://www.liulongbin.top:3005/api/getgoods?pageindex=${this.pageindex}`).then((res) => {
        // console.log(res);
        if(res.data.status === 0){
          this.goodsList = this.goodsList.concat(res.data.message)
        }else{
          Toast('糟糕，电波无法到达~')
        }
      })
    },

    getMore() {
      this.pageindex++;
      this.getGoodsList();
    },

    getDetail(id) {
      this.$router.push(`/home/shop/${id}`)
    }
  },
}
</script>

<style lang="less" scoped>
  .goods-list{
    display: flex;
    flex-wrap: wrap;
    padding: 0.5rem;
    justify-content: space-between;

    .per-goods-list{
      width: 49%; 
      border: 1px solid #ccc;
      box-shadow: 0 0 0.8rem #ccc;
      border-radius: 0.3rem;
      margin: 0.3rem 0;
      padding: 0.2rem;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      min-height: 280px;

      img{
        width:100%;
      }

      .goods-title{
        font-size: 16px;
        padding: 0.3rem;
      }

      .goods-info{
        background-color: #eee;
        
        .goods-price{
          display: flex;

          .new-price{
            color:red;
            font-size: 16px;
            font-weight: bold;
          }

          .old-price{
            text-decoration: line-through;
            font-size: 12px;
            margin-left: 1rem;
          }
        }

        .goods-status{
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          padding: 0.2rem;
        }
      }
    }
  }
</style>
