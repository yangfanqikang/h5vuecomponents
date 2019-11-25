<template>
  <page :title="this.$route.query.name">
    <div class="example-info">卡片组件通用来显示完整独立的一段信息，同时让用户理解他的作用。例如一篇文章的预览图、作者信息、时间等，卡片通常是更复杂和更详细信息的入口点。</div>
    <div class="example-title">基础卡片</div>
    <div class="example-body">
      <div v-for="item in list" :key="item.id" class="example-box">
        <uni-card :title="item.title" :is-shadow="item.shadow" :note="item.note" :extra="item.extra"
                  :thumbnail="item.thumbnail" @click="clickCard">{{ item.content }}
        </uni-card>
      </div>
    </div>
    <div class="example-title">图文卡片</div>
    <div class="example-body">
      <div class="example-box">
        <uni-card :is-shadow="true" title="最美的风景" mode="style"
                  thumbnail="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg"
                  extra="DCloud 2019-05-20 12:32:19" note="true" @click="clickCard">
          <div>
            uni-app 是一个使用 Vue.js 开发所有前端应用的框架，开发者编写一套代码，可编译到iOS、Android、H5、以及各种小程序等多个平台。 即使不跨端，uni-app同时也是更好的小程序开发框架
          </div>
          <template v-slot:footer>
            <div class="footer-box">
              <div class="footer-box__item" @click.stop="footerClick('喜欢')"><span> 喜欢</span></div>
              <div class="footer-box__item" @click.stop="footerClick('评论')"><span> 评论</span></div>
              <div class="footer-box__item" @click.stop="footerClick('分享')"><span> 收藏</span></div>
            </div>
          </template>
        </uni-card>
      </div>
      <div class="example-box">
        <uni-card :is-shadow="true" title="DCloud" mode="title"
                  thumbnail="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png" extra="技术没有上限" note="true"
                  @click="clickCard">
          <div>
            <div class="image-box">
              <img class="image" mode="aspectFill"
                   src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg"/>
            </div>
            <div class="content-box">
              uni-app 是一个使用 Vue.js 开发所有前端应用的框架，开发者编写一套代码，可编译到iOS、Android、H5、以及各种小程序等多个平台。 即使不跨端，uni-app同时也是更好的小程序开发框架。
            </div>
          </div>
          <template v-slot:footer>
            <div class="footer-box">
              <div class="footer-box__item" @click.stop="footerClick('喜欢')">
                <text> 喜欢</text>
              </div>
              <div class="footer-box__item" @click.stop="footerClick('评论')">
                <text> 评论</text>
              </div>
              <div class="footer-box__item" @click.stop="footerClick('分享')">
                <text> 收藏</text>
              </div>
            </div>
          </template>
        </uni-card>
      </div>
    </div>
  </page>
</template>

<script>
import uniCard from '@/components/globalComponents/uni-app/uni-card.vue'

export default {
  components: {
    uniCard
  },
  data () {
    return {
      list: [{
        id: 0,
        title: '',
        content: '这是一个基础卡片示例，内容较少，此示例不带边框阴影。',
        shadow: false,
        note: '',
        extra: '',
        thumbnail: ''

      }, {
        id: 1,
        title: '标题文字',
        content: '这是一个基础卡片示例，内容比较多，内容样式可自定义，卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、时间等，此示例带边框阴影。',
        shadow: true,
        note: '',
        extra: '额外信息',
        thumbnail: ''
      }, {
        id: 2,
        title: '标题文字',
        content: '这是一个带标题，带底部选项按钮的基础卡片示例，内容样式可自定义。',
        shadow: true,
        note: 'Tips',
        extra: '额外信息',
        thumbnail: ''
      }, {
        id: 3,
        title: '标题文字',
        content: '这是一个完整配置的基础卡片示例。内容样式可自定义。',
        shadow: true,
        note: 'Tips',
        extra: '额外信息',
        thumbnail: 'https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png'
      }],
      Tips: ['喜欢', '评论', '分享']
    }
  },
  methods: {
    clickCard () {
      // uni.showToast({
      //   title: '点击卡片',
      //   icon: 'none'
      // })
    },
    footerClick (types) {
      // uni.showToast({
      //   title: types,
      //   icon: 'none'
      // })
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
    padding: 15px 0;
  }

  .example-box {
    margin-bottom: 15px;
  }

  .example-box:last-child {
    margin-bottom: 0;
  }

  .image-box {
    width: 100%;
    height: 175px;
    overflow: hidden;
  }

  .image-box .image {
    width: 100%;
    height: 100%;
  }

  .content-box {
    padding-top: 10px;
  }

  .footer-box {
    display: flex;
    justify-content: space-between;
    width: 100%;

  }

  .footer-box__item {
    width: 100%;
    display: flex;
    align-items: center;
  }

  .footer-box__item:nth-child(2) {
    justify-content: center;
  }

  .footer-box__item:last-child {
    justify-content: flex-end;
  }
</style>
