<template>
  <div class="goods-list">
    <div class="per-goods-list">
      <img src="http://img4.imgtn.bdimg.com/it/u=2918413575,4097775641&fm=26&gp=0.jpg" alt="">
      <strong class="goods-title">不要1998，也不要998，只卖799</strong>
      <div class="goods-info">
        <div class="goods-price">
          <span class="new-price">￥799</span>
          <span class="old-price">￥1999</span>
        </div>
        <div class="goods-status">
          <span>热卖中</span>
          <span>剩55件</span>
        </div>
      </div>
    </div>

    <div class="per-goods-list">
      <img src="http://img4.imgtn.bdimg.com/it/u=2918413575,4097775641&fm=26&gp=0.jpg" alt="">
      <strong class="goods-title">不要1998，也不要998，只卖799</strong>
      <div class="goods-info">
        <div class="goods-price">
          <span class="new-price">￥799</span>
          <span class="old-price">￥1999</span>
        </div>
        <div class="goods-status">
          <span>热卖中</span>
          <span>剩55件</span>
        </div>
      </div>
    </div>

    <div class="per-goods-list">
      <img src="http://img4.imgtn.bdimg.com/it/u=2918413575,4097775641&fm=26&gp=0.jpg" alt="">
      <strong class="goods-title">不要1998，也不要998，只卖799</strong>
      <div class="goods-info">
        <div class="goods-price">
          <span class="new-price">￥799</span>
          <span class="old-price">￥1999</span>
        </div>
        <div class="goods-status">
          <span>热卖中</span>
          <span>剩55件</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  
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
