<template>
  <div class="cmt-container">
    <h3>发表评论:</h3>
    <textarea placeholder="友善的评论是交流的起点" maxlength="200" v-model="msg"></textarea>
    <mt-button type="primary" size="large" @click="postComment()">立即评论</mt-button>

    <div class="cmt-list">
      <div class="cmt-item" v-for="(item,index) in comments" :key="index">
        <div class="cmt-title">
          <div class="floor-user">#{{ index+1 }}&nbsp;&nbsp;{{ item.user_name }}</div>
          <div class="add-time">评论时间：{{ item.add_time | dateFormat }}</div>
        </div>
        <div class="cmt-body">{{ item.content || '该评论已被折叠' }}</div>
      </div>
    </div>

    <mt-button class="getMore-btn" type="danger" size="large" plain @click="getMore()">加载更多</mt-button>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';

export default {
  data() {
    return {
      pageIndex: 1,
      comments: [],
      msg: '',
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
      this.$axios.get(`http://www.liulongbin.top:3005/api/getcomments/${this.id}?pageindex=${this.pageIndex}`).then((result) => {
        // console.log(result.data.message);
        if (result.data.status === 0) {
          if (result.data.message.length != 0) {
            // 拼接数组，为了增加页码时不覆盖之前的评论
            this.comments = this.comments.concat(result.data.message);
          } else {
            Toast('无法再加载更多了 (╥╯^╰╥)');
          }
        } else {
          Toast('评论被吃掉了 (╥╯^╰╥)');
        }
      });
    },
    getMore() {
      this.pageIndex++;
      this.getComment();
    },
    postComment() {
      if (this.msg.trim().length === 0) {
        return Toast('评论内容不能为空哦~');
      }

      this.$axios({
        method: 'post',
        url: `http://www.liulongbin.top:3005/api/postcomment/${this.$route.params.id}`,
        content: this.msg.trim(),
      }).then((result) => {
        console.log(result);
        if (result.data.status === 0) {
          const cmt = {
            user_name: '匿名用户',
            add_time: Date.now(),
            content: this.msg.trim(),
          };
          this.comments.unshift(cmt);
          this.msg = '';
        }
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
          background-color: rgba(234, 234, 239, 0.5);
          padding: 0 0.5rem;
        }

        .cmt-body{
          line-height: 3.5rem;
          text-indent: 2rem;
        }
      }
    }

    .getMore-btn{
      margin-bottom: 1rem;
    }
  }
</style>
