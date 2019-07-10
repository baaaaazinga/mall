<template>
  <div class="cmt-container">
    <h3>发表评论:</h3>
    <textarea placeholder="友善的评论是交流的起点" maxlength="200"></textarea>
    <mt-button type="primary" size="large">立即评论</mt-button>

    <div class="cmt-list">
      <div class="cmt-item">
        <div class="cmt-title">
          <div class="floor-user">#1&nbsp;&nbsp;用户：匿名用户</div>
          <div class="add-time">评论时间：2019-2-22 15:36:12</div>
        </div>
        <div class="cmt-body">
          评论内容
        </div>
      </div>
    </div>

    <mt-button type="danger" size="large" plain>加载更多</mt-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageIndex: 1,
    };
  },
  props: [
    'id',
  ],
  created() {
    this.getComment();
  },
  methods: {
    getComment() {
      // this.$axios.get('http://localhost:3000/api/getnewscom?newsId=' + this.id + "&pageIdx=" + this.pageIndex).then(result => {
      this.$axios.get(`http://www.liulongbin.top:3005/api/getcomments/${this.id}?pageindex=${this.pageIndex}`).then((result) => {
        console.log(result);
      });
    },
  },
};
</script>

<style lang="less" scoped>
  .cmt-container{
    h3{
      font-size: 2rem;
      margin-top: 1rem;
    }

    textarea{
      font-size: 1.4rem;
      padding:0.5rem;
      height: 5rem;
      margin: 0;
    }

    .cmt-list{
      margin: 0.8rem 0;

      .cmt-item{
        font-size: 1.3rem;

        .cmt-title{
          display:flex;
          justify-content: space-between;
          line-height: 3rem;
          background-color: rgba(234, 234, 239, 0.3);
          padding: 0 0.5rem;
        }

        .cmt-body{
          line-height: 3.5rem;
          text-indent: 2rem;
        }
      }
    }
  }
</style>
