<template>
  <div>
    <div class="example-info">加载更多组件用于页面加载更多数据时，页面底部显示内容等场景。</div>
    <div class="example-title">基本用法</div>
    <div class="example-body">
      <uni-load-more :status="status"/>
    </div>
    <div class="example-title">修改默认颜色及文字</div>
    <div class="example-body">
      <uni-load-more :status="status" :content-text="contentText" color="#007aff"/>
    </div>
    <div class="example-title">指定加载图标样式</div>
    <div class="example-body">
      <uni-load-more iconType="circle" :status="status"/>
      <uni-load-more iconType="auto" :status="status"/>
      <uni-load-more iconType="spinner" :status="status"/>
    </div>

    <div class="example-title">改变组件状态</div>
    <radio-group class="uni-list" @change="onChange">
      <label v-for="(item, index) in statusTypes" :key="index" class="uni-list-item">
        <div class="uni-list-item__container">
          <div class="uni-list-item__content">
            <div class="uni-list-item__content-title">{{ item.text }}</div>
          </div>
          <div class="uni-list-item__extra">
            <radio :value="item.value" :checked="item.checked"/>
          </div>
        </div>
      </label>
    </radio-group>
  </div>
</template>
<script>
import uniLoadMore from '@/components/globalComponents/uni-app/uni-load-more.vue'

export default {
  components: {
    uniLoadMore
  },
  data () {
    return {
      status: 'more',
      statusTypes: [{
        value: 'more',
        text: '加载前',
        checked: true
      }, {
        value: 'loading',
        text: '加载中',
        checked: false
      }, {
        value: 'noMore',
        text: '没有更多',
        checked: false
      }],
      contentText: {
        contentdown: '查看更多',
        contentrefresh: '加载中',
        contentnomore: '没有更多'
      }
    }
  },
  methods: {
    onChange (e) {
      this.status = e.detail.value
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
    font-size: 28px;
    line-height: inherit
  }

  .example {
    padding: 0 30px 30px
  }

  .example-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 32px;
    color: #464e52;
    padding: 30px 30px 30px 50px;
    margin-top: 20px;
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
    left: 30px;
    margin: auto;
    top: 0;
    bottom: 0;
    width: 6px;
    height: 32px;
    background-color: #ccc
  }

  .example .example-title {
    margin: 40px 0
  }

  .example-body {
    padding: 30px;
    background: #fff
  }

  .example-info {
    padding: 30px;
    color: #3b4144;
    background: #fff
  }

  uni-radio-group uni-label {
    padding: 0;
  }

  .uni-list {
    background: #fff;
  }

  .example-body {
    padding: 10px 30px;
  }

  .uni-list-item__container {
    padding: 24px 30px;
    width: 100%;
    box-sizing: border-box;
    flex: 1;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .uni-list-item__container:after {
    position: absolute;
    z-index: 3;
    right: 0;
    bottom: 0;
    left: 30px;
    height: 1px;
    content: '';
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: #c8c7cc;
  }
</style>
