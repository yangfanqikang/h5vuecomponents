<template>
  <div>
    <div class="example-title">基本用法</div>
    <uni-swipe-action :options="options2" @click="bindClick">
      <div class="cont">SwipeAction 基础使用场景</div>
    </uni-swipe-action>
    <div class="example-title">禁止滑动</div>
    <uni-swipe-action :disabled="true">
      <div class="cont">SwipeAction 禁止滑动展示</div>
    </uni-swipe-action>
    <div class="example-title">使用变量控制开关</div>
    <div class="example-body">
      <div class="button" @click="setOpened">当前状态：{{ isOpened ? '开' : '关' }}</div>
    </div>
    <uni-swipe-action :options="options2" :show="isOpened" :auto-close="false" @change="change">
      <div class="cont">使用变量控制SwipeAction的开启状态</div>
    </uni-swipe-action>
    <div class="example-title">与 List 组件一起使用</div>
    <uni-list>
      <uni-swipe-action :options="options1">
        <uni-list-item :show-arrow="false" title="item1"/>
      </uni-swipe-action>
      <uni-swipe-action :options="options2">
        <uni-list-item :show-arrow="false" title="item2"/>
      </uni-swipe-action>
      <uni-swipe-action :options="options3">
        <uni-list-item :show-arrow="false" title="item3"/>
      </uni-swipe-action>
    </uni-list>
    <div class="uni-list">
      <uni-swipe-action :options="options1">
        <uni-list-item :show-arrow="false" title="item1"/>
      </uni-swipe-action>
      <uni-swipe-action :options="options2">
        <uni-list-item :show-arrow="false" title="item2"/>
      </uni-swipe-action>
      <uni-swipe-action :options="options3">
        <uni-list-item :show-arrow="false" title="item3"/>
      </uni-swipe-action>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isOpened: false,
      options1: [{
        text: '取消置顶'
      }],
      options2: [{
        text: '取消',
        style: {
          backgroundColor: '#007aff'
        }
      }, {
        text: '确认',
        style: {
          backgroundColor: '#dd524d'
        }
      }],
      options3: [{
        text: '置顶'
      }, {
        text: '标记为已读',
        style: {
          backgroundColor: 'rgb(254,156,1)'
        }
      }, {
        text: '删除',
        style: {
          backgroundColor: 'rgb(255,58,49)'
        }
      }]
    }
  },
  created () {
    this.$nextTick(() => {
      this.isOpened = true
    })
  },
  methods: {
    bindClick (e) {
      console.log(e)
      // uni.showToast({
      //   title: `点击了${e.content.text}按钮`,
      //   icon: 'none'
      // })
    },
    setOpened () {
      this.isOpened = !this.isOpened
    },
    change (e) {
      this.isOpened = e
    }
  }
}
</script>

<style>
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

  .cont {
    height: 90px;
    line-height: 90px;
    padding: 0 30px;
    position: relative;
    background: #fff;
  }

  .cont::before {
    position: absolute;
    z-index: 3;
    left: 0;
    right: 0;
    top: 0;
    height: 1px;
    content: '';
    transform: scaleY(0.5);
    background-color: $ uni-border-color;
  }

  .cont::after {
    position: absolute;
    z-index: 3;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1px;
    content: '';
    transform: scaleY(0.5);
    background-color: $ uni-border-color;
  }

  .example-body {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 20px 0;
  }

  /* .button-div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 20px 0;
    background: #fff;
  } */

  .button {
    border: 1px solid #E7E7E7;
    padding: 8px 16px;
    border-radius: 8px;
  }
</style>
