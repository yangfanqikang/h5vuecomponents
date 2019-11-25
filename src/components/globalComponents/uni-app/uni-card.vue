<template>
  <div
    :class="{ 'uni-card--full': isFull === true || isFull === 'true', 'uni-card--shadow': isShadow === true || isShadow === 'true' }"
    class="uni-card" @click="onClick">
    <div v-if="mode === 'style'" class="uni-card__thumbnailimage">
      <img :src="thumbnail" mode="aspectFill"/>
      <div v-if="title" class="uni-card__thumbnailimage-title">{{ title }}</div>
    </div>
    <div v-if="mode === 'title'" class="uni-card__title">
      <div class="uni-card__title-header">
        <img :src="thumbnail" mode="aspectFill"/>
      </div>
      <div class="uni-card__title-content">
        <div class="uni-card__title-content-title">{{ title }}</div>
        <div class="uni-card__title-content-extra">{{ extra }}</div>
      </div>
    </div>
    <!-- 标题 -->
    <div v-if="mode === 'basic' && title" class="uni-card__header">
      <div v-if="thumbnail" class="uni-card__header-extra-img-div">
        <img :src="thumbnail" class="uni-card__header-extra-img"/>
      </div>
      <div class="uni-card__header-title-text">{{ title }}</div>
      <div v-if="extra" class="uni-card__header-extra-text">{{ extra }}</div>
    </div>
    <!-- 内容 -->
    <div class="uni-card__content uni-card__content--pd">
      <div v-if="mode === 'style' && extra" class="uni-card__content-extra">{{ extra }}</div>
      <slot/>
    </div>
    <!-- 底部 -->
    <div v-if="note" class="uni-card__footer">
      <slot name="footer">
        <p>{{ note }}</p>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UniCard',
  props: {
    title: {
      type: String,
      default: ''
    }, // 标题
    extra: {
      type: String,
      default: ''
    }, // 扩展信息
    note: {
      type: String,
      default: ''
    }, // Tips
    thumbnail: {
      type: String,
      default: ''
    }, // 缩略图
    // 卡片模式 ， 可选值 basic：基础卡片 ；style ：图文卡片 ； title ：标题卡片
    mode: {
      type: String,
      default: 'basic'
    },
    isFull: {
      // 内容区域是否通栏
      type: Boolean,
      default: false
    },
    isShadow: {
      // 是否开启阴影
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
  @charset "UTF-8";

  .uni-card {
    margin-left: 12px;
    margin-right: 12px;
    background: #fff;
    box-shadow: none;
    position: relative;
    display: flex;
    flex-direction: column;
    border: 1px #ddd solid;
    border-radius: 3px;
    overflow: hidden
  }

  .uni-card__thumbnailimage {
    position: relative;
    height: 150px
  }

  .uni-card__thumbnailimage img {
    width: 100%;
    height: 100%
  }

  .uni-card__thumbnailimage-title {
    position: absolute;
    bottom: 0;
    padding: 7px 10px;
    font-size: 16px;
    width: 100%;
    color: #fff
  }

  .uni-card__title {
    display: flex;
    padding: 10px;
    border-bottom: 1px #f5f5f5 solid
  }

  .uni-card__title-header {
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    overflow: hidden;
    border-radius: 5px
  }

  .uni-card__title-header img {
    width: 100%;
    height: 100%
  }

  .uni-card__title-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 10px;
    height: 40px;
    overflow: hidden
  }

  .uni-card__title-content-title {
    font-size: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
  }

  .uni-card__title-content-extra {
    font-size: 13px;
    color: #999;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
  }

  .uni-card__header {
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 8px;
    align-items: center
  }

  .uni-card__header:after {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    height: 1px;
    content: '';
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: #e5e5e5
  }

  .uni-card__header-title {
    flex: 1;
    margin-right: 8px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center
  }

  .uni-card__header-title-text {
    font-size: 16px;
    flex: 1;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden
  }

  .uni-card__header-extra-img-div {
    display: flex
  }

  .uni-card__header-extra-img {
    height: 20px;
    width: 20px;
    margin-right: 8px
  }

  .uni-card__header-extra-text {
    flex: 0 0 auto;
    width: 30%;
    margin-left: 8px;
    font-size: 14px;
    text-align: right;
    color: #666;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden
  }

  .uni-card__content {
    color: #555
  }

  .uni-card__content--pd {
    padding: 8px
  }

  .uni-card__content-extra {
    padding-bottom: 10px;
    color: #999
  }

  .uni-card__footer {
    padding: 20px;
    color: #999;
    font-size: 12px;
    border-top: 1px #f5f5f5 solid
  }

  .uni-card--shadow {
    border: 1px #ddd solid;
    box-shadow: 0 1px 2px rgba(0, 0, 0, .2)
  }

  .uni-card--shadow:after {
    border: none
  }

  .uni-card--full {
    margin: 0;
    border-left: none;
    border-right: none;
    border-radius: 0
  }
</style>
