<template>
  <page :title="this.$route.query.name">
    <div class="example-info">列表组件可以在其中使用图标、略缩图或放置任何你想放的元素，使用场景如：导航菜单、列表、设置中心排版等</div>
    <div class="example-title">基础列表</div>
    <uni-list>
      <uni-list-item :show-arrow="false" title="列表文字" />
      <uni-list-item :show-arrow="false" title="列表文字" note="列表描述信息" />
      <uni-list-item :disabled="true" :show-arrow="false" title="列表禁用状态" />
    </uni-list>
    <div class="example-title">菜单列表</div>
    <uni-list>
      <uni-list-item title="列表右侧带箭头" />
      <uni-list-item :show-badge="true" title="列表右侧带箭头 + 角标" badge-text="12" />
      <uni-list-item title="列表左侧带略缩图" thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png" />
      <uni-list-item :show-extra-icon="true" :extra-icon="extraIcon1" title="列表左侧带扩展图标" />
      <uni-list-item :show-extra-icon="true" :extra-icon="extraIcon1" :show-switch="true" title="列表右侧带 switch" @switchChange="switchChange" />
      <uni-list-item :disabled="true" :show-extra-icon="true" :extra-icon="extraIcon2" :show-switch="true" :switch-checked="true" title="禁用状态" @switchChange="switchChange" />
    </uni-list>

  </page>
</template>

<script>
export default {
  data () {
    return {
      extraIcon1: {
        color: '#007aff',
        size: '22',
        type: 'gear-filled'
      },
      extraIcon2: {
        color: '#4cd964',
        size: '22',
        type: 'image'
      }
    }
  },
  methods: {
    switchChange (e) {}
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
</style>
