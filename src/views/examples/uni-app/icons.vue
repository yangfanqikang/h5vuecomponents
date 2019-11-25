<template>
  <page class="page" :title="this.$route.query.name">
    <div class="icon-layout">
      <div v-for="(item,index) in iconClassList" :key="index" class="icon-item">
        <uni-icons :type="item" :color="activeIndex === index?'#007aff':'#8f8f94'" size="40"
                  @click="switchActive(index)"/>
        <p>{{ item }}</p>
      </div>
    </div>
  </page>
</template>

<script>

export default {
  data () {
    return {
      iconClassList: [
        'contact',
        'person',
        'personadd',
        'contact-filled',
        'person-filled',
        'personadd-filled',
        'phone',
        'email',
        'chatbubble',
        'chatboxes',
        'phone-filled',
        'email-filled',
        'chatbubble-filled',
        'chatboxes-filled',
        'weibo',
        'weixin',
        'pengyouquan',
        'chat',
        'qq',
        'videocam',
        'camera',
        'mic',
        'location',
        'mic-filled',
        'location-filled',
        'micoff',
        'image',
        'map',
        'compose',
        'trash',
        'upload',
        'download',
        'close',
        'redo',
        'undo',
        'refresh',
        'star',
        'plus',
        'minus',
        'circle',
        'clear',
        'refresh-filled',
        'star-filled',
        'plus-filled',
        'minus-filled',
        'circle-filled',
        'checkbox-filled',
        'closeempty',
        'refreshempty',
        'reload',
        'starhalf',
        'spinner',
        'spinner-cycle',
        'search',
        'plusempty',
        'forward',
        'back',
        'checkmarkempty',
        'home',
        'navigate',
        'gear',
        'paperplane',
        'info',
        'help',
        'locked',
        'more',
        'flag',
        'home-filled',
        'gear-filled',
        'info-filled',
        'help-filled',
        'more-filled',
        'settings',
        'list',
        'bars',
        'loop',
        'paperclip',
        'eye',
        'arrowup',
        'arrowdown',
        'arrowleft',
        'arrowright',
        'arrowthinup',
        'arrowthindown',
        'arrowthinleft',
        'arrowthinright',
        'pulldown',
        'scan',
        'sound'
      ],
      activeIndex: -1
    }
  },
  mounted () {
    if (this.iconClassList.length % 3 === 2) {
      this.iconClassList.push('')
    }
  },
  methods: {
    switchActive (index) {
      this.activeIndex = index
    }
  }
}
</script>

<style>
  page {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    background-color: #fff
  }
  .icon-layout{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  }
  div {
    font-size: 14px;
    line-height: inherit
  }

  .example {
    padding: 0 15px 15px
  }

  .example-title {
    font-size: 16px;
    line-height: 16px;
    color: #777;
    margin: 20px 12px;
    position: relative
  }

  .example .example-title {
    margin: 20px 0
  }

  .example-body {
    padding: 0 20px
  }

  .icon-item {
    display: inline-flex;
    width: 98px;
    height: 98px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
</style>
