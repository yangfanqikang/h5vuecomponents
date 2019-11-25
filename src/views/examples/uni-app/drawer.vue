<template>
  <page :title="this.$route.query.name">
    <div class="header">
      <div class="input-div">
        <uni-icons type="search" size="44" color="#666666"/>
        <input confirm-type="search" class="input" type="text" placeholder="输入搜索关键词" @confirm="confirm">
      </div>
    </div>
    <div class="uni-drawer-info">这是抽屉式导航组件使用示例，可以指定菜单左侧或者右侧弹出（仅初始化生效），组件内部可以放置任何内容。点击页面按钮即可显示导航菜单。</div>
    <div>
      <div class="example-title">左侧滑出</div>
      <div class="example-body">
        <van-button plain type="primary" @click="show('left')">显示Drawer</van-button>
        <uni-drawer :visible="showLeft" mode="left" @close="closeDrawer('left')">
          <!-- #ifndef MP-BAIDU || MP-ALIPAY || MP-TOUTIAO -->
          <uni-list>
            <uni-list-item title="Item1"/>
            <uni-list-item title="Item2"/>
            <uni-list-item :show-badge="true" title="Item3" badge-text="12"/>
          </uni-list>
          <!-- #endif -->
          <!-- #ifdef MP-BAIDU || MP-ALIPAY || MP-TOUTIAO -->
          <div class="uni-list">
            <uni-list-item title="Item1"/>
            <uni-list-item title="Item2"/>
            <uni-list-item :show-badge="true" title="Item3" badge-text="12"/>
          </div>
          <!-- #endif -->
          <div class="close">
            <van-button plain type="warning" @click="hide">关闭Drawer</van-button>
          </div>
        </uni-drawer>
      </div>
      <div class="example-title">右侧滑出</div>
      <div class="example-body">
        <van-button plain type="primary" @click="show('right')">显示Drawer</van-button>
        <uni-drawer :visible="showRigth" mode="right" @close="closeDrawer('right')">
          <!-- #ifndef MP-BAIDU || MP-ALIPAY || MP-TOUTIAO -->
          <uni-list>
            <uni-list-item title="Item1"/>
            <uni-list-item title="Item2"/>
            <uni-list-item :show-badge="true" title="Item3" badge-text="12"/>
          </uni-list>
          <!-- #endif -->
          <!-- #ifdef MP-BAIDU || MP-ALIPAY || MP-TOUTIAO -->
          <div class="uni-list">
            <uni-list-item title="Item1"/>
            <uni-list-item title="Item2"/>
            <uni-list-item :show-badge="true" title="Item3" badge-text="12"/>
          </div>
          <!-- #endif -->
          <div class="close">
            <van-button plain type="warning" @click="hide">关闭Drawer</van-button>
          </div>
        </uni-drawer>
      </div>
    </div>
  </page>
</template>
<script>

export default {
  data () {
    return {
      showRigth: false,
      showLeft: false
    }
  },
  methods: {
    show (e) {
      if (e === 'left') {
        this.showLeft = true
      } else {
        this.showRigth = true
      }
    },
    hide () {
      this.showLeft = false
      this.showRigth = false
    },
    closeDrawer (e) {
      if (e === 'left') {
        this.showLeft = false
      } else {
        this.showRigth = false
      }
    },
    confirm () {
    }
  },
  onNavigationBarButtonTap (e) {
    this.showRigth = !this.showRigth
  },
  onBackPress () {
    if (this.showRigth || this.showLeft) {
      this.hide()
      return true
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

  .header {
    display: flex;
    flex-direction: row;
    padding: 5px 7px;
    align-items: center;
    border-top: 1px #f5f5f5 solid;
    background: #fff;
  }

  .input-div {
    display: flex;
    align-items: center;
    flex-direction: row;
    background-color: #e7e7e7;
    height: 30px;
    border-radius: 15px;
    padding: 0 10px;
    flex: 1;
    background: #f5f5f5;
  }

  .uni-drawer-info {
    background: #fff;
    padding: 15px;
    padding-top: 5px;
    color: #3b4144;
  }

  .uni-padding-wrap {
    padding: 0 7px;
    line-height: 1.8;
  }

  .input {
    flex: 1;
    padding: 0 2px;
    height: 24px;
    line-height: 24px;
    font-size: 12px;
    border: none;
    background: none;
  }

  .close {
    padding: 15px;
  }
</style>
