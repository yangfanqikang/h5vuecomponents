<template>
  <page :title="this.$route.query.name">
    <div class="example-title">基本用法</div>
    <div class="example-body">
      <uni-fav :checked="checkList[0]" class="favBtn" @click="favClick(0)"/>
      <uni-fav :checked="checkList[1]" star="false" class="favBtn" @click="favClick(1)"/>
      <uni-fav :checked="checkList[2]" class="favBtn" circle="true" bg-color="#dd524d" bg-color-checked="#007aff"
               fg-color="#ffffff" fg-color-checked="#ffffff" @click="favClick(2)"/>
      <uni-fav :checked="checkList[3]" class="favBtn" bg-color="#f8f8f8" bg-color-checked="#eeeeee" fg-color="#333333"
               fg-color-checked="#333333" @click="favClick(3)"/>
    </div>
    <div class="example-title">自定义文字</div>
    <div class="example-body">
      <uni-fav :checked="checkList[4]" :content-text="contentText" class="favBtn" @click="favClick(4)"/>
    </div>
    <div class="example-title">在自定义导航栏使用</div>
    <div class="example-body example-body-fullWidth">
      <uni-nav-bar :fixed="false" left-icon="arrowleft" title="标题" color="#333333" background-color="#FFFFFF">
        <div slot="right">
          <uni-fav :checked="checkList[5]" class="favBtn-nav" circle="true" @click="favClick(5)"/>
        </div>
      </uni-nav-bar>
    </div>
  </page>
</template>

<script>
import uniFav from '@/components/globalComponents/uni-app/uni-fav.vue'
import uniNavBar from '@/components/globalComponents/uni-app/uni-nav-bar.vue'

export default {
  components: {
    uniFav,
    uniNavBar
  },
  data () {
    return {
      checkList: [false, false, false, false, false, false],
      contentText: {
        contentDefault: '追番',
        contentFav: '已追番'
      }
    }
  },
  methods: {
    favClick (index) {
      this.checkList[index] = !this.checkList[index]
      this.$forceUpdate()
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
    display: flex;
    justify-content: space-between;
    padding: 15px;
    background: #fff
  }

  .example-info {
    padding: 15px;
    color: #3b4144;
    background: #fff
  }

  .favBtn {
    margin: 0 10px 10px 0;
  }

  .favBtn-nav {
    vertical-align: middle;
  }

  .example-body-fullWidth {
    padding: 16px 0;
  }
</style>
