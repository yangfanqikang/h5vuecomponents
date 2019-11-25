<template>

  <div class="uni-navbar">
    <div :class="{'uni-navbar--fixed': fixed,'uni-navbar--shadow':border,'uni-navbar--border':border}"
         :style="{'background-color':backgroundColor}" class="uni-navbar__content">
      <uni-status-bar v-if="statusBar"/>
      <div :style="{color:color}" class="uni-navbar__header uni-navbar__content_div">
        <div class="uni-navbar__header-btns uni-navbar__content_div" @click="onClickLeft">
          <div v-if="leftIcon.length" class="uni-navbar__content_div">
            <uni-icons :type="leftIcon" :color="color" size="24"/>
          </div>
          <div v-if="leftText.length" :class="{'uni-navbar-btn-icon-left':!leftIcon.length}"
               class="uni-navbar-btn-text uni-navbar__content_div">{{ leftText }}
          </div>
          <slot name="left"/>
        </div>
        <div class="uni-navbar__header-container uni-navbar__content_div">
          <div v-if="title.length" class="uni-navbar__header-container-inner uni-navbar__content_div">{{ title }}</div>
          <!-- 标题插槽 -->
          <slot/>
        </div>
        <div :class="title.length?'uni-navbar__header-btns-right':''"
             class="uni-navbar__header-btns uni-navbar__content_div" @click="onClickRight">
          <div v-if="rightIcon.length" class="uni-navbar__content_div">
            <uni-icons :type="rightIcon" :color="color" size="24"/>
          </div>
          <!-- 优先显示图标 -->
          <div v-if="rightText.length&&!rightIcon.length" class="uni-navbar-btn-text uni-navbar__content_div">{{
            rightText }}
          </div>
          <slot name="right"/>
        </div>
      </div>
    </div>
    <div v-if="fixed" class="uni-navbar__placeholder">
      <uni-status-bar v-if="statusBar"/>
      <div class="uni-navbar__placeholder-div"/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'UniNavBar',
  props: {
    title: {
      type: String,
      default: ''
    },
    leftText: {
      type: String,
      default: ''
    },
    rightText: {
      type: String,
      default: ''
    },
    leftIcon: {
      type: String,
      default: ''
    },
    rightIcon: {
      type: String,
      default: ''
    },
    fixed: {
      type: [Boolean, String],
      default: false
    },
    color: {
      type: String,
      default: '#000000'
    },
    backgroundColor: {
      type: String,
      default: '#FFFFFF'
    },
    statusBar: {
      type: [Boolean, String],
      default: false
    },
    shadow: {
      type: [String, Boolean],
      default: true
    },
    border: {
      type: [String, Boolean],
      default: true
    }
  },
  methods: {
    onClickLeft () {
      this.$emit('click-left')
    },
    onClickRight () {
      this.$emit('click-right')
    }
  }
}
</script>

<style scoped>
  @charset "UTF-8";
  .uni-navbar {
    width: 100%;
    height: 88px;
    display: flex;
    align-items: center;
  }

  .uni-navbar__content {
    display: block;
    position: relative;
    width: 100%;
    background-color: #fff;
    overflow: hidden
  }

  .uni-navbar__content .uni-navbar__content_div {
    display: flex;
    align-items: center
  }

  .uni-navbar__header {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 88px;
    line-height: 88px;
    font-size: 16px
  }

  .uni-navbar__header-btns {
    display: inline-flex;
    flex-wrap: nowrap;
    flex-shrink: 0;
    width: 120px;
    padding: 0 12px
  }

  .uni-navbar__header-btns:first-child {
    padding-left: 0
  }

  .uni-navbar__header-btns:last-child {
    width: 60px
  }

  .uni-navbar__header-btns-right:last-child {
    width: 120 rpx;
    text-align: right;
    flex-direction: row-reverse
  }

  .uni-navbar__header-container {
    width: 100%;
    margin: 0 10px
  }

  .uni-navbar__header-container-inner {
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 30px
  }

  .uni-navbar__placeholder-div {
    height: 44px
  }

  .uni-navbar--fixed {
    position: fixed;
    z-index: 998
  }

  .uni-navbar--shadow {
    box-shadow: 0 1px 6px #ccc
  }

  .uni-navbar--border:after {
    position: absolute;
    z-index: 3;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    content: '';
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: #e5e5e5
  }
</style>
