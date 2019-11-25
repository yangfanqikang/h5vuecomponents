<template>
  <page class="warp" :title="this.$route.query.name">
    <div class="example-info">宫格组件主要使用场景如：商品推荐列表、热门内容等</div>
    <div class="example-title">默认样式（3列）</div>
    <div class="example-body">
      <uni-grid :column="3" :highlight="true" @change="change">
        <uni-grid-item v-for="(item, index) in list" :key="index">
          <img :src="item.url" class="image" mode="aspectFill"/>
          <span class="text">{{ item.text }}</span>
        </uni-grid-item>
      </uni-grid>
    </div>
    <div class="example-title">带红点角标（4列）</div>
    <div class="example-body">
      <uni-grid :column="4" :show-border="true" :square="true" :hor="35" :ver="-45" @change="change">
        <uni-grid-item marker="dot">
          <img class="image" src="https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-1.png" mode="aspectFill"/>
          <p class="text">新浪</p>
        </uni-grid-item>
        <uni-grid-item marker="badge" text="99" type="success">
          <img class="image" src="https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-2.png" mode="aspectFill"/>
          <p class="text">微信</p>
        </uni-grid-item>
        <uni-grid-item marker="badge" type="error" text="热">
          <img class="image" src="https://img-cdn-qiniu.dcloud.net.cn/uni-ui/gird-3.png" mode="aspectFill"/>
          <p class="text">QQ</p>
        </uni-grid-item>
        <uni-grid-item :hor="35" :ver="-45" :img-width="25" marker="img"
                       src="https://img-cdn-qiniu.dcloud.net.cn/uni-ui/recommend.png">
          <img class="image" src="https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-6.png" mode="aspectFill"/>
          <p class="text">抖音</p>
        </uni-grid-item>
      </uni-grid>
    </div>
    <div class="example-title">无边框（3列）</div>
    <div class="example-body">
      <uni-grid :column="3" :show-border="false" :square="false" @change="change">
        <uni-grid-item :hor="35" :ver="-45" marker="badge" type="error" text="12">
          <img class="image" src="https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-1.png" mode="aspectFill"/>
          <p class="text">新浪</p>
        </uni-grid-item>
        <uni-grid-item :hor="40" :ver="-55" :img-width="30" marker="image"
                       src="https://img-cdn-qiniu.dcloud.net.cn/uni-ui/recommend.png">
          <img class="image" src="https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-2.png" mode="aspectFill"/>
          <p class="text">微信</p>
        </uni-grid-item>
        <uni-grid-item>
          <img class="image" src="https://img-cdn-qiniu.dcloud.net.cn/uni-ui/gird-3.png" mode="aspectFill"/>
          <p class="text">QQ</p>
        </uni-grid-item>
        <uni-grid-item>
          <img class="image" src="https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-6.png" mode="aspectFill"/>
          <p class="text">抖音</p>
        </uni-grid-item>
        <uni-grid-item>
          <img class="image" src="https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-7.png" mode="aspectFill"/>
          <p class="text">百度</p>
        </uni-grid-item>
        <uni-grid-item>
          <img class="image" src="https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-8.png" mode="aspectFill"/>
          <p class="text">支付宝</p>
        </uni-grid-item>
      </uni-grid>
    </div>

    <div class="example-title">矩形宫格（3列）</div>
    <div class="example-body">
      <uni-grid :column="3" :square="false" :highlight="false" @change="change">
        <uni-grid-item v-for="(item, index) in list" :key="index">
          <img :src="item.url" class="image" mode="aspectFill"/>
          <p class="text">{{ item.text }}</p>
        </uni-grid-item>
      </uni-grid>
    </div>
    <div class="example-title">边框颜色（4列）</div>
    <div class="example-body">
      <uni-grid :column="4" border-color="#03a9f4" @change="change">
        <uni-grid-item>
          <img class="image" src="https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-1.png" mode="aspectFill"/>
          <p class="text">新浪</p>
        </uni-grid-item>
        <uni-grid-item>
          <img class="image" src="https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-2.png" mode="aspectFill"/>
          <p class="text">微信</p>
        </uni-grid-item>
        <uni-grid-item>
          <img class="image" src="https://img-cdn-qiniu.dcloud.net.cn/uni-ui/gird-3.png" mode="aspectFill"/>
          <p class="text">QQ</p>
        </uni-grid-item>
        <uni-grid-item>
          <img class="image" src="https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-6.png" mode="aspectFill"/>
          <p class="text">抖音</p>
        </uni-grid-item>
      </uni-grid>
    </div>
  </page>
</template>

<script>
import uniGrid from '@/components/globalComponents/uni-app/uni-grid.vue'
import uniGridItem from '@/components/globalComponents/uni-app/uni-grid-item.vue'

export default {
  components: {
    uniGrid,
    uniGridItem
  },
  data () {
    return {
      list: [{
        url: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-1.png',
        text: '新浪'
      },
      {
        url: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-2.png',
        text: '微信'
      },
      {
        url: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/gird-3.png',
        text: 'QQ'
      },
      {
        url: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-6.png',
        text: '抖音'
      },
      {
        url: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-7.png',
        text: '百度'
      },
      {
        url: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-8.png',
        text: '支付宝'
      },
      {
        url: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-9.png',
        text: '字节跳动'
      },
      {
        url: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-4.png',
        text: '手机'
      },
      {
        url: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-5.png',
        text: '工具'
      }
      ]
    }
  },
  methods: {
    change (e) {
      let {
        index
      } = e.detail
      console.log(index)
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

  .image {
    width: 25px;
    height: 25px;
  }

  .text {
    font-size: 13px;
    margin-top: 5px;
  }
</style>
