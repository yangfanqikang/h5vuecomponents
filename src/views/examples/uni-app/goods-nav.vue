<template>
  <page :title="this.$route.query.name">
    <div class="example-info">
      uni-goods-nav 组件主要用于电商类应用底部导航，可自定义加入购物车，购买等操作
    </div>
    <div class="example-title">基础用法</div>
    <div class="example-body">
      <uni-goods-nav/>
    </div>

    <div class="example-title">自定义用法</div>
    <div class="example-body">
      <uni-goods-nav :fill="true" :options="options" :button-group="buttonGroup" @click="onClick"
                     @buttonClick="buttonClick"/>
    </div>
    <div class="goods-carts">
      <uni-goods-nav :options="options" :button-group="buttonGroup"/>
    </div>

  </page>
</template>

<script>
import uniGoodsNav from '@/components/globalComponents/uni-app/uni-goods-nav.vue'

export default {
  components: {
    uniGoodsNav
  },
  data () {
    return {
      options: [{
        icon: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/kefu.png',
        text: '客服'
      }, {
        icon: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/dianpu.png',
        text: '店铺'
      }, {
        icon: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/carts.png',
        text: '购物车',
        info: 2
      }],
      buttonGroup: [{
        text: '加入购物车',
        backgroundColor: '#ff0000',
        color: '#fff'
      },
      {
        text: '立即购买',
        backgroundColor: '#ffa200',
        color: '#fff'
      }
      ]
    }
  },
  mounted () {
  },
  methods: {
    onClick (e) {
      // uni.showToast({
      //   title: `点击${e.content.text}`,
      //   icon: 'none'
      // })
    },
    buttonClick (e) {
      console.log(e)

      this.options[2].info++
    }
  }
}
</script>

<style scoped>
  page {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    background-color: #efeff4
  }

  div {
    font-size: 14px;
    line-height: inherit
  }

  .example {
    padding: 0 15px 15px
  }

  .example-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    color: #464e52;
    padding: 15px 15px 15px 25px;
    margin-top: 10px;
    position: relative;
    background-color: #fdfdfd;
    border-bottom: 1px #f5f5f5 solid
  }

  .example-title__after {
    position: relative;
    color: #031e3c
  }

  .example-title:after {
    content: '';
    position: absolute;
    left: 15px;
    margin: auto;
    top: 0;
    bottom: 0;
    width: 3px;
    height: 16px;
    background-color: #ccc
  }

  .example .example-title {
    margin: 20px 0
  }

  .example-body {
    padding: 15px;
    background: #fff
  }

  .example-info {
    padding: 15px;
    color: #3b4144;
    background: #fff
  }

  .example-body {
    padding: 0;
  }

  .goods-carts {
    width: 100%;
    position: fixed;
    bottom: 0;
  }
</style>
